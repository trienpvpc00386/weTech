<template>
  <div>
      <Header/>
        <div class="link-menu">
          <a href="products">Trang chủ&emsp;
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
          </svg>&emsp;
          </a> 
          Sản phẩm
        </div><br>
        <div class="row">
            <div class="col-sm-3 category">
                <p><strong>DANH MỤC SẢN PHẨM</strong></p>
                <a href="#">Sản phẩm mới</a><br>
                <a href="#">Nước hoa cao cấp</a><br>
                <a href="#">Thời trang nữ</a><br>
                <a href="#">Thời trang nam</a><br>
                <a href="#">Văn phòng phẩm</a><br>
                <a href="#">Giày nam</a><br>
                <a href="#">Giày nữ</a><br>
                <a href="#">Balo</a><br>

                <div class="dropdown-divider"></div>

                <p><strong>THƯƠNG HIỆU</strong></p>
                <div class="input-group mb-2">
                    <input type="text" class="form-control" placeholder="Tìm kiếm">
                    <div class="input-group-append">
                        <button class="btn btn-info" type="submit">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg>    
                        </button>  
                    </div>
                </div>
                <div class="form-check card-a">
                    <label class="form-check-label" for="brand1">
                        <a><input type="checkbox" class="form-check-input" id="brand1" name="brand1" value="something">Bitis</a>
                    </label>
                </div>
                <div class="form-check card-a">
                    <label class="form-check-label" for="brand2">
                        <a><input type="checkbox" class="form-check-input" id="brand2" name="brand2" value="something">On Off</a>
                    </label>
                </div>
                <div class="form-check card-a">
                    <label class="form-check-label" for="brand3">
                        <a><input type="checkbox" class="form-check-input" id="brand3" name="brand3" value="something">Asala</a>
                    </label>
                </div>
                <div class="form-check card-a">
                    <label class="form-check-label" for="brand4">
                        <a><input type="checkbox" class="form-check-input" id="brand4" name="brand4" value="something">Uniqlo</a>
                    </label>
                </div>
                <div class="form-check card-a">
                    <label class="form-check-label" for="brand5">
                        <a><input type="checkbox" class="form-check-input" id="brand5" name="brand5" value="something">Vento</a>
                    </label>
                </div>

                <div class="dropdown-divider"></div>

                <p><strong>GIÁ SẢN PHẨM</strong></p>
                <div class="form-check card-a">
                    <label class="form-check-label" for="price1">
                        <a><input type="radio" class="form-check-input" id="price1" name="price1" value="price1">Giá dưới 100.000đ</a>
                    </label>
                </div>
                <div class="form-check card-a">
                    <label class="form-check-label" for="price2">
                        <a><input type="radio" class="form-check-input" id="price2" name="price2" value="price2">100.000đ - 200.000đ</a>
                    </label>
                </div>
                <div class="form-check card-a">
                    <label class="form-check-label" for="price3">
                        <a><input type="radio" class="form-check-input" id="price3" name="price3" value="price3">200.000đ - 300.000đ</a>
                    </label>
                </div>
                <div class="form-check card-a">
                    <label class="form-check-label" for="price4">
                        <a><input type="radio" class="form-check-input" id="price4" name="price4" value="price4">300.000đ - 500.000đ</a>
                    </label>
                </div>
                <div class="form-check card-a">
                    <label class="form-check-label" for="price5">
                        <a><input type="radio" class="form-check-input" id="price5" name="price5" value="price5">500.000đ - 1.000.000đ</a>
                    </label>
                </div>
                <div class="form-check card-a">
                    <label class="form-check-label" for="price7">
                        <a><input type="radio" class="form-check-input" id="price7" name="price6" value="price6">Giá trên 1.000.000đ</a>
                    </label>
                </div>
                
                <div class="dropdown-divider"></div>

                <p><strong>LOẠI</strong></p>
                <div class="input-group mb-2">
                    <input type="text" class="form-control" placeholder="Tìm kiếm">
                    <div class="input-group-append">
                        <button class="btn btn-info" type="submit">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg>    
                        </button>  
                    </div>
                </div>
                <div class="form-check card-a">
                    <label class="form-check-label" for="species1">
                        <a><input type="checkbox" class="form-check-input" id="species1" name="species1" value="something">Bitis</a>
                    </label>
                </div>
                <div class="form-check card-a">
                    <label class="form-check-label" for="species2">
                        <a><input type="checkbox" class="form-check-input" id="species2" name="species2" value="something">On Off</a>
                    </label>
                </div>
                <div class="form-check card-a">
                    <label class="form-check-label" for="species3">
                        <a><input type="checkbox" class="form-check-input" id="species3" name="species3" value="something">Asala</a>
                    </label>
                </div>
                <div class="form-check card-a">
                    <label class="form-check-label" for="species4">
                        <a><input type="checkbox" class="form-check-input" id="species4" name="species4" value="something">Uniqlo</a>
                    </label>
                </div>
                <div class="form-check card-a">
                    <label class="form-check-label" for="species5">
                        <a><input type="checkbox" class="form-check-input" id="species5" name="species5" value="something">Vento</a>
                    </label>
                </div>
            </div>
            <div class="col-sm-8 all-products">
                <div class="dropdown">
                    <strong>TẤT CẢ SẢN PHẨM</strong>&emsp;
                    <button type="button" class="btn-rate dropdown-toggle" data-toggle="dropdown" style="height: 35px; font-size: 15px;">
                        Xếp theo
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Tên A-Z</a>
                        <a class="dropdown-item" href="#">Tên Z-A</a>
                        <a class="dropdown-item" href="#">Giá Tăng Dần</a>
                        <a class="dropdown-item" href="#">Giá Giảm Dần</a>
                    </div><hr>
                </div>
               
                <div class="row">
                    <div class="col-sm-3">
                        <div class="card">
                            <img src="../assets/img/nuoc-hoa.jpg" alt="Denim Jeans" style="width:100%">
                            <h5>Nước hoa ABC</h5>
                            <p class="price">$19.99 - $10</p>
                            <a href="productdetail"><button>Xem chi tiết</button></a>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <img src="../assets/img/nuoc-hoa.jpg" alt="Denim Jeans" style="width:100%">
                            <h5>Nước hoa ABC</h5>
                            <p class="price">$19.99</p>
                            <a href="productdetail"><button>Xem chi tiết</button></a>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <img src="../assets/img/nuoc-hoa.jpg" alt="Denim Jeans" style="width:100%">
                            <h5>Nước hoa ABC</h5>
                            <p class="price">$19.99</p>
                            <a href="productdetail"><button>Xem chi tiết</button></a>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <img src="../assets/img/nuoc-hoa.jpg" alt="Denim Jeans" style="width:100%">
                            <h5>Nước hoa ABC</h5>
                            <p class="price">$19.99</p>
                            <a href="productdetail"><button>Xem chi tiết</button></a>
                        </div>
                    </div>
                </div><hr>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="card">
                            <img src="../assets/img/nuoc-hoa.jpg" alt="Denim Jeans" style="width:100%">
                            <h5>Nước hoa ABC</h5>
                            <p class="price">$19.99</p>
                            <a href="productdetail"><button>Xem chi tiết</button></a>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <img src="../assets/img/nuoc-hoa.jpg" alt="Denim Jeans" style="width:100%">
                            <h5>Nước hoa ABC</h5>
                            <p class="price">$19.99</p>
                            <a href="productdetail"><button>Xem chi tiết</button></a>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <img src="../assets/img/nuoc-hoa.jpg" alt="Denim Jeans" style="width:100%">
                            <h5>Nước hoa ABC</h5>
                            <p class="price">$19.99</p>
                            <a href="productdetail"><button>Xem chi tiết</button></a>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <img src="../assets/img/nuoc-hoa.jpg" alt="Denim Jeans" style="width:100%">
                            <h5>Nước hoa ABC</h5>
                            <p class="price">$19.99</p>
                            <a href="productdetail"><button>Xem chi tiết</button></a>
                        </div>
                    </div>
                </div><hr>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="card">
                            <img src="../assets/img/nuoc-hoa.jpg" alt="Denim Jeans" style="width:100%">
                            <h5>Nước hoa ABC</h5>
                            <p class="price">$19.99</p>
                            <a href="productdetail"><button>Xem chi tiết</button></a>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <img src="../assets/img/nuoc-hoa.jpg" alt="Denim Jeans" style="width:100%">
                            <h5>Nước hoa ABC</h5>
                            <p class="price">$19.99</p>
                            <a href="productdetail"><button>Xem chi tiết</button></a>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <img src="../assets/img/nuoc-hoa.jpg" alt="Denim Jeans" style="width:100%">
                            <h5>Nước hoa ABC</h5>
                            <p class="price">$19.99</p>
                            <a href="productdetail"><button>Xem chi tiết</button></a>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <img src="../assets/img/nuoc-hoa.jpg" alt="Denim Jeans" style="width:100%">
                            <h5>Nước hoa ABC</h5>
                            <p class="price">$19.99</p>
                            <a href="productdetail"><button>Xem chi tiết</button></a>
                        </div>
                    </div>
                </div><br><hr>
                <ul class="pagination justify-content-center">
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Trước</a></li>
                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">4</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">...</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Sau</a></li>
                </ul><hr>
            </div>
        </div>
  </div>
