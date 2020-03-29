class Polygon {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}

export class Square extends Polygon {
    constructor(side) {
        super(side, side);
	}
	get area() {
        return this.height * this.width;
	}
}