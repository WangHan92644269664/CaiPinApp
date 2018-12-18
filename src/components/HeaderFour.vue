<template>
  <div class="headerFour">
    <van-row>
      <van-col span="3">
        <van-button plain type="primary" class="btn" @click="allOff">取消</van-button>
      </van-col>
      <van-col span="6" offset="6">菜品上传</van-col>
      <van-col span="3" offset="2">
        <van-button plain type="primary" class="btn" @click="allChecked" id="all">全选</van-button>
      </van-col>
      <van-col span="3" offset="1">
        <van-button plain type="primary" class="btn">删除</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
 import bus from '../bus'
  export default {
    name: "HeaderFour",
    data:()=>{
      return {
        all:[],
        num :0,
      }
    },
    methods:{
     // 全选
     allChecked(){
       // console.log(this.all);
       if(this.num%2===0){
         for(let i=0;i<this.all.length;i++){
           this.all[i].isCheck = true
         }
       }else{
         document.getElementById('all').innerHTML = '取消';
         for(let i=0;i<this.all.length;i++){
           this.all[i].isCheck = false
         }
       }

     },
      //取消
      allOff(){
       // console.log(this.all);
       for(let i=0;i<this.all.length;i++){
         this.all[i].isCheck = false
       }
      }
    },
    mounted(){
      bus.$on('check',(data)=>{
        // console.log(data)
        this.all = data
      })
    }
  }
</script>

<style scoped>
  .headerFour {
    background: #4FB2FF;
    line-height: 144px;
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
