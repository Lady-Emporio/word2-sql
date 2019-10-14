const express = require('express')
var router = express.Router()

router.all("*",(req,res)=>{
    let params={
        path : req.path,
        method: req.method,
        protocol:req.protocol,  
        params:req.params,
        headers:req.headers,
        query:req.query,
        cookies:req.cookies,
        body:req.body,
    }
    jsonParams=JSON.stringify(params,null,"\t");

    let return_text="Page not found\n"+jsonParams;
    res.end(return_text);
})
module.exports = router