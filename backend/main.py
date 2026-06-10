from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse, RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
import requests
import uvicorn
import boto3
import os
import uuid
import base64
from dotenv import load_dotenv

load_dotenv()

# Initialize S3 Client
s3_client = boto3.client(
    's3',
    region_name=os.getenv("AWS_REGION", "ap-south-1"),
    aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
    aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY")
)
S3_BUCKET_NAME = os.getenv("S3_BUCKET_NAME")

app = FastAPI(
    title="Bollywood AI Cinema Booth — Face Swap API Proxy",
    description="Lightweight proxy for the external Face Swap API",
    version="2.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

EXTERNAL_API_URL = "https://technomancy-face-swap-api.hf.space/swap"

@app.get("/")
async def root():
    return {
        "message": "Face Swap API Proxy",
        "status": "running",
        "external_api": EXTERNAL_API_URL
    }

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "mode": "proxy"
    }

@app.post("/swap")
async def swap_faces_return_file(
    target_image: UploadFile = File(...),
    source_image: Optional[UploadFile] = File(None),
    source_image_female: Optional[UploadFile] = File(None),
    source_image_male: Optional[UploadFile] = File(None)
):
    allowed_types = {"image/jpeg", "image/jpg", "image/png", "image/bmp", "image/tiff"}
    if target_image.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Invalid target image type")

    target_bytes = await target_image.read()

    async def process_swap(src_file, tgt_bytes, gender=None):
        src_bytes = await src_file.read()
        files = {
            "source_image": (src_file.filename, src_bytes, src_file.content_type),
            "target_image": ("target.jpg", tgt_bytes, "image/jpeg")
        }
        data = {}
        if gender:
            data["source_gender"] = gender
            
        response = requests.post(EXTERNAL_API_URL, files=files, data=data)
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail=f"External API error: {response.text}")
        
        resp_json = response.json()
        if "image" not in resp_json:
            raise HTTPException(status_code=500, detail="External API did not return an image")
            
        import base64
        b64_data = resp_json["image"]
        if "," in b64_data:
            b64_data = b64_data.split(",", 1)[1]
            
        return base64.b64decode(b64_data)

    try:
        current_target_bytes = target_bytes
        
        # Duo mode processing
        if source_image_female and source_image_male:
            # 1. Swap female face first
            current_target_bytes = await process_swap(source_image_female, current_target_bytes, gender="female")
            # 2. Swap male face onto the result
            current_target_bytes = await process_swap(source_image_male, current_target_bytes, gender="male")
        # Single mode processing
        elif source_image:
            current_target_bytes = await process_swap(source_image, current_target_bytes)
        else:
            raise HTTPException(status_code=400, detail="Must provide either source_image or BOTH source_image_female and source_image_male")

        # Upload final result to S3
        image_bytes = current_target_bytes
        image_id = f"swapped_{uuid.uuid4().hex}.jpg"
        file_key = f"swaps/{image_id}"
        
        try:
            s3_client.put_object(
                Bucket=S3_BUCKET_NAME,
                Key=file_key,
                Body=image_bytes,
                ContentType="image/jpeg"
            )
            
            region = os.getenv("AWS_REGION", "ap-south-1")
            s3_url = f"https://{S3_BUCKET_NAME}.s3.{region}.amazonaws.com/{file_key}"
            
            return JSONResponse(content={
                "message": "Face swap successful",
                "s3_url": s3_url
            })
        except Exception as s3_err:
            raise HTTPException(status_code=500, detail=f"S3 Upload failed: {str(s3_err)}")

    except HTTPException:
        # Re-raise HTTPExceptions directly so the status code is preserved
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/image/{image_id}")
async def get_image(image_id: str):
    """Dynamically generate a pre-signed URL for the requested image and redirect to it."""
    import re
    if not re.match(r'^swapped_[a-f0-9]+\.jpg$', image_id):
        raise HTTPException(status_code=400, detail="Invalid image ID")
        
    try:
        presigned_url = s3_client.generate_presigned_url(
            'get_object',
            Params={'Bucket': S3_BUCKET_NAME, 'Key': f"swaps/{image_id}"},
            ExpiresIn=604800 # 7 days
        )
        return RedirectResponse(url=presigned_url)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)