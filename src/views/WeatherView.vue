<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import type { OpenWeatherResponse } from '../shared/types'

  const key = import.meta.env.VITE_API_KEY
  const route = useRoute()
  const location = route.query.location

  const forecast = ref<OpenWeatherResponse | null>(null)

  onMounted(async () => {
    const endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=5&appid=${key}`
    const res = await fetch(endpoint)
    const data: OpenWeatherResponse = await res.json()
    forecast.value = data
  })
</script>

<template>
  <div class="max-w-screen-md md:max-w-screen-lg h-full flex flex-col mx-auto items-center justify-baseline py-4">
    <h1 class="block text-gray-700 text-2xl font-bold mb-2">Forecast for: {{ forecast?.city.name }}</h1>
    <h2>{{ forecast?.cod }}</h2>
  </div>
</template>