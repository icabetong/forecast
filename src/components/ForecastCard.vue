<script setup lang="ts">
  import { formatKelvin } from "../shared/utils"

  interface ForecastCardProps {
    temp: number,
    tempMax: number,
    tempMin: number,
    tempFeel: number,
    humidity: number,
    pressure: number,
  }

  const props = defineProps<ForecastCardProps>()
</script>

<template>
  <div class="shadow rounded border p-4 flex flex-col items-center justify-center text-gray-800">
    <div class="font-bold text-6xl">{{ formatKelvin(temp) }}°C </div>
    <div>
      <span>{{ formatKelvin(tempMax) }}°C</span>
      -
      <span>{{ formatKelvin(tempMin) }}°C</span>
    </div>
    <div class="mt-2">Feels like {{ formatKelvin(tempFeel) }}°C</div>
    <div class="mt-2">
      <div>Humidity: {{ humidity }}</div>
      <div>Pressure: {{ pressure }}</div>
    </div>
  </div>
</template>