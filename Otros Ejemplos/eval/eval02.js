class Polygon {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}

const str = `
class Square extends Polygon{
    constructor(side){
        super(side,side);
    }
    get area(){
        return this.height*this.width;
    }
}
`;

const s = eval(`${str} new Square(${7})`);

console.log(s.area);
