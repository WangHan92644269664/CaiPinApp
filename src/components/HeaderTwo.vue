<template>
    <div class="headerTwo">
      <van-row>
        <van-col span="6" offset="9">菜品编辑</van-col>
        <van-col span="3" offset="5">
          <van-button plain type="primary" class="btn" @click="finish">完成</van-button>
        </van-col>
      </van-row>
    </div>
</template>

<script>
    export default {
        name: "HeaderTwo",
      methods:{
          finish(){
            this.$router.push('/')
          }
      }
    }
</script>
<style scoped>
  .headerTwo{
    background: #4FB2FF;
    line-height: 144px;
    height: 144px;
    position: fixed;
    top: 75px;
    width: 100%;
    color: #fff;
    font-size: 48px;
    z-index: 999;
    margin-bottom: 50px;
  }
</style>
