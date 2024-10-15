import {useEffect, useState} from "react";
import {Props, WeatherData} from "../models/ForecastModels.tsx";
import {fetchWeatherData} from "../api/ForecastWeatherApi.tsx";
import {getIconByDay} from "../utils/WeatherUtils.tsx";

const Forecast = ({city} : Props) => {

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getWeatherData = async () => {
            try {
                const data: WeatherData = await fetchWeatherData(city);
                setWeatherData(data);
            } catch (err) {
                setError((err as Error).message);
            }
        };

        getWeatherData().catch(err => {
            setError((err as Error).message);
        });
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
                        <li className="flex flex-col sm:flex-row justify-between items-center font-bold pb-2" key={day.date}>
                            <div className="flex justify-center items-center gap-5">
                                {day.date}
                                <img className="size-12 grayscale-[30%]" src={getIconByDay(day.day.condition.code)} alt="Weather Icon"/>
                            </div>
                            <div className="flex justify-center sm:justify-between items-center gap-5 w-full sm:w-auto">
                                <span className="italic font-normal">
                                    {day.day.condition.text}
                                </span>
                                {Math.round(day.day.maxtemp_c)}°C
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default Forecast;