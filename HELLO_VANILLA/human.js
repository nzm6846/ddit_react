class Human extends Animal{
	constructor() {
		this.job="student";
	  }
	
	chibbo(job){
			this.job = job;
	  }
}


	const hum = new Human();
	console.log("x: " + hum.x);
	console.log("y: " + hum.y);
	console.log(hum.job);
	
	ani.move(100, 50);
	hum.chibbo("programer");
	
	console.log(hum.x);
	console.log(hum.y);
	console.log(hum.job);