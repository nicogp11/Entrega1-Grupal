function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}
function recargar (){
    location.href="index.html"
}
function insesion() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let password1 = document.getElementById("password1").value;
  let passwordTamaño = password1.length;
  let password2 = document.getElementById("password2").value;
  let aceptoTerminos = document.getElementById("terminos").checked;
  if (
    nombre    !== "" &&
    apellido  !== "" &&
    email     !== "" &&
    password1 !== "" &&
    password2 !== "" &&
    aceptoTerminos === true &&
    password1 === password2 &&
    passwordTamaño > 5
  ) {
    showAlertSuccess();
    
  } else {
    showAlertError();
    setTimeout(recargar,3000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("regBtn").addEventListener("click", () => {
    insesion();

  });
});
