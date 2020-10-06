<template>
  <div id="loginForm">
    <div class="bg-gradient-primary py-7 py-lg-8 pt-lg-9">
      <!-- Main content -->
      <div class="main-content">
        <!-- Page content -->
        <div class="container mt--8">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
              <div class="card bg-secondary border-0 mb-0">
                <div class="card-header bg-transparent pb-5">
                  <div class="text-muted text-center mt-2 mb-3">
                    <small>Đăng nhập với</small>
                  </div>
                  <div class="btn-wrapper text-center">
                    <a href="#" class="btn btn-neutral btn-icon">
                      <span class="btn-inner--icon">
                        <img src="../assets/img/icons/common/github.svg" />
                      </span>
                      <span class="btn-inner--text">Github</span>
                    </a>
                    <a href="#" class="btn btn-neutral btn-icon">
                      <span class="btn-inner--icon">
                        <img src="../assets/img/icons/common/google.svg" />
                      </span>
                      <span class="btn-inner--text">Google</span>
                    </a>
                  </div>
                </div>
                <div class="card-body px-lg-5 py-lg-5">
                  <div class="text-center text-muted mb-4">
                    <small>Hoặc đăng nhập bằng tài khoản người dùng</small>
                  </div>
                  <form role="form">
                    <div class="form-group mb-3">
                      <div class="input-group input-group-merge input-group-alternative">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="ni ni-email-83"></i>
                          </span>
                        </div>
                        <input class="form-control" placeholder="Email" type="email" v-model="user.username"/>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group input-group-merge input-group-alternative">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="ni ni-lock-circle-open"></i>
                          </span>
                        </div>
                        <input class="form-control" placeholder="Password" type="password" v-model="user.password"/>
                      </div>
                    </div>
                    <div class="custom-control custom-control-alternative custom-checkbox">
                      <input class="custom-control-input" id=" customCheckLogin" type="checkbox" />
                      <label class="custom-control-label" for="customCheckLogin">
                        <span class="text-muted">Ghi nhớ tài khoản</span>
                      </label>
                    </div>
                    <div class="text-center">
                      <button type="button" class="btn btn-primary my-4" @click="Login">Sign in</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-6">
                  <a href="javascript:void(0)" class="text-light">
                    <small>Quên mật khẩu?</small>
                  </a>
                </div>
                <div class="col-6 text-right">
                  <router-link to="/register">
                    <a href="javascript:void(0)" class="text-light">
                      <small>Tạo tài khoản mới</small>
                    </a>
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
import axios from 'axios'
export default {
    data(){
      return{
        user: {
          username: "",
          password: ""
        },

      }
  },
  methods: {
    Login(){
      axios.post('http://127.0.0.1:8000/api/login', this.user)
      .then(function (response) {
        if(response.data.error){
          alert(response.data.error)
        }else{
          response.data.forEach(abc => {

            var user = JSON.stringify(abc) 
            document.cookie = `user=${user}; max-age=600`
            document.cookie = `user_id=${abc.user_id}; max-age=600`
            //console.log(abc)
            if(abc.role === "Admin"){
              alert("Hello admin")          
            }
            else if(abc.role === "User"){
              window.location="http://localhost:8080";
            }
          })
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
};
</script>

<style>
@import url("../assets/css/argon.css");
 #loginForm{
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
} 
</style>