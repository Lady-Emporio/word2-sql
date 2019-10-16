const express = require("express");
const db = require("../db");
var router = express.Router();
const clearSky = require("../other");

router.get("/", async function(req, res) {
  let groups = await db.getListGroup(0);
  res.render("group_list", {
    page: 0,
    groups: groups
  });
});
router.post("/", async function(req, res) {
  let page = req.body.page;
  if (undefined == page) {
    res.status(401).send("Not post page to open");
    return;
  }
  let page_int = Number(page);
  if (!Number.isInteger(page_int)) {
    res.status(401).send(`Not integer. page="${page_int}"`);
    return;
  }
  let groups = await db.getListGroup(page_int);
  res.render("group/table_elem", {
    page: page_int,
    groups: groups
  });
});

// router.get('/object/:groupID([0-9]{1,})/',async function (req, res) {
//   let id=req.params.groupID;
//   let group=await db.getGroupById(id);

//   res.render("group/object",{
//       g_name:group.name,
//   })
// })

// router.post('/group', async function (req, res) {
//   let id=req.body.idopen;
//   if(undefined==id){
//     res.status(401).send("Not post id to open");
//     return;
//   }
//   let id_int=Number(id);
//   if(!Number.isInteger(id_int)){
//     res.status(401).send(`Not integer. id="${id_int}"`);
//     return;
//   }
//   let group=await db.getGroupById(id_int);
//   res.end("Create:\n"+JSON.stringify(group,null,"\t"));
// })

// router.get('/create', function (req, res) {
//   res.render("group_create",{})
// })
// router.post('/create', async function (req, res) {
//   name=req.body.name;
//   if(undefined==name){
//     res.status(401).send("Not send name in form.");
//     return;
//   }
//   if(""==name){
//     res.status(401).send("Name need be fill.");
//     return;
//   }

//   let group=await db.getAndCreateGroup(name);
//   res.end("Create:\n"+JSON.stringify(group,null,"\t"));
// })

/////////////////////////////////////

router
  .route("/object/:groupID([0-9]{1,}|n)/")
  //////////////////////////////////////////////////
  .all(function(req, res, next) {
    ///////////// all
    //////////////////////////////////////////////////
    next();
  })
  //////////////////////////////////////////////////
  .get(async function(req, res, next) {
    ///////////// get
    //////////////////////////////////////////////////
    let id = req.params.groupID;
    if ("n" == id) {
      res.render("group/object", {
        //name:undefined,
        //id:undefined,
        exist: false
      });
    } else {
      let group = await db.getGroupById(id);
      if (null == group) {
        res.status(401).send(`Not exist group: "${id}"`);
        return;
      }
      res.render("group/object", {
        //name:group.name,
        //id:group.id,
        group: {
          name: group.name,
          id: group.id,
          createdAt: clearSky.getStringNowDateInMyLikeFormat(group.createdAt),
          updatedAt: clearSky.getStringNowDateInMyLikeFormat(group.updatedAt)
        },
        exist: true
      });
    }
  })
  //////////////////////////////////////////////////
  .put(function(req, res, next) {
    ///////////// put
    //////////////////////////////////////////////////
    // just an example of maybe updating the user
  })
  ////////////////////////////////////////////////////
  .post(async function(req, res, next) {
    ///////////// post
    ////////////////////////////////////////////////////
    //next(new Error('not implemented'))
    let id = req.body.id;
    let name = req.body.name;
    if ("n" == id) {
      let group = await db.getAndCreateGroup(name);
      res.redirect(`/group/object/${group.id}/`);
    } else {
      let group = await db.getGroupById(id);
      if (null == group) {
        res.status(401).send(`Not exist group: "${id}"`);
        return;
      }
      group.name = name;
      group.save();
      res.redirect(`/group/object/${id}/`);
    }
  })

  //////////////////////////////////////////////////////
  .delete(function(req, res, next) {
    //////////// delete
    //////////////////////////////////////////////////////
    next(new Error("not implemented"));
  });
module.exports = router;
