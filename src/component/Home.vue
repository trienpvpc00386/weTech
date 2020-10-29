<template>
  <div class="home">
      <div class="row content-home">
          <div class="" id="v-for-object">
              <div class="list-group" id="category" v-for="(a, index, key) in category" :key="index">
                <div class="dropdown">
                    <a href="javascript:void(0)">
                        <a href="javascript:void(0)" class="list-group-item list-group-item-action" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ key }}</a>
                    </a>
                    <div class="dropdown-menu" id="sub-categories" aria-labelledby="" >
                        <a class="dropdown-item" href="javascript:void(0)" v-for="(b, index) in a.dscon" :key="index">{{b.title}}</a>
                    </div>
                </div>
            </div>
          </div>
          <div class="col-sm-6 mt-2">
              <div id="demo" class="carousel slide" data-ride="carousel">

                <!-- Indicators -->
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>

                <!-- The slideshow -->
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img :src="slideshow[0].image" width="100%" id="slide_image">
                    </div>
                    <div class="carousel-item" v-for="(slide, index) in slideshow" :key="index">
                        <img :src="slide.image" width="100%" id="slide_image">
                    </div>
                </div>

                <!-- Left and right controls -->
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>

                </div>
          </div>
          
          <div class="col-sm-3 mt-2">
              <div class="row">
                  <img class="col-sm-12" src="https://res.cloudinary.com/dhkfqcpq8/image/upload/v1600685901/ip11_o58u8y.png" width="100%">
                  <img class="col-sm-12" src="https://res.cloudinary.com/dhkfqcpq8/image/upload/v1600685792/ghe_pvyoss.png" width="100%">
                  <img class="col-sm-12" src="https://res.cloudinary.com/dhkfqcpq8/image/upload/v1600685901/ip11_o58u8y.png" width="100%">
                  <img class="col-sm-12" src="https://res.cloudinary.com/dhkfqcpq8/image/upload/v1600685792/ghe_pvyoss.png" width="100%">

              </div>
          </div>
      </div> 

      <!-- Featured products --> 

      <div class="featured-products mt-4">
            <h4 class=""><b><i class="mt-2">Khuyến Mãi Hôm Nay - </i> 10 : 24 : 30  </b></h4><hr>
            <div class="row mt-4 featured-products-all">
                <div class="col-sm-2 card" id="body_product_image" v-for="(product, index) in products" v-bind:key="index">
                    <div class="card-body" @click="goDetail(product)">
                        <button class="btn btn-outline-danger">-45%</button>

                        <a href="javascript:void(0)" class="mt-1"><img :src="product.image" width="100%"></a>
                            
                        <div id="name_product">
                            <p>{{ product.product_name }}</p>
                            <h6>{{ product.price }}<u> đ</u></h6> 
                            <div class="progress">
                                <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="row justify-content-center mb-2 mt-2">
                        <button type="button" class="col-sm-2 btn btn-outline-success btn-sm btn-block"><router-link to="/products"><a href="javascript:void(0)">Xem thêm</a></router-link></button>
                    </div>
                </div>
          </div>
      </div>

      <!-- Products interested -->

      <div class="products-interested mt-5">
          <h5>NGÀNH HÀNG QUAN TÂM</h5>
          <div class="row mt-4">
              <div class="col-sm-2 card">
                  <div class="card-body">
                      <img src="../assets/dienthoai-maytinhbang.png" width="100%">
                      <p>Điện Thoại - Máy Tính Bảng</p>
                  </div>
              </div>
              <div class="col-sm-2 card">
                  <div class="card-body">
                      <img src="../assets/camera.png" width="100%">
                      <p>Máy Ảnh - Quay Phim</p>
                  </div>
              </div>
              <div class="col-sm-2 card">
                  <div class="card-body">
                      <img src="../assets/dienlanh.png" width="100%">
                      <p>Điện Tử - Điện Lạnh</p>
                  </div>
              </div>
              <div class="col-sm-2 card">
                  <div class="card-body">
                      <img src="../assets/laptop.png" width="100%">
                      <p>Laptop - Thiết Bị IT</p>
                  </div>
              </div>
              <div class="col-sm-2 card">
                  <div class="card-body">
                      <img src="../assets/thoitrang.png" width="100%">
                      <p>Thời Trang - Phụ Kiện</p>
                  </div>
              </div>
              <div class="col-sm-2 card">
                  <div class="card-body">
                      <img src="../assets/lamdep.png" width="100%">
                      <p>Làm Đẹp - Sức Khỏe</p>
                  </div>
              </div>
          </div>
      </div>

      <!-- Key hot -->

      <div class="key-hot mt-5">
        <h5>TỪ KHÓA HOT</h5>
        <div class="row mt-4">
          <div class="col-sm-2 mt-3">
              <div class="alert alert-success">
                <a href="#" class="alert-link"><i class="fa fa-search"></i> tai nghe</a>
              </div>
          </div>
          <div class="col-sm-2 mt-3">
              <div class="alert alert-info">
                <a href="#" class="alert-link"><i class="fa fa-search"></i> tinh dầu vỏ bưởi</a>
              </div>
          </div>
          <div class="col-sm-2 mt-3">
              <div class="alert alert-warning">
                <a href="#" class="alert-link"><i class="fa fa-search"></i> balo</a>
              </div>
          </div>
          <div class="col-sm-2 mt-3">
              <div class="alert alert-primary">
                <a href="#" class="alert-link"><i class="fa fa-search"></i> tinh dầu</a>
              </div>
          </div>
          <div class="col-sm-2 mt-3">
              <div class="alert alert-danger">
                <a href="#" class="alert-link"><i class="fa fa-search"></i> tinh dầu vỏ quế</a>
              </div>
          </div>
          <div class="col-sm-2 mt-3">
              <div class="alert alert-success">
                <a href="#" class="alert-link"><i class="fa fa-search"></i> loa bluetooth</a>
              </div>
          </div>
        </div>
      </div>

      <!-- Products for you -->

      <div class="products-for-you mt-5">
          <h4>SẢN PHẨM DÀNH CHO BẠN</h4>
          <div class="row mt-4 products-for-you-all">
              <div class="col-sm-2 card" v-for="(product, index) in products" v-bind:key="index">
                  <div class="card-body" @click="goDetail(product)">
                      <button class="btn btn-outline-danger">-45%</button>
                      <a href="javascript:void(0)"><img :src="product.image" width="100%"></a>                    
                      <p>{{ product.product_name }}</p>
                      <h6>{{ product.price }}.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                      <div class="progress">
                        <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                      </div>
                  </div>
              </div>
              <div class="col-sm-12">
                   <div class="row justify-content-center mb-2 mt-2">
                       <button type="button" class="col-sm-2 btn btn-outline-success btn-sm btn-block">Xem thêm</button>
                   </div>
              </div>
          </div>
      </div>

      <!-- Products you viewed -->

      <div class="products-you-viewed mt-5">
          <h5>SẢN PHẨM BẠN ĐÃ XEM</h5>
          <div class="row mt-4 products-you-viewed-all">
              <div class="col-sm-2 card">
                  <div class="card-body">
                      <button class="btn btn-outline-danger">-45%</button>
                      <img src="../assets/sp2.jpg" width="100%">
                      <p>Nước Hoa Nam DYNIK Mát Lạnh Biển Xanh-...</p>
                      <h6>297.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                      <div class="progress">
                        <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                      </div>
                  </div>
              </div>
              <div class="col-sm-2 card">
                  <div class="card-body">
                      <button class="btn btn-outline-danger">-35%</button>
                      <img src="../assets/sp3.png" width="100%">
                      <p>Nước Hoa Nam DYNIK Mát Lạnh Biển Xanh-...</p>
                      <h6>297.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                      <div class="progress">
                        <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                      </div>
                  </div>
              </div>
              <div class="col-sm-12">
                   <div class="row justify-content-center mb-2 mt-2">
                       <button type="button" class="col-sm-2 btn btn-outline-success btn-sm btn-block">Xem thêm</button>
                   </div>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
