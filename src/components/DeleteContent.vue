<template>
  <div class="deleteContent">
    <div v-for="(content,ins) in contents" class="contents">
      <van-row>
        <van-col span="4" offset="1">
          <img :src="content.icon" alt="">
        </van-col>
        <van-col span="16" style="margin-left:18px;line-height: 42px;">
          <van-row class="baise">
            <van-col span="21" offset="1" style="position: relative;top:55px;">{{content.name}}</van-col>
            <van-col span="2">
              <van-row style="position: relative;padding-right: 20px;right: 40px;">
                <van-col span="24" >
                  <img :src="dianzanhui"class="dianzan"  alt="" @click="bt(ins)" style="position: relative;left: -10%;">
                </van-col>
                <p style="font-size:26px;color:#bbb;">{{ content.count }}</p>
              </van-row>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DeleteContent",
    data() {
      return {
        dianzanhui: require('../assets/images/dianzanhui.png'),
        dianzan: require('../assets/images/dianzan.png'),
        contents: [
          {
            icon: require('../assets/images/tu1.png'),
            name: '鸡汤虾仁粥',
            count: 255,
            num:0
          },
          {
            icon: require('../assets/images/tu2.png'),
            name: '餐后小食',
            count: 50,
            num:0
          },
          {
            icon: require('../assets/images/tu3.png'),
            name: '带鱼',
            count: 30,
            num:0
          },
          {
            icon: require('../assets/images/tu4.png'),
            name: '麻什烤鸭',
            count: 23,
            num:0
          },
          {
            icon: require('../assets/images/tu6.png'),
            name: '麻什烤鸭',
            count: 22,
            num:0
          },
          {
            icon: require('../assets/images/tu7.png'),
            name: '辣鸭头',
            count: 10,
            num:0
          },
          {
            icon: require('../assets/images/tu1.png'),
            name: '鸡汤虾仁粥',
            count: 0,
            num:0
          },
        ]
      }
    },
    methods: {
      bt(num) {
        this.contents[num].num++;
        let dianAll = document.querySelectorAll('.dianzan');
        if(this.contents[num].num %2!==0){
          dianAll[num].src = this.dianzan;
          // console.log(this.contents[num].num)
          this.contents[num].count++;
        }else{
          dianAll[num].src = this.dianzanhui;
          this.contents[num].count--
        }
      },
    }
  }
</script>

<style scoped>
  .deleteContent .contents {
    margin-top: 18px;
    /*padding-left: 20px;*/
    /*padding-right: 20px;*/
  }

  .deleteContent .contents .baise {
    background: #fff;
    font-size: 33px;
    color: rgb(102, 102, 102);
    /*padding: 50px 0 5px 0;*/
  }

  .deleteContent .contents .check {
    padding: 60px 0;
  }
</style>
