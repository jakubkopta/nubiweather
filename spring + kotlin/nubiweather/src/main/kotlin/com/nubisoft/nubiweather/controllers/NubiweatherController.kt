package com.nubisoft.nubiweather.controllers

import com.nubisoft.nubiweather.models.CurrentWeather
import com.nubisoft.nubiweather.models.ForecastWeather
import com.nubisoft.nubiweather.services.NubiweatherService
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono

@RestController
class NubiweatherController(private val weatherService: NubiweatherService) {

    @CrossOrigin(origins = ["http://localhost:5173"])
    @GetMapping("/realtime-weather")
    fun getWeather(@RequestParam city: String): Mono<CurrentWeather> {
        return weatherService.getWeatherData(city).map {
            CurrentWeather(
                it.location,
                it.current
            ) }
    }

    @CrossOrigin(origins = ["http://localhost:5173"])
    @GetMapping("/forecast-weather")
    fun getForecast(@RequestParam city: String): Mono<ForecastWeather> {
        return weatherService.getWeatherData(city).map {
            ForecastWeather(
                it.location,
                it.forecast
            )
        }
    }
}