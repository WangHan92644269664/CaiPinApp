<template>
  <div class="deleteBox">
    <!--头部-->
    <header-one></header-one>
    <!--底部-->
    <footer-one></footer-one>
  </div>
</template>

<script>
  import HeaderOne from '../components/HeaderOne'
  import FooterOne from '../components/FooterOne'
  export default {
    name: "Delete",
    components: {
      HeaderOne,
      FooterOne,
    }
  }
</script>

<style scoped>
.deleteBox{
  background-color: #F3F3F3;
  width: 100%;
  height: 100vh;
}
</style>
