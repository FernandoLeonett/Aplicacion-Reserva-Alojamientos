// Entidades : usuarios, inmuebles, reservas

//Clases de usuario

class Usuario {
    nombre;
    apellido;
    telefono;
    pasword;
    correo;
    rol;
  



    constructor(pNombre, pApellido, pTelefono, pPasword, pCorreo, pRol) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.telefono = pTelefono;
        this.pasword = pPasword;
        this.correo = pCorreo;
     
        this.rol = pRol;
    }
}

//Clase inmueble

class Inmueble {

    titulo;
    descripcion;
    ciudad;
    precioXNoche;
    cantidadValoraciones;
    totalPuntos
    fotos;
    activo;
    usuario;
    promedio;


    constructor(pTitulo, pDescripcion, pCiudad, pPrecioXNoche, pUsuario, pFotos, pPromedio) {
        this.titulo = pTitulo;
        this.descripcion = pDescripcion;
        this.ciudad = pCiudad;
        this.precioXNoche = pPrecioXNoche;
      
      
        this.totalPuntos=0;
        this.activo = true;
        this.usuario = pUsuario;
        this.fotos = pFotos;
        this.cantidadValoraciones=0;
        this.promedio = pPromedio;
     
    }

}

//Clase reservas

class Reserva {

    inmueble;
    paraCalificar;
 
    cantidadNoches;
    usuario;


    constructor(pInmueble, pCantidadNoches, pUsuario) {
        this.inmueble = pInmueble;
        this.paraCalificar = true;
        this.cantidadNoches = pCantidadNoches;
        this.usuario = pUsuario;

    }
}