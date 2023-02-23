/** PRE ENTREGA SIMULADOR PERFILES NETFLIX **/

class Usuarios {
    constructor(nombre, edad, genero, contraseña) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.contraseña = contraseña;
    }
}

const usuarioJuan = new Usuarios("Juan", 19, "Masculino", "1234");
const usuarioMaria = new Usuarios("Maria", 25, "Femenino", "5678");
const usuarioPedro = new Usuarios("Pedro", 30, "Masculino", "1234");
const usuarioAna = new Usuarios("Ana", 35, "Femenino", "5678");

const NombreJ = document.getElementById("nombreJuan");
const NombreM = document.getElementById("nombreMaria");
const NombreP = document.getElementById("nombrePedro");
const NombreA = document.getElementById("nombreAna");

const CardM = document.getElementById("cardNueva");

const arrayUsuarios = [usuarioJuan, usuarioMaria, usuarioPedro, usuarioAna];

console.log(arrayUsuarios);

// Función con menú de opciones

function menu() {
    alert("Bienvenido a Netflix");
    let opciones = prompt("Ingrese una opción: 1) Crear perfil 2) Borrar perfil 3) Editar perfil 4) Ingresar 5) Salir");
    return opciones;
}

function crearPerfil() {
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese su edad");
    let genero = prompt("Ingrese su género");
    let contraseña = prompt("Ingrese su contraseña");
    let usuario = new Usuarios(nombre, edad, genero, contraseña);
    arrayUsuarios.push(usuario);
    CardM.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="usuario1.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p id="nombreJuan" class="card-text">Juan</p>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img src="usuario2.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p id="nombreMaria" class="card-text">Maria</p>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img src="usuario3.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p id="nombrePedro" class="card-text">Pedro</p>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img src="usuario4.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p id="nombreAna" class="card-text">Ana</p>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img src="usuario1.png" class="card-img-top" alt="...">
    <div class="card-body">
      <p id="newUser" class="card-text"</p>
    </div>
  </div>`
    document.getElementById("newUser").innerHTML = nombre;
}

function borrarPerfil() {
    let nombre = prompt("Ingrese el nombre del perfil que desea borrar");
    let usuario = arrayUsuarios.find(usuario => usuario.nombre === nombre);
    let index = arrayUsuarios.indexOf(usuario);
    arrayUsuarios.splice(index, 1);
    if(nombre === "Juan"){
        CardM.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="usuario2.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p id="nombreMaria" class="card-text">Maria</p>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="usuario3.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p id="nombrePedro" class="card-text">Pedro</p>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="usuario4.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p id="nombreAna" class="card-text">Ana</p>
        </div>
      </div>`;
    }
    if(nombre === "Maria"){
        CardM.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="usuario1.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p id="nombreJuan" class="card-text">Juan</p>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
      <img src="usuario3.png" class="card-img-top" alt="...">
      <div class="card-body">
        <p id="nombrePedro" class="card-text">Pedro</p>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <img src="usuario4.png" class="card-img-top" alt="...">
      <div class="card-body">
        <p id="nombreAna" class="card-text">Ana</p>
      </div>
    </div>`;
    }
    if(nombre === "Pedro"){
        CardM.innerHTML = ` <div class="card" style="width: 18rem;">
        <img src="usuario1.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p id="nombreJuan" class="card-text">Juan</p>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="usuario2.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p id="nombreMaria" class="card-text">Maria</p>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
                <img src="usuario4.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <p id="nombreAna" class="card-text">Ana</p>
                </div>
              </div>`
    }
    if(nombre === "Ana"){
        CardM.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="usuario1.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p id="nombreJuan" class="card-text">Juan</p>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="usuario2.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p id="nombreMaria" class="card-text">Maria</p>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="usuario3.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p id="nombrePedro" class="card-text">Pedro</p>
        </div>
      </div>`;
    }
}

function editarPerfil() {
    let nombre = prompt("Ingrese el nombre del perfil que desea editar");
    let usuario = arrayUsuarios.find(usuario => usuario.nombre === nombre);
    let index = arrayUsuarios.indexOf(usuario);

    let nombreNuevo = prompt("Ingrese el nuevo nombre");
    if(nombre === "Juan"){
        NombreJ.innerText = nombreNuevo;
    }
    if(nombre === "Maria"){
        NombreM.innerText = nombreNuevo;
    }
    if(nombre === "Pedro"){
        NombreP.innerText = nombreNuevo;
    }
    if(nombre === "Ana"){
        NombreA.innerText = nombreNuevo;
    }
    let edadNueva = parseInt(prompt("Ingrese la nueva edad"));
    let generoNuevo = prompt("Ingrese el nuevo género");
    let contraseñaNueva = prompt("Ingrese la nueva contraseña");
    let usuarioModificado = new Usuarios(nombreNuevo, edadNueva, generoNuevo, contraseñaNueva);

    arrayUsuarios.splice(index, 1, usuarioModificado);
}

function ingresarPerfil() {
    let nombre = prompt("Ingrese su nombre de usuario");
    let contraseña = prompt("Ingrese su contraseña");
    let usuario = arrayUsuarios.find(usuario => usuario.nombre === nombre && usuario.contraseña === contraseña);
    if (usuario) {
        alert("Bienvenido " + usuario.nombre);
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function salir() {
    alert("Gracias por visitar Netflix");
}

let opciones = menu();

switch(opciones) {
    case "1":
        crearPerfil();
        break;
    case "2":
        borrarPerfil();
        break;
    case "3":
        editarPerfil();
        break;
    case "4":
        ingresarPerfil();
        break;
    case "5":
        salir();
        break;
    default:
        alert("Opción incorrecta");
        break;
}

console.log("Nombres de los usuarios: ")
arrayUsuarios.forEach(usuario => {
    console.log(usuario.nombre);
});

console.log("Edades de los usuarios: ")
arrayUsuarios.forEach(usuario => {
    console.log(usuario.nombre, usuario.edad);
});

console.log("Géneros de los usuarios: ")
arrayUsuarios.forEach(usuario => {
    console.log(usuario.nombre, usuario.genero);
});

console.log("Contraseñas de los usuarios: ")
arrayUsuarios.forEach(usuario => {
    console.log(usuario.nombre, usuario.contraseña);
});

console.log("Nombres de los usuarios con menos de 5 caracteres:  ")
console.log(arrayUsuarios.filter(usuario => usuario.nombre.length < 5));

console.log("Nombres de los usuarios con 5 caracteres o más:  ")
console.log(arrayUsuarios.filter(usuario => usuario.nombre.length >= 5));


