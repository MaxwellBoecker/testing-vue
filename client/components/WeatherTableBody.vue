<template>
  <tbody class="results-body">
    <tr v-for="f in forecast" :key="f.dt_txt" class="results-row">
      <td>{{f.dt_txt}}</td>
      <td>{{f.main.temp}}</td>
      <td>{{f.main.humidity}}%</td>
      <td>{{f.main.pressure}}</td>
      <td>{{f.clouds.all}}</td>
      <td>{{f.wind.speed}}</td>
      <td>{{f.wind.deg}}</td>
      <td>{{f.weather[0].main}}</td>
      <td>{{f.weather[0].description}}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'WeatherTableBody',
  props: ['forecast'],
}
</script>

<style scoped>
  .results-row {
    text-align: "center";
  }
</style>