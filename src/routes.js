import Home from './component/Home.vue'
import Products from './component/Products'
import Productdetail from './component/Productdetail'
import Cart from './component/Cart'
import CheckOut from './component/Check-out'
import Login from './component/Login'

export const routes = [{
        path: '/',
        component: Home,
    },
    { path: '/cart', component: Cart },

    { path: '/checkout', component: CheckOut },

    { path: '/products', component: Products },

    { path: '/product-detail', component: Productdetail },

    // Route shop
    { path: '/login', component: Login },
]