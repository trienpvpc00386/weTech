import Home from './component/Home.vue'
import Products from './component/Products'
import Productdetail from './component/Productdetail'
import Cart from './component/Cart'
import Login from './component/Login'

export const routes = [
    { 
        path: '/', 
        component: Home,
        name:"Home"
    },
    { 
        path: '/products', 
        component: Products,
        
    },
    { path: '/productdetail', component: Productdetail },
    { path: '/cart', component: Cart },

    // Route shop
    { path: '/login', component: Login },
]