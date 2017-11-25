let express=require('express')
let apiRouter = (app) => {
//  app.use('/api/employee', require('../api/employee'))

  app.get('/api/check', (req, res) => {
  let user ={};
  user.name= req.user.name;
  user.username= req.user.username;
  return res.json({
      isLogin: true,
      message: 'You are already logged in',
      token : req.headers.authorization.split(' ')[1],
      user: user
    });
  })
};

module.exports = apiRouter
