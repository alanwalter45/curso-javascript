function addNumbers (initial,...args) {
    let add=initial;
    for(let i=0;i<args.length;i++){
        add+=args[i];
    }
    return add;
}

console.log(addNumbers(5,1,2,3,4,5,1));