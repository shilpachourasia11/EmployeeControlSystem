var controller = require('./employee.controller.js');
var express = require('express');
var router = express.Router();

router.get('/getData', controller.getEmployee)

module.exports = router;
