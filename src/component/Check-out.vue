<template>
  <div>
      <div class="link-menu">
          <a href="javascript:void(0)" @click="backHome">Trang chủ&emsp;
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
          </svg>&emsp;
          </a> 
          Cart
        </div>
        <div class="checkout">
            <div class="container">
                <form class="checkout-form" role="form">
                    <div class="row">
                        <div class="col-lg-6">
                            <h4>Chi Tiết Thanh Toán</h4>
                            <div class="row">
                                <div class="col-lg-12">
                                    <label for="fir">Họ và Tên<span>*</span></label>
                                    <input type="text" id="fir">
                                </div>
								<div class="col-lg-12">
                                    <label for="street">Địa Chỉ<span>*</span></label>
                                    <input type="text" v-model="check_order.address" id="street" class="street-first">
                                </div>
                                <div class="col-lg-6">
                                    <label for="email">Email <span>*</span></label>
                                    <input type="text" id="email">
                                </div>
                                <div class="col-lg-6">
                                    <label for="phone">Số điện thoại<span>*</span></label>
                                    <input type="text" id="phone">
                                </div>
                                <div class="col-lg-12">
                                    <label for="town">Ghi chú<span>*</span></label>
                                    <input type="text" id="town">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="place-order">
                                <h4>Đơn Hàng Của Bạn</h4>
                                <div class="order-total">
                                    <ul class="order-table">
                                        <li>Sản Phẩm <span>Giá</span></li>
                                        <li class="fw-normal" v-for="(product, index) in checkout" :key="index"><img :src="product.image" width="40px"> {{product.name}} x {{product.cart_quantity}} <span>{{product.price * product.cart_quantity}}</span></li> 
                                    </ul>
                                    <div>
                                        <h4>SỐ TIỀN PHẢI TRẢ: {{totalQuantity}}</h4>
                                    </div>
                                    <div class="order-btn">
                                        <input type="button" class="btn btn-success" @click="checkOrder" value="THANH TOÁN">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
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
            checkout   :[],
			user_id    :{},
			check_order:{
				user_id     : '',
				address     : '',
				shipping    : 100,
				total       : '',
				order_detail: '' 
			}
        }
    },
    created(){
        this.checkout = this.$route.params.order
		this.user_id  = this.$route.params.user_id
		
		this.check_order.user_id      = this.user_id
		this.check_order.order_detail = JSON.stringify(this.checkout)
		this.check_order.total        = this.totalQuantity
    },
    methods:{
        backHome(){
            this.$router.push({path:"/"}) 
		},
		checkOrder(){
			axios.post('http://127.0.0.1:8000/api/add-order', this.check_order)
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
	},
    computed:{
      totalQuantity(){
      return this.checkout.reduce(
        (total, product) => total + product.cart_quantity * product.price,
        0
      )
    }
  }
}
</script>

<style>
/*link menu*/
    .link-menu {
        background-color: rgb(248,248,248);
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
  Check Out
-----------------------*/

.checkout{
    top: 100px
}

.checkout-section {
	padding-top: 80px;
	padding-bottom: 80px;
}

.checkout-content {
	margin-bottom: 50px;
}

.checkout-content .content-btn,
.checkout-content input {
	color: #252525;
	font-size: 16px;
	border: 2px solid #ebebeb;
	padding: 14px 20px;
	background: #f3f3f3;
	text-align: center;
	display: block;
}

.checkout-content input {
	height: 56px !important;
}

.checkout-form h4 {
	color: #252525;
	font-weight: 700;
	margin-bottom: 30px;
}

.checkout-form label {
	color: #252525;
	font-size: 16px;
	margin-bottom: 5px;
}

.checkout-form label span {
	color: #d85d5c;
}

.checkout-form input {
	width: 100%;
	height: 46px;
	border: 2px solid #ebebeb;
	margin-bottom: 25px;
	padding-left: 15px;
}

.checkout-form input.street-first {
	margin-bottom: 20px;
}

.checkout-form .create-item {
	padding-top: 15px;
}

.checkout-form .create-item label {
	position: relative;
	cursor: pointer;
	padding-left: 32px;
	margin-bottom: 0;
	font-size: 14px;
	color: #252525;
}

.checkout-form .create-item label input {
	position: absolute;
	visibility: hidden;
}

.checkout-form .create-item label input:checked~span {
	background: #e7ab3c;
	border-color: #e7ab3c;
}

.checkout-form .create-item label .checkmark {
	position: absolute;
	left: 0;
	top: 3px;
	height: 13px;
	width: 13px;
	border: 2px solid #B2B2B2;
	border-radius: 2px;
}

.checkout-form .create-item label .checkmark:after {
	left: 0;
	top: 0;
	width: 9px;
	height: 6px;
	border: solid #ffffff;
	border-width: 2px 2px 0px 0px;
	-webkit-transform: rotate(127deg);
	-ms-transform: rotate(127deg);
	transform: rotate(127deg);
}

.checkout-form .place-order .order-total {
	border: 2px solid #ebebeb;
	padding-left: 40px;
	padding-right: 40px;
	padding-top: 22px;
	padding-bottom: 35px;
}

.checkout-form .place-order .order-total .order-table {
	margin-bottom: 64px;
}

.checkout-form .place-order .order-total .order-table li {
	list-style: none;
	color: #252525;
	font-size: 14px;
	font-weight: 700;
	text-transform: uppercase;
	border-bottom: 1px solid #e5e5e5;
	padding-bottom: 5px;
	padding-top: 30px;
}

.checkout-form .place-order .order-total .order-table li:first-child {
	border-bottom: 1px solid #e5e5e5;
	padding-bottom: 20px;
	padding-top: 0;
}

.checkout-form .place-order .order-total .order-table li.fw-normal {
	font-weight: 400;
	text-transform: capitalize;
}

.checkout-form .place-order .order-total .order-table li.fw-normal span {
	font-weight: 700;
}

.checkout-form .place-order .order-total .order-table li.total-price span {
	color: #e7ab3c;
}

.checkout-form .place-order .order-total .order-table li span {
	float: right;
}

.checkout-form .place-order .order-total .payment-check {
	margin-bottom: 50px;
}

.checkout-form .place-order .order-total .payment-check .pc-item label {
	position: relative;
	cursor: pointer;
	padding-left: 32px;
	margin-bottom: 0;
	font-size: 14px;
	color: #252525;
}

.checkout-form .place-order .order-total .payment-check .pc-item label input {
	position: absolute;
	visibility: hidden;
}

.checkout-form .place-order .order-total .payment-check .pc-item label input:checked~span {
	background: #e7ab3c;
	border-color: #e7ab3c;
}

.checkout-form .place-order .order-total .payment-check .pc-item label .checkmark {
	position: absolute;
	left: 0;
	top: 3px;
	height: 13px;
	width: 13px;
	border: 2px solid #B2B2B2;
	border-radius: 2px;
}

.checkout-form .place-order .order-total .payment-check .pc-item label .checkmark:after {
	left: 0;
	top: 0;
	width: 9px;
	height: 6px;
	border: solid #ffffff;
	border-width: 2px 2px 0px 0px;
	-webkit-transform: rotate(127deg);
	-ms-transform: rotate(127deg);
	transform: rotate(127deg);
}

.checkout-form .place-order .order-total .order-btn {
	text-align: center;
}

.checkout-form .place-order .order-total .order-btn .place-btn {
	padding: 13px 40px 11px;
	background: #000000;
	border-color: #000000;
}
</style>