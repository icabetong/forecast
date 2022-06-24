<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const location = ref('')

  const navigate = () => {
    const city = location.value
    if (city.length > 0)
      router.push({ path: '/weather', query: { location: location.value } })
  }
</script>

<template>
  <div class="max-w-screen-md md:max-w-screen-lg h-full flex flex-col mx-auto items-center justify-center">
    <h1 class="block text-gray-700 text-2xl font-bold mb-2">Forecast</h1>
    <form class="w-full flex flex-col items-center justify-center">
      <fieldset class="my-4 w-3/4 lg:w-2/4">
        <input 
          v-model="location"
          type="text" 
          placeholder="Enter city or location"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </fieldset>
      <button
        v-on:click="navigate"
        :disabled="location.length <= 0"
        type="button"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-100">
        Get Forecast
      </button>
    </form>
  </div>
</template>
