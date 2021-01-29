let arrayUsuarios = [];
let arrayCasas = [];
let arrayReservas = [];
let admin = new Usuario()
admin.correo = 'admin'
admin.pasword = '1234';
admin.rol ='Administrador';
admin.nombre ='Administrador';

//Usuarios anfitriones

let a1 = new Usuario('Pedro', 'Cabral', '12345678', '1234','pedro@mail.com', 'Anfitrion');
let a2 = new Usuario('Manuel', 'Sanders', '12345678', '1234','manuel@mail.com', 'Anfitrion');
let a3 = new Usuario('Juan', 'Rodriguez', '12345678', '1234','juan@mail.com', 'Anfitrion');
let a4 = new Usuario('Edinson', 'Cavani', '12345678', '1234','edinson@mail.com', 'Anfitrion');
let a5 = new Usuario('Luis', 'Suarez', '12345678', '1234','luis@mail.com', 'Anfitrion');
let a6 = new Usuario('Arturo', 'Vidal', '12345678', '1234','arturo@mail.com', 'Anfitrion');
let a7 = new Usuario('Daniel', 'Cabral', '12345678', '1234', 'daniel@mail.com', 'Anfitrion');
let a8 = new Usuario('Carlos', 'Cabral', '12345678', '1234', 'carlos@mail.com', 'Anfitrion');

//Usuarios huésped

let u1 = new Usuario('Ana', 'Cabral', '12345678', '4321', 'ana@mail.com', 'Huesped');
let u2 = new Usuario('Juan', 'Perez', '12345678', '4321', 'juanperez@mail.com', 'Huesped');
let u3 = new Usuario('Jose', 'Gomez', '12345678', '4321', 'jose@mail.com', 'Huesped');
let u4 = new Usuario('Marcos', 'Smith', '12345678', '4321', 'marcos@mail.com', 'Huesped');
let u5 = new Usuario('Gabriel', 'Gonzalez', '12345678', '4321', 'gabriel@mail.com', 'Huesped');
let u6 = new Usuario('Sandro', 'Rodriguez', '12345678', '4321', 'sandro@mail.com', 'Huesped');
let u7 = new Usuario('Miguel', 'Lee', '12345678', '4321', 'miguel@mail.com', 'Huesped');
let u8 = new Usuario('Joaquin', 'Tarta', '12345678', '4321', 'joaquin@mail.com', 'Huesped');
let u9 = new Usuario('Jose', 'Gol', '12345678', '4321', 'josegol@mail.com', 'Huesped');
let u10 = new Usuario('Arturo', 'Gil', '12345678', '4321', 'arturogil@mail.com', 'Huesped');
let u11 = new Usuario('Carlos', 'Facio', '12345678', '4321', 'carlosfacio@mail.com', 'Huesped');
let u12 = new Usuario('Diego', 'Maradona', '12345678', '4321', 'diego@mail.com', 'Huesped');

//Inmuebles