</template>
<script>
import Header from '../layout/Header'
import Footer from '../layout/Footer'
export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style>
    .card-a{
        color: gray;
    }
    /*link menu*/
    .link-menu {
        background-color: #f3f3f3;
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

    /* Search */
    .search {
        height: 30px;
        width: 160px;
        border: 1px solid gray;
        border-radius: 5px;
    }
    .button-search {
        margin-left: -15%;
        border: none;
        height: 100%;
        width: 300%;
        background-color: #004400;
        color: white;
        border-radius: 5px;
    }

    /*Category*/
    .category {
        text-align: left;
        padding-left: 10%;
        font-size: 15px;
    }
    .category a{
        color: gray;
        text-decoration: none;
        font-size: 16px;
        font-family: "Times New Roman", Times, serif;
    }
    .category a:hover{
        color: #009ACD;
        text-decoration: none;
        font-family: "Times New Roman", Times, serif;
    }

    /*All Products*/
    .all-products{
        text-align: left;
        padding-left: 2%;
        padding-right: 5%;
        font-size: 15px;
    }
    .btn-rate {
        border: none;
        background-color: white;
        color: black;
        font-weight: bold;
    }
    .btn-rate:hover {
        background-color: rgb(220, 252, 206);
        color: rgb(14, 122, 4);
        font-weight: bold;
    }
    .search-brand{
        width: 70%;
        border-radius: 5px ;
    }
    .card {
        border: none;
        max-width: 300px;
        margin: auto;
        text-align: center;
        font-family: arial;
    }
    .card:hover {
        width: 97%;
        height: 97%;
        box-shadow: 0px 5px 4px 5px #f5f5f5;
    }
    
    .card button {
        border: none;
        outline: 0;
        padding: 12px;
        color: white;
        background-color: #d66b07;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 16px;
        font-weight: bold;
    }

    .card button:hover {
        background-color: #0a960a;
        font-size: 17px;
        opacity: 0.6;
    }
    /*Sort*/
    .sort{
        background-color: #F5F5F5;
        text-align: left;
        padding-left: 1%;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 14px;
    }

    /* price */
    .price {
        color: #CD0000;
        font-size: 16px;
        font-weight: bold;
    }
    .form-check:hover{
        color: #4682B4;
    }

    /* Slide Show */
    #cssSlider {
        margin-left: 6%;
        width: 86%;
        height: 10%;
        overflow: hidden;
    }

    #sliderImages {
        width : 4000px;
        height: 300px;
        overflow: hidden;
        
        /* animation duration: 16s : 5x ~3s display image + 5x ~0.2s slide */
        animation: slide 20s infinite;
        -moz-animation: slide 20s infinite;
        -webkit-animation: slide 20s infinite;
        -o-animation: slide 20s infinite;
    }

    #sliderImages img {
        float: left;
    }

    @keyframes slide{
        0%{margin-left: 0px;}
        17%{margin-left: 0px;}
        20%{margin-left: -800px;}
        37%{margin-left: -800px;}
        40%{margin-left: -1600px;}
        57%{margin-left: -1600px;}
        60%{margin-left: -2400px;}
        77%{margin-left: -2400px;}
        80%{margin-left: -3200px;}
        97%{margin-left: -3200px;}
        100%{margin-left: 0px;}
    }

    @-moz-keyframes slide{
        0%{margin-left: 0px;}
        17%{margin-left: 0px;}
        20%{margin-left: -800px;}
        37%{margin-left: -800px;}
        40%{margin-left: -1600px;}
        57%{margin-left: -1600px;}
        60%{margin-left: -2400px;}
        77%{margin-left: -2400px;}
        80%{margin-left: -3200px;}
        100%{margin-left: -3200px;}
    }

    @-webkit-keyframes slide{
        0%{margin-left: 0px;}
        17%{margin-left: 0px;}
        20%{margin-left: -800px;}
        37%{margin-left: -800px;}
        40%{margin-left: -1600px;}
        57%{margin-left: -1600px;}
        60%{margin-left: -2400px;}
        77%{margin-left: -2400px;}
        80%{margin-left: -3200px;}
        100%{margin-left: -3200px;}
    }

    @-o-keyframes slide{
        0%{margin-left: 0px;}
        17%{margin-left: 0px;}
        20%{margin-left: -800px;}
        37%{margin-left: -800px;}
        40%{margin-left: -1600px;}
        57%{margin-left: -1600px;}
        60%{margin-left: -2400px;}
        77%{margin-left: -2400px;}
        80%{margin-left: -3200px;}
        100%{margin-left: -3200px;}
    }
</style>