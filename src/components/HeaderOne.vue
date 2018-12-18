<template>
  <div class="headerOne">
    <van-row>
      <van-col span="22" style="text-align: center;position: relative;top:36px;">菜品</van-col>
    </van-row>
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in img" :key="index">
        <div slot="title">
          <img :src="item.normal" alt="" id="wek1" @click="bt(index)" class="tabItem">
        </div>
        <delete-content></delete-content>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import DeleteContent from './DeleteContent'

  export default {
    name: "HeaderOne",
    components: {
      DeleteContent
    },
    data: () => {
      return {
        num: 0,
        active: 0,
        img:[
          {
            normal: require('../assets/images/caipin/monday.png'),
            active: require('../assets/images/caipin/mondayActive.png'),
          },
          {
            normal: require('../assets/images/caipin/tuesday.png'),
            active: require('../assets/images/caipin/tuesdayActive.png'),
          },
          {
            normal: require('../assets/images/caipin/wedday.png'),
            active: require('../assets/images/caipin/weddayActive.png'),
          },
          {
            normal: require('../assets/images/caipin/thursday.png'),
            active: require('../assets/images/caipin/thursdayActive.png'),
          },
          {
            normal: require('../assets/images/caipin/friday.png'),
            active: require('../assets/images/caipin/fridayActive.png'),
          }
        ]

      }
    },
    methods: {
    bt(num){
      let tabAll = document.querySelectorAll('.tabItem');
      for( let i=0; i<tabAll.length; i++){
        tabAll[i].src=this.img[i].normal
      }
      tabAll[num].src=this.img[num].active
    }
    },
    mounted(){
      let tabAll = document.querySelectorAll('.tabItem');
      tabAll[0].src=this.img[0].active
    }
  }
</script>

<style scoped>
  .headerOne {
    background: #4FB2FF;
    height: 144px;
    position: fixed;
    top: 75px;
    width: 100%;
    padding: 0 45px;
    color: #fff;
    font-size: 48px;
    z-index: 999;
  }

</style>
