let express=require('express')
let apiRouter = (app) => {
  app.use('/api/employee', require('../api/employee'))
  app.use('/api/job', require('../api/job'))
};

module.exports = apiRouter
