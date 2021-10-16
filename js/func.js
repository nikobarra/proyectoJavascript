function inicioTanda1() {
  //utilizamos jquery para incorporar elemntos al dom
  $("#quest1").html(
    '<button id="1" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " > Siento un temor profundo que me produce grandes trastornos y hasta pánico </button><button id="2" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " > Me preocupan mis propias reacciones, temo descontrolarme y actuar con violencia.</button> <button id="3" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " > Alguna situación que conozco me produce temor, me transforma emocionalmente y lo evito.</button> <button id="4 "class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " > Siento temores vagos inexplicables que me vuleven sumamente aprehensivo.</button> <button id="5"  class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " > Siento exagerada preocupacion por otras personas, lo que me produce ansiedad y angustia.</button> <button class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " > Saltar Pregunta.</button>'
  );

  $(".pregunta").on("click", function () {
    let id = parseInt(this.id); //convierto a entero el valor del id
    const findGrupo1 = grupoTemor.find((flor) => flor.id == id);
    if (findGrupo1 != null) {
      //verifico que tenga contenido, sino es porque se salteo la pregunta
      resultado.push(findGrupo1);
      console.log(findGrupo1);

      Toastify({
        // muestra el mensaje de flor agregada desde la libreria toastify
        text: "Flor Agregada",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
    inicioTanda2();
    $("#quest1").html("");
  });
}

function inicioTanda2() {
  $("#quest2").html(
    '<button id="1" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " > Prefiero la soledad, aunque a veces me hace sufrir y me pone tenso </button><button id="2" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " > Soy demasiado impulsivo e impaciente y no soporto la lentitud de los demás.</button> <button id="3" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " > Hablo mucho y me cuesta escuchar.</button> <button class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Saltar Pregunta .</button>'
  );

  $(".pregunta").on("click", function () {
    let id = parseInt(this.id); //convierto a entero el valor del id

    const findGrupo2 = grupoSoledad.find((flor) => flor.id == id);
    if (findGrupo2 != null) {
      resultado.push(findGrupo2);
      console.log(findGrupo2);
      Toastify({
        // muestra el mensaje de flor agregada desde la libreria toastify
        text: "Flor Agregada",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
    $("#quest2").html("");
    inicioTanda3();
  });
}

function inicioTanda3() {
  $("#quest3").html(
    '<button id="1" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Cambio de planes demasiado seguido, siempre busco consejos de otros y ello me quita seguridad y confianza.</button><button id="2" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Las dudas me dominan, soy indeciso y vacilante.</button> <button id="3" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Me desanimo con facilidad, abandono algunas cosas si no obtengo resuletados rápidamente y ello me deprime.</button> <button id="4 "class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Me siento deprimido y desesperanzado, Ya nada va a cambiar.</button> <button id="5"  class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Estoy inseguro de mis propias fuerzas y siento cansancio mental</button><button id="6"  class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Quiero hacer algo con sentido, pero no encuentro mi vocación.</button><button class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Saltar Pregunta .</button>'
  );

  $(".pregunta").on("click", function () {
    let id = parseInt(this.id); //convierto a entero el valor del id
    const findGrupo3 = grupoIncertidumbre.find((flor) => flor.id == id);
    if (findGrupo3 != null) {
      resultado.push(findGrupo3);
      console.log(findGrupo3);
      Toastify({
        // muestra el mensaje de flor agregada desde la libreria toastify
        text: "Flor Agregada",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
    inicioTanda4();
    $("#quest3").html("");
  });
}

function inicioTanda4() {
  $("#quest4").html(
    '<button id="1" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Soy un soñador que a veces me evado de la realidad y me hace vivir desconectado del presente.</button><button id="2" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Estoy aferrado al pasado y a sus recuerdos, y esto no me permite encarar el presente.</button> <button id="3" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Acepto las fataidades del destino, pierdo la esperanza y me resigno a no cambiar.</button> <button id="4 "class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Me siento agotado, muy cansado fisicamente.</button> <button id="5"  class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Mi mente nunca se apaga, es com oun disco que se repite y no me deja descansar.</button><button id="6"  class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Me siento deprimido, pero al tiempo se me pasa, es por ciclos.</button><button id="7"  class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Me apresuro demasiado y repito errores por no tomar en cuenta el resultado de experiencias anteriores.</button><button class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Saltar Pregunta .</button>'
  );

  $(".pregunta").on("click", function () {
    let id = parseInt(this.id); //convierto a entero el valor del id
    const findGrupo4 = grupoFaltaInteres.find((flor) => flor.id == id);
    if (findGrupo4 != null) {
      resultado.push(findGrupo4);
      console.log(findGrupo4);
      Toastify({
        // muestra el mensaje de flor agregada desde la libreria toastify
        text: "Flor Agregada",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
    inicioTanda5();
    $("#quest4").html("");
  });
}

function inicioTanda5() {
  $("#quest5").html(
    '<button id="1" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Escondo mis problemas detras de una sonrisa, y ello me angustia.</button><button id="2" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Estoy predispuesto para atender a los demas, me cuesta decir que NO.</button> <button id="3" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Me influencian los cambios y algunas personas debido a mi sensibilidad.</button> <button id="4 "class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Me siento enojado, celoso y quiero revancha.</button><button class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Saltar Pregunta .</button>'
  );

  $(".pregunta").on("click", function () {
    let id = parseInt(this.id); //convierto a entero el valor del id
    const findGrupo5 = grupoHipersensibilidad.find((flor) => flor.id == id);
    if (findGrupo5 != null) {
      resultado.push(findGrupo5);
      console.log(findGrupo5);
      Toastify({
        // muestra el mensaje de flor agregada desde la libreria toastify
        text: "Flor Agregada",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
    inicioTanda6();
    $("#quest5").html("");
  });
}

function inicioTanda6() {
  $("#quest6").html(
    '<button id="1" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Tengo poca fe en mis capacidades.</button><button id="2" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Me reprocho cosas, me siento culpable y me culpo a mi mismo.</button> <button id="3" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Me siento abrumado por las responsabilidades y ello me deprime</button> <button id="4 "class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Me siento en el limite de mi resistencia, tengo angustia, desesperanza y sensacion de soledad.</button><button id="5" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Estoy sufriendo los efectos de un duelo.</button><button id="6" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >No es muy justo lo que me pasa y por eso estoy triste, amargo e irritable.</button> <button id="7" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Tengo un exagerado sentido del deber, me exijo demasiado sin admitir cansancio.</button> <button id="8 "class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Me siento sucioy me averguenza mi apariencia</button><button class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Saltar Pregunta .</button>'
  );

  $(".pregunta").on("click", function () {
    // Recuerda, this es el elemento
    let id = parseInt(this.id); //convierto a entero el valor del id
    const findGrupo6 = grupoDesaliento.find((flor) => flor.id == id);
    if (findGrupo6 != null) {
      resultado.push(findGrupo6);
      console.log(findGrupo6);
      Toastify({
        // muestra el mensaje de flor agregada desde la libreria toastify
        text: "Flor Agregada",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
    inicioTanda7();
    $("#quest6").html("");
  });
}

function inicioTanda7() {
  $("#quest7").html(
    '<button id="1" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Tengo tendencia a ser posesivo y a sentirme ofendido con facilidad. Me cuesta separarme de mi familia.</button><button id="2" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Soy un poco fanático, con ideas fijas que me cuesta cambiar, mi entusiasmo por hacer cosas me deja agotado.</button> <button id="3" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >A veces me siento omnipotente, lo que me mantiene en tension. Suelo ser mandon y dominante.</button> <button id="4 "class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Soy demasiado rigido, crítico e intolerante con los demás.</button><button id="5" class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Soy demasiado rígido conmigo mismo, bueso la pertfección en todo.</button><button class="pregunta bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded text-base " >Saltar Pregunta .</button>'
  );

  $(".pregunta").on("click", function () {
    let id = parseInt(this.id); //convierto a entero el valor del id
    const findGrupo7 = grupoDesaliento.find((flor) => flor.id == id);
    if (findGrupo7 != null) {
      resultado.push(findGrupo7);
      console.log(findGrupo7);
      Toastify({
        // muestra el mensaje de flor agregada desde la libreria toastify
        text: "Flor Agregada",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
    $("#quest7").html("");
    localStorage.setItem("contenidoFrasco", JSON.stringify(resultado));
    mostrarResultado();
  });
}
