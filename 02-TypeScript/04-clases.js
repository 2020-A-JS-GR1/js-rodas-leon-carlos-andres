class Persona {
    constructor(nombreParametro, apellidoParametro) {
        this.nombreYApellido = '';
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = this.nombre + ' ' + this.apellido;
    }
    mostrarNombreApellido() {
        return this.nombreYApellido;
    }
}
Persona.nombreReferencial = 'Humano';
class Usuario extends Persona {
    constructor(nombreParametro, apellidoParametro, cedula, estadoCivil) {
        super(nombreParametro, apellidoParametro);
        this.cedula = cedula;
        this.estadoCivil = estadoCivil;
    }
}
const algo = new Usuario("Carlos", "Rodas", "15615615", "soltero");
console.log(algo.nombre);
console.log(algo.apellido);
console.log(algo.cedula);
console.log(algo.estadoCivil);
