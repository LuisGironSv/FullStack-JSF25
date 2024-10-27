//Programacion Orientada a Objetos
//ES una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos
//Conceptos Principales de POO -> Clases y los Objetos
// Clases -> Molde para generar algo
// Objeto -> lo que podemos crear en base a ese molde
// Declaracion de Clase
var Auto = /** @class */ (function () {
    //Constructor -> Metodo reservado que nos sirve para instanciar objetos
    function Auto(numChasisParam, motorParam, colorParam, tipoCompustibleParam, transmisionParam, plazasParam, frenosParam, modeloParam, añoFabParam) {
        this.numChasis = numChasisParam;
        this.motor = motorParam;
        this.color = colorParam;
        this.tipoCombustible = tipoCompustibleParam;
        this.transmision = transmisionParam;
        this.plazas = plazasParam;
        this.frenos = frenosParam;
        this.modelo = modeloParam;
        this.añoFab = añoFabParam;
    }
    //Metodos -> Acciones
    Auto.prototype.encender = function () {
        console.log("Brum re brum");
    };
    Auto.prototype.apagar = function () {
        console.log("Chauchis");
    };
    return Auto;
}());
//Instanciar objetos a traves de una clase -> Crear un Objeto
var autito = new Auto(123, "v8", "Azul", "Gasolina", "Manual", 4, "ABC", "Huayra", 2019);
console.log(autito);
//Asignamos una propiedad al objeto
autito.modelo = "Huayra";
console.log(autito);
var autos;
