export default {
    install(Vue) {
        console.log('@@@install', Vue)
        // 过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        // 定义全局指令
        Vue.directive('fbind', {
            // 当指令与元素成功绑定时（一上来）
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element) {
                element.focus()
            },
            updated(element, binding) {
                element.value = binding.value
            }
        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            },
        })

        // 给Vue运行上添加方法
        Vue.prototype.hello = ()=>{
            alert('Hello Vue' )
        }
    }
}

