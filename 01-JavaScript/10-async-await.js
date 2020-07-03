const promesaLeerArchivo = new Promise();
const promesaEscribirArchivo = new Promise();

// ASYNC y AWAIT solo dentro de una función

async function ejercicio(){
    console.log('1');
    try {
        const contenidoArchivoActual = await promesaLeerArchivo();
        await promesaEscribirArchivo();
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
    } catch (e) {
        console.error(e);
    }
}

const f = async() => {
    // contenido
}