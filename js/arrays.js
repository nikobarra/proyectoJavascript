const grupoTemor = []
const grupoSoledad = []
const grupoIncertidumbre = []
const grupoFaltaInteres = []
const grupoHipersensibilidad = []
const grupoDesaliento = []
const grupoPreocupacion = []

$.getJSON('flores.json', function (data) {

  for (i in data[0].grupoTemor) {
    grupoTemor.push(data[0].grupoTemor[i])
  
  for (i in data[1].grupoSoledad) {
    grupoSoledad.push(data[1].grupoSoledad[i])
  }

  for (i in data[2].grupoIncertidumbre) {
    grupoIncertidumbre.push(data[2].grupoIncertidumbre[i])
  }

  for (i in data[3].grupoFaltaInteres){
    grupoFaltaInteres.push(data[3].grupoFaltaInteres[i])
  }

  for (i in data[4].grupoHipersensibilidad){
    grupoHipersensibilidad.push (data[4].grupoHipersensibilidad[i])
  }

  for (i in data[5].grupoDesaliento) {
    grupoDesaliento.push(data[5].grupoDesaliento[i])
  }

  for (i in data[6].grupoPreocupacion) {
    grupoPreocupacion.push(data[6].grupoPreocupacion[i])
  }
  }

    })