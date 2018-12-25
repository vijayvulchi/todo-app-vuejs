<template>
  <div id="app">
    <header>
      <div class="container">
        <a href="/" class="logo">Todo's</a>
      </div>
    </header>
    <div class="main-content container">
      <router-view/>
    </div>
    <footer>
      <div class="container">
        <p> &copy; 2018. Vulchi Vijaya Kumar. </p>
      </div>
    </footer>
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
a {
  color: #333333;
  text-decoration: none;
}
html,
body,
#app {
  height: 100%;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  background: #c31432;
  background: -webkit-linear-gradient(to bottom, #240b36, #c31432) no-repeat;
  background: linear-gradient(to bottom, #240b36, #c31432) no-repeat;
  background-repeat: none;
  color: #333333;
}
.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 15px;
}
header {
  height: 70px;
  text-align: center;
  color: #ffffff;
}
.logo {
  text-shadow: 2px 2px 30px rgba(255, 255, 255, 1);
  font-size: 32px;
  line-height: 70px;
  color: #ffffff;
}
.main-content {
  height: calc(100% - 100px);
  overflow: hidden;
  overflow-y: auto;
}
footer {
  height: 30px;
  color: #ffffff;
}
footer p {
  font-size: 11px;
  line-height: 30px;
}
/* helpers */
.title-light {
  margin-bottom: 10px;
  font-size: 20px;
  color: #ffffff;
}
.align-center {
  text-align: center;
}
.align-right {
  text-align: right;
}
button {
  box-shadow: none;
  cursor: pointer;
}
.btn {
  display: inline-block;
  padding: 10px 15px;
  font-size: 14px;
  background-color: #ffffff;
  box-shadow: 0 8px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 6px;
  color: #333333;
  transition: box-shadow 300ms ease-in;
}
.btn:hover {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.14);
}
</style>
