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
        <div class="text-center">
          <h1>Đội chăm sóc khách hàng WeTech</h1>
        </div>
        <div>
          <form role="form">
            
          </form>
        </div>
      </div>
  </div>
</template>

<script>
export default {

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
</style>