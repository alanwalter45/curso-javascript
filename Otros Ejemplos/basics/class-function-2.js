var Persona = (function () {

    function init() {
        console.log('loading...');
    }

    function Persona(name, age) {
        this.name = name;
        this.age = age;
        init();
    }

    Persona.prototype.information = function () {
        return 'hello ' + this.name;
    }

    return Persona;
})();

var p = new Persona('Alan Walter', 27);
console.log('Information: ' + p.information());