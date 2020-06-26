const fs = require('fs'); // Esto es el import en JS practicamente

console.log('Primero'); // Síncrona

fs.readFile( // Asíncrona
    './06-ejemplo.txt',
    'utf-8',
    (error, contenido)=>{ // CALLBACK
        console.log('Segundo');
        if(error){
            console.error('Hubo error', error);
        } else {
            console.log(contenido);
        }
    }
);

console.log('Final'); // Síncrona