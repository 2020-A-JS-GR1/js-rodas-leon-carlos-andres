// Arreglo de estudiantes para el Deber

const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

// DEBER 1

const vocales = ["a", "e", "i", "o", "u",
                "A", "E", "I", "O", "U"];
const consonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z",
                     "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

    // Función para contar vocales
function contarVocales(text) {
    let contador = 0;
    for (let letter of text.toLowerCase()) {
        if (vocales.includes(letter)) {
            contador++
        }
    }
    return contador;
}

    // Función para contar consonantes
function contarConsonantes(text) {
    let contador2 = 0;
    for (let letter of text.toLowerCase()) {
        if (consonantes.includes(letter)) {
            contador2++
        }
    }
    return contador2;
}

    // Les agrega los puntos extra a todos los estudiantes
const puntosExtra = arreglo
    .map(
        (valorActual) => {
            valorActual.nota = (valorActual.nota + (contarVocales(valorActual.nombre)*0.1) + (contarConsonantes(valorActual.nombre)*0.05)).toFixed(2);
            return valorActual;
        }
    );
console.log('Notas de todos con puntos extra', puntosExtra);

    // Filtra para mostrar solo los que tienen más de 14
const pasaron = arreglo
    .map(
        function(valorActual) {
            if (valorActual.nota >= 14) return valorActual;
        }
    );
console.log('¿Quiénes pasaron?', pasaron.filter(n=>n!==undefined)); // El ".filter(n=>n!==undefined)" sirve para quitar los "undefined"