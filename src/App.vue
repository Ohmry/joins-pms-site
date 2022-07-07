<template>
  <div id="app">
    <nav class="app-menu-container">
      <router-link to="/">
        <font-awesome-icon icon="fa-solid fa-shapes"></font-awesome-icon>
      </router-link>
      <router-link to="/">Home</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav.app-menu-container {
  background-color: #d7102d;
  height: 50px;
}
</style>
