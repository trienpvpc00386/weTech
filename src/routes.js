import Home from './component/Home.vue'
import Products from './component/Products'
import Productdetail from './component/Productdetail'
import Cart from './component/Cart'
import CheckOut from './component/Check-out'
import TrackOders from './component/Track-orders'
import Login from './component/Login'
import Register from './component/Register'
import Chat from './component/Chat'
import ProductShop from './component/Product-shop'
import SalesChannel from './component/Sales-channel'
import SearchProduct from './component/Search-Product'
import Contact from './component/Contact'

export const RouterLink = "http://127.0.0.1:8000/api"

export const routes = [{
        path: '/',
        name: "home",
        component: Home,
    },
    { path: '/cart', name: "cart", component: Cart },

    { path: '/checkout', name: "checkout", component: CheckOut },

    { path: '/products', name: "prodcuts", component: Products },

    { path: '/product-detail', name: "product-detail", component: Productdetail },

    { path: '/track-orders', name: "track-orders", component: TrackOders },

    { path: '/chat', name: "chat", component: Chat },

    { path: '/detail-shop', name: "detail-shop", component: ProductShop },

    { path: '/sales-channel', name: "sales-channel", component: SalesChannel },

    { path: '/search-product', name: "search-product", component: SearchProduct },

    { path: '/contact', name: "contact", component: Contact },

    // Route shop
    { path: '/login', name: "login", component: Login },
    { path: '/register', name: "register", component: Register }
]