from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import torch
import torch.nn as nn
from PIL import Image
import torchvision.transforms as transforms
import io
from typing import Type, TypeVar, List
import numpy as np

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the BasicBlock and ResNet classes exactly as provided in your code
# ... (Copy the BasicBlock and ResNet classes here)

# Global variable to store the model
model = None

@app.get("/load-model")
async def load_model():
    global model
    try:
        # Initialize the model
        model = ResNet(img_channels=3, num_layers=50, block=BasicBlock, num_classes=1000)
        # Load the pre-trained weights
        model.load_state_dict(torch.load("not-pretrained-1 ResNet 50.pth"))
        model.eval()
        return {"message": "Model loaded successfully"}
    except Exception as e:
        return {"error": str(e)}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    if model is None:
        return {"error": "Model not loaded"}
    
    try:
        # Read and transform the image
        image_data = await file.read()
        image = Image.open(io.BytesIO(image_data))
        
        transform = transforms.Compose([
            transforms.Resize(256),
            transforms.CenterCrop(224),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406], 
                               std=[0.229, 0.224, 0.225])
        ])
        
        image_tensor = transform(image).unsqueeze(0)
        
        # Make prediction
        with torch.no_grad():
            outputs = model(image_tensor)
            _, predicted = torch.max(outputs, 1)
            
        return {"prediction": str(predicted.item())}
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)