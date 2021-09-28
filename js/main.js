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


let iniciar = document.getElementById('comenzar')
iniciar.onclick=()=>{
    iniciar.style.display='none'
    inicioTanda1()
}

let tanda1 = document.getElementById('grupo1');
let tanda2 = document.getElementById('grupo2');
let tanda3 = document.getElementById('grupo3');
let tanda4 = document.getElementById('grupo4');
let tanda5 = document.getElementById('grupo5');
let tanda6 = document.getElementById('grupo6');
let tanda7 = document.getElementById('grupo7');


function dataCompuesto(){//funcion  para concatenar los datos y mostrarlos por pantalla
    const jsonResultado = JSON.parse(localStorage.getItem('contenidoFrasco'));
    frasco = ("Su combinacion ideal segun el test esta formada por: "+ jsonResultado[0].flor + " + " + jsonResultado[1].flor + " + " + jsonResultado[2].flor + " + " + jsonResultado[3].flflor + " +" + jsonResultado[4].flor + " + " + jsonResultado[5].flor +" + " + jsonResultado[6].flor) 
    localStorage.setItem('frascoGuardado', frasco);
}
function mostrarResultado() {
  let mostrarResultado = document.createElement ("div"); //creo un nuevo div para insertar en el html
    mostrarResultado.setAttribute ("class", "resultado");// le agrego una clase al div creado arriba
    dataCompuesto();
    mostrarResultado.innerHTML = localStorage.getItem('frascoGuardado');
    document.body.appendChild( mostrarResultado ); // inserto el div creado con los datos  
}


 