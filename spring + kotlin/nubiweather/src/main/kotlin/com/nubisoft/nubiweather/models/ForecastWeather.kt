package com.nubisoft.nubiweather.models

import com.fasterxml.jackson.annotation.JsonIgnoreProperties

@JsonIgnoreProperties(ignoreUnknown = true)
data class ForecastWeather(
    val location: Location,
    val forecast: Forecast
)

@JsonIgnoreProperties(ignoreUnknown = true)
data class Forecast(
    val forecastday: List<ForecastDay>
)

@JsonIgnoreProperties(ignoreUnknown = true)
data class ForecastDay(
    val date: String,
    val day: Day
)

@JsonIgnoreProperties(ignoreUnknown = true)
data class Day(
    val maxtemp_c: Double,
    val condition: Condition
)