import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import routerConfig from './router-config'

Vue.use(VueRouter)

const router = new VueRouter({linkActiveClass: 'active'})

router.map(routerConfig)

router.start(App, 'body')