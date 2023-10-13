"use strict"
​
​
// const app=http.createServer((request,response)=>{
    //     response.end("Weolcome to Node js server")
    // })
    
    // app.listen(8000,()=>console.log("server run: http://127.0.0.1:8000"))
    
    //! This is your stabil url http://127.0.0.1:8000
    // ! OR YOU CAN ALSO USE THIS http://localhost:8000
    
    // const http=require("node:http")
// const app=http.createServer((req,res)=>{
//     if(req.url=="/"){
//         res.end("Main Page ")
//     }else if( req.url=="/path1"){
//         res.end("Second Page")
//     }else{
//         res.end("Server IS running")
//     }
       
    
   
// }).listen(8000,()=>console.log("Server Runned "))
​
​
const http=require("node:http")
​
const app=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.statusCode=404
        res.statusMessage="Not Found"
        
        res.setHeader("Content-Type","text/html")
        res.setHeader("another-header","another-value")
        
        res.write("wwwwww")
        res.write("hhhhhhh")
        res.write("cccccc")
        res.end("Main Page")
    }else if(req.url="api"){
    
        if(req.method=="GET"){
         res.writeHead(200,{
            "content-type":"text-html",
            "another-header":"another-value"
         })  
         const obj={
            result:true,
            message:"Operation Successfull"
         }
         res.end(JSON.stringify(obj)) 
        }else{
            res.end("Not supported")
        }
    }else{
        res.end("Server is running")
    }
}).listen(8000, ()=>console.log("http://127.0.0.1:8000"))
g