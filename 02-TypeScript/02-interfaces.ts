
interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number; // opcional
    sueldo?: number; // opcional
    casado: boolean;
    estado: 'AC' | 'IN' | 'BN';
    // funciones
    imprimirUsuario: (mensaje: string) => string;
    // Ejercicio1: parámetro número impuesto, sueldo + sueldo * impuesto
    calcularImpuesto: (numero: number) => number;
    // Ejercicio2: No reciba parámetros, pero devuelva 'AP' 'AF' 'AT'
    estadoActual: () => string;
}

const carlos: Usuario | number = {
    nombre: 'Carlos',
    apellido: 'Rodas',
    casado: false,
    estado: 'BN',
    sueldo: 11.2,
    // funciones
    imprimirUsuario: (mensaje: string) => {
        return 'El mensaje es: ' + mensaje;
    },
    // ejercicio 1
    calcularImpuesto: (numero: number) => {
        return numero + (numero * 0.12);
    },
    estadoActual: () => {
        return 'AP ' + 'AF ' + 'AT';
    }
};

carlos.calcularImpuesto(100);
carlos.estadoActual();