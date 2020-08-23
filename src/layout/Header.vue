<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <nav class="navbar navbar-expand-lg navbar-light" id="header-top">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"><i class="fa fa-pencil-square-o"></i> Ticketbox</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#"><i class="fa fa-support"></i> Trợ lý WeTech</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#"><i class="fa fa-suitcase"></i> Ưu đãi đối tác</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#"><i class="fa fa-bolt"></i> Khuyến mãi hot</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#"><i class="fa fa-plane"></i> Chọn cửa hàng</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#"><i class="fa fa-globe"></i> Hàng quốc tế</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#"><i class="fa fa-money"></i> Bán cùng WeTech</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-dark mt-1" id="header">
        <a class="navbar-brand" href="#"><img src="../assets/logo.png" width="165px"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <form class="form-inline my-2 my-lg-0">
              <div class="input-group mb-3">
                <input type="text" class="form-control" size="38px" placeholder="Tên sản phẩm, loại sản phẩm">
                <div class="input-group-append">
                  <button class="btn search" type="submit"><i class="fa fa-search"></i> Tìm</button>
                </div>
              </div>
            </form>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="	fa fa-heart" style="color: red"></i> Yêu thích</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa fa-bell" style="color: #FF8000"></i> Thông báo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa fa-user-circle-o"></i> Tài khoản</a>
            </li>
            <li class="nav-item ml-3">
              <button type="button" class="btn btn-outline-success">
                <i class="fa fa-cart-plus"></i> Giỏ hàng <span class="badge badge-warning">4</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-dark" id="menu">
        <a class="navbar-brand" href="#"><i class="fa fa-reorder"></i> DANH MỤC SẢN PHẨM</a>

        <div class="collapse navbar-collapse ml-5" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active  ml-4">
              <a class="btn btn-light" href="#"><i class="fa fa-map-marker" style="color: red"></i> Bạn muốn giao hàng tới đâu?</a>
            </li>
            <li class="nav-item active">     
              <div class="dropdown">
                <a class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sản phẩm bạn đã xem
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#">Điện thoại</a>
                  <a class="dropdown-item" href="#">Laptop</a>
                  <a class="dropdown-item" href="#">Nước hoa</a>
                </div>
              </div>
            </li>

            <li class="nav-item active">
              <a class="btn btn-light" href="#"><i class="fa fa-diamond" style="color: blue"></i> Sản phẩm chính hãng</a>
            </li>
            <li class="nav-item active">
              <a class="btn btn-light" href="#"><i class="fa fa-truck" style="color: black"></i> Giao nhanh miễn phí</a>
            </li>
            <li class="nav-item active">
              <a class="btn btn-light" href="#"><i class="fa fa-map-marker" style="color: red"></i> Theo dõi đơn hàng</a>
            </li>
          </ul>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style>
  #header-top{
    background-color: rgb(51, 153, 102);
  }
  #header-top div ul li a{
    padding-top: -40px;
    padding-bottom: -40px;
  }
  #header-top>div>ul{
    margin-left: 385px;
  }
  #header-top div ul li a{
    font-size: 14px;
    margin: 4px;
    color: white;
  }
  #header-top div ul li a i{
    color: rgb(238, 255, 0);
  }
  #header{
    color: black;
    background-color: white;
  }
    #header>a{
    margin-left: 14%;
  }
  #header>button{
    color: rgb(0, 204, 153);
    background-color: rgb(51, 153, 102);
  }
  #header>div>ul>li>a{
    margin-left: 10px;
  }
  #header div ul li a{
    color: black;
  }
  #header div ul li a i{
    color: rgb(51, 153, 102);
  }
  #menu{
    background-color: rgb(51, 153, 102);
  }
  #menu>a{
    margin-left: 120px;
    font-size: 15px;
  }
  #menu div ul li a{
    font-size: 15px;
    margin: 6px;
  }
  .search{
    background-color: rgb(51, 153, 102);
    color: white;
    border-radius: 6%; 
  }
</style>
