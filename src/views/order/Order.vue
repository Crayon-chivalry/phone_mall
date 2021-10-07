<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="@/assets/img/back-white.svg"/>
        </div>
      </template>
      <div slot="center">
        我的订单
      </div>
    </nav-bar>

    <div class="tabs">
      <div 
        class="tabs-item" 
        :class="{'tabs-active':active == index}"
        v-for="(item,index) in tabs"
        :key="index"
        @click="onTabs(index)"
      >
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: 'Order',
  components: {
    NavBar
  },
  data() {
    return {
      active: 0,
      tabs: ['全部','待付款','代发货','待收货']
    }
  },
  created() {
    if(this.$route.query.type) {
      this.active = this.$route.query.type
    }
  },
  methods: {
    backClick() {
      this.$router.back()
    },
    onTabs(index) {
      this.active = index
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

.tabs {
  display: flex;
}

.tabs div {
  flex: 1;
  text-align: center;
  padding: 10px 0;
}

.tabs-active {
  box-sizing: border-box;
  border-bottom: 2px solid #ea68a2;
}
</style>