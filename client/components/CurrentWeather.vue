<template>
  <div class="weather-results-container">
    <div class="weather-result-items">
      <p>Temperature: {{forecast[0].main.temp}}° F</p>
      <p>Feels Like: {{forecast[0].main.feels_like}}° F</p>
      <p>Humidity: {{forecast[0].main.humidity}}%</p>
      <p>High: {{forecast[0].main.temp_max}}° F</p>
      <p>Low: {{forecast[0].main.temp_min}}° F</p>
      <p>Description: {{forecast[0].weather[0].description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentWeather',
  props: ['forecast'],
};
</script>

<style scoped>
  .weather-results-container {
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  .weather-result-items {
    margin: 0 10px;
    padding: 10px;
  }

</style>
