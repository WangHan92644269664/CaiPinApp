<template>
  <div class="homeBox">
    <!--头部-->
    <header-four></header-four>
    <!--主体内容-->
    <home-content></home-content>
    <!--底部-->
    <footer-nav></footer-nav>
  </div>
</template>

<script>
  import FooterNav from '../components/Footer'
  import HeaderFour from '../components/HeaderFour'
  import HomeContent from '../components/Content'

  export default {
    name: "home",
    components: {
      FooterNav,
      HeaderFour,
      HomeContent
    }
  }
</script>

<style scoped>
  .homeBox {
    background-color: #F3F3F3;
    width: 100vw;
    height: 100vh;
  }


</style>
