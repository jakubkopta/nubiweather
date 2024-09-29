package com.nubisoft.nubiweather.services

import com.nubisoft.nubiweather.models.WeatherResponse
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono

@Service
class NubiweatherService(private val webClient: WebClient.Builder) {

    fun getWeatherData(location: String): Mono<WeatherResponse> {
        return webClient.build()
            .get()
            .uri("https://api.weatherapi.com/v1/forecast.json?key=e7123ddddd204057a36113613242509&q=$location&days=7&aqi=no&alerts=no")
            .retrieve()
            .bodyToMono(WeatherResponse::class.java)
    }
}