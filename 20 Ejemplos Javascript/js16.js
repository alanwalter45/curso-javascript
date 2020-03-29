let a = [1,2,3];
let b = [4,5,6];
let c = [7,8,6];

let aa = {a,b,c}

let s = Object.keys(aa).find(item=>aa[item].indexOf(6)!=-1);
console.log(s);
