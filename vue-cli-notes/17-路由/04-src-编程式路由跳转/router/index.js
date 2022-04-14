// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'message', // 子级路由不用斜杠
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:title',
                            component: Detail,

                            // 1 props中值为对象，该对象中的所有key-value都会以props传给Detail组件中的$route.props
                            // props: {a: 1, b: hello}

                            // 2 值为布尔值，若布尔值为真就会把路由组件收到的所有params参数，以props的形式传送给Detail组件（只能适用params传参）
                            // props: true

                            // 3 props值为函数，该对象中的所有key-value都会以props传给Detail组件
                            props($route) {
                                return {
                                    id: $route.params.id,
                                    title: $route.params.title
                                }
                            }
                           /*props({query: id,title}) {
                                return { id, title }
                            }*/
                        }
                    ]
                },
                {
                    path: 'news', // 子级路由不用斜杠
                    component: News
                },
            ]
        }
    ]
})
