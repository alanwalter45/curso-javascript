const str = `
class Polygon{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
}

class Square extends Polygon{
    constructor(side){
        super(side,side);
    }
    get area(){
        return this.height*this.width;
    }
} 
`;

let s = eval(`${str} new Square(${6})`);
console.log(s.area);
