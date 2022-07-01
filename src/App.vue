<template>
  <v-app>
    <v-app-bar flat>
      <router-link to="/" style="height: 100%">
        <font-awesome-icon icon="fa-solid fa-user-group" />
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
  min-height: 50px !important;
  max-height: 50px !important;
  background-color: $theme-primay-color !important;
}
.v-app-bar > .v-toolbar__content {
  padding: 0 !important;
  height: 100% !important;
}
.v-main {
  margin-top: 50px !important;
}
</style>
