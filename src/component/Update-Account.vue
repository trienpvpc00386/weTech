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
                <a href="javascript:void(0)">Cập nhật thông tin tài khoản&emsp;
            </a> 
        </div>

        <div class="container">
            <div class="text-center mt-3">
                <h1>Cập Nhật Thông Tin Tài Khoản</h1>
            </div> <hr>
            <div class="col-sm-6 mt-4" id="update-form">
                <form role="form">
                    <label>Họ và Tên:</label>
                    <input type="text" v-model="update_account.name" class="form-control" :placeholder="user.name">
                    <label>Password:</label>
                    <input type="text" v-model="update_account.password" class="form-control">
                    <div class="form-check-inline mt-3">
                        <label class="form-check-label">Giới tính: </label>
                        <label class="form-check-label ml-3">
                            <input type="radio" class="form-check-input" v-model="update_account.gender"  name="optradio">Nam 
                        </label>
                        </div>
                        <div class="form-check-inline">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="optradio">Nữ
                        </label>
                    </div> <br>
                    <label class="mt-2">Địa chỉ:</label>
                    <input type="email" v-model="update_account.address" class="form-control" :placeholder="user.address">
                    <label>Ngày sinh:</label>
                    <input type="date" v-model="update_account.birth_day" class="form-control" :placeholder="user.birth_day">
                    <label>Số điện thoại:</label>
                    <input type="text" v-model="update_account.phone_number" class="form-control" :placeholder="user.phone_number"> <br>
                    <input type="button" class="btn btn-warning btn-block" @click="UpdateAcount" value="Gửi">
                </form>
            </div>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            user:{},
            detail_account:[],
            update_account:{
                user_id:'',
                name:'',
                password:'',
                gender:'',
                address:'',
                birth_day:'',
                phone_number:''
            }
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
        this.user = JSON.parse(getCookie("user"))

        this.Detail_Account()
    },
    methods:{
        Detail_Account(){
            let re = this
            axios.post('http://127.0.0.1:8000/api/', {keywords:this.update_account})
            .then(function (response) {
                re.detail_account = response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        },
        UpdateAcount(){
            let re = this
            axios.post('http://127.0.0.1:8000/api/', {keywords:this.update_account})
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
  #update-form{
    margin: auto;
  }
</style>