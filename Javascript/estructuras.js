//Estructuras de CONTROL -> CONDICIONALES

//IF -> EVALUA CASOS VERDADEROS

//IF ELSE -> EVALUAR CASOS VERDADEROS Y FALSOS

let condicion = true;
if(condicion){
    console.log("ESTE CODIGO SE EJECUTA EN CASO TRUE");
} else{
    console.log("ESTE CODIGO SE EJECUTA EN CASO TRUE");
}

/*
    MAYOR QUE   >
    MENOR QUE   <
    MENOR O IGUAL   <=
    MAYOR O IGUAL   >=
*/

if( 10 > 20){
    console.log("Afirmativo");
}else{
    console.log("Negativo");
}

//Operador Ternario -> REEMPLASO DE SINTAXIS PARA EL IF ELSE
// CONDICION ? CODIGO TRUE : CODIGO FALSE

10 < 10 ? console.log("Afirmativo") : console.log("Negativo");

//IF ELSEIF

let variableAux = 3;
if(variableAux<10){
    console.log("Afirmativo");
} else if(variableAux>5){
    console.log("Si es mayor");
}else{
    console.log("No cumplio las espectativas")
}

//Estructuras repetitivas o Bucles

//WHILE -> MIENTRAS
let numero = 1;
while (numero < 10) {
    console.log(numero);
    numero++;
}

//DO WHILE
//HACER MIENTRAS

let numero=1;
do {
    console.log(numero);
    numero++;
} while(numero < 10 && numero >2);