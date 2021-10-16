//la idea basica es que el paciente ingrese de cada menu un valor que lo identifique con sus sensaciones y el sistema le arme la formula ideal segun los valores ingresados

const grupoTemor = [
    {id: 1, flor: "Rock Rose"},
    {id: 2, flor: "Cherry Plum"},
    {id: 3, flor: "Mimulus"},
    {id: 4, flor: "Aspen"},
    {id: 5, flor: "Red Chesnut"},
]

const grupoSoledad = [
    {id: 1, flor: "Water Violet"},
    {id: 2, flor: "Impatiens"},
    {id: 3, flor: "Heather"},
]

const grupoIncertidumbre = [
    {id: 1, flor: "Cerato"},
    {id: 2, flor: "Scleranthus"},
    {id: 3, flor: "Gentian"},
    {id: 4, flor: "Gorse"},
    {id: 5, flor: "Hornbeam"},
    {id: 6, flor: "Wild Oat"},
]
const grupoFaltaInteres = [
    {id:1, flor: "Clematis"},
    {id:2, flor: "Honey Suckle"},
    {id:3, flor: "Wild Rose"},
    {id:4, flor: "Olive"},
    {id:5, flor: "White Chesnut"},
    {id:6, flor: "Mustard"},
    {id:7, flor: "Chesnut Bud"},
]

const grupoHipersensibilidad = [
    {id:1, flor: "Agrimony"},
    {id:2, flor: "Centaury"},
    {id:3, flor: "Walnut"},
    {id:4, flor: "Holly"},
]

const grupoDesaliento = [
    {id:1, flor: "Larch"},
    {id:2, flor: "Pine"},
    {id:3, flor: "Elm"},
    {id:4, flor: "Sweet Chestnut"},
    {id:5, flor: "Star of Bethlehem"},
    {id:6, flor: "Willow"},
    {id:7, flor: "Oak"},
    {id:8, flor: "Crab Apple"},
]

const grupoPreocupacion = [
    {id:1, flor: "Chicory"},
    {id:2, flor: "Verbain"},
    {id:3, flor: "Vine"},
    {id:4, flor: "Beech"},
    {id:5, flor: "Rock Water"},
]


const resultado = []

$('#inicio').on('click', function(){//evento manejado por jquery
    $('#wspBtn').hide();//escondo el boton wsp para que no moleste sobre las preguntas en modo movil
    inicioTanda1();
    
})

let cuestionario1 = $('#quest1');
let cuestionario2 = $('#quest2');
let cuestionario3 = $('#quest3');
let cuestionario4 = $('#quest4');
let cuestionario5 = $('#quest5');
let cuestionario6 = $('#quest6');
let cuestionario7 = $('#quest7');


function dataCompuesto(){//funcion  para concatenar los datos y mostrarlos por pantalla
    const jsonResultado = JSON.parse(localStorage.getItem('contenidoFrasco'));
    jsonResultado.forEach(function(flower){
        $('#textoResultado').prepend(`<p class ="text-2xl text-center">${flower.flor}</p>`)
    })
}
function mostrarResultado() {
    $('#wspBtn').show();
    $('#btnModal').show();
    dataCompuesto();
    let reinicia = document.getElementById('reiniciar');
    reinicia.onclick=()=>{
    location.reload();
} 

}