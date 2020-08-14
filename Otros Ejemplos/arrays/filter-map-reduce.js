let productos = [
    {nombre:'aceite',precio:14.2,stock:100},
    {nombre:'carne',precio:25.5,stock:50},
    {nombre:'sal',precio:1.5,stock:10},
    {nombre:'café',precio:4.5,stock:11},
    {nombre:'arroz',precio:7.3,stock:200},
    {nombre:'fideo',precio:8.23,stock:350},
    {nombre:'azucar',precio:7.5,stock:12},
    {nombre:'café',precio:1.2,stock:11},
];

const output=productos.filter(e=>e.precio<7)
                      .map(e=>({name:e.nombre,price:e.precio}))
                      .reduce((total,current)=> total + current.price, 0);


console.log(output);