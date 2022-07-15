<template>
  <div id="app">
    <router-view></router-view>
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
* {
  font-family: 'Noto Sans Korean', 'Roboto', sans-serif;
}
:root {
  --background-color: F7F7F7;
  --primary-color: #D7102D;
  --secondary-color: #F25A71;
  --button-active-color: white;
  --button-not-active-color: #FF9EAC;
}
#app {
  height: 100vh;
  background-color: var(--background-color);
}
</style>
