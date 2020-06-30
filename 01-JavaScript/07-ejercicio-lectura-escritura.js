const fs = require('fs');

/* CON CALLBACKS
- Hacer una función que me acepte como parámetro una variable
con el path del archivo y el contenido a agregar al contenido del archivo
- La función debe tomar estos dos parámetros y leer el archivo y añadir
el texto al final del archivo
 */

/* HECHO POR MI

function escribirArchivo(path, contenidoNuevo){
    // fs.readFile(path, codificacion, callback)
    fs.readFile(
        path,
        'utf-8',
        (error, contenido)=>{ // CALLBACK
            // fs.writeFile(path, contenido, codificacion callback);
            fs.writeFile(path, contenido + contenidoNuevo, (err) => {
                if (err) throw err;
            });
            if(error){
                console.error('Hubo error', error);
            } else {
                console.log(contenido + contenidoNuevo);
            }
        }
    );
}

// escribirArchivo('..', 'Buenas Tardes');
escribirArchivo('./06-ejemplo.txt', '\nqueridos estudiantes');

 */

// HECHO POR EL INGE
function escribirArchivo(path, contenidoNuevo) {
    fs.readFile(
        path,
        'utf-8',
        (error, contenidoLeido) => {
            if (error) {
                console.error('Error leyendo archivo', error);
            } else {
                fs.writeFile(
                    path,
                    contenidoNuevo + '\n' + contenidoLeido,
                    'utf-8',
                    (error) => {
                        if(error){
                            console.error('Error leyendo archivo', error);
                        }else{
                            console.log('Operacion terminada con exito')
                        }
                    });
            }
        }
    );
}
escribirArchivo(
    './06-ejemplo.txt',
    'Buenas tardes'
);