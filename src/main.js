import Vue from 'vue'
import App from './App.vue'
import { Tabs, Icon } from "ant-design-vue";

Vue.config.productionTip = false
Vue.use(Tabs)
Vue.use(Icon)

new Vue({
  render: h => h(App),
}).$mount('#app')
