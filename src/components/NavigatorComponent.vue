<template>
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
      <router-link class="app-nav-button-signup" to="/signup">
        <button>등록</button>
      </router-link>
      <router-link to="/signin">
        <button>로그인</button>
      </router-link>
    </nav>
</template>

<script>
export default {
  data: () => {
    return {
      application: {
        menus: [
          { label: '둘러보기', uri: '/explore' },
          { label: '그룹', uri: '/group' },
          { label: '프로젝트', uri: '/project' }
        ]
      }
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
span.divider {
  border-right: 1px solid #b5b5b5;
  padding: 8px 5px;
  margin: 5px 10px 5px 0px;
}
nav.app-menu-container {
  background-color: var(--primary-color);
  height: 50px;
  padding: 0px 10px;
  display: flex;
  user-select: none;
  a {
    text-decoration: none;
    color: var(--button-active-color);

    &.app-nav-button-signup {
      margin: 0 0 0 auto;
    }

    &.router-link-active {
      button {
        color: var(--button-active-color);
      }
    }

    button {
      height: 100%;
      border: 0px;
      background-color: transparent;
      color: var(--button-not-active-color);
      cursor: pointer;
      padding: 0 15px;
      &:active {
        color: white;
      }
    }
  }
}
a.app-logo {
  font-size: 25px;
  padding: 10px 5px;

  svg:hover {
    animation: spinLogo 1.5s infinite;
    animation-timing-function: linear;
  }
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
</style>
