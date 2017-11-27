'use strict'

let models = require('../sqldb')();
let employee = models.employee
let job = models.job;
let userDetail = models.user_detail

module.exports = () => {
	return userDetail.bulkCreate(require('./userDetail')())
	.then(() => {

			console.log("creating jobs")
		return job.bulkCreate(require('./job')())
	})
	.then(() => {
		console.log("creating employee")
		return employee.bulkCreate(require('./employee')())
	})
}
