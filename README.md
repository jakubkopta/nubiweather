# NubiWeather Web App

A web application that shows current weather and forecast in 2 cities: Gliwice and Hamburg using a Spring Boot for backend and a React for frontend.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)

## Features

- Show current weather and condition in 2 cities.
- Show forecast and conditions for next 7 days.

## Technologies

- **Backend**: Kotlin/Spring Framework
- **Frontend**: TypeScript/React

## Getting Started

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/jakubkopta/nubiweather.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nubiweather/spring + kotlin
   ```

3. Open in your IDE.
4. Run Spring Boot application.
5. The backend current weather will be available at http://localhost:8080/realtime-weather?city=Gliwice
6. The backend forecast will be available at http://localhost:8080/forecast-weather?city=Gliwice


### Frontend Setup

1. Navigate to the project directory:

   ```bash
   cd nubiweather/react-ts
   ```

2. Open in your IDE.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the React app:

   ```bash
   npm run dev
   ```

5. The frontend will be available at http://localhost:5173

