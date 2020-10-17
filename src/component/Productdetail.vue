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
        <a href="javascript:void(0)">Sản Phẩm&emsp;
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
            </svg>&emsp;
        </a> 
          {{data.product_name}}
    </div>

    <div class="product-detail">
      <div class="row">
        <div class="img-box col-sm-6">
          <div id="custCarousel" class="carousel slide mt-4 row" data-ride="carousel" align="center">
            <!-- slides -->

            <div class="col-sm-3">
                <ol class="row">
                  <div class="col-sm-12 card" id="image_detail_mini" v-for="(image_det, index) in image_detail.slice(0, 4)" :key="index++">
                    <div class="card-body">
                      <a id="carousel-selector-0" class="selected" :data-slide-to="index" data-target="#custCarousel">
                      <img :src="image_det" width="100%" height="100%"> 
                      </a> 
                    </div>
                  </div>
                </ol>
            </div>

            <div class="col-sm-9">
              <div class="carousel-inner">
                <div class="carousel-item active"> <img :src="product_detail[0].image" alt="Hills"> </div>
                <div class="carousel-item" v-for="(image_det, index) in image_detail" :key="index"> <img :src="image_det" alt="Hills"> </div>
              </div> <!-- Left right --> 
              
              <a class="carousel-control-prev" href="#custCarousel" data-slide="prev"> 
                <span class="carousel-control-prev-icon"></span> 
              </a>
              <a class="carousel-control-next" href="#custCarousel" data-slide="next"> 
                <span class="carousel-control-next-icon"></span>
              </a> <!-- Thumbnails -->
            </div>

            <div class="col-sm-12" id="description"> <br> <br> <hr> <br>
              <h5>Mô Tả</h5>
              <p>{{data.description}}</p>
            </div>

            <div class="col-sm-4">
              <div class="card">
                <div class="card-body row">
                  <div class="col-sm-12">
                    <h6><li class="fa fa-home"></li> {{data.shop_name}}</h6>
                  </div>
                  
                  <div class="col-sm-12">
                    
                      <button class="btn btn-success btn-block" @click="goDetailShop()">Xem shop</button>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="contain-box col-sm-6"><br>
          <h3>{{product_detail[0].product_name}}</h3>
          <div class="rate-star">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z"/>
            </svg>
            <a>|</a>
            <a>2 Đánh Giá</a>
            <a>|</a>
            <a>4 Đã Bán</a>
          </div><hr>

          <div class="price">
            <h2>{{detail_info[select_type].price}} <u>đ</u></h2>
          </div><hr>

          <div class="row transpot">
            <div class="col-sm-12">
              <p style="color: orangered;">Tình trạng: 
                <span v-if="detail_info[select_type].quantity>0">còn hàng</span>
                <span v-else>hết hàng</span>
              </p><br>

              <div class="form-group" v-if="product_detail[0].category==='Điện thoại - Máy tính bảng'">
                <label for="sel1">Loại Sản Phẩm: </label>
                <select class="form-control" id="sel1" v-model="select_type" aria-placeholder="chọn loại">
                  <option  v-for="(select_type, index) in detail_info" :key="index" :value="index">Màu {{select_type.color}},  {{select_type.screen_size}}, {{select_type.memory}}</option>
                </select>
              </div> 

              <div class="form-group" v-if="product_detail[0].category==='Điện tử - Điện lạnh'">
                <label for="sel1">Loại Sản Phẩm: </label>
                <select class="form-control" id="sel1" v-model="select_type" aria-placeholder="chọn loại">
                  <option  v-for="(select_type, index) in detail_info" :key="index" :value="index">Màu {{select_type.color}},  {{select_type.screen_size}}, {{select_type.memory}}</option>
                </select>
              </div> 
             
            </div>

            <div class="col-sm-11 mt-4">
              <div class="input-group mb-3">

                <button class="btn btn-light">Số lượng: </button>

                <div class="input-group-prepend ml-2">
                  <input @click="updateCart(data, 'subtract')" class="btn btn-success" type="button" id="button-addon1" value=" - ">
                </div>

                <input type="text" min="0" :max="detail_info[select_type].quantity" v-model="quantity_cart" class="form-control" placeholder="0" aria-label="Example text with button addon" aria-describedby="button-addon1">
                
                <div class="input-group-append">
                  <input @click="updateCart(data, 'add')" class="btn btn-success" type="button" id="button-addon2" value=" + ">
                </div>
     
                <button class="btn btn-success ml-2" @click="goCart">Thêm vào giỏ hàng</button>

                <input type="button" class="btn btn-warning ml-2" @click="goWishlist" value="Thêm vào yêu thích">
              </div>
            </div>

            <div class="col-sm-12 mt-3">
              <h5>Thông tin & Khuyến mãi</h5>
              <p>Đổi trả hàng trong vòng 7 ngày</p>
              <p>Freeship nội thành Cần Thơ từ 1.500.000đ*.</p>
              <p></p>
            </div>

            <div class="col-sm-12 card mt-4"> 
              <div class="card-body"> <br>
                <h5>Chi Tiết Sản Phẩm</h5> <br>
                <div class="row">

                  <div class="col-sm-3">
                    <table class="table table-borderless">
                       <tbody>
                         <tr v-for="(key, index) in key" :key="index">
                           <td>{{ key }}:</td>
                         </tr>
                       </tbody>
                     </table>
                  </div>

                  <div class="col-sm-9">
                     <table class="table table-striped">
                       <tbody>
                         <tr v-for="(value, index) in value" :key="index">
                           <td>{{ value }}</td>
                         </tr>
                       </tbody>
                     </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 mt-3">
          <div class="card">
            <div class="card-body">
              <h5>Đánh Giá Sản Phẩm</h5>&emsp;
              <div>
                <div class="col-sm-12 mt-4 card" v-if="check_comment == 'true'">
                  <form role="form" class="card-body"> 
                    <div class="input-group mb-3">

                      <button class="btn btn-light">Đánh giá sao:</button>

                      <star-rating class="ml-3" :star-size="25" v-model:rating="add_comment.rating"></star-rating>
                    </div>   

                    <div class="input-group mb-3">

                      <button class="btn btn-light">Nhận xét về sản phẩm: </button>

                      <input type="text" class="form-control" v-model="add_comment.content">

                      <input type="button" class="btn btn-warning ml-2" @click="AddComment" value="Gửi">
                    </div>
                  </form>
                </div>
              </div>
              <hr>
              <div class="card">
                <div class="card-body">
                  <div class="media-body card-body" v-for="(cmt, index) in get_comment" :key="index">
                    <star-rating class="" :star-size="20" v-model:rating="cmt.rating"></star-rating>
                    <p class="mt-2"><small><i>bởi_</i></small><b>{{cmt.name}}</b> <i></i><span class="fa fa-check-square check-order"> Chứng nhận đã mua hàng của wetech</span></p>
                    <p class="ml-4"> {{cmt.content}}</p>      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 product-type mt-4">
          <h4 class=""><b><i class="mt-2">SẢN PHẨM TƯƠNG TỰ</i></b></h4><hr>
          <div class="row mt-4 product-type-all">
              <div class="col-sm-2 card" v-for="(product_type, index) in product_type" v-bind:key="index">
                  <div class="card-body" @click="goDetail(product)">
                      <button class="btn btn-outline-danger">-45%</button>

                      <a href="javascript:void(0)"><img :src="product_type.image" width="100%"></a>
                      
                      <p>{{ product_type.product_name }}</p>
                      <h6>{{ product_type.price }} <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                      <div class="progress">
                        <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main"
