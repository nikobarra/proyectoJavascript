//la idea basica es que el paciente ingrese de cada menu un valor que lo identifique con sus sensaciones y el sistema le arme la formula ideal segun los valores ingresados, el proyecto final contendra 7 grupos, pero como esta es una entrega preeliminar, solo agregue 3 ya que luego toda la estructura sera modificada, tampoco se tuvieron en cuenta validaciones de datos ingresados en esta etapa
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

    grupo1 = parseInt (prompt("1- Siento un temor profundo que me produce grandes trastornos y hasta pánico.\n2- Me preocupan mis propias reacciones, temo descontrolarme y actuar con violencia.\n3- Alguna situación que conozco me produce temor, me transforma emocionalmente y lo evito.\n4- Siento temores vagos inexplicables que me vuleven sumamente aprehensivo.\n5- Siento exagerada preocupacion por otras personas, lo que me produce ansiedad y angustia "))

    grupo2 = parseInt( prompt("1- Prefiero la soledad, aunque a veces me hace sufrir y me pone tenso.\n2- Soy demasiado impulsivo e impaciente y no soporto la lentitud de los demás.\n3- Hablo mucho y me cuesta escuchar."))

    grupo3 = parseInt( prompt("1-Cambio de planes demasiado seguido, siempre busco consejos de otros y ello me quita seguridad y confianza.\n2- las dudas me dominan, soy indeciso y vacilante.\n3- Me desanimo con facilidad, abandon algunas cosas si no obtengo resuletados rápidamente y ello me deprime.\n4- Me siento deprimido y desesperanzado, Ya nada va a cambiar.\n5- Estoy inseguro de mis propias fuerzas y siento cansancio mental.\n6- Quiero hacer algo con sentido, pero no encuentro mi vocación "))

//busco en el array el valor ingresado por el paciente y devuelve el valor coincidente.
const findGrupo1 = grupoTemor.find (flor => flor.id === grupo1)
const findGrupo2 = grupoSoledad.find (flor => flor.id === grupo2)
const findGrupo3 = grupoIncertidumbre.find (flor=>flor.id ===grupo3)
grupo1 = findGrupo1.flor //guardo en cada variable solo el nombre de la flor encontrada reutilizamos las variables de la entrada ya que no tiene sentido seguir guardando el valor que ingreso el paciente
grupo2 = findGrupo2.flor
grupo3 = findGrupo3.flor

function dataCompuesto(grupo1, grupo2, grupo3){//funcion  para concatenar los datos y mostrarlos por pantalla
    frasco = ("Su combinacion ideal segun el test esta formada por: " + grupo1 + " + " + grupo2 + " + " + grupo3)
    return (frasco);
}
console.log  (dataCompuesto (grupo1, grupo2, grupo3))