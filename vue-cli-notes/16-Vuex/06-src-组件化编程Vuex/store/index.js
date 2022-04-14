// 该文件用于创建Vuex中最为核心的Store
// 引入 Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)

// 引入Count组件求和相关的配置
import countOptions from './countOptions'
// 引入Person组件人员相关的配置
import personOptions from './personOptions'


// 如 vue 需要 new Vue
// 创建并暴露store，并传入配置项
export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions
    }
})

