module.exports ={
    devServer :{
        open:false,
        port: 8081,
        proxy :{
            '/music': {
                target: 'https://c.y.qq.com/splcloud/fcgi-bin', // 代理的基础路径
            pathRewrite: {'^/music': ''}
          }  
        }
    }
}