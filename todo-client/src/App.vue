<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  box-sizing: border-box;
}
*,
*:after,
*:before {
  box-sizing: inherit;
}
* {
  margin: 0;
  padding: 0;
  outline: none;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333333;
}
</style>
