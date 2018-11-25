// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import '@fortawesome/fontawesome-pro/css/all.css'
import 'typeface-roboto/index.css'
import 'material-icons/iconfont/material-icons.css'
import 'vuetify/dist/vuetify.min.css'
import settingsDrawer from '@/components/settings-drawer'
import roadmap from '@/components/roadmap'

Vue.use(Vuetify)

Vue.component('settings-drawer', settingsDrawer)
Vue.component('roadmap', roadmap)

Vue.config.productionTip = false

Vue.directive('focus', {
  bind: function (el, binding) {
    if (binding.value === false) return
    Vue.nextTick(() => {
      var input = el.parentElement.querySelector('input,[contenteditable]')
      if (input) {
        input.focus()
        // input.select()
      }
    })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
