package com.nubisoft.nubiweather.services

import com.nubisoft.nubiweather.models.WeatherResponse
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono

@Service
class NubiweatherService(
    private val webClient: WebClient.Builder,
    @Value("\${weather.api.key}") val apiKey: String
) {

    fun getWeatherData(location: String): Mono<WeatherResponse> {
        return webClient.build()
            .get()
            .uri("https://api.weatherapi.com/v1/forecast.json?key=$apiKey&q=$location&days=7&aqi=no&alerts=no")
            .retrieve()
            .bodyToMono(WeatherResponse::class.java)
    }
}