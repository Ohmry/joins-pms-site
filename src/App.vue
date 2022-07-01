<template>
  <v-app>
    <v-app-bar flat>
      <!-- Logo -->
      <router-link to="/">
        <v-app-bar-title>
          <v-icon>diversity_3</v-icon>
          <span>프로젝트관리솔루션</span>
        </v-app-bar-title>
      </router-link>
      <!-- Menu -->
      <v-toolbar flat class="v-app-bar-buttons">
        <v-toolbar-items>
          <v-btn
            v-for="(menu, index) in application.menus"
            :key="'v-app-bar-button_' + index"
            depressed
            small
            class="px-2"
          >
            {{ menu.label }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
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

<style scoped>
.v-app-bar {
  position: fixed !important;
  top: 0;
  left: 0;
  min-height: 50px !important;
  max-height: 50px !important;
}
.v-main {
  margin-top: 50px !important;
}
</style>
