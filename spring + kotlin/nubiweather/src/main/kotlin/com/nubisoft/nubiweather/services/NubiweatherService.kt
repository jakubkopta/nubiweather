package com.nubisoft.nubiweather.services

import com.nubisoft.nubiweather.models.WeatherResponse
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono

@Service
class NubiweatherService(
    private val webClient: WebClient.Builder,
    @Value("\${weather.api.key}") val apiKey: String,
    @Value("\${weather.api.baseUrl:https://api.weatherapi.com/v1}") val baseUrl: String
) {

    fun getWeatherData(location: String): Mono<WeatherResponse> {
        return webClient.build()
            .get()
            .uri("$baseUrl/forecast.json?key=$apiKey&q=$location&days=3&aqi=no&alerts=no")
            .retrieve()
            .bodyToMono(WeatherResponse::class.java)
    }
}