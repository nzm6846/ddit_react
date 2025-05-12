class Vehicle {
	constructor() {
		this.speed = 0;

	}

	excel() {
		this.speed++;
	}
}
module.exports = Vehicle;

if (require.main === module) {

	const ve = new Vehicle();
	console.log("speed: " + ve.speed);
	ve.excel();
	console.log("speed:" + ve.speed);
}