const arreglo = [
    {
        id: 1,
        nombre: "Adrian",
        nota: 4
    },
    {
        id: 2,
        nombre: "Pepe",
        nota: 18
    },
    {
        id: 3,
        nombre: "Juan",
        nota: 16
    },
    {
        id: 4,
        nombre: "Daniel",
        nota: 3
    },
    {
        id: 5,
        nombre: "Lily",
        nota: 14
    },
    {
        id: 6,
        nombre: "Jose",
        nota: 7
    },
    {
        id: 7,
        nombre: "Pamela",
        nota: 20
    },
    {
        id: 8,
        nombre: "Luis",
        nota: 15
    },
    {
        id: 9,
        nombre: "Jude",
        nota: 12
    },
    {
        id: 10,
        nombre: "Cristian",
        nota: 16
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

    // forEach
const respuestaForEach = arreglo
    .forEach(
        function(valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
        }
    );
console.log('repuestaForEach', respuestaForEach); // siempre es undefined, solo sirve para iterar

    // MAP - devolver un nuevo elemento
const respuestaMap = arreglo
    .map(
        function(valorActual, indiceActual, arregloCompleto) {
            valorActual.nota = valorActual.nota + 1;
            return valorActual;
        }
    );
console.log('respuestaMap', respuestaMap);

const respuestaMapNuevo = arreglo
    .map(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota;
        }
    );
console.log('respuestaMapNuevo', respuestaMapNuevo);

    // Filter - tiene truth o false
const respuestaFilter = arreglo
    .map(
        function(valorActual, indiceActual, arregloCompleto) {
            return valorActual.nota >= 7;
        }
    );
console.log('respuestaFilter', respuestaFilter);

// Hay ALGUNA nota menor a nueve? Sí o No
    //OR - SOLO UNO TIENE QUE CUMPLIR
const respuestaSome = arreglo
    .some (
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota < 9;
        }
    );
console.log('respuestaSome', respuestaSome);

// Todas las notas son mayores a 14? Sí o No
    //AND - TODOS TIENEN QUE CUMPLIR
const respuestaAny = arreglo
    .every (
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota > 14;
        }
    );
console.log('respuestaAny', respuestaAny);


// reduce izq -> der
// reduceRight der -> izq
const respuestaReduce = arreglo
    .reduce(
        (valorAcumulado, valorActual, indice, arreglo) => {
            return valorAcumulado + valorActual.nota;
        },
        0 // Acumulador
    );
console.log('respuestaReduce', respuestaReduce);

// Ejemplo para demostrar por que usar operadores en vez de for
const arregloEstudiantesMenoresANueve = arreglo
    .map((v)=> v.nota * 1.3) // anadiendo 30%
    .filter((nota)=>nota<9) // Busco a los < 9
const totalPuntosEstudiantes = arregloEstudiantesMenoresANueve
    .reduce((acumulado,actual)=>acumulado+actual, 0); // Total
const notaPromedio = totalPuntosEstudiantes / arregloEstudiantesMenoresANueve.length;
console.log('notaPromedio', notaPromedio);