<template>
  <div class="caipinBox">
    <!--菜品后台内容显示-->
    <header-one></header-one>
    <!--底部-->
    <footer-one></footer-one>
  </div>
</template>

<script>
  import HeaderOne from '../components/HeaderOne'
  import FooterOne from '../components/FooterOne'

  export default {
    name: "CaiPin",
    components: {
      HeaderOne,
      FooterOne
    }
  }
</script>

<style scoped>
  .caipinBox {
    background: #f3f3f3;
    width: 100%;
    height: 100vh;
  }
</style>
