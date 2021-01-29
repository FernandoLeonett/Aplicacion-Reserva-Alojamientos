// varibles globales

let usuarioConectado; //Variable que almacena el usuario conectado.
let botonOrdenar = false;// true es para ordenar por valoracion.
let inmuebleSeleccionado;// el inmueble que selecciona un Huesped con el boton ver mas.
let reservaSelecionada;

let inmueblesDelMuro = []; //Inmuebles filtrados usuario conectado

inicarApp(); //Se inicia la aplicación dando funcionalidad a los botones, arma menu y muro.

function inicarApp() {


    document.getElementById('btnLogin').addEventListener('click', btnHandlerLogin); //Loguearse  
    document.querySelector(".label-moneda").addEventListener("click", labelMonedaHandler); //cambia la moneda en que se muestran los precios.
    document.getElementById('btnRegistrar').addEventListener('click', btnHandlerRegistro); //Registra usuario.
    document.getElementById('btnHandlerOrdenarMuro').addEventListener('click', btnHandlerOrdenarMuro); //Ordena el muro alternando el criterio de valoración y precio.
    document.getElementById('btnHomeFiltroHandler').addEventListener('click', btnHomeFiltroHandler); //Filtro de búsqueda
    document.getElementById('btnAltaImagen').addEventListener('click', btnAltaImagenHandler); //Agrega imágen en el registro de inmueble
    document.getElementById('btnAltaInmueble').addEventListener('click', btnAltaInmuebleHandler); //Agrega el inmueble
    document.getElementById("btnGaleriaAnterior").addEventListener("click", btnGaleriaAnteriorHandler); //Cambia a la imágen anterior en la pantalla detalle
    document.getElementById("btnGaleriaSiguiente").addEventListener("click", btnGaleriaSiguienteHandler); //Cambia a la imágen siguiente en la pantalla detalle
    document.getElementById("btnReservarHandler").addEventListener("click", btnReservarHandler); //Muestra costo de reserva y pide confirmación
    document.getElementById("btnBuscarAdmin").addEventListener("click", btnBuscarInmueblesHandler); //Busca el inmueble por precio en la pantalla del administrador
    document.getElementById("btnConfirmarReservaHandler").addEventListener("click", btnConfirmarReservaHandler); //Confirma reserva de inmueble
    document.getElementById("btnCargarDolar").addEventListener("click", btnCargarCotizacionHandler); //Carga cotización 

    armarElementos();
    enlazarEvento('menu', menuItemHandler)
    mostrarPantalla('Home'); //Muestra la pantalla al iniciar la app
    filtrarInmueblesActivos();
    inmueblesDelMuro.sort(ordenarPorValoracion);
    armarMuro(inmueblesDelMuro)

}

function menuItemHandler() { //Maneja todos los botones del menú de la app

    const btnHome = document.getElementById('itemHome');
    let nombrePantalla = this.id.substr(4);
    if (nombrePantalla === 'Home') {

        btnHome.style.display = 'none';
        if (this.id === 'exitHome') {
            usuarioConectado = null;
            armarElementos();
            mostrarMensaje('msgBienvenida', '')
            inmueblesDelMuro = arrayCasas.sort(ordenarPorValoracion);
            filtrarInmueblesActivos();
            armarMuro(inmueblesDelMuro);
        }

    } else {
        btnHome.style.display = 'block';
        limpiarTodoLosParrafos();
    }
    mostrarPantalla(nombrePantalla);
}