let casa1 = new Inmueble('La Casa de Francia', 'Gran casa de invierno con muy lindo diseño. La casa cuenta con tres dormitorios, 2 baños, garaje para dos autos y barbacoa. Especial para descansar.', 'Araminda', 7100, a1, ['casa1.jpg','dormitorio1.jpg','cocina1.jpg','bano1.jpg'],2.5);
casa1.totalPuntos =2.5;
casa1.cantidadValoraciones =1;
let casa2 = new Inmueble('Casa de Papel', 'Casa rústica de verano,  muy comoda. Especial para las personas con alma aventurera. Cuenta con dos dormitorios, un baño en suite, un baño para el uso común y garaje. Cerca del bosque hermoso.', 'Punta del Este', 9000, a1, ['casa2.jpg','dormitorio2.jpg','cocina2.jpg','bano1.jpg'], 4);
casa2.totalPuntos =4;
casa2.cantidadValoraciones =1;
let casa3 = new Inmueble('La casa de La Selva', 'Casa de gran porte de primavera , muy adecuada para aquellas personas que aprecian el arte y el confort. Cuenta con cinco dormitorios amplios, todos con baños en suite. Dos baños para uso común, barbacoa, cochera para dos vehiculos, barbacoa con parrilla para 20 personas, cocina amplia y varios espacios comunes para relajarse y disfrutar. Además cuenta con picina y jacuzzi.', 'Punta del Este', 7890, a1, ['casa3.jpg','dormitorio2.jpg','cocina3.jpg','bano1.jpg'], 3);
casa3.totalPuntos =3;
casa3.cantidadValoraciones =1;
let casa4 = new Inmueble('Casa de Cera', 'Gran casa con muy lindo diseño. La casa cuenta con tres dormitorios, 2 baños, garaje para dos autos y barbacoa. Especial para descansar.', 'Punta del Este', 10540, a2, ['casa4.jpg','dormitorio1.jpg','cocina1.jpg','bano1.jpg'], 4.8);
casa4.totalPuntos =4.8;
casa4.cantidadValoraciones =1;
let casa5 = new Inmueble('Casa del Aire', 'Casa rústica pero muy comoda. Especial para las personas con alma aventurera. Cuenta con dos dormitorios, un baño en suite, un baño para el uso común y garaje. Cerca del bosque hermoso.', 'Punta del Este', 4750, a2, ['casa5.jpg','dormitorio2.jpg','cocina2.jpg','bano1.jpg'], 4.5);
casa5.totalPuntos =4.5;
casa5.cantidadValoraciones =1;
let casa6 = new Inmueble('Casa de la Tierra', 'Casa de gran porte arquitectónico, muy adecuada para aquellas personas que aprecian el arte y el confort. Cuenta con cinco dormitorios amplios, todos con baños en suite. Dos baños para uso común, barbacoa, cochera para dos vehiculos, barbacoa con parrilla para 20 personas, cocina amplia y varios espacios comunes para relajarse y disfrutar. Además cuenta con picina y jacuzzi.', 'Punta Colorada', 4000, a3, ['casa6.jpg','dormitorio2.jpg','cocina3.jpg','bano1.jpg' ], 4.2);
casa6.totalPuntos =4.2;
casa6.cantidadValoraciones =1;
let casa7 = new Inmueble('Casa del Fuego', 'Gran casa con muy lindo diseño. La casa cuenta con tres dormitorios, 2 baños, garaje para dos autos y barbacoa. Especial para descansar.','Punta Colorada', 6700, a3, ['casa7.jpg','dormitorio1.jpg','cocina1.jpg','bano1.jpg' ], 3.8);
casa7.totalPuntos =3.8;
casa7.cantidadValoraciones =1;
let casa8 = new Inmueble('Casa la Abuela', 'Casa rústica pero muy comoda. Especial para las personas con alma aventurera. Cuenta con dos dormitorios, un baño en suite, un baño para el uso común y garaje. Cerca del bosque hermoso.', 'Punta Colorada', 8900, a4, ['casa8.jpg','dormitorio2.jpg','cocina2.jpg','bano1.jpg' ], 1.1);
casa8.totalPuntos =1.1;
casa8.cantidadValoraciones =1;
let casa9 = new Inmueble('Casa Grecia', 'Casa de gran porte arquitectónico, muy adecuada para aquellas personas que aprecian el arte y el confort. Cuenta con cinco dormitorios amplios, todos con baños en suite. Dos baños para uso común, barbacoa, cochera para dos vehiculos, barbacoa con parrilla para 20 personas, cocina amplia y varios espacios comunes para relajarse y disfrutar. Además cuenta con picina y jacuzzi.', 'Playa Hermosa', 7890, a4, ['casa9.jpg','dormitorio2.jpg','cocina3.jpg','bano1.jpg' ], 2.8);
casa9.totalPuntos =2.8;
casa9.cantidadValoraciones =1;
let casa10 = new Inmueble('Casa Rosada', 'Gran casa con muy lindo diseño. La casa cuenta con tres dormitorios, 2 baños, garaje para dos autos y barbacoa. Especial para descansar.', 'Playa Hermosa', 8999, a5, ['casa10.jpg','dormitorio1.jpg','cocina1.jpg','bano1.jpg' ], 3.1);
casa10.totalPuntos =3.1;
casa10.cantidadValoraciones =1;
let casa11 = new Inmueble('Casa del Prgramador', 'Casa rústica sean todos bienvenidos, pero muy comoda. Especial para las personas con alma aventurera. Cuenta con dos dormitorios, un baño en suite, un baño para el uso común y garaje. Cerca del bosque hermoso.', 'Playa Hermosa', 3500, a5, ['casa11.jpg','dormitorio2.jpg','cocina2.jpg','bano1.jpg' ], 3.5);
casa11.totalPuntos =3.5;
casa11.cantidadValoraciones =1;
let casa12 = new Inmueble('Casa Blanca', 'Casa de gran porte arquitectónico, muy adecuada para aquellas personas que aprecian el arte y el confort. Cuenta con cinco dormitorios amplios, todos con baños en suite. Dos baños para uso común, barbacoa, cochera para dos vehiculos, barbacoa con parrilla para 20 personas, cocina amplia y varios espacios comunes para relajarse y disfrutar. Además cuenta con picina y jacuzzi.', 'Flores', 7000, a6, ['casa12.jpg','dormitorio2.jpg','cocina3.jpg','bano1.jpg' ], 2.5);
casa12.totalPuntos =2.5;
casa12.cantidadValoraciones =1;
let casa13 = new Inmueble('Casa Los Espiritus', 'Gran casa con muy lindo diseño. La casa cuenta con tres dormitorios, 2 baños, garaje para dos autos y barbacoa. Especial para descansar.', 'Flores', 6420, a6, ['casa13.jpg','dormitorio1.jpg','cocina1.jpg','bano1.jpg' ], 4.5);
casa13.totalPuntos =4.5;
casa13.cantidadValoraciones =1;
let casa14 = new Inmueble('Casa Roja', 'Casa rústica pero muy comoda. Especial para las personas con alma aventurera. Cuenta con dos dormitorios, un baño en suite, un baño para el uso común y garaje. Cerca del bosque hermoso.', 'Mercedes', 11250, a7, ['casa14.jpg','dormitorio2.jpg','cocina2.jpg','bano1.jpg' ], 1.5);
casa14.totalPuntos =1.5;
casa14.cantidadValoraciones =1;
casa14.activo = false;
let casa15 = new Inmueble('Casa Astral', 'Venga y no sienta  Casa de gran porte arquitectónico, muy adecuada para aquellas personas que aprecian el arte y el confort. Cuenta con cinco dormitorios amplios, todos con baños en suite. Dos baños para uso común, barbacoa, cochera para dos vehiculos, barbacoa con parrilla para 20 personas, cocina amplia y varios espacios comunes para relajarse y disfrutar. Además cuenta con picina y jacuzzi.', 'Mercedes', 3500, a7, ['casa15.jpg','dormitorio2.jpg','cocina3.jpg','bano1.jpg' ], 4.5);
casa15.totalPuntos =4.5;
casa15.cantidadValoraciones =1;
let casa16 = new Inmueble('Casa Galáctica', 'Gran casa con muy lindo diseño. La casa cuenta con tres dormitorios, 2 baños, garaje para dos autos y barbacoa. Especial para descansar.', 'Mercedes', 2000, a8, ['casa16.jpg' ,'dormitorio1.jpg','cocina1.jpg','bano1.jpg'], 5);
casa16.totalPuntos =5;
casa16.activo = false;
casa16.cantidadValoraciones =1;
let casa17 = new Inmueble('Casa del Mar', 'Casa rústica pero muy comoda. Especial para las personas con alma aventurera. Cuenta con dos dormitorios, un baño en suite, un baño para el uso común y garaje. Cerca del bosque hermoso.', 'Salto', 9800, a8, ['casa17.jpg','dormitorio2.jpg','cocina2.jpg','bano1.jpg' ], 1);
casa17.totalPuntos =1;
casa17.cantidadValoraciones =1;
let casa18 = new Inmueble('Casa Estonia', 'Casa de gran porte arquitectónico, muy adecuada para aquellas personas que aprecian el arte y el confort. Cuenta con cinco dormitorios amplios, todos con baños en suite. Dos baños para uso común, barbacoa, cochera para dos vehiculos, barbacoa con parrilla para 20 personas, cocina amplia y varios espacios comunes para relajarse y disfrutar. Además cuenta con picina y jacuzzi.', 'Salto', 7450, a1, ['casa18.jpg','dormitorio2.jpg','cocina3.jpg','bano1.jpg' ], 1.2);
casa18.totalPuntos =1.2;
casa18.activo = false;
casa18.cantidadValoraciones =1;
let casa19 = new Inmueble('El Zahir', 'Gran casa con muy lindo diseño. La casa cuenta con tres dormitorios, 2 baños, garaje para dos autos y barbacoa. Especial para descansar.', 'Rocha', 8750, a2, ['casa19.jpg','dormitorio1.jpg','cocina1.jpg','bano1.jpg' ], 4.2);
casa19.totalPuntos =4.2;
casa19.cantidadValoraciones =1;
let casa20 = new Inmueble('Casa Jamaica', 'Casa rústica pero muy comoda. Especial para las personas con alma aventurera. Cuenta con dos dormitorios, un baño en suite, un baño para el uso común y garaje. Cerca del bosque hermoso.', 'Rocha', 4560, a3, ['casa20.jpg','dormitorio2.jpg','cocina2.jpg','bano1.jpg' ], 4.2);
casa20.totalPuntos =4.2;
casa20.cantidadValoraciones =1;
let casa21 = new Inmueble('La casa de la Luna', 'Casa de gran porte arquitectónico, muy adecuada para aquellas personas que aprecian el arte y el confort. Cuenta con cinco dormitorios amplios, todos con baños en suite. Dos baños para uso común, barbacoa, cochera para dos vehiculos, barbacoa con parrilla para 20 personas, cocina amplia y varios espacios comunes para relajarse y disfrutar. Además cuenta con picina y jacuzzi.', 'Montevideo', 5550, a4, ['casa21.jpg','dormitorio2.jpg','cocina3.jpg','bano1.jpg' ], 4.9);
casa21.totalPuntos =4.9;
casa21.cantidadValoraciones =1;

