<template>
  <nav>
      <span data-type="logo">WORKUS</span>
      <span class="divider"></span>
      <router-link v-for="(menu, index) in application.menus" :key="index" :to="menu.uri">
        <button>
          {{ menu.label }}
        </button>
      </router-link>
      <section class="user-menu-container">
        <img src="@/assets/profile.jpeg" @click="openMyMenu"/>
        <UserContextMenu :visible="application.myMenu.visible" @close="closeMyMenu"/>
      </section>
    </nav>
</template>

<script>
import UserContextMenu from '@/components/UserContextMenu.vue'
export default {
  components: {
    UserContextMenu
  },
  data: () => {
    return {
      user: {
        id: undefined,
        email: undefined,
        name: undefined,
        accessToken: undefined,
        refreshToken: undefined
      },
      application: {
        menus: [
          { label: '둘러보기', uri: '/explore' },
          { label: '그룹', uri: '/group' },
          { label: '프로젝트', uri: '/project' }
        ],
        myMenu: {
          visible: false
        }
      }
    }
  },
  methods: {
    openMyMenu: function (e) {
      this.application.myMenu.visible = !this.application.myMenu.visible
    },
    closeMyMenu: function (e) {
      this.application.myMenu.visible = false
    },
    signup: function () {
      this.$router.replace('/signup')
    },
    signin: function () {
      this.$router.replace('/signin')
    }
  },
  beforeMount: function () {
    this.user = JSON.parse(sessionStorage.getItem('user'))
  }
}
</script>

<style lang="scss" scoped>
span.divider {
  border-right: 1px solid #b5b5b5;
  padding: 8px 5px;
  margin: 5px 10px 5px 0px;
}
nav {
  background-color: var(--primary-color);
  height: 50px;
  padding: 0px 10px;
  display: flex;
  user-select: none;

  span[data-type=logo] {
    color: var(--foreground-secondary-color);
    font-family: 'Yeongdo-Rg';
    font-size: 30px;
    align-self: self-end;
    user-select: none;
    margin: 0 10px 0 0;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
    &:active {
      color: var(--secondary-color);
    }
  }

  a {
    &.router-link-active {
      button {
        color: var(--button-active-color);
      }
    }
  }

  section.user-menu-container {
    margin: 0 0 0 auto;
  }

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 1px solid var(--background-color);
    margin: 3px 0 3px auto;
    cursor: pointer;
  }
}
button {
  height: 100%;
  border: 0px;
  background-color: transparent;
  font-size: 16px;
  color: var(--button-not-active-color);
  cursor: pointer;
  padding: 0 15px;
  &:active {
    color: var(--button-active-color);
  }
}
a.app-logo {
  font-size: 25px;
  padding: 10px 5px;
  color: white;

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
