import Vue from 'vue'
import AppAlertInstaller from './AppAlert/AppAlertInstaller'
import AppAlert from './AppAlert/AppAlert'
import AppConfirmInstaller from './AppConfirm/AppConfirmInstaller'
import AppConfirm from './AppConfirm/AppConfirm'

Vue.use(AppAlertInstaller)
Vue.component('AppAlert', AppAlert)
Vue.use(AppConfirmInstaller)
Vue.component('AppConfirm', AppConfirm)
