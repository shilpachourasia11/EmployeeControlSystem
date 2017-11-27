let Sequelize =require('sequelize') ;
let config =require('./environment');
let lodash=require('lodash');
console.log(config.sequelize.uri);
let connection = new Sequelize(config.sequelize.uri, config.sequelize.options);
let options = {
   define:{
       underscored:true,
       freezeTableName:true
   }
}
let data={
   sequelize:Sequelize,
   connection
}
module.exports=data
