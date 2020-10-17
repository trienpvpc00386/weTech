<template>
  <div class="Track-orders">
    <div class="link-menu">
        <router-link 
          to="/">
            <a href="javascript:void(0)">Trang chủ&emsp;
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
              </svg>&emsp;
            </a> 
        </router-link>
        Đơn hàng của bạn
    </div>
	
	<div>
		<div class="container">
			<h2>Đơn Hàng Của Bạn</h2>
			<br>
			<ul class="nav nav-tabs">
				<li class="nav-item">
					<a class="nav-link active" data-toggle="tab" href="#unactive-order">Đang Chờ Duyệt</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-toggle="tab" href="#active-order">Đã Duyệt</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-toggle="tab" href="#update-order-user">Đã Đóng Gói</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-toggle="tab" href="#confirm-order">Đang Giao</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-toggle="tab" href="#finish-order">Đã Giao</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-toggle="tab" href="#cancel-order-user">Đã Hủy</a>
				</li>
			</ul>

			<!-- Tab panes -->
			<div class="tab-content">
				<div id="unactive-order" class="container tab-pane active"><br>
					<div class="Track-orders" id="tab-content-order" v-if="check_unactive_order == 'true'">
						<div class="container">
							<form action="#" class="checkout-form">
								<div class="row">
									<div class="col-lg-6 mt-3" v-for="(order, index) in unactive_order" :key="index">
										<div class="place-order">
											<h4>Đơn Hàng Thứ {{index+1}} Của Bạn</h4>
											<div class="order-total">
												<ul class="order-table">
													<li>Sản Phẩm  <span>Giá</span></li>
													<li v-for="(product, index) in JSON.parse(order.order_detail)" :key="index"><img :src="product.image" width="10%"> {{product.product_name}} x {{product.quantity}} <span>{{product.price}}</span></li> 
												</ul>
												<div class="text-center">
													<h5>SỐ TIỀN PHẢI THANH TOÁN: {{order.total}} đ</h5>
												</div>

												<div class="input-group mt-5">

													<button class="btn btn-light">Tình trạng đơn hàng: </button>
										
													<button class="btn btn-success ml-2">Chờ duyệt</button>
												</div>

												<div class="order-btn mt-5">
													<input type="button" class="btn btn-warning" @click="cancelOrder(order)" value="HỦY ĐƠN HÀNG">
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>						
					</div>
					<h3 v-if="check_unactive_order == 'false'">Bạn không có đơn hàng nào đang chờ duyệt</h3>
				</div>
				<div id="active-order" class="container tab-pane fade"><br>
					<div class="Track-orders" id="tab-content-order" v-if="check_active_order == 'true'">
						<div class="container">
							<form action="#" class="checkout-form">
								<div class="row">
									<div class="col-lg-6 mt-3" v-for="(active_order, index) in active_order" :key="index">
										<div class="place-order">
											<h4>Đơn Hàng Thứ {{index+1}} Của Bạn</h4>
											<div class="order-total">
												<ul class="order-table">
													<li>Sản Phẩm  <span>Giá</span></li>
													<li v-for="(product, index) in JSON.parse(active_order.order_detail)" :key="index"><img :src="product.image" width="10%"> {{product.product_name}} x {{product.quantity}} <span>{{product.price}}</span></li> 
												</ul>
												<div class="text-center">
													<h5>SỐ TIỀN PHẢI THANH TOÁN: {{active_order.total}} đ</h5>
												</div>

												<div class="input-group mt-5">

													<button class="btn btn-light">Tình trạng đơn hàng: </button>
										
													<button class="btn btn-success ml-2">Đã duyệt</button>
												</div>

												<div class="order-btn mt-5">
													<input type="button" class="btn btn-warning" @click="cancelOrder(order)" value="HỦY ĐƠN HÀNG">
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>						
					</div>
					<h3 v-else-if="check_active_order == 'false'">Bạn không có đơn hàng đã duyệt</h3>
				</div>
				<div id="update-order-user" class="container tab-pane fade"><br>
					<div class="Track-orders" id="tab-content-order" v-if="check_update_order_user == 'true'">
						<div class="container">
							<form action="#" class="checkout-form">
								<div class="row">
									<div class="col-lg-6 mt-3" v-for="(order, index) in update_order_user" :key="index">
										<div class="place-order">
											<h4>Đơn Hàng Thứ {{index+1}} Của Bạn</h4>
											<div class="order-total">
												<ul class="order-table">
													<li>Sản Phẩm  <span>Giá</span></li>
													<li v-for="(product, index) in JSON.parse(order.order_detail)" :key="index"><img :src="product.image" width="10%"> {{product.product_name}} x {{product.quantity}} <span>{{product.price}}</span></li> 
												</ul>
												<div class="text-center">
													<h5>SỐ TIỀN PHẢI THANH TOÁN: {{order.total}} đ</h5>
												</div>

												<div class="input-group mt-5">

													<button class="btn btn-light">Tình trạng đơn hàng: </button>
										
													<button class="btn btn-success ml-2">Đã đóng gói</button>
												</div>

												<div class="order-btn mt-5">
													<input type="button" class="btn btn-warning" @click="cancelOrder(order)" value="HỦY ĐƠN HÀNG">
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<h3 v-else-if="check_update_order_user == 'false'">Bạn không có đơn hàng nào đã đóng gói</h3>
				</div>
				<div id="confirm-order" class="container tab-pane fade"><br>
					<div class="Track-orders" id="tab-content-order"  v-if="check_confirm_order == 'true'">
						<div class="container">							
							<form action="#" class="checkout-form">
								<div class="row">
									<div class="col-lg-6 mt-3" v-for="(order, index) in confirm_order" :key="index">
										<div class="place-order">
											<h4>Đơn Hàng Thứ {{index+1}} Của Bạn</h4>
											<div class="order-total">
												<ul class="order-table">
													<li>Sản Phẩm  <span>Giá</span></li>
													<li v-for="(product, index) in JSON.parse(order.order_detail)" :key="index"><img :src="product.image" width="10%"> {{product.product_name}} x {{product.quantity}} <span>{{product.price}}</span></li> 
												</ul>
												<div class="text-center">
													<h5>SỐ TIỀN PHẢI THANH TOÁN: {{order.total}} đ</h5>
												</div>

												<div class="input-group mt-5">

													<button class="btn btn-light">Tình trạng đơn hàng: </button>
										
													<button class="btn btn-success ml-2">Đang giao</button>
												</div>

												<div class="order-btn mt-5">
													<input type="button" class="btn btn-warning" @click="cancelOrder(order)" value="HỦY ĐƠN HÀNG">
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<h3 v-if="check_confirm_order == 'false'">Bạn không có đơn hàng nào đang giao</h3>
				</div>
				<div id="finish-order" class="container tab-pane fade"><br>
					<div class="Track-orders" id="tab-content-order"  v-if="check_finish_order == 'true'">
						<div class="container">						
							<form action="#" class="checkout-form">
								<div class="row">
									<div class="col-lg-6 mt-3" v-for="(order, index) in finish_order" :key="index">
										<div class="place-order">
											<h4>Đơn Hàng Thứ {{index+1}} Của Bạn</h4>
											<div class="order-total">
												<ul class="order-table">
													<li>Sản Phẩm  <span>Giá</span></li>
													<li v-for="(product, index) in JSON.parse(order.order_detail)" :key="index"><img :src="product.image" width="10%"> {{product.product_name}} x {{product.quantity}} <span>{{product.price}}</span></li> 
												</ul>
												<div class="text-center">
													<h5>SỐ TIỀN PHẢI THANH TOÁN: {{order.total}} đ</h5>
												</div>

												<div class="input-group mt-5">

													<button class="btn btn-light">Tình trạng đơn hàng: </button>
										
													<button class="btn btn-success ml-2">Đã Giao</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<h3 v-if="check_finish_order == 'false'">Bạn không có đơn hàng nào đã giao</h3>
				</div>
				<div id="cancel-order-user" class="container tab-pane fade"><br>
					<div class="Track-orders" id="tab-content-order" v-if="check_cancel_order_user == 'true'">
						<div class="container">							
							<form action="#" class="checkout-form">
								<div class="row">
									<div class="col-lg-6 mt-3" v-for="(order, index) in cancel_order_user" :key="index">
										<div class="place-order">
											<h4>Đơn Hàng Thứ {{index+1}} Của Bạn</h4>
											<div class="order-total">
												<ul class="order-table">
													<li>Sản Phẩm  <span>Giá</span></li>
													<li v-for="(product, index) in JSON.parse(order.order_detail)" :key="index"><img :src="product.image" width="10%"> {{product.product_name}} x {{product.quantity}} <span>{{product.price}}</span></li> 
												</ul>
												<div class="text-center">
													<h5>SỐ TIỀN PHẢI THANH TOÁN: {{order.total}} đ</h5>
												</div>

												<div class="input-group mt-5">

													<button class="btn btn-light">Tình trạng đơn hàng: </button>
										
													<button class="btn btn-success ml-2">Đã hủy</button>
												</div>

												<div class="order-btn mt-5">
													<input type="button" class="btn btn-warning" @click="cancelOrder(order)" value="HỦY ĐƠN HÀNG">
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<h3 v-if="check_cancel_order_user == 'false'">Bạn không có đơn hàng đã hủy</h3>
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
			user_id :{},
			unactive_order:[],
			check_unactive_order: 'false',
			active_order:[],
			check_active_order: 'false',
			confirm_order:[],
			check_confirm_order: 'false',
			finish_order:[],
			check_finish_order: 'false',
			unactive_order_detai:[],
			check_unactive_order_detai: 'false',
			cancel_order_user:[],
			check_cancel_order_user:'false',
			update_order_user:[],
			check_update_order_user:'false'
        }
	},
    created(){
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

		this.user_id = JSON.parse(getCookie("user_id"))

		this.UnActiveOrder()
		this.ActiveOrder()
		this.ConfirmOrder()
		this.FinishOrder()
		this.CancelOrderUser()
		this.UpdateOrder()

		//this.unactive_order.order_detail = JSON.stringify(this.unactive_order.order_detail)
	},
	methods:{
		UnActiveOrder(){
			let re = this
			axios.post('http://127.0.0.1:8000/api/unactive-order', {user_id:this.user_id})
			.then(function (response) {
				if(JSON.stringify(response.data) == '[]'){
					re.check_unactive_order = 'false'
				}
				else{
					re.check_unactive_order = 'true'
					re.unactive_order = response.data
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

		ActiveOrder(){
			let re = this
			axios.post('http://127.0.0.1:8000/api/active-order', {user_id:this.user_id})
			.then(function (response) {
				//console.log(response.data)
				if(JSON.stringify(response.data) == '[]'){
					re.check_active_order = 'false'
				}
				else{
					re.check_active_order = 'true'
					re.active_order = response.data
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

		ConfirmOrder(){
			let re = this
			axios.post('http://127.0.0.1:8000/api/confirm-order', {user_id:this.user_id})
			.then(function (response) {
				//console.log(response.data)
				if(JSON.stringify(response.data) == '[]'){
					re.check_confirm_order = 'false'
				}
				else{
					re.check_confirm_order = 'true'
					re.confirm_order = response.data
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

		FinishOrder(){
			let re = this
			axios.post('http://127.0.0.1:8000/api/finish-order', {user_id:this.user_id})
			.then(function (response) {
				//console.log(response.data)
				if(JSON.stringify(response.data) == '[]'){
					re.check_finish_order = 'false'
				}
				else{
					re.check_finish_order = 'true'
					re.finish_order = response.data
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

		CancelOrderUser(){
			let re = this
			axios.post('http://127.0.0.1:8000/api/cancel-order-user', {user_id:this.user_id})
			.then(function (response) {
				//console.log(response.data)
				if(JSON.stringify(response.data) == '[]'){
					re.check_cancel_order_user = 'false'
				}
				else{
					re.check_cancel_order_user = 'true'
					re.cancel_order_user = response.data
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

		UpdateOrder(){
			let re = this
			axios.post('http://127.0.0.1:8000/api/update-order-user', {user_id:this.user_id})
			.then(function (response) {
				//console.log(response.data)
				if(JSON.stringify(response.data) == '[]'){
					re.check_update_order_user = 'false'
				}
				else{
					re.check_update_order_user = 'true'
					re.update_order_user = response.data
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

		cancelOrder(order){
			let re = this
			axios.post('http://127.0.0.1:8000/api/cancel-order', {id:order.id})
			.then(function (response) {
				//console.log(response.data)
				if(response.data.success){
					re.$alertify.success("Đã hủy thành công")
					window.location="http://localhost:8080/track-orders";
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
    // computed:{
	// 	totalQuantity(){
	// 		return this.checkout.reduce(
	// 			(total, product) => total + product.quantity * product.price,
	// 			0
	// 		)
	// 	}
	// }
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
.Track-orders{
    top: 200px
}

.checkout-section {
	padding-top: 80px;
	padding-bottom: 80px;
}

.checkout-content {
	margin-bottom: 50px;
}

#tab-content-order{
	background-color: white;
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