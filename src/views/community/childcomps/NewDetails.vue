<template>
  <div class="details">
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="@/assets/img/details/back.svg"/>
        </div>
      </template>
    </nav-bar>

    <div class="title">还你自然好气色 超S自拍旗舰S10 Pro次体验</div>
    <div class="user">
      <div class="user-tx">
        <img src="http://127.0.0.1:3000/public/img/goods/mi/redmik30s/swiper/swiper1.jpg"/>
      </div>
      <div class="user-info">
        <div class="user-name">打死西门庆</div>
        <div class="date">2021-07-22 22:09</div>
      </div>
    </div>
    <div class="content">
      我是内容红红火火恍恍惚惚哈哈哈哈哈红红火火恍恍惚惚或或，
      我是内容红红火火恍恍惚惚哈哈哈哈哈红红火火恍恍惚惚或或
      我是内容红红火火恍恍惚惚哈哈哈哈哈红红火火恍恍惚惚或或,
      小米手机啊中心抵扣积分的开发京东客服发抵扣积分的京东方
    </div>

    <div class="fixed-box">
      <div class="fixed-write" @click="showMask">
        <img src="@/assets/img/pingl.svg" />
        写下你的想法...
      </div>
      <div class="fixed-item">
        <img src="@/assets/img/pingl.svg" />
        137
      </div>
      <div class="fixed-item">
        <img src="@/assets/img/dianz.svg" />
        227
      </div>
    </div>

    <!-- 遮罩 -->
    <div class="mask" v-if="isMask" @click="showMask"></div>

    <!-- 评论弹窗 -->
    <div class="popup"  v-if="isMask">
      <div class="popup-title">评论</div>
      <div class="inp">
        <textarea placeholder="请输入内容"></textarea>
      </div>
      <div class="popup-bnt">
        <span>发表</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'NewDetails',
  data() {
    return {
      isMask: false
    }
  },
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.back()
    },
    // 显示/关闭遮罩
    showMask() {
      this.isMask = !this.isMask
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 22px;
  padding: 10px;
  margin-top: 10px;
  color: black;
}
/* .details {
  padding: 10px;
} */
.user {
  display: flex;
  font-size: 14px;
  align-items: center;
  padding: 0 10px;
  margin: 10px 0;
}
.user-tx {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}
.info-tx img {
  width: 100%;
  height: 100%;
}
.user-name {
  font-size: 16px;
  color: black;
}
.content {
  padding: 0 10px;
  letter-spacing: 4px;
  line-height: 24px;
}
.content img {
  width: 100%;
}
.back {
  /*text-align: center;*/
  height: 44px;
  display: flex;
  align-items: center;
  }
  .left img{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 auto;
  }
.fixed-box {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 6px;
  box-shadow: 0 1px 2px rgba(194, 192, 192);
}
.fixed-write {
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fixed-item {
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fixed-box img {
  width: 20px;
  height: 20px;
  margin-right: 2px;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, .6);
}
.popup {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
  z-index: 99;
  background-color: #fff;
}
.popup textarea {
  width: 100%;
  margin: 0 10px;
  padding: 10px;
  height: 80px;
  font-size: 14px;
  background-color: rgba(243, 236, 236, 0.4);
  outline: none;
  border: none;
}
.inp {
  display: flex;
  justify-content: center;
}
.popup-title {
  text-align: center;
  padding: 10px 0;
}
.popup-bnt {
  width: 100%;
  height: 40px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.popup-bnt span {
  display: inline-block;
  padding: 4px 20px;
  border-radius: 999rem;
  font-size: 14px;
  background-color: #ea68a2;
  color: #fff;
}
</style>