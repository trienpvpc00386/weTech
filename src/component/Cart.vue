<template>
    <div>
        <div class="link-menu">
          <router-link 
          to="/">
            <a href="javascript:void(0)">Trang chủ&emsp;
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
              </svg>&emsp;
            </a> 
          </router-link>
          Cart
        </div>

        <div id="cart-body">
            <div class="container mt-5" id="cart-content">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="cart-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Hình ảnh</th>
                                        <th class="p-name">Tên sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Số lượng</th>
                                        <th>Tổng</th>
                                        <th><i class="ti-close"></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(sp, index) in cart" :key="index">
                                        <td class="cart-pic first-row"><img :src="sp.image" width="50%"></td>
                                        <td class="cart-title first-row">
                                            <h5>{{sp.name}}</h5>
                                        </td>
                                        <td class="p-price first-row">{{sp.price}}</td>
                                        <td class="qua-col first-row">
                                            <div class="quantity">
                                                <input type="button" @click="updateCart(sp, 'subtract')" class="btn btn-outline-info" value=" - ">
                                                <div class="">
                                                    <input type="text" class="form-control" v-model="sp.cart_quantity">
                                                </div>
                                                <input type="button" @click="updateCart(sp, 'add')" class="btn btn-outline-info" value=" + ">
                                            </div>
                                        </td>
                                        <td class="total-price first-row">{{sp.price * sp.cart_quantity}}</td>
                                        <td class="close-td first-row"><i class="ti-close"></i></td>
                                        <td class="p-price first-row"><input  @click="removeItem(index)"  type="button" class="btn btn-danger" value="X"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row justify-content-end">
                            <div class="col-lg-4 offset-lg-4">
                                <div class="proceed-checkout">
                                    <ul>
                                        <li class="subtotal">TỔNG TIỀN <span>{{totalQuantity}}</span></li>
                                        <li class="cart-total">SỐ TIỀN PHẢI TRẢ <span>{{totalQuantity}}</span></li>
                                    </ul>
                                    <router-link 
                                    to="/checkout"
                                    >
                                        <a href="javascript:void(0)" class="proceed-btn" @click="checkOutCart">THANH TOÁN</a>
                                    </router-link>
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
import { eventBus } from "../main"
import axios from 'axios'
export default {
  data(){
    return {
      user_id : {},
      cart    : [],
      new_cart: []
      // fncart  : []
    }
  },
  created(){ 

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return "";
    } 

    this.user_id = JSON.parse(getCookie("user_id"))

    this.Product_Cart()

  },
  computed:{
      totalQuantity(){
      return this.cart.reduce(
        (total, sp) => total + sp.cart_quantity * sp.price,
        0
      )
    }
  },
  methods:{
    Product_Cart(){
      var re = this
      //console.log(this.user_id)
      axios.post('http://127.0.0.1:8000/api/get-cart', {user_id:this.user_id})
      .then(function (response) {
        //console.log(response.data)
        re.cart = response.data
        
        //re.updateCart(sp, updateType)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    },
    updateCart(sp, updateType){
      for (let i = 0; i < this.cart.length; i++){
        if(this.cart[i].prodetail_id === sp.prodetail_id){
          if(updateType === "subtract"){
            if(this.cart[i].cart_quantity !== 0){
              this.cart[i].cart_quantity--;
            }
          }
          else{
            this.cart[i].cart_quantity++;
          }

          break;
        }
      }
    },
    removeItem(index){
      this.$delete(this.cart, index);
    },
    checkOutCart(){
      this.$router.push({ name: 'checkout', params: {order:this.cart, user_id:this.user_id}})
    }
  }
}
</script>

<style>
    /*link menu*/
    .link-menu {
        background-color: white;
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
    /*---------------------
  Shopping Cart
-----------------------*/

#cart-body{
    background-color:rgb(245,245,245);
    width: 100%;
    margin-top: -48px;
}
#cart-content{
    background-color:rgb(245,245,245);
    padding-top: 40px;
    padding-bottom: 40px;
}
#cart-content .cart-table{
    background-color: white;
}

.shopping-cart {
	padding-top: 80px;
	padding-bottom: 60px;
}

.cart-table {
	margin-bottom: 40px;
}

.cart-table table {
	width: 100%;
	min-width: 480px;
	border: 1px solid #ebebeb;
}

