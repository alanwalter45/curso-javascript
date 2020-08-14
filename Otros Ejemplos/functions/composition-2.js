const compose=(...args)=>initial=>args.reduceRight((prev,curr)=>curr(prev),initial);

const f1=x=>x+2;
const f2=x=>`El valor de x es ${x}`;
const f3=x=>x.toUpperCase();

const f4=compose(f3,f2);
console.log(compose(f4,f1)(2));