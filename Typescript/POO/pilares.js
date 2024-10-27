//4 Pilares POO
/*
HERENCIA
POLIMORFISMO
ENCAPSULAMIENTO
ABSTRACCION
*/
var Person = /** @class */ (function () {
    function Person(nameParam, ageParam, duiParam) {
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }
    Person.prototype.respirar = function () {
        console.log("Affff");
    };
    return Person;
}());
var personita = new Person("Luis Giron", 75, "01234567-8");
personita.name = "Juan Perez";
console.log(personita);
