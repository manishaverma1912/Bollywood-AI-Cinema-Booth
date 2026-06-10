import requests

url = "https://technomancy-face-swap-api.hf.space/swap"
target_url = "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
source_url = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"

try:
    target_bytes = requests.get(target_url).content
    source_bytes = requests.get(source_url).content

    files = {
        "source_image": ("source.jpg", source_bytes, "image/jpeg"),
        "target_image": ("target.jpg", target_bytes, "image/jpeg")
    }
    data = {
        "source_gender": "female"
    }

    resp = requests.post(url, files=files, data=data)
    if resp.status_code == 200:
        print("Success! Got image back.")
    else:
        print(f"Failed: {resp.status_code} {resp.text}")
except Exception as e:
    print(f"Exception: {e}")
