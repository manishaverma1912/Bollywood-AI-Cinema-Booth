from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import Response
from fastapi.middleware.cors import CORSMiddleware
import requests
import uvicorn

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
    source_image: UploadFile = File(...),
    target_image: UploadFile = File(...)
):
    allowed_types = {"image/jpeg", "image/jpg", "image/png", "image/bmp", "image/tiff"}
    if source_image.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Invalid source image type")
    if target_image.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Invalid target image type")

    try:
        # Read the file bytes
        source_bytes = await source_image.read()
        target_bytes = await target_image.read()

        # Prepare files for the external request
        files = {
            "source_image": (source_image.filename, source_bytes, source_image.content_type),
            "target_image": (target_image.filename, target_bytes, target_image.content_type)
        }

        # Send request to external API
        response = requests.post(EXTERNAL_API_URL, files=files)

        if response.status_code != 200:
            raise HTTPException(
                status_code=response.status_code,
                detail=f"External API error: {response.text}"
            )

        # The external API returns JSON like {"image": "base64_string", "metadata": {...}}
        resp_json = response.json()
        if "image" not in resp_json:
            raise HTTPException(status_code=500, detail="External API did not return an image")
            
        import base64
        # Extract the base64 string. Sometimes it might have 'data:image/jpeg;base64,' prefix
        b64_data = resp_json["image"]
        if "," in b64_data:
            b64_data = b64_data.split(",", 1)[1]
            
        image_bytes = base64.b64decode(b64_data)

        # Return the resulting image directly to the client
        return Response(
            content=image_bytes,
            media_type="image/jpeg"
        )

    except HTTPException:
        # Re-raise HTTPExceptions directly so the status code is preserved
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)