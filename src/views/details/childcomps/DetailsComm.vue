<template>
  <div class="info-comments">
    <div class="com-header">
      <div class="header-title">用户评论</div>
      <div class="header-people">{{ DetailsComm.comments_number }}人评论</div>
      <div class="header-rate">好评率{{ DetailsComm.comments_rate }} ></div>
    </div>
    <div class="info-user">
      <img src="@/assets/img/details/user.svg"/>
      {{ DetailsComm.userName }}
    </div>
    <p>{{ DetailsComm.commentsText }}</p>
  </div>
</template>

<script>
export default {
  name: 'DetailsComm',
  props: {
    DetailsComm: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .info-comments {
    padding: 0 5px;
    border-bottom: 2px solid rgba(201, 195, 195, 0.5);
  }
  .com-header {
    height: 50px;
    line-height: 50px;
  }
  .header-title,
  .header-people {
    float: left;
  }
  .header-rate {
    float: right;
  }
  .header-title,
  .header-rate {
    font-size: 15px;
    color: #000;
  }
  .header-people {
    font-size: 13px;
    margin-left: 10px;
  }
  .info-user {
    height: 40px;
    line-height: 40px;
    font-weight: bold;
  }
  .info-user img{
    width: 25px;
    height: 25px;
    vertical-align: middle;
  }
  .info-comments p{
    font-size: 14px;
    margin: 5px 0;
    padding-bottom: 10px;
  }
</style>