const fs = require('fs');

function promesaLeerArchivo(path) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(contenido);
                    }
                }
            );
        }
    );
}

function promesaEscribirArchivo(path, contenido, contenidoNuevo) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenido + '\n' + contenidoNuevo,
                'utf-8',
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                }
            );
        }
    );
}

async function leerEscribir(path, contenidoNuevo) {
    try {
        const archivoOriginal = await promesaLeerArchivo(path);
        console.log('ORIGINAL:\n', archivoOriginal);
        await promesaEscribirArchivo(path, archivoOriginal, contenidoNuevo);
        const nuevoArchivo = await promesaLeerArchivo(path);
        console.log('NUEVO:\n', nuevoArchivo);
    } catch (error) {
        console.error('Se produjo un error: ', error);
    }
}

leerEscribir('./Deber03.txt', 'extra');