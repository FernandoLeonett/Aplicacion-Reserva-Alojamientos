function validarCorreo(pCorreo) {
    let sinEspacios = pCorreo.indexOf(' ') === -1// se valida que no contenga espacios vacios
    let valArroba = pCorreo.indexOf('@') > 0 && pCorreo.lastIndexOf('@') === pCorreo.indexOf('@');// se valida que haya un solo  arroba y no sea al principio de la cadena
    let valPunto = pCorreo.lastIndexOf('.') > pCorreo.indexOf('@');// se valida que  hay un punto despues del arroba
    let alMenos1CaracterArrobaPunto = pCorreo.substring(pCorreo.indexOf('@'), pCorreo.lastIndexOf('.')).length > 1;// la subcadena dominio tiene al menos un caracter
    let alMenos1CaracterDespuesPunto = pCorreo.substring(pCorreo.lastIndexOf('.')).length > 1;// la subcadena a partir del ultimo punto tiene  al menos un caracter

    return sinEspacios && valArroba && valPunto && alMenos1CaracterArrobaPunto && alMenos1CaracterDespuesPunto;// es valido si todas las validaciones son true

}

function validarContrasena(pContrasena) {// caracteres permitidos para la contrasena
    let i = 0;
    let hayMayuscula = false;
    let hayNumero = false;
    let rango1 = true;
    let rango2 = true;
    let rango3 = true;


    while ((i < pContrasena.length) && (rango1 || rango2 || rango3)) {// sale del bucle cuando haya recorrido la cadena o ninguno de los caracteres sea valido
        rango1 = pContrasena.charCodeAt(i) >= 48 && pContrasena.charCodeAt(i) <= 57;// numeros
        rango2 = pContrasena.charCodeAt(i) >= 65 && pContrasena.charCodeAt(i) <= 90;// letras mayusculas 
        rango3 = pContrasena.charCodeAt(i) >= 97 && pContrasena.charCodeAt(i) <= 122;//letras minusculas 
        if (!hayMayuscula && rango2) {// si ya encontro una mayuscula  no necesita entrar en la condicion
            hayMayuscula = true;

        }
        if (!hayNumero && rango1) {// si ya encontro un numero no necesita entrar en la condicion
            hayNumero = true;

        }
        i++;

    }
    return (hayNumero && hayMayuscula && pContrasena.length >= 8) && (rango3 || rango1 || rango2);// encontro mayuscula, encontro numero,longitud valida y el caracter de la iteracion esta en uno de los rangos permitidos


}

function mostrarMensaje(idElemento, mensaje) {
    document.getElementById(idElemento).innerText = mensaje;
}

function mostrarPantalla(pPantalla) {

    let = pantallas = document.querySelectorAll('.pantalla');

    for (let i = 0; i < pantallas.length; i++) {

        let p = pantallas[i];
        p.style.display = 'none';
    }


    document.getElementById(`div${pPantalla}`).style.display = "block";

}

function existeCorreo(pCorreo) { //Verifica en el registro que el correo no haya sido ingresado anteriormente.
    let existe = false;
    for (let i = 0; i < arrayUsuarios.length; i++) {
        let usuario = arrayUsuarios[i];
        if (usuario.correo === pCorreo) {
            existe = true;
            break;
        }
    }
    return existe;
}

function estaEntreDosValores(_texto, _numero1, _numero2) {

    return (Number(_texto) >= _numero1 && Number(_texto) <= _numero2);

}

function enlazarEvento(pClase, evento) {

    let botones = document.querySelectorAll('.' + pClase);


    for (let i = 0; i < botones.length; i++) {
        let boton = botones[i];
        boton.addEventListener('click', evento);

    }

}

