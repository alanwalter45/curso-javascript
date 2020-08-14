var Persona = {
    name: 'Alan',
    age: 24,
    information: function () {
        console.log(this.name, this.age);
    }
};

console.log(Persona.information());