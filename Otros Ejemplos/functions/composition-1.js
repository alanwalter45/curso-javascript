const compose=(f,g)=>x=>f(g(x));

const pow=x=>x*2;

console.log(compose(pow,Math.floor)(3.5));