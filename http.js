var http = require('http');
var fs = require('fs');
var path = require('path');
var port =  1338;
var hostname = "localhost";
var server = http.createServer(function(req,res){
    console.log("Request for "+ req.url+"by method "+req.method);
    if (req.method=='GET'){
        var fileUrl;
        if (req.url=='/') fileUrl= '/index.html';
        else fileUrl=req.url;
        var filePath = path.resolve('./public'+fileUrl);
        var fileExt= path.extname(filePath);
        if (fileExt==".html"){
            fs.exists(filePath,function(exists){
                if (!exists){
                    res.writeHead(404,{"Content-Type":'text/html'});
                    res.end("<html> <head></head><body> <h1> Error 404: "+fileUrl+" File Not Found</h1></body></html>");
                    return;
                }
                res.writeHead(200,{'Content-Type':'text/html'});
                fs.createReadStream(filePath).pipe(res);
            });
        }  
        else{
            res.writeHead(404,{'Content-Type':"text/html"});
            res.end("<html> <head></head><body> <h1> Error 404: "+fileUrl+" Not Html File</h1></body></html>");
                    
        }
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("<html> <head></head><body> <h1> Error 404: "+req.method+" Not Supported</h1></body></html>");
    }
})
server.listen(port,hostname,function(){
    console.log("Server Running at http://"+hostname+":"+port);
});

