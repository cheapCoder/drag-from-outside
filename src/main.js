import Vue from 'vue'
import App from './App.vue'
import { Tabs, Icon } from "ant-design-vue";
import ECharts from 'vue-echarts'
import 'echarts'

Vue.config.productionTip = false
Vue.use(Tabs)
Vue.use(Icon)

Vue.component('v-chart', ECharts)

new Vue({
  render: h => h(App),
}).$mount('#app')
