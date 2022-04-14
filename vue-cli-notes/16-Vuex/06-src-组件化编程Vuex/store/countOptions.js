export default {
    namespaced: true, // 开启命名空间
        actions: {
    addOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('ADD', value) // 不必在mutations中还要考虑加不加
        }
        console.log('actions中的addOdd被调用')
    },
    addWait(context, value) {
        setTimeout(() => {
            context.commit('ADD', value) // 不必在mutations中还要考虑加不加
        }, 500)
        console.log('actions中的addWait被调用')
        // console.log(context, value)
    },
},
    mutations: {
        ADD(state, value) {
            console.log('mutations中的ADD被调用')
            // console.log(state, value)
            state.sum += value
        },
        SUB(state, value) {
            console.log('mutations中的SUB被调用')
            // console.log(state, value)
            state.sum -= value
        },
    },
    state: {
        sum: 0, // 当前求和的结果
            school: 'SchoolName',
            subject: 'SubjectName',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}
