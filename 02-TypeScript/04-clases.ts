class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido: string = '';

    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ){
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = this.nombre + ' ' + this.apellido;
    }

    private mostrarNombreApellido() {
        return this.nombreYApellido;
    }

}

class Usuario extends Persona {
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string,
        public estadoCivil: string,
    ) {
        super(nombreParametro, apellidoParametro);
    }

}

const algo = new Usuario(
    "Carlos",
    "Rodas",
    "15615615",
    "soltero"
);

console.log(algo.nombre);
console.log(algo.apellido);
console.log(algo.cedula);
console.log(algo.estadoCivil);
