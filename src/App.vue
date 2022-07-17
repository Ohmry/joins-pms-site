<template>
  <div id="app">
    <router-view></router-view>
    <AppAlert />
    <AppConfirm />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
    }
  },
  methods: {
    buttonClick: function (target) {
      target.srcElement.classList.add('clicked')
      setTimeout(() => {
        target.srcElement.classList.remove('clicked')
      }, 200)
    }
  }
}
</script>

<style lang="scss">
:root {
  --background-color: #F7F7F7;
  --background-secondary-color: #E7E7E7;
  --foreground-color: #ADADAD;
  --primary-color: #D7102D;
  --secondary-color: #F25A71;
  --font-link-color: #0427D4;
  --third-color: #6E2933;
  --button-active-color: white;
  --button-not-active-color: #FF9EAC;
}
#app {
  height: 100vh;
  background-color: var(--background-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}
a {
  color: var(--font-link-color);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
