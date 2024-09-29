import {useEffect, useState} from "react";

interface Location {
    name: string;
    country: string;
}

interface Condition {
    text: string;
}

interface Current {
    temp_c: number;
    condition: Condition;
}

interface WeatherData {
    location: Location;
    current: Current;
}

interface Props {
    city: string;
}

const Current = ({city} : Props) => {

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`http://localhost:8080/realtime-weather?city=${city}`);
                const data: WeatherData = await response.json();
                setWeatherData(data);
            } catch (err) {
                setError((err as Error).message);
            }
        };

        (async () => {
            await fetchWeather();
        })();
    }, [city]);

    if (error) {
        return <div className="text-center">Error: {error}</div>;
    }

    if (!weatherData) {
        return <div className="text-center">Loading...</div>;
    }


    return (
            <div className="bg-cyan-700 text-gray-800 text-center font-bold p-10 rounded-lg shadow-lg">
                <h1 className="text-xl">{weatherData.location.name}, {weatherData.location.country}</h1>
                <h2 className="text-7xl lg:text-8xl font-bold">{weatherData.current.temp_c}°C</h2>
                <h3 className="italic text-2xl font-normal">{weatherData.current.condition.text}</h3>
            </div>
    )
}

export default Current;