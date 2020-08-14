var Persona = function (name, age) {
    this.name = name;
    this.age = age;
}

Persona.prototype.information = function () {
    return 'Hello ' + this.name;
}

var p = new Persona('Alan Walter', 27);
console.log('Information: ' + p.information());