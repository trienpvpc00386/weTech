<template>
  <div class="product-shop">

      <div class="shop-detail mt-4">
          <div class="row">
              <div class="col-sm-4 shop-name cart">
                  <h4>HAHAHA SHOP</h4>
              </div>
              <div class="col-sm-4">
                  <p>Sản Phẩm: 2000+</p>
                  <p>Đánh giá: 4.5(4k đánh giá)</p>
                  <p>Tỉ lệ shop hủy đơn: 1%</p>
              </div>
              <div class="col-sm-4">
                  <p>Chứng nhận bởi WeTech</p>
                  <p>Cam kết hàng chính hãng 100%</p>
                  <p>Hoàn tiền 111%</p>
              </div>
          </div>
      </div>

      <!---->

      <div class="banner-shop mt-4">
          <h1>Banner</h1>
      </div>

      <!---->

      <div class="featured-products mt-4">
          <h4 class=""><b><i class="mt-2">SẢN PHẨM CỦA SHOP</i></b></h4><hr>
          <div class="row mt-4 featured-products-all">
              <div class="col-sm-2 card" v-for="(product, index) in product_shop" v-bind:key="index">
                  <div class="card-body" @click="goDetail(product)">
                      <button class="btn btn-outline-danger">-45%</button>

                      <a href="javascript:void(0)"><img :src="product.image" width="100%"></a>
                      
                      <p>{{ product.name }}</p>
                      <h6>{{ product.price }}.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                      <div class="progress">
                        <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                      </div>
                  </div>
              </div>
              <div class="col-sm-12">
                   <div class="row justify-content-center mb-2 mt-2">
                       <button type="button" class="col-sm-2 btn btn-outline-success btn-sm btn-block"><a href="products">Xem thêm</a></button>
                   </div>
              </div>
          </div>
      </div>

      <!--  -->
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            data        : {},
            product_shop: [],
            detail_shop : []
        }
    },
    created(){
        this.data = this.$route.params.detail

        this.DetailShop()
    },
    methods:{
        DetailShop(){
            let re = this
            axios.post('http://127.0.0.1:8000/api/show-product-shop', {shop_id:this.data.shop_id})
            .then(function (response) {
                //console.log(response.data)
                re.product_shop = response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

            axios.post('http://127.0.0.1:8000/api/product-shop', {shop_id:this.data.shop_id})
            .then(function (response) {
                //console.log(response.data)
                re.detail_shop = response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        }
    }
}
</script>

<style>
.product-shop{
    background-color: rgb(248,248,248);
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
.shop-detail{
    width: 87%;
    margin-left: 6.5%;
    margin-right: 6.5%;
}
.shop-name{
    color: gray;
    text-align: center;
}
.banner-shop{
    width: 87%;
    margin-left: 6.5%;
    margin-right: 6.5%;
    height: 250px;
    background-color: gray;
    color: white;
    text-align: center;
}
</style>