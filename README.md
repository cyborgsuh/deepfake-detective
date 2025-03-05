# Deepfake Detective

## Project Info

**URL**: [Deepfake Detective Project](https://deepfake-detection-app.netlify.app/)

## How to Clone and Run This Project

Follow these steps to clone and run the project locally:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm install

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Project Structure

```
deepfake-detective/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── ...
├── README.md
└── ...
```

### Backend

The backend of this project is responsible for processing the uploaded videos/images and running the deepfake detection algorithms. It is built with:

- **FastAPI**: For handling server-side logic and creating API endpoints.
- **Python**: For running the deepfake detection algorithms.
- **PyTorch**: For machine learning models used in detection.

#### Key Files

- `main.py`: Main application file for the backend.
- `requirements.txt`: Lists the Python dependencies.

### Frontend

The frontend of this project is built with:

- **Vite**: For fast development and build.
- **TypeScript**: For type-safe JavaScript.
- **React**: For building user interfaces.
- **shadcn-ui**: For UI components.
- **Tailwind CSS**: For styling.

#### Key Files

- `src/components/`: Contains reusable UI components.
- `src/pages/`: Contains the different pages of the application.
- `src/App.tsx`: Main application file for the frontend.

### Key Pages

- **Home Page**: Provides an overview of the project and its purpose.
- **Detection Page**: Allows users to upload videos/images to detect deepfakes.
- **Results Page**: Displays the results of the deepfake detection.
- **Model Comparison Page**: Compares performance metrics across different ResNet architectures.
- **Hyperparameters Page**: Displays model training parameters and configurations.
- **Data Augmentation Page**: Explains preprocessing techniques used to enhance model performance.
- **Contact Page**: Provides contact information and links.

## Deployment

This project is deployed at [Deepfake Detection App](https://deepfake-detection-app.netlify.app/).
