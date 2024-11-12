import Vue from 'vue'
import App from './App.vue'
import router from './router';

// Importa Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Importa Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')