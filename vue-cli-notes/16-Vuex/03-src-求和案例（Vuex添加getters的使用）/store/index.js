// 该文件用于创建Vuex中最为核心的Store
// 引入 Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)

// 准备actions——用于响应组件中的动作
const actions = {
    add(context, value) {
        console.log('actions中的add被调用')
        // console.log(context, value)
        context.commit('ADD', value)
    },
    sub(context, value) {
        console.log('actions中的sub被调用')
        // console.log(context, value)
        context.commit('SUB', value)
    },
    addOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('ADD', value) // 不必在mutations中还要考虑加不加
        }
        console.log('actions中的addOdd被调用')
        // console.log(context, value)
    },
    addWait(context, value) {
        setTimeout(() => {
            context.commit('ADD', value) // 不必在mutations中还要考虑加不加
        }, 500)
        console.log('actions中的addWait被调用')
        // console.log(context, value)
    },
}

// 准备mutations——用于（加工）操作数据（state状态）
const mutations = {
    ADD(state, value) {
        console.log('mutations中的ADD被调用')
        // console.log(state, value)
        state.sum += value
    },
    SUB(state, value) {
        console.log('mutations中的SUB被调用')
        // console.log(state, value)
        state.sum -= value
    }
}

// 准备state——用于存储数据（状态）
const state = {
    sum: 0 // 当前求和的结果
}

const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 如 vue 需要 new Vue
// 创建并暴露store，并传入配置项
export default new Vuex.Store({
    actions, mutations, state, getters
})

