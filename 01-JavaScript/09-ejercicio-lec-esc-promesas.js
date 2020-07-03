const fs = require('fs');

/* CON PROMESAS
- Hacer una función que me acepte como parámetro una variable
con el path del archivo y el contenido a agregar al contenido del archivo
- La función debe tomar estos dos parámetros y leer el archivo y añadir
el texto al final del archivo.
- Al final vamos a leer el archivo nuevamente e imprimirlo en consola.
*/

// HECHO POR MI
/*
function getData(fileName, type) {
    return new Promise(function(resolve, reject){
        fs.readFile(fileName, type, (err, data) => {
            err ? reject(err) : resolve(data);
            if(err){
                console.error('Hubo error', err);
            } else {
                console.log('VIEJO:');
                console.log(data);
            }
        });
    });
}

function writeData(fileName, type, newData) {
    return new Promise(function(resolve, reject){
        fs.readFile(fileName, type, (err, data) => {
            err ? reject(err) : resolve(data);
            fs.writeFile(
                fileName,
                data + '\n' + newData,
                'utf-8',
                (error) => {
                    if(error){
                        console.error('Error leyendo archivo', error);
                    }else{
                        console.log('\nNUEVO:');
                        console.log(data + '\n' + newData);
                    }
                }
            );
        });
    });
}

getData('06-ejemplo.txt', 'utf-8');
writeData('06-ejemplo.txt', 'utf-8', 'extra');
 */

// HECHO POR EL INGE
