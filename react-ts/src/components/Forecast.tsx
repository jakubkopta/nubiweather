import {useEffect, useState} from "react";

interface Location {
    name: string;
    country: string;
}

interface Condition {
    text: string;
}

interface ForecastDay {
    date: string;
    day: {
        maxtemp_c: number;
        condition: Condition;
    };
}

interface Forecast {
    forecastday: ForecastDay[];
}

interface WeatherData {
    location: Location;
    forecast: Forecast;
}

interface Props {
    city: string;
}

const Forecast = ({city} : Props) => {

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`http://localhost:8080/forecast-weather?city=${city}`);
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
            <div className="bg-cyan-700 text-gray-800 p-10 mt-5 rounded-lg shadow-lg">
                <ul>
                    {weatherData.forecast.forecastday.map((day) => (
                        <li className="flex flex-col sm:flex-row justify-between items-center font-bold pb-1" key={day.date}>
                            <p>
                                {day.date}
                            </p>
                            <p>
                                <span className="italic font-normal mr-5">
                                    {day.day.condition.text}
                                </span>
                                {Math.round(day.day.maxtemp_c)}°C
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default Forecast;