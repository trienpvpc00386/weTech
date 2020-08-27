<template>
    <div id="login-form">
        <div class="top-area">
            <div class="row">
                <div class="col-sm-2">
                    <a href="javascript:void(0)" @click="Home"><img src="../assets/img/logo-shop.png" height="50"></a>
                </div>
                <div class="col-sm-6 title">
                    <a id="title">Đăng nhập</a>
                </div>
                <div class="col-sm-3 question">
                    <a href="#">Hỏi đáp</a>
                </div>
            </div>
        </div>
        <div class="container" id="body-form-login">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Đăng Nhập</h5>
                        <form class="form-signin">
                        <div class="form-label-group">
                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                            <label for="inputEmail">Tài Khoản</label>
                        </div>

                        <div class="form-label-group">
                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                            <label for="inputPassword">Mật Khâu</label>
                        </div>

                        <div class="custom-control custom-checkbox mb-3 link-register">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">Quên mật khẩu</label>
                            <a href="javascript:void(0)" @click="Register">Đăng ký</a>
                        </div>
                        <br>
                        <button class="btn btn-lg btn-info btn-block text-uppercase" type="submit">Đăng nhập</button>
                        <hr class="my-4">
                        <div class="logo-area">
                            <button>
                                <img src="../assets/img/logo-facebook.png" height="30px">
                            </button>
                            <button>
                                <img src="../assets/img/logo-google.png" height="30px">
                            </button>
                            <button>
                                <img src="../assets/img/logo-twitter.png" height="30px">
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            Home() {
                this.$router.push({path:"/", params: {userid: "123"}})
            },
            Register() {
                this.$router.push({path:"/Register"})
            }
        }
    }
</script>

<style>
    #login-form{
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      z-index: 999;
    }
    .container {
        margin-top: 2%;
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
        color: rgb(124, 124, 124);
        font-size: 25px;
        font-weight: bold;
    }

    :root {
        --input-padding-x: 1.5rem;
        --input-padding-y: .75rem;
    }

    #login-form {
        background: #007bff;
        background: linear-gradient(to right, #f7de71, #f7de71);
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
        color: rgb(58, 148, 184);
    }
    .link-register a:hover{
        text-decoration: none;
        float: right;
        margin-right: 10%;
        color: rgb(119, 215, 253);
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

    .logo-area {
        text-align: center;
    }

    .logo-area button {
        border: none;
        background-color: white;
        border-radius: 20px;
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