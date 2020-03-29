function Persona(){
  console.log('instancia creada');
  this.name = 'alanwalter45';
}

Persona.prototype.miInformacion = function(){
  return this.name;
}

let p = new Persona();
console.log(p.miInformacion());