function armarMuro(pArrayCasas) {// muroneitor 3.0. Se utiliza para armar el muro en funcion del usuario conectado.


    HayUsuarioConectado = false;

    if (usuarioConectado != null) {
        HayUsuarioConectado = true;

    }

    let comportamiento;

    document.getElementById(`divMuro`).innerHTML = ''

    for (let i = 0; i < pArrayCasas.length; i++) {
        let casa = pArrayCasas[i];
        let htmlMuro = "";
        let mensaje = '';

        if (casa.promedio === 0) {

            mensaje = '**Inmueble Reciente sin Calificaciones**'
        } else if (casa.promedio > 4.8) {
            mensaje = '**Inmueble Destacado**'
        }

        htmlMuro += `<div>
        
              <h2>${casa.titulo} ${casa.ciudad}</h2>
       
        
              <img src="./assets/img/${casa.fotos[0]}" alt="${casa.titulo}" >
              <div>
                 
              </div>
              <p>${casa.descripcion}</p>
              <label></label> <strong>${obtenerPrecio(casa.precioXNoche).toFixed(2)}</strong><strong> ${moneda}</strong><label class="duracion">Promedio: <strong>${(casa.promedio).toFixed(1)}<br></strong><br><strong>${(mensaje)}</strong></label>
              
              
            </div>`;

        if (HayUsuarioConectado) {//


            let estadoInmueble;

            let botones;
            if (casa.activo) {
                estadoInmueble = 'Inmueble Activo'
            } else {
                estadoInmueble = 'Inmueble Desactivado'
            }


            if (usuarioConectado.rol === 'Anfitrion') {

                botones = `<p class="${usuarioConectado.rol}btnMuro" id="btnAct${i}">
        
                      Activar/Desactivar Inmueble
                    </p>
                    <p id="msgAct${i}">${estadoInmueble}</p>`
                comportamiento = btnActivarInmueble;
            } else {

                botones = `<p class="${usuarioConectado.rol}btnMuro ver-mas" id="btnVer${i}">
        
                            Ver Mas
                        </p>
                    <p id="verMas${i}"></p>`
                comportamiento = verMasHandler;
            }

            htmlMuro += botones;

        }
        document.getElementById(`divMuro`).innerHTML += htmlMuro;


    }
    if (HayUsuarioConectado) {


        enlazarEvento(`${usuarioConectado.rol}btnMuro`, comportamiento)
    }


}
function limpiarTodoLosCampos() { //Función general que se utiliza para limpiar los campos una vez que los datos fueron ingresados de manera exitosa. 
    let = campos = document.querySelectorAll('input[type=text], input[type=password]')


    for (let i = 0; i < campos.length; i++) {

        let p = campos[i];
        p.value = '';
    };
}
function limpiarTodoLosParrafos() { //Función general que se utiliza para limpiar los campos una vez que los datos fueron ingresados de manera exitosa. 
    let = parrafos = document.querySelectorAll('p')


    for (let i = 0; i < parrafos.length; i++) {

        let p = parrafos[i];
        p.innerText = '';
    };
}

function ocultarElementos(elementos) {
    for (let i = 0; i < elementos.length; i++) {
        let item = elementos[i];
        item.style.display = 'none';
    }
}

function mostrarElementos(elementos) {
    for (let i = 0; i < elementos.length; i++) {
        let item = elementos[i];
        item.style.display = 'block';
    }
}

function sinTilde(pString) { //Retorna un string omitiendo tildes en minúscula. 
    let valor = pString.toLowerCase();
    let nuevo = '';

    for (let i = 0; i < pString.length; i++) {

        if (valor[i] === 'á') {
            nuevo += 'a';
        } else if (valor[i] === 'é') {
            nuevo += 'e';
        } else if (valor[i] === 'í') {
            nuevo += 'i'
        } else if (valor[i] === 'ó') {
            nuevo += 'o'
        } else if (valor[i] === 'ú') {
            nuevo += 'u'
        } else if (valor[i] === 'ü') {
            nuevo += 'u'
        } else {
            nuevo += valor[i]
        }
    }
    return nuevo
}





