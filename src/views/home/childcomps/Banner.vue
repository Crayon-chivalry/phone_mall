<template>
  <div class="banner">
    <img :src="bannerurl"/>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    bannerurl:String
  }
}
</script>

<style scoped>
  .banner {
    width: 95%;
    margin: 0 auto;
    height: 100px;
  }
  .banner img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
</style>