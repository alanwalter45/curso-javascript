// Bucles Infinitos -- No Recomendado

// while (true) {
//     console.log('Bucle Indefinido');
// }

// do {
//     console.log('Bucle Indefinido');
// } while (true);

// for (;;) {
//     console.log('Bucle Indefinido');
// }



// Bucle WHILE

var saldoBancario = 1333.56;

while (saldoBancario > 1250) {
    console.log('Comprar Helados todas las tardes.', saldoBancario);
    saldoBancario -= 75;
}

// Bucle DO WHILE

var numero = 3400;
do {
    console.log(numero + ' Bs');
    numero -= 1000;

} while (numero > 2000);

// Bucle FOR

for (var i = 0; i < 5; i++) {
    console.log('Iteración :' + i);
}