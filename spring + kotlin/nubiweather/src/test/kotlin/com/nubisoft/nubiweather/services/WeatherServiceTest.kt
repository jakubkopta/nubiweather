package com.nubisoft.nubiweather.services

import okhttp3.mockwebserver.MockResponse
import okhttp3.mockwebserver.MockWebServer
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertNotNull
import org.junit.jupiter.api.BeforeEach
import org.springframework.beans.factory.annotation.Value
import org.springframework.web.reactive.function.client.WebClient
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class WeatherServiceTest {

    private var mockWebServer = MockWebServer()
    private lateinit var nubiweatherService: NubiweatherService

    @Value("\${weather.api.key}")
    private lateinit var apiKey: String

    @BeforeEach
    fun setUp() {
        mockWebServer = MockWebServer()
        mockWebServer.start()

        val baseUrl = mockWebServer.url("/").toString()
        nubiweatherService = NubiweatherService(WebClient.builder(), apiKey, baseUrl)
    }

    @AfterEach
    fun tearDown() {
        mockWebServer.shutdown()
    }

    @Test
    fun `should fetch weather data successfully`() {

        val mockResponse = MockResponse()
            .setResponseCode(200)
            .addHeader("Content-Type", "application/json")
            .setBody("""
            {
              "location": {
                "name": "Gliwice",
                "country": "Poland"
              },
              "current": {
                "temp_c": 6.3,
                "condition": {
                    "text": "Clear",
                    "code": 1000
                }
              },
              "forecast": {
                "forecastday": [
                  {
                    "date": "2024-10-21",
                    "day": {
                      "maxtemp_c": 15.6,
                      "condition": {
                        "text": "Sunny",
                        "code": 1000
                      }
                    }
                  },
                  {
                    "date": "2024-10-22",
                    "day": {
                      "maxtemp_c": 16.6,
                      "condition": {
                        "text": "Sunny",
                        "code": 1000
                      }
                    }
                  },
                  {
                    "date": "2024-10-23",
                    "day": {
                      "maxtemp_c": 14.1,
                      "condition": {
                        "text": "Patchy rain nearby",
                        "code": 1063
                      }
                    }
                  }
                ]
              }
            }
        """.trimIndent())

        mockWebServer.enqueue(mockResponse)

        val weatherResponse = nubiweatherService.getWeatherData("Gliwice").block()

        assertNotNull(weatherResponse)

        assertNotNull(weatherResponse?.location)
        assertNotNull(weatherResponse?.current)
        assertNotNull(weatherResponse?.forecast)

        assertEquals("Gliwice", weatherResponse?.location?.name)
        assertEquals("Poland", weatherResponse?.location?.country)
        assertEquals(6.3, weatherResponse?.current?.temp_c)
        assertEquals("Clear", weatherResponse?.current?.condition?.text)
        assertEquals(1000, weatherResponse?.current?.condition?.code)
        assertEquals(3, weatherResponse?.forecast?.forecastday?.size)
    }
}