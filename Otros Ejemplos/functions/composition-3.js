const compose=function(f,g){
    return function ff(x){
        return f(g(x))
    }
}

const f4=compose(Math.trunc,(x)=>x*3);
console.log( f4(3.123) );