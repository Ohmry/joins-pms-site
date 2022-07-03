import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'noto-sans-kr/styles.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShapes, faListCheck, faChartGantt, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(faShapes, faListCheck, faChartGantt, faGear,
  faMagnifyingGlass)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
