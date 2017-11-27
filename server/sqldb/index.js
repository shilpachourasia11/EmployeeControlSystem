let path = require('path');

let data = require('../config/db')
let models = ['userDetail','job','employee'];
let db ={};
let format = path.join(__dirname ,'../api/{0}/{0}.model.js');

for(let i in models){
  console.log("hahahahha");
   let model = require(format.replace(/\{0\}/g,models[i]))();
   console.log(model);
   db[model.name]=model;
}
Object.keys(db).forEach(function(modelName){
   if('associate' in db[modelName]){
       console.log();
       db[modelName].associate(db);
   }
});
let sql = function(){
   Object.assign(db, data)
   return db;
}
module.exports =sql();
