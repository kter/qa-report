<template>
  <a href="">
    <div class="hello">
      <h1>{{ id }}</h1>
      <h3>{{ ticketId }}</h3>
      <h3>{{ projectName}}</h3>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    ticketId: String,
    projectName: String
  },
  computed: {
    id () {
        return this.$route.params.id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
