<template>
  <div class="mark">
    <div class="dialog">
      <div class="content">
        <slot name="content">内容内容</slot>
      </div>
      <div class="bnt-row">
        <div>
          <slot name="left">取消</slot>
        </div>
        <div>
          <slot name="right">确定</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  components: {},
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style scoped>
.mark {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.dialog {
  width: 80%;
  z-index: 999;
  border-radius: 10px;
  background-color: #fff;
}

.bnt-row {
  display: flex;
}

.content {
  padding: 36px 0;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(230, 227, 227);
}

.bnt-row > div {
  flex: 1;
  text-align: center;
  padding: 14px 0;
  font-size: 15px;
}
</style>