'use strict'

let models = require('../sqldb');
let employee = models.employee
let job = models.job;
let userDetail = models.user_detail

module.exports = () => {
	return userDetail.bulkCreate(require('./userDetail')())
	.then(() => {
		return job.bulkCreate(require('./job')())
	})
	.then(() => {
		return employee.bulkCreate(require('./employee')())
	})
}
