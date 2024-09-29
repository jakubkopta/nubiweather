package com.nubisoft.nubiweather.models

import com.fasterxml.jackson.annotation.JsonIgnoreProperties

@JsonIgnoreProperties(ignoreUnknown = true)
data class WeatherResponse(
    val location: Location,
    val current: Current,
    val forecast: Forecast
)