var controller = require('./job.controller.js');
var express = require('express');
var router = express.Router();

router.get('/getJobTypes', controller.getJobTypes)

module.exports = router;
