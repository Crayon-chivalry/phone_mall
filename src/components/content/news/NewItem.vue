<template>
  <div class="item" @click="toDetails">
    <div class="info">
      <div class="info-tx">
        <img
          src="http://127.0.0.1:3000/public/img/goods/mi/redmik30s/swiper/swiper1.jpg"
        />
      </div>
      <div class="info-col">
        <div class="info-name">打死西门庆</div>
        <div>vivo 30</div>
      </div>
    </div>
    <div class="content">
      <div class="title">还你自然好气色 超S自拍旗舰S10 Pro次体验</div>
      <div class="text">有没有这样一款手机，拥有不错的性能，时尚的外观。</div>
      <div class="cover">
        <img src="https://z3.ax1x.com/2021/07/25/W2ttwq.png" />
      </div>
      <div class="other">
        <div class="support">
          <div>
            <img src="@/assets/img/liull.svg" />
            <span>10002</span>
          </div>
          <div>
            <img src="@/assets/img/pingl.svg" />
            <span>126</span>
          </div>
          <div>
            <img src="@/assets/img/dianz.svg" />
            <span>342</span>
          </div>
        </div>
        <div class="date">2021-7-25</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewItem',
  methods: {
    toDetails() {
      this.$router.push('/newDetails')
    }
  }
};
</script>

<style scoped>
.item {
  margin-top: 20px;
}
.info {
  display: flex;
  font-size: 14px;
  align-items: center;
}
.info-tx {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}
.info-tx img {
  width: 100%;
  height: 100%;
}
.info-col {
  margin-left: 10px;
  color: gray;
}
.info-name {
  padding: 4px 0;
  font-weight: bold;
  color: #666666;
}
.cover {
  width: 100%;
  height: 160px;
  padding: 6px 0;
}
.cover img {
  width: 100%;
  height: 100%;
}
.title {
  font-size: 18px;
  padding: 6px 0;
  font-weight: bold;
}
.text {
  font-size: 15px;
  color: gray;
}
.other {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: gray;
}
.support {
  display: flex;
  align-items: center;
}
.support div {
  padding: 0 4px;
  display: flex;
  align-items: center;
}
.support img {
  width: 20px;
  height: 20px;
  margin-right: 2px;
  vertical-align: middle;
}
.date {
  display: flex;
  align-items: center;
}
</style>