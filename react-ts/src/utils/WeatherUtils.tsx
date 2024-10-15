import weatherConditions from "../data/weatherConditions.json";

export const getIconByDay = (code: number) => {
    const condition = weatherConditions.find(condition => condition.code === code);
    return `https://cdn.weatherapi.com/weather/64x64/day/${condition?.icon}.png`;
};