//la idea basica es que el paciente ingrese de cada menu un valor que lo identifique con sus sensaciones y el sistema le arme la formula ideal segun los valores ingresados


const resultado = [];

$("#inicio").on("click", function () {
  //evento manejado por jquery
  $("#wspBtn").hide(); //escondo el boton wsp para que no moleste sobre las preguntas en modo movil
  inicioTanda1();
});

let cuestionario1 = $("#quest1");
let cuestionario2 = $("#quest2");
let cuestionario3 = $("#quest3");
let cuestionario4 = $("#quest4");
let cuestionario5 = $("#quest5");
let cuestionario6 = $("#quest6");
let cuestionario7 = $("#quest7");

function dataCompuesto() {
  //funcion  para concatenar los datos y mostrarlos por pantalla
  const jsonResultado = JSON.parse(localStorage.getItem("contenidoFrasco"));
  jsonResultado.forEach(function (flower) {
    $("#textoResultado").prepend(
      `<p class ="text-2xl text-center">${flower.flor}</p>`
    );
  });
}
function mostrarResultado() {
  $("#wspBtn").show();
  $("#btnModal").show();
  dataCompuesto();
  let reinicia = document.getElementById("reiniciar");
  reinicia.onclick = () => {
    location.reload();
  };
}
