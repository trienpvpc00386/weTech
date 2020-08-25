<template>
    <div class="mt-5">

        <!-- News Letter -->

        <div class="newsletter">
            <div class="row">
                <img class="" src="../assets/newsletter.png" width="160px" height="100px">
                <div class="newsletter-text ml-3">
                    <h5>Đăng ký nhận bản tin WeTech</h5>
                    <p>Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</p>
                </div>
                <form class="form-inline ml-5" action="/action_page.php">
                    <input class="form-control mr-sm-2" type="text" size="40px" placeholder="Địa chỉ Email của bạn">
                    <button class="btn btn-success" type="submit">Đăng ký</button>
                </form>
            </div>
        </div>

        <!-- Footer -->

        <div class="footer mt-5">
            <div class="row footer-content mb-5">
                <div class="col-sm-3" id="customer-support-footer">
                    <!-- Customer Support -->
                    <h6>HỖ TRỢ KHÁCH HÀNG</h6> <br>
                    <span><b>Hotline chăm sóc khách hàng: 0123 - 4567</b></span>
                    <p>(1000đ/phút , 8-21h kể cả T7, CN)</p>
                    <a href="#" class="nav">Các câu hỏi thường gặp</a>
                    <a href="#" class="nav">Gửi yêu cầu hỗ trợ</a>
                    <a href="#" class="nav">Hướng dẫn đặt hàng</a>
                    <a href="#" class="nav">Phương thức vận chuyển</a>
                    <a href="#" class="nav">Các câu hỏi thường gặp</a>
                    <a href="#" class="nav">Chính sách đổi trả</a>
                    <a href="#" class="nav">Hướng dẫn mua trả góp</a>
                    <a href="#" class="nav">Chính sách nhập khẩu</a>
                    <a href="#" class="nav">Các câu hỏi thường gặp</a>
                    <a href="#" class="nav">Hỗ trợ khách hàng: hotro@wetech.com</a>
                    <a href="#" class="nav"><a href="#" class="">Báo lỗi bảo mật: security@wetech.com</a></a>
                </div>
                <div class="col-sm-3" id="wetech-footer">
                    <h6>VỀ WETECH</h6> 
                    <a href="#" class="nav mt-4">Giới thiệu WeTech</a>
                    <a href="#" class="nav">Tuyển dụng</a>
                    <a href="#" class="nav">Chính sách bảo mật thanh toán</a>
                    <a href="#" class="nav">Chính sách bảo mật thông tin cá nhân</a>
                    <a href="#" class="nav">Chính sách giải quyết khiếu nại</a>
                    <a href="#" class="nav">Điều khoản sử dụng</a>
                    <a href="#" class="nav">Giới thiệu WeTech Xu</a>
                    <a href="#" class="nav">Bán hàng doanh nghiệp</a>
                </div>
                <div class="col-sm-3" id="cooperate-footer">
                    <h6>HỢP TÁC VÀ LIÊN KẾT</h6>
                    <a href="#" class="nav mt-4">Quy chế hoạt động Sàn GDTMĐT</a>
                    <a href="#" class="nav">Bán hàng cùng WeTech</a>
                </div>
                <div class="col-sm-3" id="pay-footer">
                    <h6>PHƯƠNG THỨC THANH TOÁN</h6> 
                    <div class="row container-fluid mt-4">
                        <img class="col-sm-4" src="../assets/pay/visa.svg" width="100%">
                        <img class="col-sm-4" src="../assets/pay/mastercard.svg" width="100%">
                        <img class="col-sm-4" src="../assets/pay/jcb.svg" width="100%">
                        <img class="col-sm-4" src="../assets/pay/cash.svg" width="100%">
                        <img class="col-sm-4" src="../assets/pay/internet-banking.svg" width="100%">
                        <img class="col-sm-4" src="../assets/pay/installment.svg" width="100%">
                    </div>
                </div>
            </div> <hr>

            <div class="address-footer mt-5 mb-5">
                <p><b>Địa chỉ văn phòng:</b> 288 Nguyễn Văn Linh, An Khánh, Nink Kiều, Cần Thơ</p>
                <p>WeTech nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng</p>
            </div> <hr>
            <div class="design-footer">
                <p><b>© 2020 - Bản quyền của Công Ty Cổ Phần WeTech - WeTech.com</b></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.newsletter {
    background-color: rgb(248,248,248);
}
.newsletter .row{
    width: 87%;
    margin-left: 6.5%;
    margin-right: 6.5%;
}
.newsletter .newsletter-text{
    padding-top: 35px;
}
.footer{
    background-color: white;
}
.footer-content{
    width: 88%;
    margin-left: 6%;
    margin-right: 6%;
    padding-top: 40px;
    background-color: white;
}
#customer-support-footer span{
    color: red;
    font-size: 15px;
}
#customer-support-footer a{
    text-decoration: none;
    color: black;
    text-align: left;
    font-size: 14px;
    padding-top: 7px;
}
#wetech-footer a{
    text-decoration: none;
    color: black;
    text-align: left;
    font-size: 14px;
    padding-top: 7px;
}
#cooperate-footer a{
    text-decoration: none;
    color: black;
    text-align: left;
    font-size: 14px;
    padding-top: 7px;
}
#pay-footer img{
    padding-top: 10px;
    padding-left: 2px;
    padding-right: 2px;
}
.address-footer{
    width: 87%;
    margin-left: 6.5%;
    margin-right: 6.5%;
    font-size: 14px;
}
.design-footer{
    font-size: 13px;
    text-align: center;
}
</style>