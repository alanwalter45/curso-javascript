let a ={
  name:'pedro'
}

//let a2 = JSON.parse(JSON.stringify(a));
let b = {...a}
let c = Object.assign({},a)

console.log(a===b);
console.log(a===c,a)
