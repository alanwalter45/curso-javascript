var persons = ['erik ramanzoni', 'fernanda villa', 'ernesto lopez', 'alonzo medina', 'laura lernt'];

console.log('push......');
persons.push('antonia silva');
persons.push('fabiola pedraza');
console.log(persons);


console.log('delete......');
console.log('element deleted ', persons.pop());
console.log(persons);

console.log('splice......');
persons.splice(1, 1, 'fernanda villa >> edited');
persons.splice(1, 0, 'luis carrillo >> new');
console.log(persons);


console.log('slice......');
persons = persons.slice(1, 3);
console.log(persons);