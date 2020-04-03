//url
var url=require("url")
// console.log(url)
// {
//     Url: [Function: Url],
//     parse: [Function: urlParse],
//     resolve: [Function: urlResolve],
//     resolveObject: [Function: urlResolveObject],
//     format: [Function: urlFormat],
//     URL: [Function: URL],
//     URLSearchParams: [Function: URLSearchParams],
//     domainToASCII: [Function: domainToASCII],
//     domainToUnicode: [Function: domainToUnicode],
//     pathToFileURL: [Function: pathToFileURL],
//     fileURLToPath: [Function: fileURLToPath]
//   }

// url模块的作用：
//  url字符串是一个结构化的字符串

// 注意  url模块提供了两套api处理url
//node。js遗留特有的api  

// parse解析url返回一个url属性对象
http://localhost:3000/?username=admin&passworld=123
var data=url.parse("http://localhost:3000/?username=tom&password=123")
console.log(data)

// resolve 解析浏览器超链接转换成基本url
// 参数：from解析时对应的url(原本的url)  to要解析的超链接（要替换的url）
var data=url.resolve("/aa/bb/cc","dd")     //   /aa/bb/dd
var dataTwo=url.resolve("http://localhost:3000/","ffffff")
var datathree=url.resolve("http://localhost:3000/cc/","vv")
console.log(data)
console.log(dataTwo)
console.log(datathree)

// // format  返回一个格式化的url字符串
var objurl={
    protocol: 'http:',  //协议
    slashes: true,      
    auth: null,    //用户名和密码
    host: 'localhost:3000',    //主机名号
    port: '3000',    //端口号
    hostname: 'localhost',    //主机名不带端口号
    hash: null,    //哈希值
    search: '?username=tom&password=123',    //查询字符串
    query: 'username=tom&password=123',    //请求参数 针对get
    pathname: '/',    //路径名称
    path: '/?username=tom&password=123',    //带查询的路径名称
    href: 'http://localhost:3000/?username=tom&password=123'    //元字符本身
  }
var mat=url.format(objurl)
console.log(mat)