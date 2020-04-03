var http=require("http")
var fs=require("fs")
http.createServer(function(req,res){
    if(req.url=="/red"){
        fs.readFile("./static/red.html",function(err,data){
            res.end(data.toString())
        })
    }else if(req.url=="/green"){
        fs.readFile("./static/green.html",function(err,data){
            res.end(data.toString())
        })
    }else{
        res.end("404")
    }
}).listen(3000,function(){
    console.log("服务器已经挂起")
})