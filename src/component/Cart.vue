<template>
    <div>
        <Header/>
        <div class="link-menu">
          <a href="/">Trang chủ&emsp;
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
          </svg>&emsp;
          </a> 
          Cart
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '../layout/Header'   
import Footer from '../layout/Footer'
export default {
    components:{
        Header,
        Footer
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
</style>