<template>
  <table>
    <thead>
      <tr>
        <th>Datetime</th>
        <th>Temperature</th>
        <th>Humidity</th>
        <th>Pressure</th>
        <th>Clouds</th>
        <th>Wind speed</th>
        <th>Wind degree</th>
        <th>Weather</th>
        <th>Description</th>
      </tr>
    </thead>
    <WeatherTableBody :forecast="forecast"/>
  </table>
</template>

<script>
import WeatherTableBody from './WeatherTableBody.vue';

export default {
  components: {
    WeatherTableBody,
  },
  name: 'WeatherTable',
  props: ['forecast'],
};
</script>
