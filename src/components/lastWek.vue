<template>
    <div class="rankBox">
      <div v-for="(rank,ins) in ranks">
        <van-row>
          <van-col span="3" style="padding-left: 45px;position: relative;top:15px;">
            <img :src="duobianIcon" alt="">
            <span style="color:#fff;position: relative;top: -15px;left: -43px;font-size: 30px;">{{ins+1}}</span>
          </van-col>
          <van-col span="3">
            <img :src="rank.icon" alt="">
          </van-col>
          <van-col span="5" style="position: relative;top: 18px;">
            {{ rank.name}}
          </van-col>
          <van-col span="1" offset="9" style="margin-right: 30px;position: relative;top:10px">
            <img :src="dianzanIcon" alt="">
          </van-col>
          <van-col span="1" style="position: relative;top:15px;margin-right: 45px;">
            {{rank.count}}
          </van-col>
        </van-row>
      </div>
      <!--加载更多-->
      <!--<div class="list-content" id="list-content">-->
        <!--<van-pull-refresh v-model="isLoading" @refresh="onRefresh">-->
          <!--<van-list-->
            <!--v-model="loading"-->
            <!--:finished="finished"-->
            <!--@load="onLoad"-->
            <!--:offset="10"-->
          <!--&gt;-->
            <!--<div class="list-item">-->
              <!--<van-cell v-for="item in list" :key="item" :title="item + ''" />-->
            <!--</div>-->

          <!--</van-list>-->
        <!--</van-pull-refresh>-->
      <!--</div>-->
    </div>
</template>

<script>
    export default {
      name: "lastWek",
      data: () => {
        return {
          dianzanIcon: require('../assets/images/caipin/dianzan.png'),
          duobianIcon: require('../assets/images/rank/duobian.png'),
          active: 0,
          ranks: [
            {
              icon: require('../assets/images/rank/tu1.png'),
              name: '深海鲜虾',
              count: 358
            },
            {
              icon: require('../assets/images/rank/tu2.png'),
              name: '餐后小食',
              count: 100
            },
            {
              icon: require('../assets/images/rank/tu3.png'),
              name: '蔬菜沙拉',
              count: 50
            },
            {
              icon: require('../assets/images/rank/tu4.png'),
              name: '甜点拼盘',
              count: 30
            },
            {
              icon: require('../assets/images/rank/tu5.png'),
              name: '麻什烤鸭',
              count: 12
            },
            {
              icon: require('../assets/images/rank/tu6.png'),
              name: '酸菜兔头',
              count: 0
            },
            {
              icon: require('../assets/images/rank/tu7.png'),
              name: '柠檬煎鱼',
              count: 0
            },

          ]
        }
      },

    }
</script>

<style scoped>
  .rankBox{
    padding-bottom: 100px;
  }
  .rankBox .van-row{
    margin-bottom: 50px;
  }
</style>
