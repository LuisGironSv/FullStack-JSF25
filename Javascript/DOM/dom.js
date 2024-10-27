console.log("Estoy andando soy Dominic");
let elementoDOM = document.getElementById('textoSaludo');
console.log(elementoDOM);
console.log(elementoDOM.innerHTML);
console.log(elementoDOM.innerText);

elementoDOM.innerText = "Te cambie desde JS";
elementoDOM.innerHTML = "<span>Cambie de nuevo</span>"

//Agarrando otro elemento de un HTML
const contenido = document.querySelector('#content')
console.log(contenido);
contenido.innerHTML = '<h1> Ingresado desde JS</h1>'
console.log(contenido)

/* 
Realiza unan funcion que reciba un array NUMERICO y retorne un array completamente nuevo solamente con los numeros que sean multiplos de 3 y que la suma de todos sus numeros de menos de 100.
*/

const btnApretable = document.getElementById('btnMagia');

btnApretable.addEventListener('click', () => {
    alert('Aveda Kadavra');
    console.log("despues del alert, COPPERFIELD");
});

function apretandoBoton() {
    let nombre = prompt("Ingresa un Nombre");
    let apellido = prompt("Ingresa un apellido");
    alert(nombre+" "+apellido);
}

function cambiandoInput(e) {
    console.log(e.target.value);
    console.log("cambie");
}