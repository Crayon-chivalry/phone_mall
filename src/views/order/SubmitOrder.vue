<template>
  <div style="margin-bottom:60px">
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="@/assets/img/back-white.svg"/>
        </div>
      </template>
      <div slot="center">
        提交订单
      </div>
    </nav-bar>

    <div class="address">
      <div class="address-row" v-if="address.length > 0">
        <div class="address-info">
          <div class="info-base">
            <div>收货人: admin</div>
            <div>17185830205</div>
          </div>
          <div class="info-details">收获地址：广西壮族自治区南宁市xxxxx地区</div>
        </div>
        <div class="go-icon">
          <img src="@/assets/img/go-black.svg"/>
        </div>
      </div>
      <!-- 无地址 -->
      <div class="empty" v-else>
        <img src="@/assets/img/add.svg"/>
        您还没有收获地址~
      </div>
    </div>

    <div class="goods">
      <div class="goods-item" v-for="item in 3" :key="item">
        <div class="goods-img">
          <img src="http://127.0.0.1:3000/public/img/goods/mi/mi11/swiper/mi11-1.jpg"/>
        </div>
        <div class="goods-info">
          <div class="goods-name">小米11 5G 骁龙888 2K AMOLED四曲面柔性屏 1亿像素 55W有线闪充 50W无线闪充 8GB+128GB 蓝色 游戏手机 </div>
          <div class="goods-other">
            <div>￥3999</div>
            <div>x1</div>
          </div>
        </div>
      </div>
    </div>

    <div class="cell">
      <div class="cell-item">
        <div>红包</div>
        <div>
          暂无可用
          <img src="@/assets/img/go-black.svg"/>
        </div>
      </div>
      <div class="cell-item">
        <div>发票</div>
        <div>
          暂不支持
          <img src="@/assets/img/go-black.svg"/>
        </div>
      </div>
      <div class="cell-item">
        <div>配送方式</div>
        <div>
          快递 免邮
          <img src="@/assets/img/go-black.svg"/>
        </div>
      </div>
    </div>

    <div class="cell-price">
      <div class="cell-item">
        <div>商品金额</div>
        <div>￥3999</div>
      </div>
      <div class="cell-item">
        <div>运费</div>
        <div>￥0</div>
      </div>
    </div>

    <SubmitBar
      class="submit-bar"
      :total="total"
      :ischeck="false"
    />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import SubmitBar from "@/components/cart/SubmitBar";

export default {
  name: '',
  components: {
    NavBar,
    SubmitBar
  },
  data() {
    return {
      address: [],
      total: 0
    }
  },
  methods: {
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: #ea68a2;
  color: azure;
}

.back {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back img {
  width: 30px;
  height: 30px;
}

.address {
  height: 70px;
  padding: 10px 0 10px 10px;
  border-bottom: 1px solid rgba(224, 223, 223, 0.5);
  background-color: #fff;
}

.address-row {
  display: flex;
}

.address-info {
  flex: 1;
  padding-right: 8px;
}

.go-icon {
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.go-icon img {
  width: 20px;
  height: 20px;
}

.info-base {
  display: flex;
}

.info-base div:last-child {
  margin-left: 20px;
}

.info-details {
  margin-top: 10px;
  color: gray;
  font-size: 14px;
}

.empty {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty img {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}

.goods {
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
}

.goods-item {
  display: flex;
  padding: 8px;
  border-bottom: 1px solid rgba(224, 223, 223, 0.5);
}

.goods-img {
  width: 100px;
  height: 100px;
}

.goods-img img {
  width: 100%;
  height: 100%;
}

.goods-info {
  flex: 1;
  position: relative;
}

.goods-name {margin-top: 10px;
  font-size: 14px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.goods-other {
  width: 100%;
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.goods-other div:first-child {
  color: red;
}

.goods-other div:last-child {
  color: gray;
  margin-right: 8px;
}

.cell {
  margin-top: 10px;
  background-color: #fff;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
}

.cell-item {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 10px;
  border-bottom:1px solid rgba(224, 223, 223, 0.5);
}

.cell-item img {
  width: 15px;
  height: 15px;
  margin-left: 4px;
}

.cell-item div:last-child {
  display: flex;
  align-items: center;
}

.cell-price {
  margin-top: 10px;
  background-color: #fff;
}

.cell-price .cell-item {
  border: none;
  padding: 10px;
}

.submit-bar {
  position: fixed;
  bottom: 0;
  z-index: 9;
  background-color: #fff;
}
</style>