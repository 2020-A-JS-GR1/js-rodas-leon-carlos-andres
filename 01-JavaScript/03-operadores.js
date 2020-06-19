const arreglo = [
    {
        id: 1,
        nombre: "Adrian",
        nota: 5
    },
    {
        id: 2,
        nombre: "Pepe",
        nota: 9
    },
    {
        id: 3,
        nombre: "Juan",
        nota: 8
    },
    {
        id: 4,
        nombre: "Daniel",
        nota: 2
    },
    {
        id: 5,
        nombre: "Lily",
        nota: 7
    },
    {
        id: 6,
        nombre: "Jose",
        nota: 1
    },
    {
        id: 7,
        nombre: "Pamela",
        nota: 10
    },
    {
        id: 8,
        nombre: "Luis",
        nota: 8
    },
    {
        id: 9,
        nombre: "Jude",
        nota: 7
    },
    {
        id: 10,
        nombre: "Cristian",
        nota: 6
    }
];

// FUNCIONES COMO PARAMETROS
    // find
const respuestaFind = arreglo
    .find(
        function(valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaFind', respuestaFind);

    // findIndex
const respuestaIndex = arreglo
    .findIndex(
        function(valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaIndex', respuestaIndex);