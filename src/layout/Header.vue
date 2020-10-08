<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light" id="header-top">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto" id="header-top-ul">
            <li class="nav-item active">
              <a class="nav-link" href="#"><i class="fa fa-pencil-square-o"></i> Ticketbox</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#"><i class="fa fa-support"></i> Trợ lý WeTech</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#"><i class="fa fa-suitcase"></i> Ưu đãi đối tác</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#"><i class="fa fa-bolt"></i> Khuyến mãi hot</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#"><i class="fa fa-plane"></i> Chọn cửa hàng</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#"><i class="fa fa-globe"></i> Hàng quốc tế</a>
            </li>
            <router-link to="/sales-channel">
              <li class="nav-item active">
                <a class="nav-link" href="javascript:void(0)"><i class="fa fa-money"></i> Bán cùng WeTech</a>
              </li>
            </router-link>
            <router-link to="/contact">
              <li class="nav-item active">
                <a class="nav-link" href="javascript:void(0)"><i class="fa fa-money"></i> Hỗ trợ khách hàng</a>
              </li>
            </router-link>
          </ul>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-dark" id="header">
        <a class="navbar-brand" href="javascript:void(0)" @click="Home"><img src="../assets/logo-final.png" width="150px"></a>
        <button class="navbar-toggler menu-reponsive" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto" id="header-ul">
            <form class="form-inline my-2 my-lg-0">
              <div class="input-group mb-3">
                <input type="text" class="form-control" size="46%" v-model="search.txtsearch" placeholder="Tên sản phẩm, loại sản phẩm">
                <div class="input-group-append">
                  <button class="btn search-menu" type="button" @click="Search"><i class="fa fa-search"></i> Tìm kiếm</button>
                </div>
              </div>
            </form>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)" @click="Wishlist_product"><i class="	fa fa-heart" style="color: red"></i> Yêu thích</a>
            </li>
            <li class="nav-item ml-2">
              <div class="dropdown">
                <a class="btn btn-outline-warning" href="javascript:void(0)" role="button" id="products-viewed-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-bell" style="color: #FF8000"></i> Thông báo <span class="badge badge-warning">3</span>
                </a>
                <div class="dropdown-menu row" aria-labelledby="products-viewed-menu">
                    <li><a class="dropdown-item" href="javascript:void(0)">Bạn chưa có thông báo nào</a></li>
                </div>
              </div>
            </li>
            <li class="nav-item ml-3">
              <div class="dropdown">
                <router-link
                to="/cart"
                >
                <a type="button" role="button" class="btn btn-outline-success" href="javascript:void(0)" id="cart-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-cart-plus"></i> Giỏ hàng <span class="badge badge-warning">2</span>
                </a>
                </router-link>
                <div class="dropdown-menu row" aria-labelledby="cart-menu">
                    <div class="card" v-for="(sp, index) in cart" :key="index">
                      <div class="">
                        <img :src="sp.image" width="40px" height="40px"> <span>X {{sp.quantity}}</span>
                        <p>{{sp.name}}</p>
                      </div>
                    </div>
                    <li><a class="dropdown-item" href="javascript:void(0)" @click="View_cart">
                          <button class="btn btn-warning btn-block" v-if="cart">Xem Giỏ Hàng</button>
                          <button class="btn btn-warning btn-block" v-else>Giỏ Hàng Trống</button>
                        </a>
                    </li>
                </div>
              </div>
            </li>
            <li class="nav-item ml-5">
              <div class="dropdown">
                <a class="nav-link" href="#" role="button" id="login-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user-circle-o"></i>
                <span  v-if="user==null">Tài Khoản</span>
                <span  v-else-if="user.name">{{user.name}}</span>
                <span  v-else>Tài Khoản</span>
                </a>
                  <div class="dropdown-menu row" aria-labelledby="login-menu">
                      <li><a class="dropdown-item" href="javascript:void(0)" @click="Login"><button class="btn btn-warning btn-block">Đăng Nhập</button></a></li>
                      <li><a class="dropdown-item" href="javascript:void(0)" @click="Sigin"><button class="btn btn-warning btn-block">Tạo Tài Khoản</button></a></li>
                      <li><a class="dropdown-item" href="javascript:void(0)" @click="UpdateAccount"><button class="btn btn-warning btn-block">Cập nhật Tài Khoản</button></a></li>
                      <li><a class="dropdown-item" href="javascript:void(0)" @click="Logout"><button class="btn btn-warning btn-block">Đăng Xuất</button></a></li>
                  </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-dark" id="menu">
        <a class="navbar-brand" href="#"><i class="fa fa-reorder"></i> DANH MỤC SẢN PHẨM</a>

        <div class="collapse navbar-collapse ml-4" id="navbarText">
          <ul class="navbar-nav mr-auto" id="menu-ul">
            <li class="nav-item active">
              <router-link to="/">
                <a class="btn btn-light" href="javascript:void(0)"><i class="fa fa-map-marker" style="color: red"></i> Bạn muốn giao hàng tới đâu?</a>
              </router-link>
            </li>
            <li class="nav-item active">     
              <div class="dropdown">
                <router-link to="/">
                  <a class="btn btn-light dropdown-toggle" href="javascript:void(0)" role="button" id="products-viewed-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sản phẩm bạn đã xem
                  </a>
                </router-link>
                <div class="dropdown-menu row" aria-labelledby="products-viewed-menu">
                    <div class="card">
                      <div class="container">
                        <img src="../assets/sp1.jpg" width="50px">
                        <p>Nước Hoa</p>
                      </div>
                    </div>
                    <div class="card">
                      <div class="container">
                        <img src="../assets/sp1.jpg" width="50px">
                        <p>Nước Hoa</p>
                      </div>
                    </div>
                </div>
              </div>
            </li>

            <li class="nav-item active">
              <router-link to="/">
                <a class="btn btn-light" href="javascript:void(0)"><i class="fa fa-truck" style="color: black"></i> Giao nhanh miễn phí</a>
              </router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/track-orders">
                <a class="btn btn-light" href="javascript:void(0)"><i class="fa fa-map-marker" style="color: red"></i> Theo dõi đơn hàng</a>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="chatbot">
        <div class="dropup">
          <!-- <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
            Chat
          </button>  -->
          <img src="../assets/logo-tai-messenger.png" width="70px" data-toggle="dropdown">
          <div class="dropdown-menu" id="chatbot-body">
            <Chat/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import jquery from 'jquery'
