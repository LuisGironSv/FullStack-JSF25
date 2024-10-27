//Declaracion de variable JS
var variable = "Luis";
//Declaracion de variable + TIPO DE DATO en TS
var cadenaTexto = "Luis";
var numero = 1.5;
var boleano = false;
//Declaracion de array
var arraycito = ["asd", "asd", "123"];
var arrayNumerico = [11, 12, 13, 45];
//NUNCA UTILIZAR ESTO
var arrayMALO = ["asd", 12, false];
//Array numerico o string
var arrayNumString = ["ads"];
//Declaracion de Tuplas
//Es un array con indices limiatos y con sus tipo de dato declarado previamente
var datosUsuario;
datosUsuario = ["Jairo", 75];
//Funciones en TS
function tipoVoid() {
    console.log("Chauchis");
}
function sumar() {
    return 2 + 2;
}
function sumarOConcatenar() {
    return 5 + "3";
}
function saludar(nombre) {
    return 'hola como estas? ${nombre}';
}
