<template>
  <div class="rankWrapper">
    <van-tabs v-model="active">
      <van-tab title="上周排名">
        <last-wek></last-wek>
      </van-tab>
      <van-tab title="月排名">
        <last-wek></last-wek>
      </van-tab>
      <van-tab title="历史排名">
        <last-wek></last-wek>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import lastWek from '../components/lastWek'
  export default {
    components: {
      lastWek
    },
    data: () => {
      return {
        active: 0
      }
    }
  }
</script>

<style>
  .van-tabs__line{
    transition-duration: 0s !important;
  }
</style>
