<template>
  <v-app>
    <v-app-bar flat height="50">
      <router-link to="/" class="v-app-logo px-3">
        <font-awesome-icon icon="fa-solid fa-shapes" />
      </router-link>
      <V-divider class="ml-1" style="border-color: #E15369;" vertical />
      <v-toolbar flat height="50" class="v-app-menu-container">
        <v-item-group mandatory>
          <router-link v-for="(menu, index) in application.menus" :key="index" :to="menu.uri">
            <v-btn depressed class="v-app-menu-button">{{ menu.name }}</v-btn>
          </router-link>
          <!-- <router-link v-for="(menu, index) in application.menus" :key="index" :to="menu.uri">
            <v-tooltip bottom>
              <template v-slot:activator="{on, attrs}">
                <v-btn depressed v-bind="attrs" v-on="on" class="v-app-menu-button">
                  <font-awesome-icon :icon="menu.icon" />
                </v-btn>
              </template>
              <span>{{ menu.label }}</span>
            </v-tooltip>
          </router-link> -->
        </v-item-group>
      </v-toolbar>
      <v-spacer />
      <v-toolbar-items>
        <router-link to="/mypage">
          <v-badge class="v-app-user-badge mx-auto" bordered bottom color="#00F" offset-x="36" offset-y="36" value="">
            <v-avatar class="v-app-user" size="36" v-bind="attrs" v-on="on">
              <v-img src="@/assets/profile.jpeg" />
            </v-avatar>
          </v-badge>
        </router-link>
      </v-toolbar-items>
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
      menus: [
        { name: '둘러보기', uri: '/explore' },
        { name: '목록보기', uri: '/list' },
        { name: '차트보기', uri: '/gantt' }
      ]
    }
  })
}
</script>

<style lang="scss">
.v-app-bar {
  position: fixed !important;
  top: 0;
  left: 0;
  background-color: $theme-primary-color !important;
}
.v-app-bar > div.v-toolbar__content {
  padding: 0 !important;

}
.v-app-bar > .v-toolbar__content > * {
  background-color: transparent !important;
}
.v-app-logo {
  color: white !important;
  font-size: 25px;
}
.v-app-menu-container > .v-toolbar__content {
  padding: 0px 16px !important;
}
.v-app-menu-container > .v-toolbar__content > .v-item-group {
  height: 100%;
}
.v-app-menu-container > .v-toolbar__content > .v-item-group > a {
  text-decoration: none !important;
}
.v-app-menu-container > .v-toolbar__content > .v-item-group > a > .v-app-menu-button {
  background-color: transparent !important;
  color: #FF8181 !important;
  height: 100% !important;
  min-height: 100% !important;
  max-height: 100% !important;
  font-size: 16px !important;
  padding: 5px 10px !important;
  outline: none !important;
  border-radius: 0px;
  font-weight: bold;
}
.v-app-menu-container > .v-toolbar__content > .v-item-group > a.router-link-active > .v-app-menu-button {
  color: white !important;
}
.v-app-user-badge {
  padding: 7px;
}
.v-app-user {
  border: 1px solid white;
}
.v-main {
  margin-top: 50px !important;
}
</style>
