<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <nav class="navbar navbar-expand-lg navbar-light" id="header-top">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto" id="header-top-ul">
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

      <nav class="navbar navbar-expand-lg navbar-dark" id="header">
        <a class="navbar-brand" href="#"><img src="../assets/logo.png" width="165px"></a>
        <button class="navbar-toggler menu-reponsive" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto" id="header-ul">
            <form class="form-inline my-2 my-lg-0">
              <div class="input-group mb-3">
                <input type="text" class="form-control" size="30%" placeholder="Tên sản phẩm, loại sản phẩm">
                <div class="input-group-append">
                  <button class="btn search-menu" type="submit"><i class="fa fa-search"></i> Tìm</button>
                </div>
              </div>
            </form>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="	fa fa-heart" style="color: red"></i> Yêu thích</a>
            </li>
            <li class="nav-item ml-2">
              <div class="dropdown">
                <a class="nav-link" href="#" role="button" id="login-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user-circle-o"></i> Tài khoản</a>
                  <div class="dropdown-menu row" aria-labelledby="login-menu">
                      <li><a class="dropdown-item" href=""><button class="btn btn-warning btn-block">Đăng Nhập</button></a></li>
                      <li><a class="dropdown-item" href=""><button class="btn btn-warning btn-block">Tạo Tài Khoản</button></a></li>
                  </div>
              </div>
            </li>
            <li class="nav-item ml-2">
              <div class="dropdown">
                <a class="btn btn-outline-warning" href="#" role="button" id="products-viewed-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-bell" style="color: #FF8000"></i> Thông báo <span class="badge badge-warning">3</span>
                </a>
                <div class="dropdown-menu row" aria-labelledby="products-viewed-menu">
                    <li><a class="dropdown-item" href="">Thông báo 1</a></li>
                    <li><a class="dropdown-item" href="">Thông báo 1</a></li>
                    <li><a class="dropdown-item" href="">Thông báo 1</a></li>
                    <li><a class="dropdown-item" href="">Thông báo 1</a></li>
                </div>
              </div>
            </li>
            <li class="nav-item ml-3">
              <button type="button" class="btn btn-outline-success">
                <i class="fa fa-cart-plus"></i> Giỏ hàng <span class="badge badge-warning">3</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-dark" id="menu">
        <a class="navbar-brand" href="#"><i class="fa fa-reorder"></i> DANH MỤC SẢN PHẨM</a>

        <div class="collapse navbar-collapse ml-5" id="navbarText">
          <ul class="navbar-nav mr-auto" id="menu-ul">
            <li class="nav-item active  ml-4">
              <a class="btn btn-light" href="#"><i class="fa fa-map-marker" style="color: red"></i> Bạn muốn giao hàng tới đâu?</a>
            </li>
            <li class="nav-item active">     
              <div class="dropdown">
                <a class="btn btn-light dropdown-toggle" href="#" role="button" id="products-viewed-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sản phẩm bạn đã xem
                </a>
                <div class="dropdown-menu row" aria-labelledby="products-viewed-menu">
                    <div class="card">
                      <div class="card-body">
                        <img src="../assets/sp1.jpg" width="100%">
                        <p>Nước Hoa</p>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <img src="../assets/sp1.jpg" width="100%">
                        <p>Nước Hoa</p>
                      </div>
                    </div>
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
    background-color: #339966;
  }
  #header-top-ul li a{
    padding-top: -40px;
    padding-bottom: -40px;
    font-size: 90%;
    margin: 4px;
    color: white;
  }
  #header-top>div>ul{
    margin-left: 20%;
  }
  #header-top-ul li a i{
    color: rgb(238, 255, 0);
  }
  #header{
    color: black;
    background-color: white;
    padding-top: 10px;
  }
  #header>a{
    margin-left: 14%;
  }
  #header .menu-reponsive{
    color: rgb(0, 204, 153);
    background-color: rgb(51, 153, 102);
  }
  #header-ul>li>a{
    margin-left: 6px;
  }
  #header-ul li a{
    color: black;
  }
  #header-ul li a i{
    color: rgb(51, 153, 102);
  }
  #menu{
    background-color: #339966;
  }
  #menu>a{
    margin-left: 7%;
    font-size: 90%;
  }
  #menu-ul li a{
    font-size: 90%;
    margin: 6px;
  }
  .search-menu{
    background-color: rgb(51, 153, 102);
    color: white;
    border-radius: 6%; 
  }
</style>
