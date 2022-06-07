import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery"
import "popper.js"
import "bootstrap"
/* Formulario avanzado (vueform) */
/* npm install vue-form */
import "./form"
import store from "./store"
import "./axios" 
import "./globalFilter"
import "./globalMixins"
/* vue-router */
/* npm install vue-router@3 */
import {router} from "./router"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  /* o router: router */
  render: h => h(App),
}).$mount('#app')