function armarElementos() {

    // seleccciono todos los elementos del menu y los correspondientes a cadda usuario

    let elementos = document.querySelectorAll('.menu,.Administrador,.Huesped, .Visitante');// 



    let itemsMenuAMostrar;// aca iran los elementos que necesito mostrar de acuerdo al usaurio conectado

    //oculto todos los elementos
    ocultarElementos(elementos);// se ocultan todos los elementos de todos los usuarios incluso los del menu

    if (usuarioConectado == null) {
        //selecciono los items con el atributo class correspondiente al rol del usuario conectado
        itemsMenuAMostrar = document.querySelectorAll('.Visitante');


    } else {
        itemsMenuAMostrar = document.querySelectorAll(`.${usuarioConectado.rol}`);
        //selecciono solo los items del invitado

    }
    mostrarElementos(itemsMenuAMostrar)// se muestra cualquier elemento que tenga la clase usuario conectado

}

function btnCargarCotizacionHandler() {
    let valor = document.getElementById('txtCargarCotizacion').value;
    if (esNumero(valor) && valor > 0) {
        cotizacionDolar = Number(valor)
        mostrarMensaje('msgCotizacion', `Cotizacion Actualizada a:${cotizacionDolar}`)
        limpiarTodoLosCampos();
    } else {
        mostrarMensaje('msgCotizacion', 'Oops, ingrese un número mayor a cero para la cotizacion')
    }
}

function btnBuscarInmueblesHandler() {
    let desde;
    let hasta;
    let mensaje = '';
    mostrarMensaje('msgAdministrador', '')



    const txtDesdePrecio = document.getElementById('txtDesdePrecio').value;
    const txtHastaPrecio = document.getElementById('txtHastaPrecio').value;

    if (!isNaN(txtDesdePrecio) && !isNaN(txtHastaPrecio)) {
        desde = Number(txtDesdePrecio);
        hasta = Number(txtHastaPrecio);

        if ((txtDesdePrecio !== '')) {
            arrayCasas.sort(ordenarPorPrecioAscendiente)

            desde = arrayCasas[0].precioXNoche
        }
        if ((txtHastaPrecio !== '')) {
            arrayCasas.sort(ordenarPorPrecioAscendiente);
            hasta = arrayCasas[arrayCasas.length - 1].precioXNoche

        }

        if (desde < hasta) {
            armarTablaReporte(buscarInmueblesPorPrecio(desde, hasta))
            limpiarTodoLosCampos();
        } else {
            mensaje = 'El valor del Campo "desde" debe ser menor que "hasta" o menor al inmueble de mayor precio ';
        }
    } else {
        mensaje = 'Ingrese solo numeros'
    }
    mostrarMensaje('msgAdministrador', mensaje)

}

function buscarInmueblesPorPrecio(pDesde, pHasta) {
    let inmueblesbuscados = [];
    for (let i = 0; i < arrayCasas.length; i++) {
        let c = arrayCasas[i]
        if (c.precioXNoche <= pHasta && c.precioXNoche >= pDesde) {
            inmueblesbuscados.push(c)
        }
    }
    return inmueblesbuscados;

}

function btnReservarHandler() {
    let mensaje = '';
    mostrarMensaje('msgDetalleReserva', mensaje)



    let txtCantNoches = document.getElementById('txtCantNoches').value;
    if (esNumero(txtCantNoches) && txtCantNoches > 0) {
        txtCantNoches = Number(txtCantNoches);
        reservaSelecionada = new Reserva(inmuebleSeleccionado, txtCantNoches, usuarioConectado)

        mensaje = `Favor Confirme Reserva, Precio Total: ${reservaSelecionada.inmueble.precioXNoche * txtCantNoches}`


        document.getElementById('btnConfirmarReservaHandler').style.display = 'block';


    } else {
        mensaje = 'Ingrese una cantidad de dias mayor a cero'

    }
    mostrarMensaje('msgDetalleReserva', mensaje)




}

function btnConfirmarReservaHandler() {

    document.getElementById('btnConfirmarReservaHandler').style.display = 'none';
    mostrarMensaje('msgDetalleReserva', 'Reserva Exitosa')
    arrayReservas.push(reservaSelecionada);
    limpiarTodoLosCampos();
}

