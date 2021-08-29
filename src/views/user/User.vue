<template>
  <div class="user-box">
    <div class="bg">
      <div class="nav-bar">个人中心</div>
      <div class="user">
        <div class="user-info">
          <div class="user-tx">
            <img src="http://127.0.0.1:3000/public/img/goods/mi/redmik30s/swiper/swiper1.jpg"/>
          </div>
          <div class="user-name">
            我是admin
          </div>
        </div>
        <div class="common">
          <div>
            <div>收藏</div>
            <div class="common-value">0</div>
          </div>
          <div>
            <div>关注</div>
            <div class="common-value">0</div>
          </div>
          <div>
            <div>优惠券</div>
            <div class="common-value">0</div>
          </div>
        </div>
      </div>
    </div>

    <div class="order">
      <div class="order-title">
        <div>我的订单</div>
        <div class="order-title-other">
          <div class="order-title-row">
            <div>查看全部订单</div>
            <img src="@/assets/img/go.svg"/>
          </div>
        </div>
      </div>
      <div class="order-list">
        <div class="order-item">
          <img src="@/assets/img/order/dfk.svg" alt="">
          <div>代付款</div>
        </div>
        <div class="order-item">
          <img src="@/assets/img/order/dfh.svg" alt="">
          <div>代发货</div>
        </div>
        <div class="order-item">
          <img src="@/assets/img/order/dsh.svg" alt="">
          <div>代收货</div>
        </div>
      </div>
    </div>

    <div class="tool-list">
      <div class="tool-itme">
        <div class="tool-item-left">
          <img src="@/assets/img/order/dz.svg" alt="">
          <div class="tool-title">收获地址</div>
        </div>
        <div>
          <img src="@/assets/img/go.svg"/>
        </div>
      </div>
      <div class="tool-itme">
        <div class="tool-item-left">
          <img src="@/assets/img/order/kf.svg" alt="">
          <div class="tool-title">客服</div>
        </div>
        <div>
          <img src="@/assets/img/go.svg"/>
        </div>
      </div>
      <div class="tool-itme">
        <div class="tool-item-left">
          <img src="@/assets/img/order/sz.svg" alt="">
          <div class="tool-title">设置</div>
        </div>
        <div>
          <img src="@/assets/img/go.svg"/>
        </div>
      </div>
    </div>

    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/mainTabBar/MainTabBar'

export default {
  name: 'User',
  components: {
    MainTabBar
  }
}
</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  color: #fff;
}
.bg {
  position: relative;
  width: 100%;
  height: 160px;
  background-color: #ea68a2;
}
.user {
  position: absolute;
  top: 60px;
  left: 10px;
  right: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}
.user-info {
  display: flex;
  align-items: center;
  padding: 10px;
}
.user-tx {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  /* border: 1px solid red; */
}
.user-info img {
  width: 100%;
  height: 100%;
}
.user-name {
  margin-left: 8px;
  font-size: 18px;
  font-weight: bold;
}
.common {
  padding: 10px;
  display: flex;
  font-size: 14px;
}
.common > div {
  flex: 1;
  text-align: center;
}
.common-value {
  margin-top: 4px;
  color: gray;
}
.order {
  margin-top: 60px;
  padding: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.order-title {
  display: flex;
  justify-content: space-between;
}
.order-title-row {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: gray;
}
.order-title-row img {
  width: 20px;
  height: 20px;
}
.order-list {
  margin-top: 10px;
  display: flex;
  text-align: center;
  font-size: 14px;
}
.order-item {
  flex: 1;
}
.order-item img {
  width: 30px;
  height: 30px;
}
.tool-list {
  margin-top: 10px;
  background-color: #fff;
}
.tool-itme {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 10px;
  font-size: 14px;
  border-bottom: 1px solid rgba(230, 226, 226, .5);
}
.tool-itme img {
  width: 20px;
  height: 20px;
}
.tool-item-left {
  display: flex;
  align-items: center;
}
.tool-title {
  margin-left: 10px;
}
</style>