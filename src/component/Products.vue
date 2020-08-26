<template>
  <div>
        <div class="link-menu">
          <a href="javascript:void(0)" @click="backHome" >Trang chủ&emsp;
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
                        <button class="btn btn-success" type="submit">
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
                        <button class="btn btn-success" type="submit">
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
                    <button type="button" class="btn-search dropdown-toggle" data-toggle="dropdown" style="height: 35px; font-size: 15px;">
                        Xếp theo
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Tên A-Z</a>
                        <a class="dropdown-item" href="#">Tên Z-A</a>
                        <a class="dropdown-item" href="#">Giá Tăng Dần</a>
                        <a class="dropdown-item" href="#">Giá Giảm Dần</a>
                    </div><hr>
                </div>

                <div class="featured-products mt-3">
                    <div class="row mt-4 featured-products-all">
                        <div class="col-sm-3 card">
                            <div class="card-body">
                                <button class="btn btn-outline-danger">-45%</button>
                                <a href="productdetail">
                                    <img src="../assets/sp2.jpg" width="100%">
                                <a href="Productdetail">Nước Hoa Nam DYNIK Mát Lạnh Biển Xanh-...</a>
                                </a>
                                <h6>297.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                                <div class="progress">
                                    <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 card">
                            <div class="card-body">
                                <button class="btn btn-outline-danger">-35%</button>
                                <img src="../assets/sp3.png" width="100%">
                                <a href="Productdetail">Nước Hoa Nam DYNIK Mát Lạnh Biển Xanh-...</a>
                                <h6>297.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                                <div class="progress">
                                    <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 card">
                            <div class="card-body">
                                <button class="btn btn-outline-danger">-55%</button>
                                <img src="../assets/sp4.jpg" width="100%">
                                <a href="Productdetail">Nước Hoa Nam DYNIK Mát Lạnh Biển Xanh-...</a>
                                <h6>297.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                                <div class="progress">
                                    <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 card">
                            <div class="card-body">
                                <button class="btn btn-outline-danger">-45%</button>
                                <img src="../assets/sp2.jpg" width="100%">
                                <a href="Productdetail">Nước Hoa Nam DYNIK Mát Lạnh Biển Xanh-...</a>
                                <h6>297.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                                <div class="progress">
                                    <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 card">
                            <div class="card-body">
                                <button class="btn btn-outline-danger">-55%</button>
                                <img src="../assets/sp4.jpg" width="100%">
                                <a href="Productdetail">Nước Hoa Nam DYNIK Mát Lạnh Biển Xanh-...</a>
                                <h6>297.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                                <div class="progress">
                                    <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 card">
                            <div class="card-body">
                                <button class="btn btn-outline-danger">-45%</button>
                                <img src="../assets/sp2.jpg" width="100%">
                                <a href="Productdetail">Nước Hoa Nam DYNIK Mát Lạnh Biển Xanh-...</a>
                                <h6>297.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                                <div class="progress">
                                    <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 card">
                            <div class="card-body">
                                <button class="btn btn-danger">-45%</button>
                                <img src="../assets/sp2.jpg" width="100%">
                                <a href="Productdetail">Nước Hoa Nam DYNIK Mát Lạnh Biển Xanh-...</a>
                                <h6>297.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                                <div class="progress">
                                    <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 card">
                            <div class="card-body">
                                <button class="btn btn-danger">-35%</button>
                                <img src="../assets/sp3.png" width="100%">
                                <a href="Productdetail">Nước Hoa Nam DYNIK Mát Lạnh Biển Xanh-...</a>
                                <h6>297.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                                <div class="progress">
                                    <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 card">
                            <div class="card-body">
                                <button class="btn btn-danger">-55%</button>
                                <img src="../assets/sp4.jpg" width="100%">
                                <a href="Productdetail">Nước Hoa Nam DYNIK Mát Lạnh Biển Xanh-...</a>
                                <h6>297.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                                <div class="progress">
                                    <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 card">
                            <div class="card-body">
                                <button class="btn btn-danger">-45%</button>
                                <img src="../assets/sp2.jpg" width="100%">
                                <a href="Productdetail">Nước Hoa Nam DYNIK Mát Lạnh Biển Xanh-...</a>
                                <h6>297.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                                <div class="progress">
                                    <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 card">
                            <div class="card-body">
                                <button class="btn btn-danger">-55%</button>
                                <img src="../assets/sp4.jpg" width="100%">
                                <a href="Productdetail">Nước Hoa Nam DYNIK Mát Lạnh Biển Xanh-...</a>
                                <h6>297.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                                <div class="progress">
                                    <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 card">
                            <div class="card-body">
                                <button class="btn btn-danger">-45%</button>
                                <img src="../assets/sp2.jpg" width="100%">
                                <a href="Productdetail">Nước Hoa Nam DYNIK Mát Lạnh Biển Xanh-...</a>
                                <h6>297.000<u>đ</u>  <strike> <i> 350.000<u>đ</u></i></strike></h6> 
                                <div class="progress">
                                    <div class="progress-bar bg-success" style="width:40%">Đã bán 10</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <br><hr>
                <ul class="pagination justify-content-center">
                    <li class="page-item"><a class="page-link text-dark" href="javascript:void(0);">Trước</a></li>
                    <li class="page-item"><a class="page-link text-dark" href="javascript:void(0);">1</a></li>
                    <li class="page-item"><a class="page-link text-dark" href="javascript:void(0);">2</a></li>
                    <li class="page-item"><a class="page-link text-dark" href="javascript:void(0);">3</a></li>
                    <li class="page-item"><a class="page-link text-dark" href="javascript:void(0);">4</a></li>
                    <li class="page-item"><a class="page-link text-dark" href="javascript:void(0);">...</a></li>
                    <li class="page-item"><a class="page-link text-dark" href="javascript:void(0);">Sau</a></li>
                </ul><hr>
            </div>
        </div>
  </div>
</template>
<script>

export default {
    methods:{
        backHome(){
            this.$router.push({name:"Home"})
        }
    }
}
</script>

<style>
    .card-a{
        color: gray;
    }
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

    /* Search */
    .btn-search {
        border: none;
        height: 100%;
        width: 10%;
        background-color: #ffffff;
        color: rgb(0, 0, 0);
        border-radius: 5px;
    }
    .btn-search:hover {
        background-color: #daffe0;
        color: #026112;
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

    .home{
    background-color: rgb(248,248,248);
    }
    .content-home{
        width: 87%;
        margin-left: 6.5%;
        margin-right: 6.5%;
    }
    #category {
        border-radius: 0;
        box-shadow: 0 0 5px rgb(51, 153, 102);
    }
    #category a{
        border: 0;
    }
    .featured-products{
        width: 87%;
        margin-left: 6.5%;
        margin-right: 6.5%;
    }
    .featured-products h4{
        color: rgb(255, 72, 0);
    }
    .featured-products h5{
        color: rgb(255, 30, 0);
    }
    .featured-products .card{
        border: 0;
        width: 100%;
    }
    .featured-products .featured-products-all{
        background-color: white;
    }
    .featured-products .card:hover{
        width: 110%;
        box-shadow: 0 4px 4px 4px rgb(236, 236, 236);
        background-color: rgb(255, 255, 255);
        margin-top: -1%;
    }
    .products-interested{
        width: 87%;
        margin-left: 6.5%;
        margin-right: 6.5%;
    }
    .card-body a {
        text-decoration: none;
        color: black;
    }
    .card-body a:hover {
        color: rgb(230, 138, 0);
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