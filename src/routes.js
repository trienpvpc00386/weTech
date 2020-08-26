import Home from './component/Home.vue'
import Products from './component/Products'
import Productdetail from './component/Productdetail'
import Cart from './component/Cart'
import Login from './component/admin-store/Login'
import Dashboard from './component/admin-store/Dashboard'
import Master from './component/admin-store/Master'

export const routes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/productdetail', component: Productdetail },
    { path: '/cart', component: Cart },

    // Route shop
    { path: '/admin-store/login', component: Login },
    { path: '/admin-store/dashboard', component: Dashboard },
    { path: '/admin-store/master', component: Master },
]