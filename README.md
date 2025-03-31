# Weather Forecast Application - Setup Guide

## Prerequisites
Before running the application, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest stable version recommended)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (or any preferred code editor)

## Step-by-Step Setup Guide

### 1. Clone the Repository
Open **Visual Studio Code** and launch a new terminal. Then, run the following command to clone the project:
```sh
git clone https://github.com/patrikklimko/weather-forecast
```

### 2. Navigate to the Project Directory
Once the cloning process is complete, change into the project folder:
```sh
cd weather-forecast
```

### 3. Write in the console
```sh
code .
```

### 4. Install Dependencies
Run the following command to install all required dependencies:
```sh
npm install --legacy-peer-deps
```

### 5. Set Up Environment Variables
To keep the API key secure, follow these steps:
1. Inside the project directory, create a new file named `.env`
2. Open the `.env` file and add your API key like this:
   ```sh
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```
   - **Important:** Replace `your_api_key_here` with your actual WeatherStack API key.
   - The `.env` file is already ignored by Git and won’t be shared in the repository.

### 6. Start the Application
Run the following command to start the development server:
```sh
npm start
```

This will launch the application in your default web browser. If it doesn’t open automatically, go to:
```
http://localhost:3000
```

### Additional Notes
- If you encounter any issues with dependencies, try running:
  ```sh
  npm install --legacy-peer-deps
  ```
- If the API key is not being recognized, restart the development server after saving the `.env` file.

For any further questions, feel free to reach out!

---
**Author:** Patrik Klimko
**GitHub Repository:** [Weather Forecast](https://github.com/patrikklimko/weather-forecast)

