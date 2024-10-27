//Mensajes de error y exito al rellenar formulario
document.getElementById('btn_send').addEventListener('click', function(event) {
    event.preventDefault();
    const form_name1 = document.getElementById('form_name').value;
    const form_email1 = document.getElementById('floatingInput').value;
    const form_message1 = document.getElementById('floatingTextarea2').value;

if (form_name1 === "" || form_email1 === "") {
    // Mensaje de error
    mostrarAlerta();
} else {
    // Mensaje de exito
    alert("Formulario enviado con éxito");
}
console.log('Name:', form_name1);
console.log('Email:', form_email1);
console.log('Message:', form_message1);
});

function mostrarAlerta() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes llenar todos los campos',
        background: '#f2dede',
    })
}
//cambio de color de fondo y texto con 2 botones diferentes
document.addEventListener("DOMContentLoaded", function() {
    const btnWhite = document.getElementById('btn_white');
    const btnOriginal = document.getElementById('btn_original');
    const body = document.querySelector('body');

    // cambio de fondo a blanco
    btnWhite.addEventListener('click', function() {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    });

    // regresar a gris original
    btnOriginal.addEventListener('click', function() {
        body.style.backgroundColor = 'gray';
        body.style.color = 'white';
    });
});

function infoOscar(){
    const contenidoNuevo = `<section class="members1 row">
            <article class="col-6 textUser">
              <h1 class="text-center">Oscar Beltran</h1>
              <p class="text-center">Java, Javascript, HTML, CSS</p>
            </article>
            <section class="img-m1 col-6">
              <img src="./img/Imagen de WhatsApp 2024-09-22 a las 21.14.23_0250bd72.jpg" width="300" height="300" alt="">
            </section>
          </section>
            
          <section class="projects-header mb-5">
              <h2 class="text-center">My Projects</h2>
          </section>
        
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./img/Proyectos Carlos/Imagen de WhatsApp 2024-09-24 a las 16.34.09_be433167.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="./img/Proyectos Carlos/LUIS.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>`;
            const seccionMiembros = document.querySelector('#miembros');
            seccionMiembros.innerHTML = contenidoNuevo;
}

function infoAnthony(){
    const contenidoNuevo =  `<section class="members1 row">
              <article class="col-6 textUser">
              <h1 class="text-center">Anthony Arias</h1>
              <p class="text-center">Java, Javascript, HTML, CSS, Python, .Net</p>
              </article>
          <section class="img-m1 col-6">
              <img src="./img/yop.jpg" width="300" height="300" alt="">
          </section>
          </section>
              

          <section class="projects-header mb-5">
              <h2 class="text-center">My Projects</h2>
          </section>
          
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="./img/Proyectos Anthony Arias/Captura de pantalla 2024-09-23 212946.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="./img/Proyectos Anthony Arias/Captura de pantalla 2024-09-23 213011.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="./img/Proyectos Anthony Arias/Captura de pantalla 2024-09-23 213035.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="./img/Proyectos Anthony Arias/Captura de pantalla 2024-09-23 213053.png" class="d-block w-100" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </section>`
          const seccionMiembros = document.querySelector('#miembros');
          seccionMiembros.innerHTML = contenidoNuevo;
}

function infoLuis(){
    const contenidoNuevo =  `<section class="members1 row">
                  <article class="col-6 textUser">
                  <h1 class="text-center">Luis Giron</h1>
                  <p class="text-center">Java, Javascript, HTML, CSS, Python, .Net</p>
                  </article>
              <section class="img-m1 col-6">
                  <img src="./img/LUIS.jpg" width="300" height="300" alt="">
              </section>
              </section>
                  
              <section class="projects-header mb-5">
                  <h2 class="text-center">My Projects</h2>
              </section>
              
              <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="./img/Proyectos Anthony Arias/Captura de pantalla 2024-09-23 212946.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="./img/Proyectos Anthony Arias/Captura de pantalla 2024-09-23 213011.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="./img/Proyectos Anthony Arias/Captura de pantalla 2024-09-23 213035.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="./img/Proyectos Anthony Arias/Captura de pantalla 2024-09-23 213053.png" class="d-block w-100" alt="...">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
          </section>`;
          const seccionMiembros = document.querySelector('#miembros');
            seccionMiembros.innerHTML = contenidoNuevo;
}


