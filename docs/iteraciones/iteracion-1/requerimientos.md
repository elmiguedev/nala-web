## Requerimientos

### Administracion de Mascotas

- CRUD de mascotas
  - Nombre
  - Especie
  - Raza
  - Fecha nacimiento
  - Sexo
  - Foto

- CRUD de consultas al veterinario
  - Fecha
  - Motivo
  - Notas
  - Clinica
  - Veterinario
  - Dosis aplicadas (crear dosis opcional)

- CRUD de dosis aplicadas
  - Fecha
  - Nombre
  - Tipo
  - Notas
  - Clinica
  - Veterinario
  - Dosis
  - Fecha Proxima Dosis (crear evento opcional)

- CRUD de eventos
  - Fecha
  - Tipo
  - Titulo
  - Notas
  - Clinica
  - Veterinario
  - Dosis
  - Estado  
  

### Administracion de Adopciones

- Alta de ficha de adopcion
  - Nombre
  - Especie
  - Raza
  - Sexo
  - Edad
  - Foto
  - Descripcion
  - Vacunado
  - Desparasitado
  - Castrado
  - Contactos  (tipo: (email, telefono, whats, instagram), valor)
  - Ubicacion (ciudad/provincia/pais/calle?)
  - Origen Publicacion (patitas de perro, whats, etc)
  - Estado (disponible/adoptado)
  
- Baja de ficha de adopcion
- Consulta de fichas de adopcion
  - Consulta de distintos origenes (Nalita, whats, patitas, etc)
  - Filtros: 
    - ubicacion 
    - especie
    - edad
    - nombre
- Publicacion en redes sociales de nuevas adopciones

### Administracion de Perdidos y Encontrados

- Alta de ficha de perdido
  - Nombre
  - Especie
  - Raza
  - Sexo
  - Edad
  - Foto
  - Descripcion
  - Ultima vez visto
  - Ultima ubicacion
  - Contactos  (tipo: (email, telefono, whats, instagram), valor)
  - Ubicacion (ciudad/provincia/pais/calle?)
  - Origen Publicacion (patitas de perro, whats, etc)
  - Estado (disponible/adoptado)
  
- Baja de ficha de perdido
- Consulta de fichas de perdidos
  - Consulta de distintos origenes (Nalita, whats, patitas, etc)
  - Filtros: 
    - ubicacion 
    - especie
    - edad
    - nombre
- Alta de ficha de encontrado
- Baja de ficha de encontrado
- Consulta de fichas de perdidos
- Consulta de fichas de encontrados
- Publicacion en redes sociales de nuevos perdidos y nuevos encontrados

- Servicio de matcheo de perdidos y encontrados
  - El servicio debe correr todos los dias, scrappear y matchear los perros perdidos con los perros encontrados. Si encuentra, debe avisar en nombre de nalita y cruzar los datos de contacto.

- Administrar reporte de encuentro


### Administracion de Lugares
- Alta de ficha de lugar
- Baja de ficha de lugar
- Consulta de fichas de lugares
- Publicacion en redes sociales de nuevos lugares
- que son los lugares: veterinarias, parques, cafés, petshops, etc


### Administracion del Muro
- Alta de ficha de muro
  - usuario
  - contenido
  - imagenes
  - tags

- Baja de ficha de muro
- Consulta de fichas de muro
- Denunciar ficha
  - tipo de denuncia
  - motivo
  - comentario
  
- Publicacion en redes sociales de nuevos muros
