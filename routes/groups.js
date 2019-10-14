const express = require('express')
const db = require('../db')
var router = express.Router()


router.get('/',async function (req, res) {
  let groups=await db.getListGroup(0);
  res.render("group_list",{
    page:0,
    groups:groups,
  })
})

router.get('/create', function (req, res) {
  res.render("group_create",{})
})

router.get('/group', function (req, res) {
  res.render("group_create",{})
})
router.post('/create', async function (req, res) {
  name=req.body.name;
  if(undefined==name){
    res.status(401).send("Not send name in form.");  
    return;
  }
  if(""==name){
    res.status(401).send("Name need be fill.");  
    return;
  }
  
  let group=await db.getAndCreateGroup(name);
  res.end("Create:\n"+JSON.stringify(group,null,"\t"));
})

module.exports = router