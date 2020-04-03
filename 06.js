var http = require("http")
var url = require("url")
console.log(url) 
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
// }
http.createServer(function (req, res) {
    if (req.url == "/favicon.ico") {
        return
    }
    var data = url.parse(req.url, true).query
    var severData = {
        username: "admin",
        password: "123"
    }
    if (data.username == severData.username && data.password == data.password) {
        res.end("success")
    } else {
        res.end("fail")
    }
}).listen(3000)