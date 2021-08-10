import Vue from 'vue'
import App from './App.vue'

/**
 * Styles
 */
import 'virtual:windi.css' // windicss demon
import '@/assets/sass/main.sass'

new Vue({
  render: h => h(App),
}).$mount('#app')
