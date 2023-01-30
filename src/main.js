import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'


createApp(App)
//utilizando o método de axios antes do mount
.use(VueAxios, axios)
.mount('#app')

