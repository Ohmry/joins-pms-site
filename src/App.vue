<template>
  <v-app>
    <v-app-bar flat height="50">
      <router-link to="/" class="v-app-logo px-3">
        <font-awesome-icon icon="fa-solid fa-shapes" />
      </router-link>
      <V-divider class="ml-1" style="border-color: #E15369;" vertical />
      <v-tabs>
        <v-tabs-slider color="#F7F7F7" />
        <router-link v-for="(menu, index) in application.menus" :key="'v-app-menu-' + index" :to="'/' + index">
            <v-tooltip bottom>
              <template v-slot:activator="{on, attrs}">
                <v-tab>
                  <font-awesome-icon :icon="menu.icon" v-bind="attrs" v-on="on"/>
                </v-tab>
              </template>
              <span>{{ menu.label }}</span>
            </v-tooltip>
          </router-link>
      </v-tabs>
      <v-spacer />
      <v-toolbar-items>
        <router-link to="/mypage">
          <v-tooltip bottom>
            <template v-slot:activator="{on, attrs}">
              <v-badge class="v-app-user-badge mx-auto" bordered bottom color="#00F" offset-x="36" offset-y="36" value="">
                <v-avatar class="v-app-user" size="36" v-bind="attrs" v-on="on">
                  <v-img src="@/assets/profile.jpeg" />
                </v-avatar>
              </v-badge>
            </template>
            <span>My Page</span>
          </v-tooltip>
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
        { label: 'Project List', icon: 'fa-solid fa-list-check' },
        { label: 'WorkbreakStructure', icon: 'fa-solid fa-chart-gantt' }
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
  background-color: $theme-primay-color !important;
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
.v-tabs-slider {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 10px !important;
  width: 15px !important;
  border-radius: 150px 150px 0px 0px;
}
.v-tab {
  height: 25px;
}
.v-tab > svg {
  background-color: transparent !important;
  color: #FF8181 !important;
  height: 100% !important;
  min-height: 100% !important;
  max-height: 100% !important;
  font-size: 25px !important;
  padding: 5px 0 !important;
  outline: none !important;
}
.v-tab > a.router-link-active {
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
