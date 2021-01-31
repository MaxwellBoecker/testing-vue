<template>
  <div>
    <h1>Welcome to your Forecast Provider</h1>
      <WeatherTable :forecast="forecast"/>
  </div>
</template>

<script>
import axios from 'axios';
import WeatherTable from './WeatherTable.vue';
import config from '../.config.js';

const { apikey } = config;
export default {
  components: { WeatherTable },
  name: 'App',
  data() {
    return {
      forecast: [],
    };
  },
  mounted() {
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
      params: { q: 'cleveland,us', units: 'imperial' },
      headers: {
        'x-rapidapi-key': apikey,
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      },
    };

    axios.request(options)
      .then((response) => {
        // console.log(response.data.list);
        this.forecast = response.data.list;
      }).catch((error) => {
        // display error message here
        console.error(error);
      });
  },
};
</script>
