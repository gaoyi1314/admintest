var http = require('http');
var fs = require('fs');//引入文件读取模块
 
var server= http.createServer(function(request,respone){
    var url = request.url;
    // respone.writeHead(200,{'Content-Type':'text/html'});
    if(url=='/'){
        respone.writeHead(200,{'Content-Type':'text/html'});
         var ns = fs.readFile('./blue.html', function(err, data) {
             if (err) {
                 console.error(err);
                 return;
             }
             respone.end(data);
         });
    }else if(url != '/'){
        var surl = '.'+url;
        var type = surl.substr(surl.lastIndexOf(".")+1,surl.length)
        respone.writeHead(200,{'Content-type':"text/"+type});
        var ns = fs.readFile(surl, function(err, data) {
            if (err) {
                console.error(err);
                return;
            }
            respone.end(data);
        });
    }
 
}).listen(3000);
 
// console.log('服务器开启成功');

var http = require('http');
var fs = require('fs');//引入文件读取模块
http.createServer(function(req,res){
    if(req.url=="/red"){
        fs.readFile("./static/red.html",function(err,data){
            res.end(data.toString())
        })
    }else if(req.url=="/green"){
        fs.readFile("./static/green.html",function(err,data){
            res.end(data.toString())
        })
    }else if(req.url=="/red.css"){
        fs.readFile("./static/red.css",function(err,data){
            res.end(data.toString())
        })
    }else if(req.url=="/325486.jpg"){
        fs.readFile("./static/325486.jpg",function(err,data){
            res.end(data.toString())
        })
    }else{
        res.end("404")
    }
}).listen(3000);
console.log('服务器开启成功');