.cart-table table tr th {
	font-size: 16px;
	color: #252525;
	font-weight: 700;
	border-bottom: 1px solid #ebebeb;
	text-align: center;
	padding: 18px 0 19px;
	text-transform: uppercase;
}

.cart-table table tr th.p-name {
	text-align: left;
}

.cart-table table tr td {
	text-align: center;
	padding-bottom: 34px;
}

.cart-table table tr td.first-row {
	padding-top: 30px;
}

.cart-table table tr td.cart-pic {
	width: 21%;
}

.cart-table table tr td.cart-title {
	text-align: left;
}

.cart-table table tr td.cart-title h5 {
	color: #252525;
}

.cart-table table tr td.p-price {
	width: 16%;
}

.cart-table table tr td.p-price,
.cart-table table tr td.total-price {
	color: #e7ab3c;
	font-size: 16px;
	font-weight: 700;
}

.cart-table table tr td.qua-col {
	width: 16%;
}

.cart-table table tr td.qua-col .quantity {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
}

.cart-table table tr td.qua-col .pro-qty {
	width: 123px;
	height: 46px;
	border: 2px solid #ebebeb;
	padding: 0 15px;
	float: left;
}

.cart-table table tr td.qua-col .pro-qty .qtybtn {
	font-size: 24px;
	color: #b2b2b2;
	float: left;
	line-height: 38px;
	cursor: pointer;
	width: 18px;
}

.cart-table table tr td.qua-col .pro-qty .qtybtn.dec {
	font-size: 30px;
}

.cart-table table tr td.qua-col .pro-qty input {
	text-align: center;
	width: 52px;
	font-size: 14px;
	font-weight: 700;
	border: none;
	color: #4c4c4c;
	line-height: 40px;
	float: left;
}

.cart-table table tr td.total-price {
	width: 12%;
}

.cart-table table tr td.close-td {
	font-size: 16px;
	color: #252525;
	width: 8%;
}

.cart-table table tr td.close-td i {
	cursor: pointer;
}

.cart-buttons {
	margin-bottom: 34px;
}

.cart-buttons .continue-shop {
	color: #b2b2b2;
	border: 2px solid #ebebeb;
	background: #ffffff;
	margin-right: 8px;
	padding: 12px 20px 12px 20px;
	margin-bottom: 10px;
}

.cart-buttons .up-cart {
	color: #252525;
	background: #f3f3f3;
	border: 2px solid #ebebeb;
	padding: 12px 20px 12px 20px;
}
.discount-coupon {
	margin-bottom: 30px;
}

.discount-coupon h6 {
	color: #232530;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 16px;
}

.discount-coupon .coupon-form {
	position: relative;
}

.discount-coupon .coupon-form input {
	width: 100%;
	height: 46px;
	border: 2px solid #ebebeb;
	color: #b2b2b2;
	font-size: 14px;
	padding-left: 20px;
}

.discount-coupon .coupon-form .coupon-btn {
	position: absolute;
	right: 0;
	top: 0;
	color: #252525;
	background: transparent;
	border: 1px solid transparent;
	padding: 13px 25px 10px 35px;
}

.proceed-checkout ul {
	border: 2px solid #ebebeb;
	background: #f3f3f3;
	padding-left: 25px;
	padding-right: 25px;
	padding-top: 16px;
	padding-bottom: 20px;
}

.proceed-checkout ul li {
	list-style: none;
	font-size: 16px;
	font-weight: 700;
	color: #252525;
	text-transform: uppercase;
	overflow: hidden;
}

.proceed-checkout ul li.subtotal {
	font-weight: 400;
	text-transform: capitalize;
	border-bottom: 1px solid #ffffff;
	padding-bottom: 14px;
}

.proceed-checkout ul li.subtotal span {
	font-weight: 700;
}

.proceed-checkout ul li.cart-total {
	padding-top: 10px;
}

.proceed-checkout ul li.cart-total span {
	color: #e7ab3c;
}

.proceed-checkout ul li span {
	float: right;
}

.proceed-checkout .proceed-btn {
	font-size: 14px;
	font-weight: 700;
	color: #ffffff;
	background: green;
	text-transform: uppercase;
	padding: 15px 25px 14px 25px;
	display: block;
	text-align: center;
}
</style>