import Chat from '../component/Chat'
import {eventBus} from './../main'
export default {
  data(){
    return {
      data: {},
      cart: [],
      user: {},
      search:{
        txtsearch: ''
      }
    }
  },
  components:{
    Chat
  },
  created(){ 
    //this.cart=JSON.parse(sessionStorage.getItem("cart"))
    //this.user=JSON.parse(document.cookie)
    //console.log(document.cookie)
    function getCookie(cname) {
      var name = cname + "=";
      var ca   = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1);
          if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return "";
    } 
    this.user = JSON.parse(getCookie("user"))
    //console.log(ab)
    this.$alertify.success(`Xin chào ${this.user.name}`)
  },
  methods: {
    Home(){
      this.$router.push({path:"/"}) 
    },
    Search(){
      this.$router.push({name:"search-product", params:{search:this.search.txtsearch}})
      // eventBus.$emit("search-keyword",this.search.txtsearch)
    },
    Login(){
      this.$router.push({path:"/login"})
    },
    Sigin(){
      this.$router.push({path:"/register"})
    },
    UpdateAccount(){
      this.$router.push({path:"/update-account"})
    },
    Wishlist_product(){
      this.$router.push({path:"/wishlist-product"})
    },
    View_cart(){
      this.$router.push({path:"/cart"})
    },
    Logout(){
      document.cookie = `user=null; max-age=10`
      window.location = "http://localhost:8080"
    }
  },
}
</script>

<style>
  #header-top{
    background-color: #339977;
    padding-top: -60px;
    padding-bottom: -60px;
    height: 35px;
  }
  #header-top-ul li a{
    font-size: 90%;
    margin: 4px;
    color: white;
  }
  #header-top>div>ul{
    margin-left: auto;
  }
  #header-top-ul li a i{
    color: rgb(238, 255, 0);
  }
  #header{
    color: black;
    background-color: white;
    padding-top: 10px;
  }
  #header>a{
    margin: auto;
  }
  #header .menu-reponsive{
    color: rgb(0, 204, 153);
    background-color: rgb(51, 153, 102);
  }
  #header-ul{
    margin-top: 10px;
  }
  #header-ul input{
    margin-left: 30px;
  }
  #header-ul>li>a{
    margin-left: 6px;
  }
  #header-ul li a{
    color: black;
  }
  #header-ul li a i{
    color: rgb(51, 153, 102);
  }
  #menu{
    background-color: #339966;
  }
  #menu>a{
    margin-left: 7%;
    font-size: 100%;
  }
  #menu-ul li a{
    font-size: 91%;
    margin: 6px;
  }
  .search-menu{
    background-color: rgb(51, 153, 102);
    color: white;
    border-radius: 6%; 
  }
  .chatbot{
    right: 0px;
    bottom: 0px;
    position: fixed;
    z-index: 999;
  }
  #chatbot-body{
    width: 520px;
    height: 480px;
  }
  .chatbot-footer{
    position: relative;
    bottom: 0px;
  }
</style>