import axios from 'axios'
import StarRating from 'vue-star-rating'
export default {
  data(){ 
    return {
      data              : {},
      user              : {},
      user_id           : '',
      product_detail    : [],
      detail_info       : [],
      cate_idd          : 0,
      product_type      : [],
      cart              : [],
      image_detail      : [],
      key               : [],
      value             : [],
      select_type       : 0,
      quantity_cart     : 1,
      check_comment     : '',
      get_comment       : [],
      add_comment       : {
        user_id    : '',
        content    : '',
        product_id : '',
        rating     : null
      }
    }
    
  },
  components:{
    StarRating
  },
  created(){ 

    this.data = this.$route.params.detail

    this.getComment()

    this.ProductDetail()

    function getCookie(cname) {
      var name = cname + "=";
      var ca   = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return "";
    } 

    this.user = JSON.parse(getCookie("user"))
    this.user_id = this.user.user_id

    this.checkComment()

    this.add_comment.user_id    = this.user_id
    this.add_comment.product_id = this.data.product_id

  },
  methods:{
    ProductDetail (){
      let re = this
      axios.post('http://127.0.0.1:8000/api/detail', {id:this.data.product_id})
      .then(function (response) {
        re.product_detail = response.data
        let data          = response.data
        for(let i in data){
          re.image_detail.push(data[i].image)
        }
        re.productType(data[0].cate_id)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

      /////////////////////////////////////////
      axios.post('http://127.0.0.1:8000/api/detail-info', {id:this.data.product_id})
      .then(function (response) {
        let data = response.data
        re.detail_info = response.data
        //re.product_detail_info=data[0]
        let key = Object.keys(data[0])
        let keyArr = []
        key.forEach(el => {
             switch (el) {
                case "prodetail_id":
                    keyArr.push("Mã sản phẩm")
                    break;
                case "price":
                    keyArr.push("Giá")
                    break;
                case "color":
                    keyArr.push("Màu")
                    break;
                case "quantity":
                    keyArr.push("Số lượng")
                    break;
                case "size":
                    keyArr.push("Kích thước")
                    break;
                case "discount_price":
                    keyArr.push("Giảm giá")
                    break;
                case "origin":
                    keyArr.push("Xuất xứ")
                    break;
                case "accessory":
                    keyArr.push("Phụ kiện")
                    break;
                case "dimension":
                    keyArr.push("Kích thước")
                    break;
                case "weight":
                    keyArr.push("Cân nặng")
                    break;
                case "system":
                    keyArr.push("Hệ thống")
                    break;
                case "material":
                    keyArr.push("Chất liệu")
                    break;
                case "screen_size":
                    keyArr.push('Cỡ màng hình')
                    break;
                case "wattage":
                    keyArr.push("Công xuất")
                    break;
                case "resolution":
                    keyArr.push("Độ phân giải")
                    break;
                case "memory":
                    keyArr.push("Bộ nhớ")
                    break;
                default:
                    break;
            }
        });
        re.value = Object.values(data[0])
        re.key = keyArr
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    },

    productType (id){
      let re = this
      axios.post('http://127.0.0.1:8000/api/product-type', {cate_id:id})
      .then(function (response) {
        re.product_type = response.data
        //console.log(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    },
    goDetailShop(){
      this.$router.push({ name: 'detail-shop', params: {detail:this.product_detail[0]}})
    },

    updateCart(data, updateType){
        if(updateType === "subtract"){
            if(this.quantity_cart !== 0){
              this.quantity_cart--;
            }
          }else{
            this.quantity_cart++;
          }
    },

    getComment(){
      let re = this
      axios.post('http://127.0.0.1:8000/api/get-comment', {product_id:this.data.product_id})
      .then(function (response) {
          re.get_comment = response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    },

    checkComment(){
      let re = this
      axios.post('http://127.0.0.1:8000/api/check-comment', 
        {
          product_id:this.data.product_id,
          user_id:this.user_id
        })
      .then(function (response) {
        if(response.data.success){
          re.check_comment = 'true'
          console.log(response.data.success)
        }
        else if(response.data.error){
           re.check_comment = 'false'
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    },

    AddComment(){
      let re = this
      axios.post('http://127.0.0.1:8000/api/add-comment', this.add_comment)
      .then(function (response) {
        if(response.data.success){
          alert(response.data.success)
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
    },

    goCart(){
      axios.post('http://127.0.0.1:8000/api/add-cart', 
        {
          prodetail_id:this.detail_info[this.select_type].prodetail_id,
          user_id:this.user_id,
          shop_id:this.product_detail[0].shop_id,
          cart_quantity:this.quantity_cart
        })
      .then(function (response) {
        if(response.data.error){
          alert(response.data.error)
        }else{
          alert('Thêm Sản Phẩm Thành Công')
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    },

    goWishlist(){
      let re = this
      axios.post('http://127.0.0.1:8000/api/add-wishlist', {
        user_id   : this.user_id,
        product_id: this.data.product_id
        })
      .then(function (response) {
          if(response.data.success){
            alert(response.data.success)
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
  .product-detail{
    overflow-x:hidden;
    width: 87%;
    margin-left: 6.5%;
    margin-right: 6.5%;
  }
  /* image area */

  .carousel-inner img {
    width: cover;
    max-height: 425px;
  }

  /* #custCarousel .carousel-indicators {
      
  } */

  .check-order{
    color: green;
  }

  #image_detail_mini{
    max-height: 110px;
  }

  #custCarousel .carousel-indicators>li {
      width: 200px;
  }

  #custCarousel .carousel-indicators li img {
      display: block;
      opacity: 10;
  }

  #custCarousel .carousel-indicators li.active img {
      opacity: 10
  }

  #custCarousel .carousel-indicators li:hover img {
      opacity: 10
  }

  .carousel-item img {
      width: 100%;
  }

  #description{
    text-align: left;
  }

  .img-main {   
    position: absolute;
    margin-left: 18%;
    height: 60%;
    width: 25%;
  }
  .img-main img{   
    height: 100%;
    width: 100%;
  }
  
  .img-mini {
    margin-left: 20%;
    margin-bottom: 0.2%;
    height: 130px;
    width: 100px;
  }
  .img-mini img{
    height: 100%;
    width: 100%;
  }
  #myImg {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    opacity: 0.5;
  }
  #myImg:hover {
    opacity: 1;
  }

  /* Contain area */
  .contain-box {
    line-height: 0.9;
    padding-left: 2%;
    height: 100%;
    width: 54%;
    float: right;
    text-align: left;
    font-size: 15px;
  }
  .contain-box h3 {
    font-size: 25px;
  }
  .contain-box a {
    text-decoration: none;
    color: #3A5FCD;
  }
  .contain-box a:hover {
    color: #007c06;
  }
  .contain-box input[type=number]{
    color: #797979;
    text-align: center;
    font-size: 20px;
    height: 40px;
    width: 25%;
    border: 1px solid #E8E8E8;
    border-radius: 10px;
  }
  .contain-box button[name=buy]{
    font-size: 17px;
    border: none;
    border-radius: 5px;
    height: 44px;
    width: 25%;
    background-color: #009921;
    color: white;
  }
  .contain-box button[name="buy"]:hover{
    background-color: #05aa29;
    color: white;
  }

  .contain-box button[name=add-cart]{
    font-size: 17px;
    border: 1px solid #009921;
    border-radius: 5px;
    height: 44px;
    width: 25%;
    background-color: #dbffe3;
    color: #009921;
  }
  .contain-box button[name="add-cart"]:hover{
    background-color: #c3fccf;
  }
  .rate-star svg {
    color: rgb(248, 197, 28);
  }
  .rate-star a {
    color: #8f8e8e;   
    font-weight: 1;
  }
  .price {
    font-size: 25px;
    font-weight: bold;
    color: #f06c20;
  }
  .price a{
    color: #B5B5B5;
    font-weight: 1;
    font-size: 15px;
  }
  .transpot li {
    color: #757373;
  }
  .address{
    background-color: white;
    border: none;
  }
  .address:hover{
    color: #026d19;
  }
  .dropdown-menu a{
    color: rgb(138, 138, 138);
  }
  .dropdown-menu a:hover{
    color: rgb(66, 66, 66);
  }

  .description {
    color:rgb(124, 124, 124);
    font-size: 15px;
  }
  .container {
    margin-top: 34%;
  }
  .container p{
    color: rgb(114, 112, 112);
  }
  .link a{
    text-decoration: none;
    color:rgb(5, 46, 182);
  }
  .link a:hover{
    color: rgb(93, 55, 196);
  }
  .container p{
    text-align: left;
  }
  .container img {
    margin-left: 20%;
  }
  .related-products {
    text-align: center;
  }
  /*All Products*/

  .home{
    background-color: rgb(248,248,248);
  }
  @media only screen and (max-width:620px) {
    .link-menu, .img-main, .img-mini {
      width:100%;
    }
  }

  .product-type{
    width: 87%;
    margin-left: 6.5%;
    margin-right: 6.5%;
  }
  .product-type h4{  
      color: rgb(255, 72, 0);
  }
  .product-type h5{
      color: rgb(255, 30, 0);
  }
  .product-type .card{
      border: 0;
      width: 100%;
  }
  .product-type .product-type-all{
      background-color: white;
  }
  .product-type .card:hover{
      box-shadow: 0 0 10px rgb(192, 191, 191);
      background-color: rgb(250,250,250);
  }
  .product-type-all p:hover{
      color: rgb(253, 125, 5);
  }
</style>