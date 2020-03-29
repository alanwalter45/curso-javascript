class Persona {
  constructor() {
    console.log('instancia creada');
    this.name = 'alanwalter45';
  }
  miInformacion() {
    return this.name;
  }
}


let p = new Persona();
p.name = " pedro";
console.log(p.miInformacion());
