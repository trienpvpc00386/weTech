<template>
  <div>
    <!-- Sidenav -->
    <nav
      class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white"
      id="sidenav-main"
    >
      <div class="scrollbar-inner">
        <!-- Brand -->
        <div class="sidenav-header align-items-center">
          <a class="navbar-brand" href="javascript:void(0)">
            <img src="../../assets/img/brand/blue.png" class="navbar-brand-img" alt="..." />
          </a>
        </div>
        <div class="navbar-inner">
          <!-- Collapse -->
          <div class="collapse navbar-collapse" id="sidenav-collapse-main">
            <!-- Nav items -->
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" href>
                  <i class="ni ni-tv-2 text-primary"></i>
                  <span class="nav-link-text">Dashboard</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" data-target="#ship">
                  <i class="ni ni-delivery-fast text-orange"></i>
                  <span class="nav-link-text">Vận chuyển</span>
                </a>
                <div id="ship" class="collapse">
                  <div class="container-fluid">
                    <a class="nav-link" href>
                      <span class="nav-link-text">Quản lý vận chuyển</span>
                    </a>
                    <a class="nav-link" href>
                      <span class="nav-link-text">Giao hàng loạt</span>
                    </a>
                    <a class="nav-link" href>
                      <span class="nav-link-text">Cài đặt vận chuyển</span>
                    </a>
                  </div>
                </div>
              </li>

              <li class="nav-item">
                <a class="nav-link" href>
                  <i class="ni ni-single-02 text-yellow"></i>
                  <span class="nav-link-text">Hồ sơ</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" data-target="#bill">
                  <i class="ni ni-collection text-primary"></i>
                  <span class="nav-link-text">Quản lý đơn hàng</span>
                </a>
                <div id="bill" class="collapse">
                  <div class="container-fluid">
                    <a class="nav-link" href>
                      <span class="nav-link-text">Tất cả</span>
                    </a>
                    <a class="nav-link" href>
                      <span class="nav-link-text">Đã hủy</span>
                    </a>
                    <a class="nav-link" href>
                      <span class="nav-link-text">Trả hàng / Hoàn tiền</span>
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" data-target="#products">
                  <i class="ni ni-bag-17 text-success"></i>
                  <span class="nav-link-text">Sản phẩm</span>
                </a>
                <div id="products" class="collapse">
                  <div class="container-fluid">
                    <a class="nav-link" href>
                      <span class="nav-link-text">Danh sách sản phẩm</span>
                    </a>
                    <a class="nav-link" href>
                      <span class="nav-link-text">Thêm sản phẩm</span>
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" data-target="#category">
                  <i class="ni ni-bullet-list-67 text-danger"></i>
                  <span class="nav-link-text">Danh mục sản phẩm</span>
                </a>
                <div id="category" class="collapse">
                  <div class="container-fluid">
                    <a class="nav-link" href>
                      <span class="nav-link-text">Danh sách danh mục</span>
                    </a>
                    <a class="nav-link" href>
                      <span class="nav-link-text">Thêm danh mục</span>
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" data-target="#brand">
                  <i class="ni ni-bold text-nowrap"></i>
                  <span class="nav-link-text">Thương hiệu</span>
                </a>
                <div id="brand" class="collapse">
                  <div class="container-fluid">
                    <a class="nav-link" href>
                      <span class="nav-link-text">Danh sách thương hiệu</span>
                    </a>
                    <a class="nav-link" href>
                      <span class="nav-link-text">Thêm danh thương hiệu</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <!-- Divider -->
            <hr class="my-3" />
            <!-- Heading -->
            <h6 class="navbar-heading p-0 text-muted">
              <span class="docs-normal">Gian hàng</span>
            </h6>
            <!-- Navigation -->
            <ul class="navbar-nav mb-md-3">
              <li class="nav-item">
                <a class="nav-link" href target="_blank">
                  <i class="ni ni-tv-2 text-success"></i>
                  <span class="nav-link-text">Quản lý Banner</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href target="_blank">
                  <i class="ni ni-sound-wave text-danger"></i>
                  <span class="nav-link-text">Thống kê đơn hàng</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href target="_blank">
                  <i class="ni ni-ui-04"></i>
                  <span class="nav-link-text">Components</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href target="_blank">
                  <i class="ni ni-chart-pie-35"></i>
                  <span class="nav-link-text">Plugins</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Dashboard from './Dashboard'
export default {
  components:{
    Dashboard
  }
};
</script>

<style>
@import url("../../assets/css/argon.css");
</style>