import axios from 'axios'
import {RouterLink} from '../main'
export default {
    name : "app",   
    data() {
        return {
            category  : [],
            cate_key : [],
            products : [],
            description : {},
            slideshow: [],
        }    
    }, 
    created(){
        this.Product()
        this.Category()
        this.SlideShow()
    },
    methods:{
        goDetail(p){
            this.$router.push({ name: 'product-detail', params: { detail: p } })
        },
        Product (){
            let re = this
            axios.post('http://localhost:8000/api/product')
            .then(function (response) {
                re.products = response.data.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        },

        Category(){
            let re = this
            axios.post('http://localhost:8000/api/cate')
            .then(function (response) {
                //console.log(response.data)
                re.category = response.data
                let data = response.data
                let key = Object.keys(data)
                //console.log(key)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        },

        SlideShow(){
            let re = this
            axios.post('http://localhost:8000/api/show-banner')
            .then(function (response) {
                //console.log(response.data)
                re.slideshow = response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        }
    },  
    
}
</script>

<style>
    #slide_image{
        background-size:contain;
        background-color: white;
    }
    .home{
        background-color: rgb(248,248,248);
    }
    .content-home{
        width: 87%;
        margin-left: 6.5%;
        margin-right: 6.5%;
    }
    #category {
        border-radius: 0;
        box-shadow: 0 0 5px rgb(51, 153, 102);
    }
    #category a{
        border: 0;
        font-size: 14px;
        text-decoration: none;
    }
    #category a:hover{
        background-color: rgb(255, 175, 1);
        color: white;
    }
    .dropdown:hover>.dropdown-menu {
    display: block;
    }
    #sub-categories{
        margin-left: 322px;
        margin-top: -551px;
        width: 650px;
        height: 450px;
        position: fixed;
    }
    .dropdown>.dropdown-toggle:active {
    /*Without this, clicking will make it sticky*/
        pointer-events: none;
    }
    .featured-products{
        width: 87%;
        margin-left: 6.5%;
        margin-right: 6.5%;
    }
    .featured-products h4{
        color: rgb(255, 72, 0);
    }
    .featured-products h5{
        color: rgb(255, 30, 0);
    }
    .featured-products .card{
        border: 0;
        width: 100%;
    }
    .featured-products-all>.card{
        width: 100%;
    }
    #body_product_image img{
        max-width: 150px;
        max-height: 150px;
        background-size: cover;
        
    }
    .featured-products .featured-products-all{
        background-color: white;
    }
    .featured-products .card:hover{
        box-shadow: 0 0 10px rgb(192, 191, 191);
        background-color: rgb(250,250,250);
    }
    .featured-products-all p:hover{
        color: rgb(253, 125, 5);
    }
    .products-interested{
        width: 87%;
        margin-left: 6.5%;
        margin-right: 6.5%;
    }
    .products-interested .card{
        border: 0;
    }
    .key-hot{
        width: 87%;
        margin-left: 6.5%;
        margin-right: 6.5%;
    }
    .key-hot>.row{
        background-color: white;
    }
    .products-for-you{
        width: 87%;
        margin-left: 6.5%;
        margin-right: 6.5%;
    }
    .products-for-you .card{
        border: 0;
        width: 100%;
    }
    .products-for-you .products-for-you-all{
        background-color: white;
    }
    .products-for-you .card:hover{
        box-shadow: 0 0 10px rgb(192, 191, 191);
        background-color: rgb(250,250,250);
    }
    .products-for-you-all p:hover{
        color: rgb(253, 125, 5);
    }
    .products-you-viewed{
        width: 87%;
        margin-left: 6.5%;
        margin-right: 6.5%;
    }
    .products-you-viewed .card{
        border: 0;
        width: 100%;
    }
    .products-you-viewed .products-you-viewed-all{
        background-color: white;
    }
    .products-you-viewed .card:hover{
        box-shadow: 0 0 10px rgb(192, 191, 191);
        background-color: rgb(250,250,250);
    }
    .products-you-viewed-all p:hover{
        color: rgb(253, 125, 5);
    }

</style>
