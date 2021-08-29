<template>
  <div class="submit">
    <div class="checkbox">
      <img src="@/assets/img/tick.svg" :class="{ 'check-active': isAllCheck }" />
      <div>全选</div>
    </div>

    <div class="total">
      合计：
      <span>¥{{total}}</span>
    </div>

    <div class="submit-bnt">提交订单</div>
  </div>
</template>

<script>
export default {
  name: 'SubmitBar',
  props: {
    total: {
      type: [String,Number],
      default() {
        return 0
      }
    },
    isAllCheck: {
      type: Boolean,
      default() {
        return false
      }
    },
  },
  computed: {
    isCheck() {
      return true
    }
  }
}
</script>

<style scoped>
.submit {
  width: 100%;
  height: 50px;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid gainsboro;
}
.checkbox {
  display: flex;
  align-items: center;
}
.checkbox img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid gray;
  margin-right: 8px;
}
.submit-bnt {
  background-color: red;
  color: #fff;
  padding: 10px 16px;
  border-radius: 99rem;
}
.total {
  flex: 1;
  text-align: right;
  padding-right: 14px;
}
.total span {
  font-size: 18px;
  color: red;
}
.check-active {
  background-color: red;
}
</style>