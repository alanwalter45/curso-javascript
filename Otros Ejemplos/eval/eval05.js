class Polygon {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}

class Square extends Polygon {
    constructor(side) {
        super(side, side);
	}
	get area() {
        return this.height * this.width;
	}
}

let className = 'Square';
let s = eval(`new ${className}(10)`);
console.log(s.area);