//Reservas

let reserva1 = new Reserva(casa1, 5, u1)
let reserva2 = new Reserva(casa2, 3, u1)
let reserva3 = new Reserva(casa3, 2, u1)

let reserva4 = new Reserva(casa4, 5, u2)
let reserva5 = new Reserva(casa5, 4, u2)
let reserva6 = new Reserva(casa6, 5, u2)

let reserva7 = new Reserva(casa7, 15, u3)
let reserva8 = new Reserva(casa8, 5, u3)
let reserva9 = new Reserva(casa9, 3, u3)

let reserva10 = new Reserva(casa10, 2, u4)
let reserva11 = new Reserva(casa11, 5, u4)
let reserva12 = new Reserva(casa12, 7, u4)

let reserva13 = new Reserva(casa10, 4, u5)
let reserva14 = new Reserva(casa11, 5, u5)
let reserva15 = new Reserva(casa13, 5, u5)

let reserva16 = new Reserva(casa10, 6, u6)
let reserva17 = new Reserva(casa11, 15, u6)
let reserva18 = new Reserva(casa12, 7, u6)

let reserva19 = new Reserva(casa10, 20, u7)
let reserva20 = new Reserva(casa11, 5, u7)
let reserva21 = new Reserva(casa12, 5, u7)

let reserva22 = new Reserva(casa10, 7, u8)
let reserva23 = new Reserva(casa11, 5, u8)
let reserva24 = new Reserva(casa12, 5, u8)

