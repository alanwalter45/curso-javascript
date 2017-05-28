function suma(a, b) {
    return a + b;
}

console.log('La suma de a + b es ', suma.call(suma, 5, 4));

var persona = {
    nombre: 'alberto',
    edad: 34
};
var persona = {
    nombre: 'antonio',
    edad: 31
};

function saludar(mensaje) {
    return 'Mensaje: ' + mensaje + '.' + this.nombre;
}

console.log(saludar.call(persona, 'Que Tál'));