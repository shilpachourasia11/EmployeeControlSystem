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
    status: {
      type: sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    // job_id: {
    //   type: sequelize.INTEGER,
    //
    //   references: {
    //     // This is a reference to another model
    //     model: 'job',
    //
    //     // This is the column name of the referenced model
    //     key: 'id',
    //
    //     // This declares when to check the foreign key constraint. PostgreSQL only.
    //     deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
    //   }
    // }
  }
);

employee.associate = function(db) {
  db.employee.hasOne(db.job);
};

employee.getAllemployees = function (db, req) {
  //let offset = req.query.page*10

  return db.employee.findAndCountAll({
    attributes: ['salary', 'age', 'name'],
    where: {
      status: true
    },
    limit: 10,
    offset: 0,
  })
  // .then((data)=> {
  //   let allEmployees = data
  //
  // })
}

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
