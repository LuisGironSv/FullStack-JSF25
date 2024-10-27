//  EJERCICIO 1
function ejercicio1() {
    let edad = prompt('Ejercicio 1  - Edad: ');
    edad < 18 ? console.log("es menor de edad"): console.log("Es mayor de edad");

}

// EJERCICIO 2
function ejercicio2(params) {
    let nombre = prompt('Ejercicio 2  - Nombre Alumno: ');
    let carnet = prompt('Ejercicio 2  - Carnet: ');
    let examen = prompt('Ejercicio 2  - Nota examen: ');
    let tareas = prompt('Ejercicio 2  - Nota tareas: ');
    let asistencia = prompt('Ejercicio 2  - Nota asistencia: ');
    let investigacion = prompt('Ejercicio 2  - Nota investigación: ');

    let nota_final = examen * 0.2 + tareas * 0.4 + asistencia * 0.1 + investigacion * 0.3;

    console.log('Alumno: '+nombre+' Carnet: '+carnet+ ' '+ 'Nota final: '+ nota_final);
}
// EJERCICIO 3
function ejercicio3(params) {
    let nombre2 = prompt('Ejercicio 3  - Nombre: ');
    let salario = prompt('Ejercicio 3  - Salario: ');
    let categoria = prompt('Ejercicio 3  - Categoria: ');
    let aumento = 0.0;

    if (categoria == 'A' ) {
        aumento = salario * 0.15;
    } else if(categoria == 'B' ){
        aumento = salario * 0.3;
            }else if(categoria == 'C' ){
                aumento = salario * 0.1;
                }else if(categoria == 'D'){
                    aumento = salario * 0.2;
                }else{
                    console.log('Elija una categoria valida');
                  //  break();
                    
                }

    console.log('Trabajadodr= '+nombre2+' Salario= '+ salario+' Categoria= '+categoria+' Aumento= '+aumento);
}

// EJERCICIO 4
function ejercicio4(){
    function numeroMayor(num1, num2) {
        let mayor;
        if (num1 >= num2) {
            mayor = num1;
        }else{
            mayor = num2
        }
        return mayor;
    }

    let num1 = prompt('Ejercicio 4  - Primer numero: ');
    let num2 = prompt('Ejercicio 4  - Segundo numero: ');

    console.log('El mayor es: '+numeroMayor(num1,num2));
}
// EJERCICIO 5
function ejercicio5(){
    let imgCoche = document.getElementsByClassName('contenido');

    let coche = prompt('Elija el coche a vender:\n 1- FORD FIESTA\n 2- FORD FOCUS\n 3- FORD ESCAPE\n');
    if (coche == 1) {
        let newimg = document.createElement("img");
        newimg.setAttribute("src", "fordfiesta.jpg"); 
        imgCoche.appendChild(newimg);
    } else if(coche == 2){
        let newimg = document.createElement("img");
        newimg.setAttribute("src", "fordfocus.jpg"); 
        imgCoche.appendChild(newimg);
    }else{
        let newimg = document.createElement("img");
        newimg.setAttribute("src", "fordscape.jpg"); 
        imgCoche.appendChild(newimg);
    }
}