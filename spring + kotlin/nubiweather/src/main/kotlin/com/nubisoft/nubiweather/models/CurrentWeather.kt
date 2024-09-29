package com.nubisoft.nubiweather.models

import com.fasterxml.jackson.annotation.JsonIgnoreProperties

@JsonIgnoreProperties(ignoreUnknown = true)
data class CurrentWeather(
    val location: Location,
    val current: Current
)

@JsonIgnoreProperties(ignoreUnknown = true)
data class Current(
    val temp_c: Double,
    val condition: Condition
)