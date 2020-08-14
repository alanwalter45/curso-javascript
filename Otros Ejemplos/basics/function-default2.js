function saludo(array, f) {
    array.forEach(function (element) {
        console.log(f(element));
    });
}


saludo([12.2, 100, null, 33.4567, 'sdfdf'], (number) => Math.pow(number, 5));