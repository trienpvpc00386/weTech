<template>
  <div>
    <div class="link-menu">
      <router-link to="/">
        <a href="javascript:void(0)">Trang chủ&emsp;
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
          </svg>&emsp;
        </a> 
      </router-link>
      Bán cùng WeTech
    </div>
    <div class="sales-channel">
      <div class="row mt-5">
        <div class="col-sm-6" id="banner-sales-channel">
          <h1>Banner</h1>
        </div>
        <div class="col-sm-6 cart">
          <div class="card-body">
            <form class="form-sales-channel" role="form">
              <div class="row">
                <div class="col-lg-6">
                  <label>Số điện thoại:<span></span></label>
                  <input type="text" v-model="re_shop.phone_number" class="form-control">
                </div>
                <div class="col-lg-6">
                  <label>Số chứng minh nhân dân<span></span></label>
                  <input type="text" v-model="re_shop.identity_card" class="form-control">
                </div>
                <div class="col-lg-12">
                  <label>Tên shop<span></span></label>
                  <input type="text" v-model="re_shop.shop_name" class="form-control">
                </div>
                <div class="col-lg-12">
                  <label>Địa chỉ<span></span></label>
                  <input type="text" v-model="re_shop.address" class="form-control">
                </div>
                <div class="col-lg-12"> <br>
                  <input class="btn btn-success btn-block" type="button" @click="ReShop" value="ĐĂNG KÝ">
                </div>
              </div>
            </form>
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
      re_shop:{
        shop_name   : '',
        identity_card: '',
        address      : '',
        user_id      : '', 
        location     : '',
        phone_number : ''
      },
      city:[],
      location_big   :{}  
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

    this.re_shop.user_id = JSON.parse(getCookie("user_id"))

    //this.City()
  },
  methods:{
    // City(){
    //   let re = this 
    //   axios.get('https://thongtindoanhnghiep.co/api/city')
    //   .then(function (response) {
    //     console.log(response.data)
    //     re.city = response.data
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
    // },

    ReShop(){
      let re = this
      axios.get('https://nominatim.openstreetmap.org/search/'+this.re_shop.address+'?format=json&addressdetails=1&limit=1&polygon_svg=1')
      .then(function (response) {
        re.location_big = response.data[0]
        
        let location = {
          latitude: re.location_big.lat,
          longitude: re.location_big.lon
        }
        re.re_shop.location = JSON.stringify(location)
        re.ReShop2(re.re_shop)
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    },

    ReShop2(shop){
      axios.post('http://127.0.0.1:8000/api/add-shop', shop)
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
.sales-channel{
  width: 87%;
  margin-left: 6.5%;
  margin-right: 6.5%;
}
#banner-sales-channel{
  width: 100%;
  background-color: gray;
  color: white;
}
.form-sales-channel{
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  background-color: white;
}
</style>