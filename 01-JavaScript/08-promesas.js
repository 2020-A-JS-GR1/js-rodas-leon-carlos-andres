const fs = require('fs');

function promesaEsPar(numero) {
    const miPrimeraPromesa = new Promise ( // Definicion de la promesa
        (resolve, reject) => {
            if (numero%2 == 0){
                resolve(numero);
            } else {
                reject('No es par =(');
            }
        }
    )
    return miPrimeraPromesa;
}

function promesaElevarAlCuadrado(numero) {
    const miPrimeraPromesa = new Promise ( // Definicion de la promesa
        (resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado);
        }
    )
    return miPrimeraPromesa;
}

promesaEsPar(4)
    .then( // try
        (numeroPar) => {
            console.log('Contenido: ', numeroPar);
            return promesaElevarAlCuadrado(numeroPar)// promesa !!!

        }
    )
    .then(
        (numeroParAlCuadrado) => {
            console.log('Numero par al cuadrado: ', numeroParAlCuadrado);
        }
    )
    .catch( // catch
        (error) => {
            console.error('Contenido catch', error);
        }
    )

