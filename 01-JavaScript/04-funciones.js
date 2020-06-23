// 04-funciones.js

function soloNumeros(a,b,c) {
    return a - b + c; // valor a devolver
}

function soloLetras(a,b,c){ // undefined
    console.log(a,b,c);
}

// soloNumeros - JS no ayuda a ver las fallas que tenemos al escribir el código porque no es tipado
soloNumeros('v', true, [1,2,3]);
soloNumeros();
soloNumeros(1,2,3,4,5,6,78,9,10);
    // ninguno de estos da error a pesar de que no tienen sentido

// FUNCIONES NOMBRADAS
function funcionNombrada(){}
funcionNombrada();

// FUNCIONES ANONIMAS o sin nombre
const funcionNombradaDos = function(){}
var funcionNombradaTres = function(){}
let funcionNombradaCuatro = function(){}
funcionNombradaDos();
funcionNombradaTres();
funcionNombradaCuatro();

// FAT ARROW FUNCTIONS
const funcionNombradaCinco = ()=>{};
const funcionNombradaSeis = (x) => {
    return x+1;
}
const funcionNombradaSiete = (x) => x + 1 ; // Omito llaves y return al hacerlo en una sola línea
const funcionNombradaOcho = x => x + 1 ; // Tengo un solo parámetro, puedo omitar también los paréntesis
const funcionNombradaNueve = (x,y,z) => x + y + z ;

// Parámetros infinitos
function sumarNumeros(numeroInicial, ...otrosNumeros) {
    return numeroInicial + otrosNumeros.reduce((a,v)=> a + v,0);
}
sumarNumeros(1,2,3,4,5,6,7,8,9,10);