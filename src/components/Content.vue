<template>
  <div class="contentBox">
    <!--内容列表-->
    <div v-for="(content,ins) in contents" class="contents">
     <van-row  key={{ins}}>
        <van-col span="2" class="check">
          <van-checkbox v-model="content.isCheck" @change="btn(content.isCheck,ins)"></van-checkbox>
        </van-col>
        <van-col span="4">
          <img :src="content.icon" alt=""  @click="edit" :id="ins">
        </van-col>
        <van-col span="17" style="margin-left: 32px;">
          <van-row class="baise">
            <van-col span="8">{{content.name}}</van-col>
            <van-col span="8" offset="1">{{content.wek}}</van-col>
            <van-col span="7">{{ content.time | timeFormat}}</van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
    <!--分页-->
    <van-row style="margin:30px auto 50px;">
      <van-col span="15" offset="3">
        <van-pagination
          v-model="currentPage"
          :page-count="3"
          mode="simple"
        />
      </van-col>
      <a href="#" @click="add" class="add"><span>+</span></a>
    </van-row>

  </div>
</template>

<script>
 import bus from '../bus'
  export default {
    name: "Content",
    data: () => {
      return {
        checked: true,
        currentPage: 1,
        checkedSum:[],
        contents: [
          {
            icon: require('../assets/images/tu1.png'),
            name: '鸡汤虾仁粥',
            wek: '星期一',
            time: new Date(),
            isCheck:true
          },
          {
            icon: require('../assets/images/tu2.png'),
            name: '餐后小食',
            wek: '星期一',
            time: new Date(),
            isCheck:false
          },
          {
            icon: require('../assets/images/tu3.png'),
            name: '带鱼',
            wek: '星期三',
            time: new Date(),
            isCheck:false
          },
          {
            icon: require('../assets/images/tu4.png'),
            name: '麻什烤鸭',
            wek: '星期四',
            time: new Date()
          },
          {
            icon: require('../assets/images/tu6.png'),
            name: '麻什烤鸭',
            wek: '星期三',
            time: new Date(),
            isCheck:false
          },
          {
            icon: require('../assets/images/tu7.png'),
            name: '辣鸭头',
            wek: '星期四',
            time: new Date(),
            isCheck:false
          },
          {
            icon: require('../assets/images/tu1.png'),
            name: '鸡汤虾仁粥',
            wek: '星期一',
            time: new Date(),
            isCheck:false
          },
        ]
      }
    },
    mounted(){
      bus.$emit('check',this.contents)
    },
    methods: {
      btn(checked,index){
        this.checkedSum = [];
        for(let i=0;i<this.contents.length;i++){
          if(this.contents[i].isCheck){
            this.checkedSum.push(i)
          }
        }
        console.log(this.checkedSum);
      },
     edit(e){
        this.$router.push('/edit/'+e.target.id);
        console.log(e.target.id)
     },
      add(){
        alert('add')
      }
    },

  }
</script>
<style>
  .van-pagination__item{
    flex: 0.7;
  }
</style>
<style scoped>
  .contentBox {
    padding: 0 45px;
    position: relative;
    top: 235px;
  }

  .contentBox .contents {
    padding-top: 10px;
  }

  .contentBox .contents .baise {
    background: #fff;
    font-size: 33px;
    color: rgb(102, 102, 102);
    padding: 54px 0 54px 20px;
  }

  .contentBox .contents .check {
    padding: 60px 0;
  }
  .add{
   font-size:100px;
    display: inline-block;
    color:#f3f3f3;
    width:140px;
    height: 140px;
    line-height: 150px;
    background: #fff;
    float: right;
    margin-right:15px;
  }
  .add>span{
    position: relative;
    top: -15px;
    left: 30px;
  }
  .add:hover{
    cursor: pointer;
    color:#ccc;
  }
</style>
