// 引入http模块 require 加载
var http=require("http");
// 创建服务器 createServer 创建服务器 req=》request 请求 res=》response 相应
var server=http.createServer(function(req,res){
    
    // 设置响应头 第一个参数是状态码，第二个参数是文本类型； text/plain image/jpeg image/gif 编码 utf-8
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    // 结束响应
    console.log(req.url)
    // switch(req.url){
    //     case "/red":
    //         // 写入
    //         res.write("red")
    //         break;
    //         default :
    //         res.write("我是默认的")
    // }
    if(req.url=="/red"){
        res.write("red")
    }else{
        res.write("我是默认的")
    }
    res.end()
})
//服务器需要去监听端口
server.listen(3000)

// 后台只要改动代码，那么bbi必须重新启动