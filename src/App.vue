<template>
  <v-app>
    <v-app-bar flat height="50">
      <router-link to="/" class="v-app-logo">
        <font-awesome-icon icon="fa-solid fa-democrat" />
      </router-link>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    application: {
      menus: [{ label: '보드' }, { label: '목록보기' }, { label: '일정보기' }]
    }
  })
}
</script>

<style lang="scss" scoped>
.v-app-bar {
  position: fixed !important;
  top: 0;
  left: 0;
  background-color: $theme-primay-color !important;
}
.v-app-bar > .v-toolbar__content {
  padding: 0 !important;
}
.v-app-logo {
  color: white !important;
  font-size: 25px;
}
.v-main {
  margin-top: 50px !important;
}
</style>
