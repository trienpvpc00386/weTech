<template>
  <div>
      <div>
          <div class="featured-products mt-4">
            <h4 class=""><b class="mt-2">Sản phẩm được tìm kiếm bằng từ khóa - </b><i> {{keys}}  </i></h4><hr>
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
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            keys            :{},
            products        :[],
            product_category:[],
            product_cate    :[]
        }
    },
    created(){
        this.keys = this.$route.params.search

        this.Product()

        this.Product_Category()

        this.Product_Cate()
    },
    methods:{
        Product(){
            let re = this
            axios.post('http://127.0.0.1:8000/api/search-product', {keywords:this.keys})
            .then(function (response) {
                re.products = response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        },
        Product_Category(){
            let re = this
            axios.post('http://127.0.0.1:8000/api/search-category', {keywords:this.keys})
            .then(function (response) {
                re.product_category = response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        },
        Product_Cate(){
            let re = this
            axios.post('http://127.0.0.1:8000/api/search-cate', {keywords:this.keys})
            .then(function (response) {
                re.product_cate = response.data
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
</style>