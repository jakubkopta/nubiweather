import {Condition, Location} from "./CurrentModels.tsx";

export interface ForecastDay {
    date: string;
    day: {
        maxtemp_c: number;
        condition: Condition;
    };
}

export interface Forecast {
    forecastday: ForecastDay[];
}

export interface WeatherData {
    location: Location;
    forecast: Forecast;
}

export interface Props {
    city: string;
}
