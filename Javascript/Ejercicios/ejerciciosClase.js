let arreglo1 = [2,4,45,6,12,24,33,55,65,10]; //Cadena a evaluar
let i=0; //Variable Contador
let suma=0; 
let arreglo2 = []; //Cadena a devolver

//Bucle con el que se buscara los numeros divisibles a 3 y que sumen menos de 100
while (i < arreglo1.length) {
    //Verifica si la posicion es divisible a 3 y si la suma es menor o igual a 100
    if (arreglo1[i] % 3 === 0 && suma + arreglo1[i] <=100) {
        suma+=arreglo1[i]; //Se acumula el numero encontrado
        arreglo2.push(arreglo1[i]); //Se anexa al nuevo arreglo el valor encontrado
    }
    i++; //Incremento del contador del bucle
}
// Imprimimos los resultados
console.log("Los Multiplos de 3 son: ",arreglo2);
console.log("La suma menor a 100 es: ",suma);