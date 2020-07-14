var carlos = {
    nombre: 'Carlos',
    apellido: 'Rodas',
    casado: false,
    estado: 'BN',
    sueldo: 11.2,
    // funciones
    imprimirUsuario: function (mensaje) {
        return 'El mensaje es: ' + mensaje;
    },
    // ejercicio 1
    calcularImpuesto: function (numero) {
        return numero + (numero * 0.12);
    },
    estadoActual: function () {
        return 'AP ' + 'AF ' + 'AT';
    }
};
carlos.calcularImpuesto(100);
carlos.estadoActual();
