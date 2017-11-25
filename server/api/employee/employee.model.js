let data = require('./../../config/db');
let sequelize = data.sequelize;
let connection = data.connection;
let axios = require('axios')

module.exports=function(){
let employee= connection.define('employee',{
   id: {
       type: sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
     },
   name: {
       type: sequelize.TEXT,
       allowNull: false,
     },
   age: {
       type: sequelize.INTEGER,
       allowNull: false,
    },
    salary: {
       type: sequelize.TEXT,
       allowNull: false,
    },
    // job: {
    //    type: sequelize.TEXT,
    //    allowNull: false,
    // },
    status: {
      type: sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }
);
employee.associate = function(db) {
  db.employee.belongsTo(db.job)
}
// employee.getAllemployees = function (db, req) {
//   let offset = req.query.page*10
//   return db.rating.findAndCountAll({
//     attributes: ['monthly', 'hourly', 'daily'],
//     where: {
//       status: true
//     },
//     limit: 10,
//     offset: offset,
//     include: [
//       {
//         model: db.employee,
//         where: {
//           status: true
//         },
//         attributes: ['name','availability','capacity','type','id'],
//         required: true
//       },
//     ]
//   })
// }
//
// employee.changeAvailability = function(db, req) {
//   return db.employee.update({
//     availability: req.body.value
//   },
//   {
//     where:{
//       id: req.body.employeeId
//     }
//   })
// }
return employee;
};
