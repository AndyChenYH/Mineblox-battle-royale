class Obj {
	constructor(x, y, width, height, file) {

		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.health = 3;

		this.file = file;

		this.lBound = this.x;
		this.rBound = this.x + this.width;
		this.uBound = this.y;
		this.dBound = this.y + this.height;

		this.centerX = this.lBound + Math.abs(this.rBound - this.lBound);
		this.centerY = this.uBound + Math.abs(this.dBound - this.uBound);
	}

	touched() {
		console.log('touched: ');
		console.log(this.constructor.name);
	}

	place(scene) {
		scene.addObj(this);
	}

	draw() {
		makeBase(this);
		ctx.font = "20px Arial";
		ctx.fillText(this.health, this.x + 20, this.y + 20);

	}

	nextFrame() {
		this.draw();
	}
}

class Wall extends Obj {
	constructor(x, y) {
		super(x, y, 30, 30, 'brick.png');
	}
}




