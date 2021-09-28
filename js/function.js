function inicioTanda1() {
    tanda1.innerHTML = `<form name="formTanda1"> 
        <div class="form">
            <input type="radio" id="f-option" name="tanda1" value="1">
            <label for="f-option">Siento un temor profundo que me produce grandes trastornos y hasta pánico</label>
        </div>    
        <div class="form">    
            <input type="radio" id="f-option" name="tanda1" value="2">
            <label for="f-option">Me preocupan mis propias reacciones, temo descontrolarme y actuar con violencia</label>
        </div>
        <div class="form">
            <input type="radio" id="f-option" name="tanda1" value="3">
            <label for="f-option">Alguna situación que conozco me produce temor, me transforma emocionalmente y lo evito</label>
        </div>    
        <div class="form">    
            <input type="radio" id="f-option" name="tanda1" value="4">
            <label for="f-option">Siento temores vagos inexplicables que me vuleven sumamente aprehensivo</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda1" value="5">
            <label for="f-option">Siento exagerada preocupacion por otras personas, lo que me produce ansiedad y angustia</label>
        </div>    
            <button id="btn-radio-1">Siguiente</button>
                     </form>`

    let btn_radio = document.getElementById('btn-radio-1')
        btn_radio.onclick =(e)=>{
            e.preventDefault()
            let input_radio_tanda1 = document.formTanda1.tanda1;
                for (let i = 0; i < input_radio_tanda1.length; i++) {
                    if(input_radio_tanda1[i].checked){
                        let grupo1 = input_radio_tanda1[i].value;
                        const findGrupo1 = grupoTemor.find(flor => flor.id == grupo1);
                        resultado.push(findGrupo1);
                        console.log(findGrupo1);
                        tanda1.style.display='none';
                        inicioTanda2();
                    }
                    
                }
    }
}
function inicioTanda2() {
   tanda2.innerHTML = `<form name="formTanda2">
        <div class="form">
            <input type="radio" id="f-option" name="tanda2" value="1">
            <label for="f-option">Prefiero la soledad, aunque a veces me hace sufrir y me pone tenso</label>
        </div>
            <div class="form">
            <input type="radio" id="f-option" name="tanda2" value="2">
            <label for="f-option">Soy demasiado impulsivo e impaciente y no soporto la lentitud de los demás.</label>
        </div>    
            <div class="form">
            <input type="radio" id="f-option" name="tanda2" value="3">
            <label for="f-option">Hablo mucho y me cuesta escuchar.</label>
        </div>    
            <button id="btn-radio-2">Siguiente</button>
    </form>`

    let btn_radio_2 = document.getElementById('btn-radio-2')
        btn_radio_2.onclick =(e)=>{
            e.preventDefault()
            let input_radio_tanda2 = document.formTanda2.tanda2;
                for (let i = 0; i < input_radio_tanda2.length; i++) {
                    if(input_radio_tanda2[i].checked){
                        let grupo2 = input_radio_tanda2[i].value;
                        const findGrupo2 = grupoSoledad.find(flor => flor.id == grupo2);
                        resultado.push(findGrupo2);
                        console.log(findGrupo2);
                        tanda2.style.display='none';
                        inicioTanda3();
                    }
                    
                }
    } 
}
function inicioTanda3() {
    tanda3.innerHTML = `<form name="formTanda3">
        <div class="form">
            <input type="radio" id="f-option" name="tanda3" value="1">
            <label for="f-option">Cambio de planes demasiado seguido, siempre busco consejos de otros y ello me quita seguridad y confianza.</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda3" value="2">
            <label for="f-option">las dudas me dominan, soy indeciso y vacilante.</label>
        </div>
        <div class="form">
            <input type="radio" id="f-option" name="tanda3" value="3">
            <label for="f-option">Me desanimo con facilidad, abandono algunas cosas si no obtengo resuletados rápidamente y ello me deprime.</label>
        </div>
        <div class="form">
            <input type="radio" id="f-option" name="tanda3" value="4">
            <label for="f-option">Me siento deprimido y desesperanzado, Ya nada va a cambiar</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda3" value="5">
            <label for="f-option">Estoy inseguro de mis propias fuerzas y siento cansancio mental</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda3" value="6">
            <label for="f-option">Quiero hacer algo con sentido, pero no encuentro mi vocación</label>
        </div>
        <button id="btn-radio-3">Siguiente</button>
        </form>`
    let btn_radio_3 = document.getElementById('btn-radio-3')
        btn_radio_3.onclick =(e)=>{
            e.preventDefault()
            let input_radio_tanda3 = document.formTanda3.tanda3;
                for (let i = 0; i < input_radio_tanda3.length; i++) {
                    if(input_radio_tanda3[i].checked){
                        let grupo3 = input_radio_tanda3[i].value;
                        const findGrupo3 = grupoIncertidumbre.find(flor => flor.id == grupo3);
                        resultado.push(findGrupo3);
                        console.log(findGrupo3);
                        tanda3.style.display='none';
                        inicioTanda4();
                    }
                    
                }
}
}
function inicioTanda4() {
    tanda4.innerHTML = `<form name="formTanda4">
        <div class="form">
            <input type="radio" id="f-option" name="tanda4" value="1">
            <label for="f-option">Soy un soñador que a veces me evado de la realidad y me hace vivir desconectado del presente.</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda4" value="2">
            <label for="f-option">Estoy aferrado al pasado y a sus recuerdos, y esto no me permite encarar el presente.</label>
        </div>
        <div class="form">
            <input type="radio" id="f-option" name="tanda4" value="3">
            <label for="f-option">Acepto las fataidades del destino, pierdo la esperanza y me resigno a no cambiar.</label>
        </div>
        <div class="form">
            <input type="radio" id="f-option" name="tanda4" value="4">
            <label for="f-option">Me siento agotado, muy cansado fisicamente.</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda4" value="5">
            <label for="f-option">Mi mente nunca se apaga, es com oun disco que se repite y no me deja descansar.</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda4" value="6">
            <label for="f-option">Me siento deprimido, pero al tiempo se me pasa, es por ciclos.</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda4" value="7">
            <label for="f-option">Me apresuro demasiado y repito errores por no tomar en cuenta el resultado de experiencias anteriores</label>
        </div>
        <button id="btn-radio-4">Siguiente</button>
        </form>`
    let btn_radio_4 = document.getElementById('btn-radio-4')
        btn_radio_4.onclick =(e)=>{
            e.preventDefault()
            let input_radio_tanda4 = document.formTanda4.tanda4;
                for (let i = 0; i < input_radio_tanda4.length; i++) {
                    if(input_radio_tanda4[i].checked){
                        let grupo4 = input_radio_tanda4[i].value;
                        const findGrupo4 = grupoFaltaInteres.find(flor => flor.id == grupo4);
                        resultado.push(findGrupo4);
                        console.log(findGrupo4);
                        tanda4.style.display='none';
                        inicioTanda5();
                    }
                    
                }
}
}
function inicioTanda5() {
    tanda5.innerHTML = `<form name="formTanda5">
        <div class="form">
            <input type="radio" id="f-option" name="tanda5" value="1">
            <label for="f-option">Escondo mis problemas detras de una sonrisa, y ello me angustia.</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda5" value="2">
            <label for="f-option">Estoy predispuesto para atender a los demas, me cuesta decir que NO.</label>
        </div>
        <div class="form">
            <input type="radio" id="f-option" name="tanda5" value="3">
            <label for="f-option">Me influencian los cambios y algunas personas debido a mi sensibilidad.</label>
        </div>
        <div class="form">
            <input type="radio" id="f-option" name="tanda5" value="4">
            <label for="f-option">Me siento enojado, celoso y quiero revancha.</label>
        </div>
        <button id="btn-radio-5">Siguiente</button>
        </form>`
    let btn_radio_5 = document.getElementById('btn-radio-5')
        btn_radio_5.onclick =(e)=>{
            e.preventDefault()
            let input_radio_tanda5 = document.formTanda5.tanda5;
                for (let i = 0; i < input_radio_tanda5.length; i++) {
                    if(input_radio_tanda5[i].checked){
                        let grupo5 = input_radio_tanda5[i].value;
                        const findGrupo5 = grupoHipersensibilidad.find(flor => flor.id == grupo5);
                        resultado.push(findGrupo5);
                        console.log(findGrupo5);
                        tanda5.style.display='none';
                        inicioTanda6();
                    }
                    
                }
}
}
function inicioTanda6() {
    tanda6.innerHTML = `<form name="formTanda6">
        <div class="form">
            <input type="radio" id="f-option" name="tanda6" value="1">
            <label for="f-option">Tengo poca fe en mis capacidades.</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda6" value="2">
            <label for="f-option">Me reprocho cosas, me siento culpable y me culpo a mi mismo.</label>
        </div>
        <div class="form">
            <input type="radio" id="f-option" name="tanda6" value="3">
            <label for="f-option">Me siento abrumado por las responsabilidades y ello me deprime</label>
        </div>
        <div class="form">
            <input type="radio" id="f-option" name="tanda6" value="4">
            <label for="f-option">Me siento en el limite de mi resistencia, tengo angustia, desesperanza y sensacion de soledad.</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda6" value="5">
            <label for="f-option">Estoy sufriendo los efectos de un duelo.</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda6" value="6">
            <label for="f-option">No es muy justo lo que me pasa y por eso estoy triste, amargo e irritable.</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda6" value="7">
            <label for="f-option">Tengo un exagerado sentido del deber, me exijo demasiado sin admitir cansancio.</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda6" value="8">
            <label for="f-option">Me siento sucioy me averguenza mi apariencia</label>
        </div>
        <button id="btn-radio-6">Siguiente</button>
        </form>`
    let btn_radio_6 = document.getElementById('btn-radio-6')
        btn_radio_6.onclick =(e)=>{
            e.preventDefault()
            let input_radio_tanda6 = document.formTanda6.tanda6;
                for (let i = 0; i < input_radio_tanda6.length; i++) {
                    if(input_radio_tanda6[i].checked){
                        let grupo6 = input_radio_tanda6[i].value;
                        const findGrupo6 = grupoDesaliento.find(flor => flor.id == grupo6);
                        resultado.push(findGrupo6);
                        console.log(findGrupo6);
                        tanda6.style.display='none';
                        inicioTanda7();
                    }
                    
                }
}
}
function inicioTanda7() {
    tanda7.innerHTML = `<form name="formTanda7">
        <div class="form">
            <input type="radio" id="f-option" name="tanda7" value="1">
            <label for="f-option">Tengo tendencia a ser posesivo y a sentirme ofendido con facilidad. Me cuesta separarme de mi familia.</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda7" value="2">
            <label for="f-option">Soy un poco fanático, con ideas fijas que me cuesta cambiar, mi entusiasmo por hacer cosas me deja agotado.</label>
        </div>
        <div class="form">
            <input type="radio" id="f-option" name="tanda7" value="3">
            <label for="f-option">A veces me siento omnipotente, lo que me mantiene en tension. Suelo ser mandon y dominante.</label>
        </div>
        <div class="form">
            <input type="radio" id="f-option" name="tanda7" value="4">
            <label for="f-option">Soy demasiado rigido, crítico e intolerante con los demás.</label>
        </div>
        <div class="form">    
            <input type="radio" id="f-option" name="tanda7" value="5">
            <label for="f-option">Soy demasiado rígido conmigo mismo, bueso la pertfección en todo.</label>
        </div>
        <button id="btn-radio-7">Finalizar</button>
        </form>`
    let btn_radio_7 = document.getElementById('btn-radio-7')
        btn_radio_7.onclick =(e)=>{
             e.preventDefault()
            let input_radio_tanda7 = document.formTanda7.tanda7;
                for (let i = 0; i < input_radio_tanda7.length; i++) {
                    if(input_radio_tanda7[i].checked){
                        let grupo7 = input_radio_tanda7[i].value;
                        const findGrupo7 = grupoPreocupacion.find(flor => flor.id == grupo7);
                        resultado.push(findGrupo7);
                        console.log(findGrupo7);
                        tanda7.style.display='none';
                        localStorage.setItem('contenidoFrasco',JSON.stringify(resultado));
                        mostrarResultado();
                    }
                    
                }
}
}

