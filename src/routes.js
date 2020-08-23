import Home from './component/Home.vue'
import Products from './component/Products'
import Productdetail from './component/Productdetail'

export const routes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/productdetail', component: Productdetail },
]