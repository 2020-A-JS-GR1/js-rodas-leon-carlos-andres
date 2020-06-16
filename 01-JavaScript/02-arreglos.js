const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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