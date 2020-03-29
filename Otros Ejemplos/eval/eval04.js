class Polygon {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}

let className = 'Polygon';

class Square extends eval(className) {
	constructor(side) {
		super(side, side);
	}
	get area() {
		return this.height * this.width;
	}
}
let s = new Square(9);
console.log(s.area);
