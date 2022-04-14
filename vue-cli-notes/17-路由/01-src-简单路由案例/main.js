// 项目入口文件
// 引入Vue库
import Vue from 'vue'
// 引入App组件，所有组件的符组件
import app from './App.vue'
// 引入VueRouter
import VueRouter from "vue-router"
// 引入路由器
import router from './router'

// 关闭Vue生产提示
Vue.config.productionTip = false


// 应用插件
Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(app),
    router: router
})