function armarTablaReporte(pImueblesBuscados) { //Arma la tabla de inmuebles para el usuario administrador.

    let htmlBody = `<th>Titulo</th><th>Precio</th>`;


    for (let i = 0; i < pImueblesBuscados.length; i++) {

        let c = pImueblesBuscados[i];

        htmlBody += `<tr>
           
            <td>${c.titulo}</td>
            <td>${c.precioXNoche} $U</td>
           
            </tr>`
    }
    document.querySelector('#tblReporte tbody').innerHTML = htmlBody;



}

function btnHandlerOrdenarMuro() {
    botonOrdenar = !botonOrdenar;
    if (botonOrdenar) {
        this.value = 'Actualizar Lista de Inmuebles Por Valoracion'
        inmueblesDelMuro = arrayCasas.sort(ordenarPorPrecioDecreciente)


    } else {
        this.value = 'Actualizar Lista de Inmuebles Por Precio'
        inmueblesDelMuro = arrayCasas.sort(ordenarPorValoracion)


    }
    armarMuro(inmueblesDelMuro)

}

function btnHomeFiltroHandler() {
    mostrarMensaje('msgBusquedaUsuario', '');



    let inmueblesbuscadosHOme = []


    //tomo el valor del campo de texto del filtro
    let valorFiltro = document.getElementById("txtHomeFiltro").value;

    //si el filtro está vacío o solo contiene espacios en blanco
    if (valorFiltro.trim() === "") {
        mostrarMensaje('msgBusquedaUsuario', 'Oops no ingreso nada en el campo de busqueda')
    } else {
        valorFiltro = sinTilde(valorFiltro);// ya se que no es un campo vacio asi que lo considero sin tildes

        //sino comienzo a filtrar recorriendo el array de casas
        for (let i = 0; i < inmueblesDelMuro.length; i++) {
            let a = inmueblesDelMuro[i];

            if (sinTilde(a.titulo).indexOf(valorFiltro) !== -1) {
                inmueblesbuscadosHOme.push(a);
            }
        }

        if (inmueblesbuscadosHOme.length > 0) {
            inmueblesDelMuro = inmueblesbuscadosHOme;

            armarMuro(inmueblesDelMuro);
            limpiarTodoLosCampos();
        } else {

            for (let i = 0; i < inmueblesDelMuro.length; i++) {
                let a = inmueblesDelMuro[i];

                if (sinTilde(a.ciudad).indexOf(valorFiltro) !== -1) {

                    inmueblesbuscadosHOme.push(a);
                }
            }

            if (inmueblesbuscadosHOme.length > 0) {
                inmueblesDelMuro = inmueblesbuscadosHOme;
                armarMuro(inmueblesDelMuro);
                limpiarTodoLosCampos();
            } else {

                for (let i = 0; i < inmueblesDelMuro.length; i++) {
                    let a = inmueblesDelMuro[i];

                    if (sinTilde(a.descripcion).indexOf(valorFiltro) !== -1) {
                        inmueblesbuscadosHOme.push(a);
                    }
                }
                if (inmueblesbuscadosHOme.length === 0) {
                    mostrarMensaje('msgBusquedaUsuario', 'La busqueda no obtuvo ningun resultado')

                } else {
                    mostrarMensaje('msgBusquedaUsuario', '')

                    limpiarTodoLosCampos();

                }


            }
        }
    }
}

