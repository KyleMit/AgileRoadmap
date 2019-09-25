// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import 'typeface-roboto/index.css'
import 'material-icons/iconfont/material-icons.css'
import 'vuetify/dist/vuetify.min.css'
import settingsDrawer from '@/components/settings-drawer'
import roadmap from '@/components/roadmap'

Vue.use(Vuetify)

Vue.component('settings-drawer', settingsDrawer)
Vue.component('roadmap', roadmap)

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    getVelocity: function (shirtSize, velocities) {
      var v = velocities.find(function (v) {
        return v.value === shirtSize
      })
      return v
    },

    getSprints: function (features, velocities) {
      var self = this
      var points = features.map(function (ft) {
        var v = self.getVelocity(ft.size, velocities)
        if (v === undefined) {
          console.error("sprints is null")
          return 0
        }
        return +(v.sprints)
      })
      var sum = points.reduce(function (acc, val) {
        return acc + val
      }, 0)

      return sum
    },

    getSprintTime: function (sprints) {
      return Math.round(sprints * 3) + " wks"
    }
  }
})

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
/* eslint-disable no-unused-vars */
var app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
