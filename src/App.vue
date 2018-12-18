<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "思源黑体 CN";
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.van-tabbar-item{
  font-size:36px;
}
 /*头部导航*/
 .headerFour .van-button--plain.van-button--primary,.headerTwo .van-button--plain.van-button--primary{
  background: none;
  border:2px solid #fff;
  border-radius: 15px;
  color:#fff;
  font-size:30px;
}
.headerFour .van-button--normal{
  padding: 1px 29px;
}
.headerTwo .van-button--normal{
  padding: 1px 35px;
}
 .headerFour .van-button,.headerTwo .van-button{
  height: 55px;
  line-height: 30px;
}

 /*底部*/
.footerBox .van-tabbar,.footerOne .van-tabbar{
  height: 144px;
}

.van-checkbox__icon--checked .van-icon{
  background: #fff;
  border-color:#fff;
}
.van-checkbox__icon--round .van-icon{
  border-radius: 0;
}
.van-checkbox__icon .van-icon{
  width: 50px;
  height: 50px;
}

  /*翻页*/
.van-pagination{
  font-size: 30px;
  line-height: 80px;
  margin-top:40px;
}
.van-pagination__item{
  height: 80px;
  min-width:80px;
}
.van-pagination__item{
  flex: 0.25;
}

.headerOne .van-tabs--line{
  padding-top: 100px;
  margin-top: 80px;
}
.headerOne .van-col--17{
  width: 74.1%;
}
.rankBox .van-tab{
  font-size:40px;
  color:#fff;
}
.rankBox .van-row {
  color:#fff;
  font-size:39px
}
.rankBox .router-link-active,.homeBox .router-link-active{
  display: inline-block;
  width: 50%;
  position:relative;
  top:30px
}
.van-tabs__nav--line{
  padding-bottom: 6px;
}
.van-tabs__line{
  background-color:#36C9FF;
  height: 6px;

}
.van-tabs--line{
  padding-top: 190px;
}
.van-tabs--line .van-tabs__wrap{
  height: 150px;
}
.van-tab{
  background: none;
  line-height:150px;
}
.van-checkbox__icon--checked .van-icon{
  color:#4FB2FF;
  font-size: 30px;
  padding-top: 15px;
}
.headerOne .van-tab{
  line-height:100px;
}
.van-tabs__nav{
  background: none;
}
.headerOne .van-tabs--line .van-tabs__wrap{
  height: 115px;
}
.headerOne  .van-tabs__line{
  height: 0;
}
.headerOne .van-tabs__wrap--scrollable .van-tab{
  flex: 0 0 18%;
}
.headerOne .van-tabbar--fixed{
  position: static;
}
.van-tabs__content{
  margin-top: 50px;
}
.footerBox .footer .van-tabbar-item{
  font-size:30px;
  color:#C2C2C2;
}
.footerBox .footer .van-tabbar-item--active{
  color:#4FB2FF;
}

.footerBox .footer .van-tabbar-item__icon{
  margin-bottom: 12px;
}
.footerOne .footer .van-tabbar-item{
  line-height: 1.1;
}
  select{
    border:none;
    color:#666;
    font-size:39px;
    width: 192px;
    height: 50px;
    appearance:none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: url("./assets/images/left.png") no-repeat right;
  }
select option{
  border:none;
  font-size:16px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}

</style>
