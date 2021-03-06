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
  }
);

employee.associate = function(db) {
  db.job.hasOne(db.employee);
};

employee.getAllemployees = function (db, req) {
  let offset = req.query.page*10
  let jobType
  let rangeStart
  let rangeEnd
  if(req.query.job_type){
    jobType = req.query.job_type
    return db.job.findAndCountAll({
      attributes: ['type','id'],
      where: {
        status: true,
        id: jobType
      },
      limit: 10,
      offset: offset || 0,
      include: [
        {
          model: db.employee,
          where: {
            status: true
          },
          attributes: ['salary', 'age', 'name'],
          required: true
        },
      ]
    })
  }
  // if(req.query.range){
  //
  // }

  return db.job.findAndCountAll({
    attributes: ['type','id'],
    where: {
      status: true,
    },
    limit: 10,
    offset: offset || 0,
    include: [
      {
        model: db.employee,
        where: {
          status: true
        },
        attributes: ['salary', 'age', 'name'],
        required: true
      },
    ]
  })

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
