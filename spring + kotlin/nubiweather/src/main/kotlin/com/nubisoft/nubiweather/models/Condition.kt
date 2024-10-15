package com.nubisoft.nubiweather.models

import com.fasterxml.jackson.annotation.JsonIgnoreProperties

@JsonIgnoreProperties(ignoreUnknown = true)
data class Condition(
    val text: String,
    val code: Int
)