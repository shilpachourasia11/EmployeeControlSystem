'use strict';

let faker = require('faker');

module.exports = () => {
	let employee = [];

	for(let i=1; i<=20; i++){
		employee.push({
      name: faker.name.findName(),
			age: faker.random.number(),
			salary: faker.random.number(),
      job: i
		})
    employee.push({
      name: faker.name.findName(),
      age: faker.random.number(),
      salary: faker.random.number(),
      job: i
    })
	}
	return employee;
}
