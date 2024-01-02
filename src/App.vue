<template>
  <div id="app">
    <Search />
    <JobsList />
  </div>
</template>

<script>
import JobsList from "./components/JobList.vue";
// import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    JobsList,
    // Search,
  },
};
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
