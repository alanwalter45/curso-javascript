/*
|-------------------------------------------------------------------------
|    Si
|-------------------------------------------------------------------------
*/

var edad = 23;

if (edad > 18) {
    console.log('Mayor de Edad');
}

/*
|-------------------------------------------------------------------------
|Si , No
|-------------------------------------------------------------------------
*/

edad = 12;

if (edad < 18) {
    console.log('Menor de Edad');
} else {
    console.log('Mayor de Edad');
}

/*
|-------------------------------------------------------------------------
|Si esto .... y esto ... ó esto
|-------------------------------------------------------------------------
*/

var nombre = 'pedro';

switch (nombre) {
    case 'pedro':
        console.log('Soy >' + nombre);
        break;
    case 'juan':
        console.log('Soy >>' + nombre);
        break;
    case 'andrea':
        console.log('Soy >>>' + nombre);
        break;

    default:
        console.log('Soy *' + nombre);
        break;
}

/*
|-------------------------------------------------------------------------
|Operador de 3
|-------------------------------------------------------------------------
*/

var salario = 3400; //3400 Bs.
console.log(salario > 2500 ? 'Salario Normal' : 'Salario Inferior');