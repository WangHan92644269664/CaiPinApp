<template>
  <div class="thisBox">
    <header-two></header-two>
    <!--内容-->
    <div class="editBox" style="position:relative;top:215px">
      <van-row style="padding: 10px 0 15px 45px;">
        <van-col span="3" style="font-size:39px;position: relative; top:40px;letter-spacing: 0.5em">
          图片
        </van-col>
        <van-col span="21">
          <div>
            <img :src="icon" alt="" style="padding-top: 10px;float: right;width: 140px;height: 120px;margin-right: 45px;" id="result">
            <input type="file" id="file"  @change="changeImg" style="position: relative;left:725px;top:30px;width:130px;opacity: 0"/>
            <!---->
          </div>
        </van-col>
      </van-row>

      <van-row style="padding: 40px 45px;">
        <van-col span="3" style="font-size:39px;letter-spacing: 0.5em">
          名称
        </van-col>
        <van-col span="21" style="font-size:30px;text-align: right;" >
          鸡汤鲜虾粥
        </van-col>
      </van-row>

      <van-row style="padding: 45px 0 45px 45px;letter-spacing: 0.5em">
        <van-col span="4">
          <select style="letter-spacing: 0.3em" >
            <option value="wek">星期一</option>
            <option value="tuesday">星期二</option>
            <option value="wed">星期三</option>
            <option value="thurs">星期四</option>
            <option value="fri">星期五</option>
          </select>
        </van-col>
        <!--<van-col span="20" style="font-size:30px;">-->
          <!--<van-icon name="arrow-left" style="transform: rotate(-90deg)"></van-icon>-->
        <!--</van-col>-->
      </van-row>
    </div>
  </div>
</template>

<script>
  import HeaderTwo from '../components/HeaderTwo'

  export default {
    name: "ThisWek",
    components: {
      HeaderTwo,
    },
    data:()=>{
      return {
        icon:require('../assets/images/edit.png'),
      }
    },
  methods:{
     changeImg(e){
       let files=e.target.files[0];
       if(!e || !window.FileReader) return;   // 看支持不支持FileReader
       let reader=new FileReader()
      reader.readAsDataURL(files)
       let resultImg=document.getElementById('result')
       reader.onloadend = function () {
         resultImg.src = this.result
       }
     }
  },
  }
</script>
<style scoped>
  .thisBox{
    background-color: #F3F3F3;
    width: 100%;
    height: 100vh;
  }
  .editBox>.van-row{
    background: #fff;
    color: rgb(102, 102, 102);
    padding-left: 45px;
    font-size:39px;
    margin-top: 20px;
  }
  .editBox>.van-row:first-child{
    margin-top: 0;
  }
</style>
