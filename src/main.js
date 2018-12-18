// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import echarts from 'echarts'
import App from './App'
import router from './router'
import 'zepto.js/dist/zepto.min'
import { Button,Tabbar,TabbarItem,List,NavBar,Search,Row,Col,Icon,Panel,PullRefresh,CellGroup,Cell,Tab,Tabs,Checkbox, CheckboxGroup,Pagination } from 'vant'
Vue.use(Button).use(Search).use(Row).use(Col).use(Icon).use(Panel).use(Tab).use(Tabs).use(Pagination)
Vue.use(Tabbar).use(TabbarItem).use(Cell).use(CellGroup).use(Checkbox).use(CheckboxGroup).use(List);
Vue.use(NavBar).use(PullRefresh)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
//年月日的时间过滤器
Vue.filter('timeFormat',(val)=>{
  if(val){
    let data = new Date(val);
    let Y = data.getFullYear();
    let M = (data.getMonth()+1<10? '0'+(data.getMonth()+1) : (data.getMonth()+1));
    let D = (data.getDate() <10 ? '0'+data.getDate() : data.getDate());
    val = Y+'-'+M+'-'+D
  }
  return val;
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