let reserva25 = new Reserva(casa10, 5, u9)
let reserva26 = new Reserva(casa11, 5, u9)
let reserva27 = new Reserva(casa12, 9, u9)

let reserva28 = new Reserva(casa14, 3, u10)
let reserva29 = new Reserva(casa15, 2, u10)
let reserva30 = new Reserva(casa12, 5, u10)

let reserva31 = new Reserva(casa17, 5, u11)
let reserva32 = new Reserva(casa18, 8, u11)
let reserva33 = new Reserva(casa21, 3, u11)

let reserva34 = new Reserva(casa17, 6, u12)
let reserva35 = new Reserva(casa18, 7, u12)
let reserva36 = new Reserva(casa21, 5, u12)


//Array de datos 


arrayReservas.push(reserva1, reserva2, reserva3, reserva4, reserva5, reserva6, reserva7, reserva8, reserva9, reserva10, reserva11, reserva12, reserva13, reserva14, reserva15, reserva16, reserva17, reserva18, reserva19, reserva20, reserva21, reserva22, reserva23, reserva24, reserva25, reserva26, reserva27, reserva28, reserva29, reserva30, reserva31, reserva32, reserva33, reserva34, reserva35, reserva36)
arrayCasas.push(casa1, casa2, casa3, casa4, casa5, casa6, casa7, casa8, casa9, casa10, casa11, casa12, casa13, casa14, casa15, casa16, casa17, casa18, casa19, casa20, casa21)
arrayUsuarios.push(admin,a1,a2,a3,a4,a5,a6,a7,a8,u1,u2,u3,u4,u5,u6,u7,u8,u9,u10,u11,u12)

//Info global de la app

let cotizacionDolar = 42;
let moneda = '$U';
let arrayImagenes = ['casa1.jpg','casa2.jpg','casa3.jpg', 'casa4.jpg', 'casa5.jpg', 'casa6.jpg', 'casa7.jpg']
let imagenesSeleccionadas = [];




