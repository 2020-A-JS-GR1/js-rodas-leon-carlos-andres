// MUTABLES E INMUTABLES
    // Mutables

var numeroUno = 1;
let numeroDos = 2;

numeroUno = 5;
numeroDos = 8;

numeroUno = false;
numeroDos = true;

    // Inmutables

const configuracionArchivos = "PDF";
        // configuracionArchivos = "XML"; <-- no se puede hacer esto porque es const

// TIPOS DE VARIABLES

const numero = 1; // Number
const sueldo = 1.2; // Number
const texto = "Hola"; //String
const booleano = false; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined
const apellido = 'Rodas';

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);

// IF

if (true == true){
    console.log("Es la verdá");
} else {
    console.log("Es fake news");
}

    // Strings
if (""){
    console.log("Es verdadero");
} else {
    console.log("Es falso");
}

if ("Algo"){
    console.log("Es verdadero");
} else {
    console.log("Es falso");
}

    // Numeros
if (1){
    console.log("Es true");
} else {
    console.log("No es true");
}

if (0){
    console.log("Es true");
} else {
    console.log("No es true");
}

if (-1){
    console.log("Es true");
} else {
    console.log("No es true");
}

    //null y undefined
if (null){
    console.log("Es ver");
} else {
    console.log("No es ver");
}

if (undefined){
    console.log("Es ver");
} else {
    console.log("No es ver");
}

// ORDEN DE IMPORTANCIA
    // 1) const
    // 2) let
    // 3) var <-- jamás topar esto, usar let si necesita una variable mutable

// OBJETOS JSON - ARREGLOS

const datos = {
    nombre: "Carlos", // llave: valor,
    apellido: "Rodas",
    cel: "0954888756",
    edad: "28",
    ropa: {
        color: "plomo",
        talla: "30"
    }, // se puede tener objetos dentro de objetos
    mascotas: ['cachetes', 'pecas', 'firulais'] // también se puede poner arreglos dentro de  objetos
} // object

const arregloNumeros = []; // empty object

//Acceder a las propiedades del objeto
console.log(datos.nombre + " - " + datos.apellido);
console.log(datos);
console.log(arregloNumeros);

// Otro tipo de sintaxis
datos.nombre;
datos["nombre"]; // Ambas son validas
datos.nombre = "Andres";
console.log(datos["nombre"]);
datos["nombre"]= "Carlos";
console.log(datos.nombre);

// crear nueva propiedad
datos.sueldo;
console.log(datos.sueldo); // Esto saldría undefined porque aun no hacemos nada con "sueldo"
datos.sueldo = 1.2;
console.log(datos.sueldo); // Ahora si va a devolver algo
datos["gastos"] = 0.8;
console.log(datos.gastos); // Este formato tambien es valido

// Una clase muy util en JS "Object.keys()"
console.log(Object.keys(datos));