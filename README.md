# NASA API USED APPLICATION
This application allows users to explore astronomy-related data provided by NASA's public APIs. Users can view daily or historical astronomy-related data, such as Mars Rover photos and Astronomy Picture of the Day Additionally, the application incorporates user authentication for accessing personalized features.

# Setup
To run this application locally, follow these steps:
* Clone the repository:
* Install dependencies:
->npm install
* Create a .env file in the root directory and add the following environment variables
-> REACT_APP_NASA_API_KEY=your_api_key_here
-> Replace your_api_key_here with your NASA API key. You can obtain a key from the NASA API portal.
* Start the development server:
-> npm start
* Open your browser and navigate to http://localhost:3000 to view the application.

# Usage
Once the application is running, users can:
* Navigate between different sections to explore data from NASA's APIs. View Mars Rover photos and Astronomy Picture of the Day
* Authenticate to access personalized features.
* Interact with dynamic data based on user input.

# API Integration
This application utilizes two different endpoints from NASA's APIs:
* Mars Rover Photos API: Provides images taken by NASA's Mars rovers.
* Astronomy Picture of the Day API: Displays the Astronomy Picture of the Day along with its description.

# Challenges and Resolutions
# API Integration
Challenge: Understanding the documentation and structure of NASA's APIs.
Resolution: Thoroughly reviewed the API documentation and experimented with different endpoints to understand their functionalities.
# User Authentication
* Challenge: Implementing user authentication for personalized features.
* Resolution: Utilized Firebase Authentication for user authentication, following the documentation and integrating it with the React application.
# Testing
* Challenge: Setting up comprehensive testing for both unit and integration tests.
* Resolution: Integrated Jest and React Testing Library for unit and integration testing, respectively. Wrote test cases for components and API interactions to ensure functionality and reliability.

# Deployment
The application is deployed on Netlify for easy access and hosting. Continuous deployment is set up, so any changes pushed to the main branch are automatically deployed.

# Testing
* The application has undergone extensive testing to ensure:
--> npm jest
* Unit tests cover individual components and functions.
* Integration tests validate interactions between components and external APIs.
