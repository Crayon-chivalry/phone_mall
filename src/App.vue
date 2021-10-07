<template>
  <div id="app">
    <keep-alive exclude="Details,Cart,Order">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import '~@/assets/css/base.css'
</style>
