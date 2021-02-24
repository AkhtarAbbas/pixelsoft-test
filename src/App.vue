<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/collection">About</router-link>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  mounted() {
    this.setMockData();
  },
  methods: {
    ...mapActions(["setMockData"])
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  background-color: #ffffff;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
#nav a {
  margin: 0px 10px;
  text-decoration: none;
  color: #2c3e50;
}
#nav a:hover,
#nav .router-link-exact-active {
  color: #5a468c;
}
.container {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}
</style>
