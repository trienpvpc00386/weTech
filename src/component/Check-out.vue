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
                                    <label for="town">Ghi chú<span>*</span></label>
                                    <input type="text" id="town" v-model="check_order.note">
                                </div>
								<div class="col-lg-12">
                                    <label for="street">Địa Chỉ<span>*</span></label>
                                    <input type="text" v-model="check_order.order_address" id="street" class="street-first">
									<input type="button" class="btn btn-primary" @click="ChoseAddress" value="Xác nhận địa chỉ">
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
										<h5>Tiền Đơn Hàng: {{totalQuantity}}</h5>
										<h5 v-if="check_order.shipping">Tiền Ship: {{check_order.shipping}}</h5>
                                        <h4 v-if="total_av">SỐ TIỀN PHẢI TRẢ: {{total_av}}</h4>
                                    </div>
                                    <div class="order-btn mt-3">
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
import _ from 'lodash'
export default {
    data(){
        return {
            checkout      :[],
			user_id       :{},
			check_order:{
				user_id       : '',
				order_address : '',
				shipping      : '',
				total         : '',
				order_detail  : '',
				user_range    : '',
				weight_order  : '',
				note		  : ''
			},
			shipping_new : [],
			id_shop       : [],
			shop_range    : null,
			weight_order  : [],
			detail_shop   : [],
			chose_address : [],
			total_av      : 0
        }
    },
    created(){
        this.checkout = this.$route.params.order
		this.user_id  = this.$route.params.user_id
		
		this.check_order.user_id      = this.user_id
		this.check_order.order_detail = JSON.stringify(this.checkout)
		this.check_order.total        = this.totalQuantity

		this.AddressShop()
		this.WeightOrder()
		//this.ChoseAddress()
    },
    methods:{
		backHome(){this.$router.push({path:"/"})},
	
		checkOrder(){
			let re = this
			if(re.check_order.address === ''){
				alert("Vui lòng nhập địa chỉ nhận hàng!")
			}
			else{
				axios.post('http://127.0.0.1:8000/api/add-order', this.check_order)
				.then(function (response) {	
					if(response.data.success){
						re.$alertify.success(response.data.success)
						window.location="http://localhost:8080/track-orders"
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

		AddressShop(){
			let re = this
			let add = []
			let new_shipping = []
			for(let i = 0; i < re.checkout.length; i++){
				add.push(re.checkout[i].shop_id)
				re.id_shop = _.uniq(add)
			}
			for(let y = 0; y < re.id_shop.length ; y++){
				axios.post('http://127.0.0.1:8000/api/range-shop', {shop_id:this.id_shop[y]})
					.then(function (response) {
						//console.log(response.data)
						re.detail_shop.push(JSON.parse(response.data.shop_range))
						//let data = response.data
						
						let shipping = {
							shop_id   : response.data.shop_id,
							shop_range: JSON.parse(response.data.shop_range), 
						}
						
						new_shipping.push(shipping)
						//console.log("Đây: " + new_shipping)
						re.check_order.shipping = JSON.stringify(new_shipping)
						re.shipping_new = new_shipping
						
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

		WeightOrder(){
			let re = this
			let weight = []
			for(let j = 0; j < re.checkout.length; j++){
				re.weight_order.push(JSON.parse(re.checkout[j].weight))
				//console.log(weight)
			}
		},
		
		ChoseAddress(){
			let re = this
			let tien = null
			let weight = null
			let reducer = (accumulator, currentValue) => accumulator + currentValue;
			axios.get('https://nominatim.openstreetmap.org/search/'+this.check_order.order_address+'?format=json&addressdetails=1&limit=1&polygon_svg=1')
			.then(function (response) {
				re.location_big = response.data[0]	
				//let location = {
				// let lat = re.location_big.lat
				// let lon = re.location_big.lon

				//Địa chỉ Shop đến kho
				re.shop_range = re.detail_shop.reduce(reducer)

				//Điếm shop
				let shop_range_length = 0
				shop_range_length = re.detail_shop.length
				console.log('diemshop: ' + shop_range_length)

				//Trọng lượng đơn hàng
				weight = re.weight_order.reduce(reducer)
				re.check_order.weight_order = re.weight_order.reduce(reducer)
				//console.log("Trọng lượng: " + weight)

				// Địa chỉ cửa hàng
				// var latitude1 = data.results[y].latlng.lat
				// var longitude1 = data.results[y].latlng.lng
				var latitude1 = 10.0268996
				var longitude1 = 105.7574271				

				//var lat1 = 10.0476153
				//var long1 = 105.7831003

				// Địa chỉ khách hàng 10.029077,105.754038
				var latitude2 = re.location_big.lat
				var longitude2 = re.location_big.lon
				var pi = Math.PI;
				var x1 = latitude1 * (pi/180)
				var y1 = longitude1 * (pi/180)
				var x2 = latitude2 * (pi/180)
				var y2 = longitude2 * (pi/180)

				var difflat = x2 - x1
				var difflong = y2 - y1

				var kq = Math.pow(Math.sin(difflat/2),2) + Math.cos(x1) * Math.cos(x2) * Math.pow(Math.sin(difflong/2),2)
				var kqcx = 6339.90 * (2 * Math.asin(Math.sqrt(kq)))
				// Làm tròn 3 số
				var kqkq = Math.round(kqcx * 1000) / 1000
				if(weight <= 5){
					tien = 2000
				}
				else if(weight > 5 && weight <= 10){
					tien = 4000
				}
				else if(weight > 10 && weight <=15 ){
					tien = 80000
				}
				else{
					tien = 15000
				}

				if(shop_range_length > 0){
					kqkq = kqkq * shop_range_length
				}

				//Tiền ship
				let shipping  = tien * (kqkq + re.shop_range)
				//console.log(shipping)

				//Khoảng cách từ user đến cửa hàng
				re.check_order.user_range = kqkq
				//Tiền tổng
				re.total_av = re.totalQuantity + shipping
	
				// console.log('Tiền SP: ' + re.totalQuantity)
				// console.log('Tiền Tổng: ' + re.total_av)
				// console.log('Tiền ship: '+re.check_order.shipping)
				// console.log('Khoảng cách từ user đến shop: ' + kqkq)
				// console.log('Khoảng cách từ cửa hàng đến shop: ' + re.shop_range)
				// console.log('Tền ship: ' + shipping)
				// console.log('giá Tiền ship: ' + tien)

			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
				// always executed
			})
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
	#map { position: absolute; top:100px; bottom:0; right:0; left:0; }

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