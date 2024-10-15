export interface Current {
    temp_c: number;
    condition: Condition;
}

export interface WeatherData {
    location: Location;
    current: Current;
}

export interface Props {
    city: string;
}

export interface Location {
    name: string;
    country: string;
}

export interface Condition {
    text: string;
    code: number;
}