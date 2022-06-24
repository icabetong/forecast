<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import LocationCard from '../components/LocationCard.vue';
  import ForecastCard from '../components/ForecastCard.vue';
  import type { OpenWeatherResponse } from '../shared/types'

  const key = import.meta.env.VITE_API_KEY
  const router = useRouter()
  const route = useRoute()
  const location = route.query.location

  const forecast = ref<OpenWeatherResponse | null>(null)

  onMounted(async () => {
    const endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=4&appid=${key}`
    const res = await fetch(endpoint)
    const data: OpenWeatherResponse = await res.json()
    forecast.value = data
  })

  const onBack = () => router.go(-1)
</script>

<template>
  <div class="max-w-screen-md md:max-w-screen-lg h-full flex flex-col items-center justify-baseline py-4 relative mb-8 mx-4 md:mx-auto">
    <button class="absolute left-0 shadow bg-blue-500 px-4 py-2 rounded text-white font-semibold" v-on:click="onBack">Back</button>
    <location-card v-if="forecast" :name="forecast?.city.name" :country="forecast?.city.country" :sunrise="forecast.city.sunrise" :sunset="forecast?.city.sunset" :timezone="forecast.city.timezone"/>
    <div class="mt-8 mb-2">Forecast for the next 4 days:</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 flex-1 w-full">
      <forecast-card
        v-if="forecast" 
        v-for="weather in forecast?.list" 
        :key="weather.dt_text"
        :temp="weather.main.temp"
        :temp-max="weather.main.temp_max"
        :temp-min="weather.main.temp_min"
        :temp-feel="weather.main.feels_like"
        :humidity="weather.main.humidity"
        :pressure="weather.main.pressure"/>
    </div>
  </div>
</template>