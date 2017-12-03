let data = require('./../../config/db');
let sequelize = data.sequelize;
let connection = data.connection;
let axios = require('axios')

module.exports=function(){
let job= connection.define('job',{
   id: {
       type: sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
     },
   type: {
       type: sequelize.TEXT,
       allowNull: false,
     },
    status: {
      type: sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }
);

job.getJobTypes = function(db, req) {
  return db.job.findAndCountAll({
    attributes: ['type','id'],
    where: {
      status: true,
    }
  })
}

return job
};
