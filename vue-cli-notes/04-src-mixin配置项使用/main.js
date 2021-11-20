// 项目入口文件
// 引入Vue库
import Vue from 'vue'
// 引入App组件，所有组件的符组件
import App from './App.vue'
// 引入全局混合
import {mixin, mixin2} from "./mixin";

// 关闭Vue生产提示
Vue.config.productionTip = false

// 配置全局混合
Vue.mixin(mixin)
Vue.mixin(mixin2)

new Vue({
    render: h => h(App),
}).$mount('#app')
