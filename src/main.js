import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

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