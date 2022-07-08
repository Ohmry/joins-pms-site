<template>
  <div id="app">
    <nav class="app-menu-container">
      <router-link class="app-logo" to="/">
        <font-awesome-icon icon="fa-solid fa-fan"></font-awesome-icon>
      </router-link>
      <span class="divider"></span>
      <router-link v-for="(menu, index) in application.menus" :key="index" :to="menu.uri">
        <button @click="buttonClick">
          {{ menu.label }}
        </button>
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      application: {
        searchbar: {
          visible: false
        },
        menus: [
          { label: '둘러보기', uri: '/explore' },
          { label: '목록보기', uri: '/board' },
          { label: '차트보기', uri: '/chart' }
        ]
      }
    }
  },
  methods: {
    buttonClick: function (target) {
      console.log(target.srcElement)
      target.srcElement.classList.add('clicked')
      setTimeout(() => {
        target.srcElement.classList.remove('clicked')
      }, 200)
    }
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav.app-menu-container {
  background-color: #d7102d;
  height: 50px;
  line-height: 50px;
  padding: 0px 10px;
}
nav.app-menu-container > a {
  text-decoration: none;
  color: white;
}
nav.app-menu-container > a > button {
    height: 100%;
    border: 0px;
    background-color: transparent;
    color: white;
    cursor: pointer;
    padding: 0 15px;
}
nav.app-menu-container > a > button.clicked {
  animation-duration: 0.3s;
  animation-name: activeButton;
}
@keyframes activeButton {
  from {
    background-color: transparent;
  }
  30% {
    background-color: #d7102d;
    opacity: 0.5;
  }
  to {
    background-color: transparent;
  }
}
a.app-logo {
  font-size: 25px;
  vertical-align: middle;
  padding: 0 5px;
}
a.app-logo > svg:hover {
  animation: spinLogo 1.5s infinite;
  animation-timing-function: linear;
}
@keyframes spinLogo {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 0.7;
  }
  13% {
    color: red;
    opacity: 0.7;
  }
  26% {
    color: orange;
    opacity: 0.7;
  }
  39% {
    color: yellow;
    opacity: 0.7;
  }
  52% {
    color: green;
    opacity: 0.7;
  }
  65% {
    color: blue;
    opacity: 0.7;
  }
  78% {
    color: indigo;
    opacity: 0.7;
  }
  91% {
    color: purple;
    opacity: 0.7;
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
    opacity: 0.7;
  }
}
span.divider {
  border-right: 1px solid #b5b5b5;
  padding: 8px 5px;
  margin: 0px 10px 0px 0px;
}
input.app-total-search {
  outline: none;
  width: 200px;
  font-size: 14px;
}
</style>
