import {WeatherData} from "../models/CurrentModels.tsx";

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
    const response = await fetch(`http://localhost:8080/realtime-weather?city=${city}`);
    if (!response.ok) {
        throw new Error(`Error fetching weather data for ${city}`);
    }
    return response.json();
};