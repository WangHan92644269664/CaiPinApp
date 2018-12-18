<template>
  <div>
    <p class="title">点赞统计</p>
    <div style="width: 100%;height: 380px;padding-top: 100px;" id="echartss">
    </div>
  </div>
</template>

<script>
  //先要导入依赖的实例
  import echarts from 'echarts'

  export default {
    data: () => {
      return {
        echarts1_option: {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [
            {
              name: '菜品排行',
              type: 'pie',
              radius: [0, 110],
              center: ['50%', '50%'],
              data: [
                {value: 190, name: '麻什烤鸭 190'},
                {value: 130, name: '甜点拼盘 130'},
                {value: 170, name: '蔬菜沙拉 170'},
                {value: 100, name: '餐后小食 100'},
                {value: 224, name: '深海鲜虾 224'}
              ].sort(function (a, b) {
                return a.value - b.value;
              }),
              roseType: 'area',
              label: { //饼图图形的文本标签
                normal: {  //下同，normal指在普通情况下样式，而非高亮时样式
                  textStyle: {
                    color: '#36C9FF',
                    fontSize:30
                  },
                }
              },
              labelLine: {  //引导线样式
                normal: {
                  length: 10,
                  length2: 20,
                  smooth: 0.2,
                }
              },
              itemStyle: { //图例样式
                normal: {
                  color: function (params) {
                    //自定义颜色
                    var colorList = [
                      '#1C3A8A', '#237C9C', '#1B5E9C', '#0853A5', '#36C9FF',
                    ];
                    return colorList[params.dataIndex]
                  },
                  shadowBlur: 20,//阴影模糊程度
                  shadowColor: 'rgba(0, 0, 0, 0.8)'//阴影颜色，一般黑
                }
              },
            }
          ]
        },
      }
    },
    mounted() {
      let myChart = echarts.init(document.getElementById('echartss'))
      myChart.setOption(this.echarts1_option)
    }
  }
</script>

<style scoped>
.title{
  font-size:40px;
  color:#36C9FF;
  padding-top: 45px;
  margin:0 auto;
  font-weight: bolder;
  padding-left: 42%;
}
</style>
