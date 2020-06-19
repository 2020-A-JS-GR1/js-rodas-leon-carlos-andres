const arreglo = [6, 7, 8, 9, 10];
// arreglo = 1; --> esto no se puede hacer porque es const
/*-------------------------*/
let cualquierCosa = "ASD";
cualquierCosa = 1;
cualquierCosa = true;
cualquierCosa = null;
cualquierCosa = {};
cualquierCosa = [];
console.log(cualquierCosa); // esto solo es para hacer acuerdo que un let puede cambiar, un const no.
/*-------------------------*/
const arregloTodo = [
    true, 1, 1.2, "Adrian", undefined, null, {},[1, 2, true, "A"]
]
console.log(arregloTodo); // un arreglo JS no tiene un "tipo" definido, un arreglo puede guardar lo que sea dentro

// FOR en JS
    // for of
for (let numero of arreglo){ // Valores
    console.log('numero', numero)
}
    // for in
for (let numero in arreglo){ // Indices
    console.log('numero', numero)
}

// Agregar o borrar cosas a un arreglo
arreglo.push(11); // agrega al final
console.log(arreglo);
arreglo.pop(); // elimina al final
console.log(arreglo);
arreglo.unshift(5) // agrega al principio del arreglo
console.log(arreglo);
arreglo.splice(0, 1); // elimina y agrega en la posicion que digamos
console.log(arreglo);
arreglo.splice(0,0, 3,4,5);
console.log(arreglo);

const indice = arreglo.indexOf(9); // esto es para encontrar el indice
console.log('indice', indice);      // (si hay varios del mismo solo te da la posicion del primero)
arreglo.splice(indice, 1); // esto lo elimina
console.log(arreglo);