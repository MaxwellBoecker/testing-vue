<template>
  <div>
    <div>Welcome to your Forecast Provider</div>
      <WeatherTable :forecast="forecast"/>

  </div>
</template>

<script>
import WeatherTable from './WeatherTable.vue';
export default {
  components: { WeatherTable },
  name: 'App',
  data() {
    return {
      forecast: [
        {temp: 21.3}, {temp: 21.4}
      ]
    };
  },
  

}
</script>