<template>
  <!--底部tabbar-->
    <div class="footerBox">
      <van-tabbar v-model="active"class="footer" :replace="true">
        <van-tabbar-item to="/">
         <span :class="[$route.path=='/'? 'van-tabbar-item--active':'van-tabbar-item']" class="left"> 上传</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="$route.path=='/' ? icon2.active : icon2.normal"
            style="width: 50px;height: 50px;"
          >
        </van-tabbar-item>
        <van-tabbar-item  to="/rank">
          <span :class="[$route.path=='/rank'? 'van-tabbar-item--active':'van-tabbar-item']">排行</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="$route.path=='/rank'? icon1.active : icon1.normal"
            style="width: 50px;height: 50px;"
          >
        </van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "FooterSend",
      data:()=>{
        return{
          active: 0,
          icon1: {
            normal:require('../assets/images/rank.png'),
            active: require('../assets/images/rankActive.png')
          },
          icon2: {
            normal:require('../assets/images/upload.png'),
            active: require('../assets/images/uploadActive.png')
          }
        }
      },
    }
</script>
<style>

</style>
<style scoped>
  .footerBox{
    background: #fff;
  }
  .footerBox .footer{
    font-size:30px;
    position: fixed;
    bottom: 0;
  }
  .footerBox .footer span{
    font-size:30px;
  }
  .left{
    position: relative;
    left: -4px;
  }
</style>
