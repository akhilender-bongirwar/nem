const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res)=>{
    //console.log(req.url, req.method);
    //set header content type:
    res.setHeader('Content-Type','text/html');
    //sending the 
//     res.write("<h1>Hello India</h1>");
//     res.write("<p>Hello India</p>");
//    res.end();

    let path = './view/';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
        case '/about-blah':
            res.statusCode=301;
            res.setHeader('Location','/about');// this is for redirecting the user from /about-me to about
            res.end();
            break;
        default:
            path+='404.html';
            res.statusCode=404;
            break;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        //res.end(data); or the below one same
        res.write(data);
        res.end();
    })


})
server.listen(5000,'localhost',()=>{
    console.log("server started on port 5000");
})