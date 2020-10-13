import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"


import VueAlertify from 'vue-alertify'

export const eventBus = new Vue()

export const RouterLink = "http://127.0.0.1:8000/api"


Vue.use(VueAlertify)

Vue.use(VueRouter)

const router = new VueRouter({
    routes, // short for `routes: routes
    mode: "history"
})


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})