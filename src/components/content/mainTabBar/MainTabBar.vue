<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg"/>
        <img slot="item-icon-active" src="@/assets/img/tabbar/home-active.svg"/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="@/assets/img/tabbar/type.svg"/>
        <img slot="item-icon-active" src="@/assets/img/tabbar/type-active.svg"/>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/community">
        <img slot="item-icon" src="@/assets/img/tabbar/community.svg"/>
        <img slot="item-icon-active" src="@/assets/img/tabbar/community-active.svg"/>
        <div slot="item-text">社区</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="@/assets/img/tabbar/cart.svg"/>
        <img slot="item-icon-active" src="@/assets/img/tabbar/cart-active.svg"/>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/user">
        <img slot="item-icon" src="@/assets/img/tabbar/my.svg"/>
        <img slot="item-icon-active" src="@/assets/img/tabbar/my-active.svg"/>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,TabBarItem
  }
}
</script>