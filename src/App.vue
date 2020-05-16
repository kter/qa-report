<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ProjectList id="1" ticketId="HOGE-1111" project-name="Hoge Project"/>
  </div>
</template>

<script>
import ProjectList from './components/ProjectList.vue'

export default {
  name: 'App',
  components: {
    ProjectList
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
