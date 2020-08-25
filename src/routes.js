import Home from './component/Home.vue'
import Products from './component/Products'
import Productdetail from './component/Productdetail'
import Cart from './component/Cart'

export const routes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/productdetail', component: Productdetail },
    { path: '/cart', component: Cart },
]