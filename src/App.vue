<template>
  <div id="app">
    <JobsList/>
  </div>
</template>

<script>
import JobsList from './components/JobList.vue'

export default {
  name: 'App',
  components: {
    JobsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
