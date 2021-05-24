<template>
  <nav-bar>
    <template v-slot:left class="sss">
      <div class="back" @click="backClick">
        <img src="@/assets/img/details/back.svg"/>
      </div>
    </template>
    <template v-slot:center>
      <div class="title">
        <div class="title-item" 
             v-for="(item, index) in titleList" 
             :key="index"
             :class="{active: activeIndex === index}"
             @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";

  export default {
    name: "DetailsNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titleList: ['商品','评论','详细'],
        activeIndex: 0
      }
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      titleClick(index) {
        this.activeIndex = index
        this.$emit('titleClick', index)
      }
    }
  }
</script>

<style scoped>
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
  .title {
    display: flex;
    font-size: 14px;
    color: #000;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: #ea68a2;
  }
</style>