function btnHandlerRegistro() { //valida todos los datos para el registro del ususario.

    const txtNombre = document.getElementById('txtRegistroNombre').value;
    const txtApellido = document.getElementById('txtRegistroApellido').value;
    const txtCorreo = document.getElementById('txtRegistroCorreo').value;
    const txtTelefono = document.getElementById('txtRegistroTelefono').value;
    const txtPasword1 = document.getElementById('txtRegistroClave1').value;
    const txtPasword2 = document.getElementById('txtRegistroClave2').value;

    let mensajeRegistro = '';
    let camposCompletos = txtNombre !== '' && txtApellido !== '' && txtTelefono !== '' && txtCorreo !== '' && txtPasword1 !== '' && txtPasword2 !== '';

    if (camposCompletos) {
        if (txtTelefono.length == 8 && !isNaN(txtTelefono)) {
            if (!existeCorreo(txtCorreo)) {
                if (validarCorreo(txtCorreo)) {
                    if (validarContrasena(txtPasword1)) {
                        if (txtPasword1 === txtPasword2) {
                            let rol;
                            if (usuarioConectado == undefined) {
                                rol = 'Huesped'
                            } else {
                                rol = 'Anfitrion'
                            }
                            let usuario = new Usuario(txtNombre, txtApellido, txtTelefono, txtPasword1, txtCorreo, rol);
                            arrayUsuarios.push(usuario);
                            mensajeRegistro = 'Registro exitoso';

                            limpiarTodoLosCampos();

                        } else {
                            mensajeRegistro = 'contraseñas no coinciden'
                        }

                    } else {
                        mensajeRegistro = 'contraseña no valida';
                    }

                } else {
                    mensajeRegistro = 'correo invalido';
                }
            } else {
                mensajeRegistro = 'El correo ya existe';
            }
        } else {
            mensajeRegistro = 'Telefono Invalido';
        }
    } else {
        mensajeRegistro = 'no deben haber campos vacios';

    }
    mostrarMensaje('msgRegistro', mensajeRegistro);

}

function obtenerPrecio(importe) {
    let precioAMostrar;

    //si la moneda es dólares
    if (moneda === "$U") {

        precioAMostrar = importe;
    } else {

        precioAMostrar = importe / cotizacionDolar;
    }

    return precioAMostrar;
}

function labelMonedaHandler() {

    let monedaAnterior = moneda;

    //si la actual es dólares
    if (moneda === "$U") {
        //cambio a pesos
        moneda = "USD";
    } else {
        //cambio a dólares
        moneda = "$U";
    }

    armarMuro(inmueblesDelMuro);

    document.querySelector(".label-moneda").innerText = "Cambiar Moneda a " + monedaAnterior;
}

function btnHandlerLogin() { //Maneja el el inicio de sesión de los usuarios, validando si las credenciales son correctas. 
    mostrarMensaje('msgLogin', '')
    const txtCorreo = document.getElementById('txtLoginCorreo').value;
    const txtPasword = document.getElementById('txtLoginClave').value;


    for (let i = 0; i < arrayUsuarios.length; i++) {

        let u = arrayUsuarios[i]
        if (u.correo === txtCorreo && u.pasword === txtPasword) {
            usuarioConectado = u;

            break;
        }
    }
    if (usuarioConectado === undefined || usuarioConectado === null) {

        mostrarMensaje('msgLogin', 'Oops, verifique sus credenciales');


    } else {
        armarElementos()
        mostrarPantalla('Home')

        mostrarMensaje('msgBienvenida', `Bienvenid@ ${usuarioConectado.nombre}`)
        if (usuarioConectado.rol === 'Administrador') {
            armarTablaReporte(arrayCasas);



        } else {

            if (usuarioConectado.rol === 'Anfitrion') {
                armarSelectorImagenes()
                inmueblesDelMuro = filtraArrayPorUsuario(arrayCasas)
            }
            armarTablaReservas(filtraArrayPorUsuario(arrayReservas))
            armarMuro(inmueblesDelMuro);

        }
        limpiarTodoLosCampos();


    }


}

function verMasHandler() { //Botón para el usuario huesped para ver detalle de la publicación
    //con el id del ver más apretado tomo el substring correspondiente


    let pos = Number(this.id.substr(6))

    inmuebleSeleccionado = inmueblesDelMuro[pos];
    armarDetalle();
    mostrarPantalla('Detalle')



    armarDetalle();

    mostrarPantalla('Detalle')
}


