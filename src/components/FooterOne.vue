<template>
  <div class="footerOne">
    <van-tabbar v-model="active"class="footer">
      <van-tabbar-item icon="shop">
        <span style="font-size:30px;color:#4FB2FF">菜品</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active : icon.normal"
          style="width: 55px;height: 55px;">
      </van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>
    export default {
        name: "FooterOne",
      data:()=>{
        return{
          active: 0,
          icon: {
            normal:require('../assets/images/rank.png'),
            active: require('../assets/images/caipin/caipin.png')
          },
        }
      }
    }
</script>

<style scoped>
  .footerOne{
    background: #fff;
  }
  .footerOne .footer{
    font-size:30px;
    position: fixed;
    bottom: 0;
  }
</style>
