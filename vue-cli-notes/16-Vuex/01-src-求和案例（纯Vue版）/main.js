// 项目入口文件
// 引入Vue库
import Vue from 'vue'
// 引入App组件，所有组件的符组件
import app from './App.vue'
// 引入vue-resource
import VueResource from 'vue-resource'

// 关闭Vue生产提示
Vue.config.productionTip = false
// 使用插件
Vue.use(VueResource)


new Vue({
    el: '#app',
    render: h => h(app),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})
