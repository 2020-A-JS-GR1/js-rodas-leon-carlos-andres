let nombre:string = 'Carlos';
// nombre = 1; --> ya no deja hacer cosas como esto
nombre = 'Andrés';
// Duck Typing
let edad: number = 28;
let casado: boolean = false;
let fecha: Date = new Date()
let sueldo: number;
sueldo = 12.4;
// sueldo = "algo" --> ya no deja hacer esto

let marihuana: any = 2; // esto es una mala practica
marihuana = "weed";
marihuana = true;
marihuana = () => '2';

let edadMultiple: number | string = 2;
edadMultiple = "algo";
edadMultiple = 222;
edadMultiple = 'dos';