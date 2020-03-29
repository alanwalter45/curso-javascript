for(let x of [1,2,3]){
  console.log(x);
}

function* gen(){
  let indice = 0;
  while(true){
    yield ++indice;
  }
}


let g = gen();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
