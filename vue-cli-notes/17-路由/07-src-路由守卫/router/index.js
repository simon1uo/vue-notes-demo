// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'About',
            path: '/about',
            component: About,
            meta: {title: '关于', isAuth: true}
        },
        {
            name: 'Home',
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            children: [
                {
                    name: 'Message',
                    path: 'message', // 子级路由不用斜杠
                    component: Message,
                    meta: {isAuth: true, title:'消息'},
                    children: [
                        {
                            name: 'Detail',
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
                    name: 'News',
                    path: 'news', // 子级路由不用斜杠
                    component: News,
                    meta: {isAuth: true, title: '新闻'},
                   /* beforeEnter: (to, from, next) => {
                        console.log('beforeEnter', to, from, next)
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('name') === 'simon') {
                                // document.title = to.meta.title || 'Vue Guard DEMO'
                                next()
                            } else {
                                alert('没有权限')
                            }
                        } else {
                            // document.title = to.meta.title || 'Vue Guard DEMO'
                            next()
                        }
                    }*/
                },
            ]
        }
    ]
})

// 全局前置路由守卫
//  beforeEach初始化或在每一次路由切换之前
/*router.beforeEach((to, from, next) => {
    console.log('beforeEach', to, from, next)
    if (to.meta.isAuth) {
        if (localStorage.getItem('name') === 'simon') {
            // document.title = to.meta.title || 'Vue Guard DEMO'
            next()
        } else {
            alert('没有权限')
        }
    } else {
        // document.title = to.meta.title || 'Vue Guard DEMO'
        next()
    }
})*/

// 全局后置路由守卫
// 初始化或在每一次路由切换之后
router.afterEach((to, from) => {
    console.log('afterEach',to, from) // 没有next

    // 借助后置路由守卫修改网页标题，如果使用前置守卫就先修改了而没权时查看不了页面
    document.title = to.meta.title || 'Vue Guard DEMO'

})

export default router
