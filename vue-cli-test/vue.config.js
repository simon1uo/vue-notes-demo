module.exports = {
    pages: {
        // 语法
        index: {
            entry: 'src/main.js',
        },
    },
    lintOnSave: false, // 关闭语法检查

    // 开启代理服务器 （方法一）
    /*devServer: {
        proxy: 'http://localhost:5050'
    }*/

    // 开启代理服务器 （方法二）
    devServer: {
        proxy: {
            '/server1': { // 请求前缀，请求地址例子：http://localhost:8080/server1/students
                target: 'http://localhost:5050', // 目标服务器地址
                pathRewrite: {'^/server1': ''}, // 重写路径，匹配
                ws: true, // 用于支持websocket
                changeOrigin: true // 用于控制请求头中的host值 例子 false为8080，true为5050
            },
            '/server2': { // 请求前缀，请求地址例子：http://localhost:8080/server1/students
                target: 'http://localhost:5051', // 目标服务器地址
                pathRewrite: {'^/server2': ''}, // 重写路径，匹配
                // ws: true, // 用于支持websocket
                // changeOrigin: true // 用于控制请求头中的host值 例子 false为8080，true为5050
            }
        }
    }

}
