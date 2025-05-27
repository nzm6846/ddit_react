const Animal = require('./ooptest');

class Human extends Animal {
	constructor() {
		super();
		this.job = "student";
	}

	chibbo(job) {
		this.job = job;
	}
}

module.exports = Human;


if (require.main === module) {
	const hum = new Human();
	console.log("job:", hum.job);
	console.log("x:", hum.x);
	console.log("y:", hum.y);
	hum.move(5, 5);
	hum.chibbo("programmer");
	console.log("job:", hum.job);
	console.log("x:", hum.x);
	console.log("y:", hum.y);
}