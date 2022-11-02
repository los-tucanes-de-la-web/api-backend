# api-backend

# Proyecto

    Hacer un API de un sistema de un cine

# Descripción

    API con nodejs + expres.js + mongoose

## Pseudo requerimientos

- Existen 3 roles en el sistema
  - Administradores
  - Empleados
  - Clientes
- Para poder registrar a un usuario en el sistema, se deberán ingresar los siguientes datos
  - DNI
  - Nombres
  - Apellidos
  - Fecha de nacimiento
  - Rol
  - Teléfono
  - Correo
  - Contraseña
  - Nombre de usuario
- Solo el administrador puede registrar empleados u otros adminsitradores
- Los clientes se registran a si mismos
- Los empleados pueden darse de baja
- Los registros de los usuarios, solo quedarán desactivados y no se podrán eliminar de la base de datos
- Para que un cliente pueda usar el sistema, debe tener una cuenta verificada por correo electrónico
- También deberá iniciar sesión y haber obtenido un token con el cuál podrá hacer las demás peticiones.
- El administrador o empleado puede registrar películas en el sistema, de las cuales se necesitan los siguientes datos:
  - Título
  - Director
  - Productor
  - Fecha de lanzamiento
  - Género
  - Dureción
  - Cast
  - Sinopsis
  - Calificación
  - Portada
- Los empleados y administradores pueden agendar y editar funciones, los datos para agendar las mimas son:
  - Hora y fecha
  - Idioma
  - Subtítulos
  - Sala
  - Película
  - Precio
- También se pueden registrar y editar, las salas de cine donde se pueden proyectar las películas, los datos para registrar una sala son:
  - Dirección
  - No. asientos
  - Nombre
- Los clientes pueden editar sus datos, pero para cambiar la contraseña, se le pide la contraseña anterior
- Los datos sensibles de la base deberán ser hasheados
- Se deberá llevar un regsitro de la compra de boletos de las funciones
- Los clientes pueden ver su historial de compras
- En el historial se debe ver el total, nombre de película, dirección y nombre de sala
- Los datos de una compra son:
  - Proyección
  - No, boletos
  - subtotal
  - descuento
  - total
- Los clientes que cumplan años al momento de hacer una compra, se les hará un descuento del 11%
- Los clientes de la tercera edad, tienen descuento del 20% los fines de semana que se haga la compra
- Los clientes pueden buscar películas y dejar reseñas de las mismas
- Los clientes pueden consultar las reseñas de otros clientes
- Los datos para dejar un comentario son:
  - Comentario
  - Calificación 1- 5
- La calificación de la película se calcula con base en los comentarios que le hayan dejado
- Se puede buscar proyecciones filtrando por:

  - Nombre de película
  - Rango de fecha de proyección
  - Precio
  - Sala

- Los administradores pueden buscar clientes por
  - Nombre, edad o correo