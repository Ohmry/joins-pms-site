import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'noto-sans-kr/styles.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShapes, faPlus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

library.add(faShapes, faPlus, faCirclePlus)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
