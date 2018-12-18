<template>
  <div class="rankBox">
    <echarts-nav></echarts-nav>
    <rank-chirld></rank-chirld>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
  import RankChirld from '../components/RankChirld'
  import EchartsNav from '../components/Echarts'
  import FooterNav from '../components/Footer'

  export default {
    name: "Rank",
    components: {
      RankChirld,
      FooterNav,
      EchartsNav
    }
  }
</script>

<style scoped>
  .rankBox {
    background: linear-gradient(to bottom right, #03257D, #021752);
    width: 100vw;
    height: 100vh;
  }
</style>
