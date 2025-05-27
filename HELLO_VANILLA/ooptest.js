class Animal {
	constructor() {
		this.x = 0;
		this.y = 0;
	}

	move(x, y) {
		this.x = x;
		this.y = y;
	}
}

module.exports = Animal;



if (require.main === module) {
	const ani = new Animal();
	console.log("x:", ani.x);
	console.log("y:", ani.y);
	ani.move(5, 5);
	console.log("x:", ani.x);
	console.log("y:", ani.y);
}

