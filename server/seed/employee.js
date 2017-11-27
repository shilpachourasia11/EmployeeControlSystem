'use strict';

let faker = require('faker');

module.exports = () => {
	let employee = [];
	console.log("creating employees in bulk ------------------------")
	for(let i=1; i<=20; i++){
		employee.push({
      name: faker.name.findName(),
			age: faker.random.number(),
			salary: faker.random.number(),
      job_id: i
		})
    employee.push({
      name: faker.name.findName(),
      age: faker.random.number(),
      salary: faker.random.number(),
      job_id: i
    })
	}
	return employee;
}
