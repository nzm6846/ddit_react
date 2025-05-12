const Vehicle = require('./vehicle.js');

class Maker extends Vehicle{
	constructor(){
		super();
		this.maker_name="mn";
	}
	
	buyACar(mn)	{
		this.maker_name = mn;
	}
	
}

if(require.main === module) {
		const mk = new Maker("현대");
		console.log("speed:"+mk.speed);
		console.log("maker_name:"+mk.maker_name);
		mk.excel();
		mk.buyACar("포르쉐");
		console.log("speed:"+mk.speed);
		console.log("maker_name:"+mk.maker_name);
}