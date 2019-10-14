
constGroupTableName="group";
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './aa_dontOpen/db.sqlite',
});
const Group_model=require("./group_model");

const Group = sequelize.define(constGroupTableName,Group_model,{
  modelName: constGroupTableName,
  tableName: constGroupTableName,
});
// const Model = Sequelize.Model;
// class Group extends Model {}
// Group.init(Group_model, { sequelize, modelName: constGroupTableName })
Group.sync();

async function getAndCreateGroup(name){
  let new_group=await Group.create({
    name: name,
  });
  //resolve(new_group);
  return new_group;
}
async function getListGroup(start){

  const COUNT=30;
  //let text=`SELECT * FROM '${constGroupTableName}' LIMIT ${COUNT} OFFSET ${OFFSET }`;
  //console.log(text);
  //let groups=await sequelize.query(text);
  //let group_array=groups[0];
  let groups=await Group.findAll({ offset: start, limit: COUNT })
  return groups;
}
async function getGroupById(id){
  return await Group.findByPk(id);
}
module.exports={
  getAndCreateGroup:getAndCreateGroup,
  getListGroup:getListGroup,
}