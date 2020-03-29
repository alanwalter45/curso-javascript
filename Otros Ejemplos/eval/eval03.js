const str = `
class Polygon{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
} 
Polygon
`;

class Square extends eval(str) {
	constructor(side) {
		super(side, side);
	}
	get area() {
		return this.height * this.width;
	}
}

let s = new Square(8);
console.log(s.area);
