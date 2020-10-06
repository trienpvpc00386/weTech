<template>
    <div id="siginForm">
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Đăng Ký</h5>
                        <form class="form-signin" role="form">
                        
                        <div class="row">
                            <div class="form-group col-lg-12">
                                <input type="text" v-model="account.username" class="form-control" placeholder="Tài Khoản" required>
                            </div>
                            
                            <div class="form-group col-lg-12">
                                <input type="email" v-model="account.email" class="form-control" placeholder=" Email">
                            </div>

                            <div class="form-group col-lg-6">
                                <label for="sel1">Họ Và Tên:</label>
                                <input type="text" v-model="account.name" class="form-control" placeholder="Họ Tên">
                            </div>

                            <div class="form-group col-lg-6">
                                <label for="sel1">Số Điện Thoại:</label>
                                <input type="number" v-model="account.phone_number" class="form-control" placeholder="Số điện thoại">
                            </div>

                            <div class="form-group col-lg-12">
                                <input type="text" v-model="account.address" class="form-control" placeholder="Địa chỉ">
                            </div>

                            <div class="form-group col-lg-6">
                                <label>Ngày Sinh:</label>
                                <input type="date" v-model="account.birth_day"  class="form-control">
                            </div>

                            <div class="form-group col-lg-6">
                                <label>Giới Tính:</label>
                                <select class="form-control" v-model="account.gender">
                                    <option :value="1">Nam</option>
                                    <option :value="0">Nữ</option>
                                </select>
                            </div>

                            <div class="form-group col-lg-12">
                                <input type="password" v-model="account.password" class="form-control" placeholder="Mật Khẩu">
                            </div>

                        </div>

                        <br>
                        <button class="btn btn-lg btn-info btn-block text-uppercase" type="button" @click="Register">Đăng Ký</button>
                        <hr class="my-4">
                        
                        </form>
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
            account:{
                name         : '',
                username     : '',
                email        : '',
                password     : '',
                gender       : '',
                address      : '',
                birth_day    : '',
                phone_number : ''
            },
        }
    },

    methods: {
        // Home() {
        //     this.$router.push({path:"/", params: {userid: "123"}})
        // },

        Register(){
            axios.post('http://127.0.0.1:8000/api/register', this.account)
            .then(function (response) {
                if(response.data.error){
                    alert(response.data.error)
                }else if(response.data.success){
                    alert(response.data.success)
                    window.location="http://localhost:8080/register"
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
    #siginForm{
        position: fixed;
        width: 100%;
        height: 800px;
        top: 0;
        z-index: 999;
        background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important;
    } 
    .container {
        margin-top: 1%;
    }

    .top-area {
        background-color: white;
        padding: 1% 10% 1% 18%;
        width: 100%;
    }

    .top-area a[id=title]{
        padding-left: 3%;
        text-decoration: none;
    }

    .question {
        padding-top: 13px;
    }

    .question a {
        text-decoration: none;
        font-size: 18px;
        color:rgb(10, 95, 2)
    }

    .question a:hover {
        color:rgb(22, 192, 6)
    }

    .title {
        padding-top: 7px;
        text-decoration: none;
        color: rgb(124, 124, 124);
        font-size: 25px;
        font-weight: bold;
    }

    :root {
        --input-padding-x: 1.5rem;
        --input-padding-y: .75rem;
    }

    body {
        background: #007bff;
        background: linear-gradient(to right, #b7f594, #b7f594);
    }

    .card-signin {
        border: 0;
        border-radius: 1rem;
        box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
    }

    .card-signin .card-title {
        margin-bottom: 2rem;
        font-weight: 300;
        font-size: 1.5rem;
    }

    .card-signin .card-body {
        padding: 2rem;
    }

    .form-signin {
        width: 100%;
    }

    .link-register a{
        text-decoration: none;
        float: right;
        margin-right: 10%;
    }

    .form-signin .btn {
        font-size: 80%;
        border-radius: 5rem;
        letter-spacing: .1rem;
        font-weight: bold;
        padding: 1rem;
        transition: all 0.2s;
    }

    .form-label-group {
        position: relative;
        margin-bottom: 1rem;
    }

    .form-label-group input {
        height: auto;
        border-radius: 2rem;
    }

    .form-label-group>input,
    .form-label-group>label {
        padding: var(--input-padding-y) var(--input-padding-x);
    }

    .form-label-group>label {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        margin-bottom: 0;
        /* Override default `<label>` margin */
        line-height: 1.5;
        color: #495057;
        border: 1px solid transparent;
        border-radius: .25rem;
        transition: all .1s ease-in-out;
    }

    .form-label-group input::-webkit-input-placeholder {
        color: transparent;
    }

    .form-label-group input:-ms-input-placeholder {
        color: transparent;
    }

    .form-label-group input::-ms-input-placeholder {
        color: transparent;
    }

    .form-label-group input::-moz-placeholder {
        color: transparent;
    }

    .form-label-group input::placeholder {
        color: transparent;
    }

    .form-label-group input:not(:placeholder-shown) {
        padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
        padding-bottom: calc(var(--input-padding-y) / 3);
    }

    .form-label-group input:not(:placeholder-shown)~label {
        padding-top: calc(var(--input-padding-y) / 3);
        padding-bottom: calc(var(--input-padding-y) / 3);
        font-size: 12px;
        color: #777;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }

    .logo-area {
        text-align: center;
    }

    /* Fallback for Edge */

    @supports (-ms-ime-align: auto) {
    .form-label-group>label {
        display: none;
    }
    .form-label-group input::-ms-input-placeholder {
        color: #777;
    }
    }

    /* Fallback for IE */

    @media all and (-ms-high-contrast: none),
    (-ms-high-contrast: active) {
        .form-label-group>label {
            display: none;
        }
        .form-label-group input:-ms-input-placeholder {
            color: #777;
        }
    }
</style>