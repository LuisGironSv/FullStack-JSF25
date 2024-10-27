//Declaracion de variable JS
let variable = "Luis";

//Declaracion de variable + TIPO DE DATO en TS
let cadenaTexto:string = "Luis";
let numero:number = 1.5;
let boleano:boolean = false;

//Declaracion de array
let arraycito:string[] = ["asd", "asd", "123"];

let arrayNumerico:number[] = [11,12,13,45];

//NUNCA UTILIZAR ESTO
let arrayMALO:any[] = ["asd", 12, false];

//Array numerico o string
let arrayNumString:number[]|string[] = ["ads"];

//Declaracion de Tuplas
//Es un array con indices limiatos y con sus tipo de dato declarado previamente
let datosUsuario:[string,number];
datosUsuario = ["Jairo", 75];

//Funciones en TS
function tipoVoid():void {
    console.log("Chauchis");
}

function sumar():number{
    return 2+2;
}

function sumarOConcatenar():number|string{
    return 5+"3";
}

function saludar(nombre:string):string{
    return 'hola como estas? ${nombre}'
}