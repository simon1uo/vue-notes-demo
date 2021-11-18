// 项目入口文件


// 引入Vue库
import Vue from 'vue'
// 引入App组件，所有组件的符组件
import App from './App.vue'

// 关闭Vue生产提示
Vue.config.productionTip = false

new Vue({
    // el: "#app", 指定容器
    render: h => h(App),

    /* render(createElement){
      return createElement('h1', 'TestRender')
    }*/
}).$mount('#app')
