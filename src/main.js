/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 樣式套件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
// 自訂樣式
import '@/assets/scss/main.scss';

// highcarts
import HighcartsVue from 'highcharts-vue'
import Highcarts from 'highcharts'
import stockInit from 'highcharts/modules/stock'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(HighcartsVue)
stockInit(Highcarts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
