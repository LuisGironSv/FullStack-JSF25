//4 Pilares POO

/*
HERENCIA
POLIMORFISMO
ENCAPSULAMIENTO -> Limitar el acceso a algo a traves de MODIFICADORES DE ACCESO
ABSTRACCION -> 
*/

/*
Modificadores de Acceso
Public -> Todo el mundo puede acceder
Private -> Solo ella va a tener acceso 
Protected -> Va a tener acceso la misma clase y sus hijos
*/

class Person{
    private name:string;
    private age:number;
    private dui:string;

    constructor(nameParam:string,ageParam:number,duiParam:string){
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }
    respirar(){
        console.log("Affff");
    }

    //Getters y Setters
    getName():string{
        return this.name;
    }

    setAge(ageParam:number){
        this.age = ageParam;
    }
    
}

let personita = new Person("Luis Giron", 75, "01234567-8");
//personita.name = "Juan Perez";
console.log(personita);
