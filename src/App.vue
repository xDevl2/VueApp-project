<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <university msg="List of subjects"/>
  </div>
</template>

<script>
import University from './components/University.vue'

export default {
  name: 'App',
  components: {
    University
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
