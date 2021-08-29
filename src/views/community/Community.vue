<template>
  <div class="community">
    <nav-bar class="category-nav"><div slot="center">社区</div></nav-bar>
    <div class="nav">
      <div :class="{'nav-active':navActive === 1}" @click="navClick(1)">社区</div>
      <div :class="{'nav-active':navActive === 2}" @click="navClick(2)">关注</div>
    </div>
    <div class="list">
      <new-item/>
    </div>
    <main-tab-bar/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import NewItem from "@/components/content/news/NewItem"
import MainTabBar from '@/components/content/mainTabBar/MainTabBar'

export default {
  name: 'Community',
  data() {
    return {
      navActive: 1
    }
  },
  components: {
    NavBar,
    NewItem,
    MainTabBar
  },
  methods: {
    navClick(e) {
      this.navActive = e
    }
  }
}
</script>

<style scoped>
.category-nav {
  background-color: #ea68a2;
  color: azure;
}
.nav {
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  color: gray;
}
.nav div {
  padding: 6px 0;
  margin-right: 20px;
}
.nav-active {
  border-bottom: 2px solid #ea68a2;
  font-size: 21px;
  font-weight: bold;
  color: #666666;
}
.list {
  padding: 0 10px;
  margin-bottom: 60px;
}
</style>