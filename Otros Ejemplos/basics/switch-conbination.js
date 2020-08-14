//no reomendado pero si utilizado para cierto tipo de casos.

var number = 0;

var comb = ((number == 0) * 1) + ((number % 2 == 0 && number != 0) * 2) + ((number % 2 != 0) * 3);

switch (comb) {
    case 1:
        console.log('Number is zero');
        break;
    case 2:
        console.log('Number is pair');
        break;
    case 3:
        console.log('Number is not pair');
        break;
    default:
        console.log('Number not can be evaluated.');
        break;
}