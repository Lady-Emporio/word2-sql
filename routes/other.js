const express = require('express')
var router = express.Router()

router.all("/",(req,res,next)=>{
    // GET 'http://www.example.com/admin/new'
  //console.dir(req.originalUrl) // '/admin/new'
  //console.dir(req.baseUrl) // '/admin'
  //console.dir(req.path) // '/new'
  if(!req.baseUrl==""){
    next();
    return;
  }
  let url_to_groupList="/group/";
  res.render("home/index",{
    url_to_groupList:url_to_groupList,
  })
})

router.all("*",(req,res)=>{
    // GET 'http://www.example.com/admin/new'
  //console.dir(req.originalUrl) // '/admin/new'
  //console.dir(req.baseUrl) // '/admin'
  //console.dir(req.path) // '/new'
    let params={
        path : req.path,
        baseUrl : req.baseUrl,
        originalUrl : req.originalUrl,
        method: req.method,
        protocol:req.protocol,  
        params:req.params,
        headers:req.headers,
        query:req.query,
        cookies:req.cookies,
        body:req.body,
    }
    let jsonParams=JSON.stringify(params,null,"\t");

    let return_text="Page not found\n"+jsonParams;
    res.end(return_text);
})
module.exports = router