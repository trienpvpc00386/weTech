<template>
    <div>
        <div class="link-menu">
            <router-link to="/">
                <a href="javascript:void(0)">Trang Chủ&emsp;
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                    </svg>&emsp;
                </a>
            </router-link>
                <a href="javascript:void(0)">Danh sách yêu thích của bạn&emsp;</a> 
        </div>

        <div class="featured-products mt-4">
                <h4 class=""><b class="mt-2">Danh sách sản phẩm bạn yêu thích</b></h4><hr>
                <div class="row mt-4 featured-products-all">
                    <div class="col-sm-2 card" id="body_product_image" v-for="(product, index) in wishlist_product" v-bind:key="index">
                        
                        <div class="card-body" @click="goDetail(product)">
                            <button class="btn btn-outline-danger">-45%</button>
                            <span class="text-right" style="float:right"><h5><a href="javascript:void(0)" style="color:red" @click="DelWishlist(product)">X</a></h5></span>
                            <br>
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
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            user_id:{},
            wishlist_product:[]
        }
    },
    created(){
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
        this.user_id = JSON.parse(getCookie("user_id"))

        this.WishlistProduct()
    },
    methods:{
        WishlistProduct(){
            let re = this
            axios.post('http://127.0.0.1:8000/api/get-wishlist', {user_id:this.user_id})
            .then(function (response) {
                re.wishlist_product = response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        },
        DelWishlist(product){
            let re = this
            axios.post('http://127.0.0.1:8000/api/delete-wishlist', {
                user_id   : this.user_id,
                product_id: product.product_id
            })
            .then(function (response) {
                if(response.data.success){
                    re.$alertify.success("Đã xóa thành công")
                    re.WishlistProduct()
                }
                else if(response.data.error){
                    alert(response.data.error)
                }
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
/*link menu*/
  .link-menu {
    background-color: #f5f5f5;
    text-align: left;
    padding-left: 10%;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    color: #4682B4;
  }
  .link-menu a {
    text-decoration: none;
    color: gray;
  }
  .link-menu a:hover {
    text-decoration: none;
    color: #4682B4;
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
</style>