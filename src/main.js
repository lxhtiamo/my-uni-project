import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import store from "./store/index";
import i18n from './i18n/i18n.js';
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
  store,
  i18n,
  ...App
})
app.$mount()
