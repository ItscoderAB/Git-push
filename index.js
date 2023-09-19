import http from "http";
import fs from "fs";
const localhost = "127.0.0.1";
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode = 404;
    res.setHeader('Content-type','text/html');
    res.end('<h1> tihs is lorem</h1> <p>he how r you? </p>');

})

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});