function ordenarPorValoracion(a, b) {

    if (a.promedio > b.promedio) {
        return -1
    } else {
        return 1
    }


}

function ordenarPorPrecioDecreciente(a, b) {

    if (a.precioXNoche > b.precioXNoche) {
        return -1
    } else {
        return 1
    }

}

function ordenarPorPrecioAscendiente(a, b) {

    if (a.precioXNoche > b.precioXNoche) {
        return 1
    } else {
        return -1
    }
}

function armarSelectorImagenes() { //Arma el selector de imágenes en la pantalla de agregar inmueble. 
    mostrarMensaje('msgPantallaAgregarInmueble', '')

    let options = "";


    for (let i = 0; i < arrayImagenes.length; i++) {

        options += `<option value='${arrayImagenes[i]}'>${arrayImagenes[i]}</option>`;
    }

    document.getElementById("slcAltaImagenes").innerHTML = options;
}

function btnAltaImagenHandler() {


    let imagenSeleccionada = document.getElementById("slcAltaImagenes").value;

    if (imagenesSeleccionadas.indexOf(imagenSeleccionada) === -1) {

        imagenesSeleccionadas.push(imagenSeleccionada);
    } else {

        mostrarMensaje('msgPantallaAgregarInmueble', 'Ya has seleccionado esta imagen')
    }


    mostrarMensaje('msgPantallaAgregarInmueble', imagenesSeleccionadas.join(","));
}


function btnAltaInmuebleHandler() {

    let txtTitulo = document.getElementById("txtTitulo").value;
    let txtCiudad = document.getElementById("txtCiudad").value;
    let txtDescripcion = document.getElementById("txtDescripcion").value;
    let txtPrecioXNoche = document.getElementById("txtPrecioXNoche").value;
    if (esNumero(txtPrecioXNoche) && txtPrecioXNoche > 0) {


        let nuevoInmueble = new Inmueble(txtTitulo, txtDescripcion, txtCiudad, Number(txtPrecioXNoche), usuarioConectado, imagenesSeleccionadas, 0);


        arrayCasas.push(nuevoInmueble);


        imagenesSeleccionadas = [];


        mostrarMensaje('msgPantallaAgregarInmueble', 'En Buena Hora, Ya haz Activado este Inmueble');
        mostrarMensaje('msgAltaImagenes', '')
        limpiarTodoLosCampos();
        inmueblesDelMuro = filtraArrayPorUsuario(arrayCasas)
        armarMuro(inmueblesDelMuro) //Se actualiza el muro para que al volver al home, muestre todos los inmuebles del usuario. 

    } else {
        mostrarMensaje('msgPantallaAgregarInmueble', 'Ooops, debes ingresar un precio Mayor a cero')
    }

}

function filtraArrayPorUsuario(pArray) { //Función general que devuelve un nuevo array de acuerdo al usuario conectado.
    let nuevoArray = [];

    for (let i = 0; i < pArray.length; i++) {
        let c = pArray[i]
        if (c.usuario === usuarioConectado) {
            nuevoArray.push(c)
        }
    }
    return nuevoArray;

}

function armarDetalle() { //Se invoca al presionar el botón ver más por el usuario huesped.


    mostrarMensaje('msgDetalleTitulo', `Titulo: ${inmuebleSeleccionado.titulo}`)

    mostrarMensaje('msgDetalleCiudad', `Ciudad: ${inmuebleSeleccionado.ciudad}`)
    mostrarMensaje('msgDetalleDescripcion', `Descripcion: ${inmuebleSeleccionado.descripcion}`)
    mostrarMensaje('msgDetallePrecio', `Precio por Noche: ${inmuebleSeleccionado.precioXNoche}`)



    let imgElement = document.querySelector(".galeria .img-container img");

    imgElement.src = `./assets/img/${inmuebleSeleccionado.fotos[0]}`;

    posicionFotoGaleria = 0; //Se muestra la primera foto de la galería.
}

