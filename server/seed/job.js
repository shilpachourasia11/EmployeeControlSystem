'use strict';

let faker = require('faker');

module.exports = () => {
	let job = [];

	for(let i=1; i<=20; i++){
		job.push({
      type: faker.name.jobTitle()
		})
	}
	return job;
}
