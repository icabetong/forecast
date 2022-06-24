<script setup lang="ts">
  import { formatAsDate } from "../shared/utils"

  interface LocationProps {
    country: string,
    name: string,
    sunrise: number,
    sunset: number,
    timezone: number
  }

  const props = defineProps<LocationProps>()

  console.log(new Date(props.sunrise * 1000))
</script>

<template>
  <div class="flex flex-col items-center justify-center text-gray-700">
    <h1 class="block text-2xl font-bold">{{ name }}</h1>
    <div class="mb-2">{{ country }}</div>
    <div>Sunrise at: <span class="font-semibold">{{ formatAsDate(sunrise) }}</span></div>
    <div>Sunset at: <span class="font-semibold">{{ formatAsDate(sunset) }}</span></div>
  </div>
</template>