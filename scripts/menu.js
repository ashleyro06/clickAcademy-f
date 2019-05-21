function inicio() {
  location.href = "./index.html";
}

function miAulaBoton() {
  location.href = "./miAula.html";
}

function ingresarBoton() {
  location.href = "./iniciarSesion.html";
}

function subirArchivo() {
  location.href = "./subirArchivo.html";
}

function cerrarSesion() {
  let user = firebase.auth().currentUser;
  if (user) {
    firebase
      .auth()
      .signOut()
      .then(function() {
        alertas("Has cerrado sesión en este dispositivo.").then(response => {
          location.href = "./index.html";
        });
      });
  }
}

function buscar() {}

function categoriaDocumentos() {}

function categoriaVideos() {}

function categoriaPresentaciones() {}
