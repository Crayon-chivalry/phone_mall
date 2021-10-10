<template>
  <div class="address">
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="@/assets/img/back-white.svg"/>
        </div>
      </template>
      <div slot="center">
        我的地址
      </div>
    </nav-bar>

    <div class="address-item" v-for="item in 2" :key="item">
      <div class="address-header">
        <div>喜羊羊</div>
        <div>17323456879</div>
      </div>
      <div class="address-details">
        广西壮族自治区南宁市xxxx地区
      </div>
      <div class="operate">
        <div class="defult-box" @click="isDefult = !isDefult">
          <div class="checkbox">
            <img src="@/assets/img/tick.svg" :class="{ 'check-active': isDefult }" />
          </div>
          <div>默认地址</div>
        </div>
        <div class="bnt">
          <div>编辑</div>
          <div>删除</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: '',
  components: {
    NavBar
  },
  data() {
    return {
      isDefult: false
    }
  },
  methods: {
    backClick() {
      this.$router.back()
    },
  }
}
</script>

<style scoped>
.address {
  height: 100vh;
  background-color: rgb(241, 240, 240);
}

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

.address-item {
  margin-top: 10px;
  padding: 0 10px;
  background-color: #fff;
  font-size: 14px;
}

.address-header {
  display: flex;
  padding-top: 10px;
}

.address-header :last-child {
  margin-left: 20px;
}

.address-details {
  padding: 10px 0;
  border-bottom: 1px solid rgb(241, 240, 240);
}

.operate {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.bnt {
  display: flex;
}

.bnt div {
  width: 100px;
  font-size: 14px;
  margin-left: 10px;
  padding: 6px 0;
  text-align: center;
  border: 1px solid rgba(216, 213, 213, .7);
  border-radius: 99rem;
}

.defult-box {
  display: flex;
  align-items: center;
  height: 100%;
}

.defult-box div:last-child {
  margin-left: 4px;
  margin-bottom: 2px;
}

.checkbox {
  width: 18px;
  text-align: center;
}

.checkbox img {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid gray;
}

.check-active {
  background-color: red;
}
</style>