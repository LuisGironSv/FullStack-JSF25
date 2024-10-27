//Programacion Orientada a Objetos
//ES una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos

//Conceptos Principales de POO -> Clases y los Objetos
// Clases -> Molde para generar algo
// Objeto -> lo que podemos crear en base a ese molde

// Declaracion de Clase

class Auto{
    //Caracteristicas generales -> propiedades o atributos
    numChasis:number;
    motor:string;
    color:string;
    tipoCombustible:string;
    transmision:string;
    plazas:number;
    frenos:string;
    modelo:string;
    añoFab:number;
    
    //Constructor -> Metodo reservado que nos sirve para instanciar objetos
    constructor(numChasisParam:number,motorParam:string,colorParam:string,tipoCompustibleParam:string, transmisionParam:string,plazasParam:number,frenosParam:string, modeloParam:string, añoFabParam:number){
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
    encender():void{
        console.log("Brum re brum");
    }

    apagar():void{
        console.log("Chauchis");
    }

}

//Instanciar objetos a traves de una clase -> Crear un Objeto
let autito:Auto = new Auto(123,"v8","Azul","Gasolina","Manual",4,"ABC","Huayra",2019);

console.log(autito);

//Asignamos una propiedad al objeto
autito.modelo="Huayra";
console.log(autito);

let autos