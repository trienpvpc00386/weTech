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
            <a href="javascript:void(0)">Liên Hệ&emsp;
            </a> 
        </div>

      <div class="container">
        <div class="text-center mt-5">
          <h1>Đội chăm sóc khách hàng WeTech</h1>
          <h5>Chúng tôi muốn lắng nghe câu hỏi và ý kiến đóng góp từ bạn. Hãy phản hồi cho WeTech biết vấn đề của bạn nhé! Chúng tôi sẽ liên hệ lại bạn sớm nhất có thể.</h5>
        </div> <hr>
        <div class="col-sm-6 mt-4" id="contac-form">
          <form role="form">
            <div class="form-group">
              <label>Bạn thắc mắc về vấn đề nào?</label>
              <select class="form-control" v-model="txt_contact.title">
                <option value="Giao hàng - nhận hàng">Giao hàng - nhận hàng</option>
                <option value="Góp ý về App/ web">Góp ý về App/ web</option>
                <option value="Câu hỏi chung">Câu hỏi chung</option>
                <option value="Tài khoản và Bảo mật">Tài khoản và Bảo mật</option>
                <option value="Câu hỏi chung">Câu hỏi chung</option>
                <option value="Thanh toán">Thanh toán</option>
                <option value="Trả hàng - Hoàn tiền">Trả hàng & Hoàn tiền</option>
                <option value="Sản phẩm - các chỉ số hiệu quả bán hàng">Sản phẩm & các chỉ số hiệu quả bán hàng</option>
                <option value="Mã giảm giá - Chương trình khuyến mãi">Mã giảm giá & Chương trình khuyến mãi</option>
              </select>
            </div>
            <label>Họ và Tên:</label>
            <input type="text" v-model="txt_contact.name" class="form-control">
            <label>Email:</label>
            <input type="email" v-model="txt_contact.email" class="form-control">
            <div class="form-group">
              <label>Nội dung phản hồi:</label>
              <textarea class="form-control" rows="3" v-model="txt_contact.content"></textarea>
            </div>
            <input type="button" class="btn btn-warning btn-block" @click="addContact" value="Gửi">
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
      txt_contact:{
        name   : '',
        email  : '',
        title  : '',
        content: ''
      }
    }
  },
  methods:{
    addContact(){
      let re = this
      axios.post('http://127.0.0.1:8000/api/add-contact', this.txt_contact)
      .then(function (response) {
        if(response.data.success){
          alert(response.data.success)
        }
        else if(response.data.error){
          alert(response.data.success)
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
  #contac-form{
    margin: auto;
  }
</style>