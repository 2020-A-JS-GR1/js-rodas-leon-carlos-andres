// Juntar 2 objetos
const adrian = {
    nombre: "Adrian"
};
const carolina = {
    apellido: "Eguez"
};
const adrianCarolina = {
    ...adrian,
    ...carolina
}
console.log('adrianCarolina', adrianCarolina);

// Juntar 2 arreglos
const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];
const superArreglo = [
    ...arregloUno,
    ...arregloDos
]
console.log('superArreglo', superArreglo);