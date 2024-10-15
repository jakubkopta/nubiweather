import {useEffect, useState} from "react";
import {Props, WeatherData} from "../models/CurrentModels.tsx";
import {fetchWeatherData} from "../api/CurrentWeatherApi.tsx";
import {getIconByDay} from "../utils/WeatherUtils.tsx";

const Current = ({city} : Props) => {

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
        <div className=" bg-cyan-700 text-gray-800 text-center font-bold p-10 rounded-lg shadow-lg">
            <div>
                <h1 className="text-xl">{weatherData.location.name}, {weatherData.location.country}</h1>
                <h2 className="text-7xl lg:text-8xl font-bold">{weatherData.current.temp_c}°C</h2>
                <div className="flex justify-center items-center gap-3">
                    <img className="grayscale-[30%]" src={getIconByDay(weatherData.current.condition.code)} alt="Weather Icon"/>
                    <h3 className="italic text-2xl font-normal">{weatherData.current.condition.text}</h3>
                </div>
            </div>
        </div>
    )
}

export default Current;