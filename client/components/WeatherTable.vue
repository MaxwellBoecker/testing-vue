<template>
  <ul>
    <li v-for="entry in forecast" :key="entry.dt_txt">
      {{ entry.temp }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'WeatherTable',
  props: ['forecast']
}
</script>