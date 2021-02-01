<template>
  <div>
    <h1>Welcome to your Forecast Provider</h1>
    <div>
      <button v-on:click="changeMode('current')">View Current Forecast</button>
      <button v-on:click="changeMode('5-day')">View 5-Day Forecast</button>
    </div>
      <h3>Forecast Selection is: {{mode}}</h3>
      <input v-model="city" placeholder="type city here" v-on:keyup.13="retrieveForecastData">
        <button v-on:click="retrieveForecastData">submit</button>
      <template v-if="mode === '5-day' && forecast.length === 40">
        <WeatherTable :forecast="forecast"/>
      </template>
      <template v-else-if="forecast.length === 1 && mode === 'current'">
        <CurrentWeather :forecast="forecast"/>
      </template>
  </div>
</template>

<script>
import axios from 'axios';
import WeatherTable from './WeatherTable.vue';
import CurrentWeather from './CurrentWeather.vue';
import config from '../.config';

const { apikey } = config;
export default {
  components: { WeatherTable, CurrentWeather },
  name: 'App',
  data() {
    return {
      forecast: [],
      mode: 'current', // other option is 5-day
      city: '',
      searchedCity: '',
    };
  },
  watch: {
    mode() {
      if (this.searchedCity) {
        const { searchedCity } = this;
        this.retrieveForecastData();
        this.searchedCity = searchedCity;
      }
    },
  },
  methods: {
    retrieveForecastData() {
      const city = this.city || this.searchedCity;
      const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
        params: { q: city, units: 'imperial' },
        headers: {
          'x-rapidapi-key': apikey,
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      };
      if (this.mode === 'current') {
        options.url = 'https://community-open-weather-map.p.rapidapi.com/weather';
        axios.request(options)
          .then((response) => {
            const { main, name, weather } = response.data;
            this.forecast = [{ main, name, weather }];
          })
          .catch((err) => console.log(err));
      } else if (this.mode === '5-day') {
        axios.request(options)
          .then((response) => {
            this.forecast = response.data.list;
          }).catch((error) => {
            console.error(error);
          });
      }
      this.searchedCity = this.city;
      this.clearCity();
    },

    clearCity() {
      this.city = '';
    },

    changeMode(value) {
      this.mode = value;
    },

  },
};
</script>
