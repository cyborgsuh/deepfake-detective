
import axios from 'axios';

const API_URL = 'http://localhost:8080';

export interface ResNetModelConfig {
  numClasses: number;
  imgChannels: number;
  numLayers: number;
}

export const loadModel = async () => {
  try {
    const response = await axios.get(`${API_URL}/load-model`);
    return response.data;
  } catch (error) {
    console.error("Error loading model:", error);
    throw error;
  }
};

export const predictImage = async (imageData: FormData) => {
  console.log("Sending prediction request with data:", imageData.get('file'));  // Debug log
  
  try {
    const response = await axios.post(`${API_URL}/predict`, imageData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      // Add timeout and validate status
      timeout: 30000,
      validateStatus: (status) => status >= 200 && status < 500,
    });
    
    if (response.status !== 200) {
      throw new Error(`Server returned status ${response.status}`);
    }
    
    return response.data;
  } catch (error) {
    console.error("Error making prediction:", error);
    throw error;
  }
};
