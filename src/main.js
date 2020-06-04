import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import YmapPlugin from 'vue-yandex-maps'
import Axios from "axios"

const settings = {
  apiKey: '59a55828-0cd7-468b-a92c-c702d2937654',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.use(YmapPlugin, settings)

Vue.prototype.$http = Axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