function btnGaleriaAnteriorHandler() {

    if (posicionFotoGaleria !== 0) {

        let imgElement = document.querySelector(".galeria .img-container img");

        posicionFotoGaleria--;

        imgElement.src = `./assets/img/${inmuebleSeleccionado.fotos[posicionFotoGaleria]}`;
    }
}

function btnGaleriaSiguienteHandler() {

    if (posicionFotoGaleria !== inmuebleSeleccionado.fotos.length - 1) {

        let imgElement = document.querySelector(".galeria .img-container img");

        posicionFotoGaleria++;

        imgElement.src = `./assets/img/${inmuebleSeleccionado.fotos[posicionFotoGaleria]}`;
    }
}

function armarTablaReservas(pArray) {


    let htmlBody = '';
    let aparece; //Con esta variable deshabilitamos el botón de calificar una vez que se califica el inmueble



    for (let i = 0; i < pArray.length; i++) {


        let c = pArray[i];
        if (c.paraCalificar) {
            aparece = 'block';


        } else {
            aparece = 'none';


        }

        htmlBody += `<tr>
        <td>${c.inmueble.titulo}</td>
        <td><img src="./assets/img/${c.inmueble.fotos[0]}" alt="${c.titulo}" ></td>
        <td> <input type="text"  id="txtCal${i}"style="display: ${aparece};" ></td>
        <td><input type="button" value="Calificar" class="btnCal" id="btnCal${i}" style="display: ${aparece};"> </td><tr/>
     `

        document.getElementById('tblReservas').innerHTML = htmlBody;


        enlazarEvento('btnCal', btnHandlerCalificar)


    }


}
function btnHandlerCalificar() {
    let pos = Number(this.id.substr(6))

    mostrarMensaje('msgCalReserva', '')

    let reservaSelecionada = filtraArrayPorUsuario(arrayReservas)[pos]

    let txtCalificacion = document.getElementById(`txtCal${pos}`).value;
    if (esNumero(txtCalificacion) && estaEntreDosValores(txtCalificacion, 1, 5)) {
        txtCalificacion = Number(txtCalificacion);
        reservaSelecionada.inmueble.totalPuntos += txtCalificacion
        reservaSelecionada.inmueble.cantidadValoraciones++;
        reservaSelecionada.inmueble.promedio = reservaSelecionada.inmueble.totalPuntos / reservaSelecionada.inmueble.cantidadValoraciones //Se actualiza el promedio de calificación del inmueble.
        reservaSelecionada.paraCalificar = false;
        mostrarMensaje('msgCalReserva', `Haz Calificado a ${reservaSelecionada.inmueble.titulo} con: ${txtCalificacion}puntos, Muchas Gracias...`);

    } else {

        mostrarMensaje('msgCalReserva', 'Ooops, La calificacion debe ser del 1 al 5');
    }
    armarTablaReservas(filtraArrayPorUsuario(arrayReservas));

}

function btnActivarInmueble() { //Cambia el estado del inmueble a activo o inactivo para que se pueda o no mostra al usuario huesped o visitante
    let pos = Number(this.id.substr(6))


    let inmuebleSeleccionado = filtraArrayPorUsuario(arrayCasas)[pos];


    let estadoInmueble = 'Haz Desactivado Este inmueble'


    inmuebleSeleccionado.activo = !inmuebleSeleccionado.activo


    if (inmuebleSeleccionado.activo) {
        estadoInmueble = 'Haz Activado este inmueble';
    }
    mostrarMensaje(`msgAct${pos}`, estadoInmueble)


}

function filtrarInmueblesActivos() { //Filtra los inmuebles con estado activos 
    inmueblesDelMuro = [];
    for (let i = 0; i < arrayCasas.length; i++) {
        let c = arrayCasas[i];
        if (c.activo) {
            inmueblesDelMuro.push(c)
        }


    }

}














