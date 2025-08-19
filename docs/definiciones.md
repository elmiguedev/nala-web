# Nalita — ERS del MVP (Especificación de Requisitos de Software)

> **Objetivo:** Definir el alcance, requisitos y lineamientos del **MVP** de **Nalita**, una red social para tutores de mascotas que centraliza gestión de la vida de la mascota y descubre/recomienda contenido pet friendly.

---

## 1) Visión y objetivos

- **Visión:** Ser el lugar donde una persona encuentra **todo** sobre su mascota: salud, recordatorios, lugares, comunidad y ayuda.
- **Objetivos del MVP:**
  1. Permitir **registrar mascotas** y **administrar** sus datos básicos y tratamientos/eventos.
  2. Proveer un **tablero** (feed simple) para **anuncios** de la comunidad.
  3. Habilitar tableros específicos de **Animales perdidos** y **Adopciones**.
  4. Ofrecer un **mapa** con **recomendaciones pet friendly**.
  5. Autenticación rápida con **Google Login**.

**KPIs iniciales:** usuarios registrados, mascotas creadas, posts publicados, reportes de mascotas perdidas resueltos, adopciones concretadas, aperturas de mapa y guardados de lugares.

---

## 2) Alcance del MVP

### Incluye

- **Autenticación:** Google OAuth (login/registro).
- **Perfil de usuario básico:** nombre, avatar (de Google), ubicación aproximada (editable), preferencias.
- **Gestión de mascotas:** CRUD de mascotas (nombre, especie, raza, sexo, fecha nacimiento, foto), **tratamientos** (vacunas, desparasitación, otros), **eventos** (recordatorios: próxima vacuna, turno vet, medicación), historial.
- **Tablero General (anuncios):** publicaciones con texto + 1-3 imágenes, tags, comentarios, reacciones simples (like).
- **Tablero Perdidos:** publicación con datos de la mascota, zona, fecha, contacto; estado (activo/resuelto); botón **“Encontré/Actualicé”**.
- **Tablero Adopción:** fichas de adopción con requisitos, contacto, ubicación; estado (disponible/adoptado).
- **Mapa Pet Friendly:** listado + mapa de lugares (veterinarias, parques, cafés, petshops) con rating comunitario, fotos, tags (agua, sombra, acepta perros dentro, etc.).
- **Notificaciones básicas:** recordatorios de eventos de mascota (email/app), menciones en comentarios.
- **Moderación mínima:** reportar publicaciones/lugares (spam, inapropiado).

### Excluye (post-MVP)

- Mensajería privada completa.
- Marketplace/tienda.
- Gamificación avanzada y niveles.
- Integración con chips/RFID.
- Calendario compartido entre múltiples cuidadores de una misma mascota.

---

## 3) Actores y roles

- **Visitante**: ve contenido público (listados básicos), no publica.
- **Usuario** (logueado): crea/edita mascotas, publica en tableros, comenta, guarda lugares.
- **Moderador**: puede ocultar contenidos reportados.
- **Admin**: CRUD total + métricas.

Permisos se modelan por **feature flags** simples (p. ej., `canPost`, `canModerate`).

---

## 4) Historias de usuario (MVP)

**Autenticación**

- Como usuario quiero loguearme con **Google** para entrar rápido.

**Mascotas**

- Como usuario quiero **crear** una mascota con foto para tener su ficha.
- Como usuario quiero **agregar tratamientos** (vacuna, desparasitación) con fecha y notas.
- Como usuario quiero **crear eventos** (recordatorios) y recibir alerta.
- Como usuario quiero ver el **historial** de tratamientos y eventos.

**Tablero General**

- Como usuario quiero **publicar** un anuncio con texto e imagen para compartir con la comunidad.
- Como usuario quiero **comentar** y **dar like**.

**Perdidos**

- Como usuario quiero crear un **reporte de mascota perdida** con zona y contacto para pedir ayuda.
- Como usuario quiero **marcar como resuelto** y actualizar el estado.

**Adopciones**

- Como usuario quiero **publicar** una mascota en adopción con requisitos y contacto.
- Como usuario quiero **filtrar** por tamaño/edad/ubicación.

**Mapa Pet Friendly**

- Como usuario quiero **ver un mapa** con lugares cercanos y **filtrar** por tipo/tag.
- Como usuario quiero **guardar** un lugar favorito y **calificar**.

**Moderación**

- Como usuario quiero **reportar** un contenido para mantener la comunidad sana.

Criterios de aceptación por historia se detallan en el **Backlog** (sección 9).

---

## 5) Flujos clave (alto nivel)

1. **Onboarding**: Google Login → completar datos mínimos de perfil → CTA “Crear tu primera mascota”.
2. **Crear mascota**: Form → guardar → pantalla de **Ficha** con pestañas **Tratamientos**, **Eventos**, **Historial**.
3. **Recordatorio**: Crear evento → notificación programada (email/app) → marcar como hecho.
4. **Publicar Perdido**: Form con foto, zona (map picker), contacto → aparece en tablero → botón “Resuelto”.
5. **Mapa**: Abrir mapa → auto-centro por ciudad del usuario → filtros → ver ficha del lugar → guardar/calificar.

---

## 6) Modelo de datos (MVP)

**Usuario**(id, email\*, nombre, avatar\_url, ciudad, país, created\_at)

**Mascota**(id, owner\_id→Usuario, nombre\*, especie\*, raza, sexo, nacimiento, foto\_url, creado\_at)

**Tratamiento**(id, mascota\_id→Mascota, tipo\*[vacuna|desparasitación|otro], nombre, fecha, veterinaria, notas)

**Evento**(id, mascota\_id→Mascota, tipo\*[vacuna|turno|medicación|otro], fecha\_programada\*, recordatorio\_horas, estado\*[pendiente|hecho], notas)

**Post**(id, author\_id→Usuario, tipo\*[anuncio|perdido|adopción], título, cuerpo, imágenes[], tags[], ubicación\_geo, estado\*[activo|resuelto|adoptado], creado\_at)

**Comentario**(id, post\_id→Post, author\_id→Usuario, cuerpo, creado\_at)

**Lugar**(id, nombre\*, tipo\*[vet|parque|café|petshop|otro], geo, dirección, fotos[], tags[], creado\_at)

**RatingLugar**(id, lugar\_id→Lugar, user\_id→Usuario, rating 1..5, comentario, creado\_at)

**Reporte**(id, objeto\_tipo\*[post|comentario|lugar], objeto\_id, motivo\*[spam|inapropiado|falso], user\_id, creado\_at, estado\*[pendiente|resuelto])

**Notificación**(id, user\_id, tipo\*[evento\_recordatorio|mención|sistema], payload\_json, leído, creado\_at)

> Nota: Imágenes se pueden almacenar en S3/compatible; `imágenes[]` referencia URLs.

---

## 7) Reglas de negocio

- Un **Usuario** puede tener **N mascotas**; una **Mascota** pertenece a **1 usuario** (MVP; co-cuidadores post-MVP).
- **Eventos** pueden generar **notificaciones** N horas antes (`recordatorio_horas`).
- **Perdidos**: requieren **zona** (geo aproximada) y **contacto**; cambian a **resuelto** por el autor o moderador.
- **Adopciones**: muestran **estado** (disponible/adoptado) y datos de contacto.
- **Mapa**: un **Lugar** puede ser agregado por usuarios; publicación visible tras validaciones básicas (anti-spam) o umbral de reputación simple.

---

## 8) No funcionales (MVP)

- **Disponibilidad**: 99% mensual (MVP single-region).
- **Rendimiento**: TTFB < 500ms en endpoints críticos (p95), búsqueda < 800ms (p95).
- **Seguridad**: OAuth2 Google, JWT firmado; mínimo RBAC (user/mod/admin); protección básica de subida de archivos.
- **Privacidad**: ubicación aproximada por defecto; datos sensibles editables/opt-out.
- **Escalabilidad**: base relacional (PostgreSQL) + caché simple (Redis opcional post-MVP).
- **Observabilidad**: logs estructurados, métricas básicas (req/sec, latencia, error rate) y trazas mínimas.

---

## 9) Backlog priorizado (MVP)

**MVP 0 (core)**

1. Google Login.
2. Perfil básico.
3. CRUD Mascotas.
4. Tratamientos + Historial.
5. Eventos con recordatorios por email.

**MVP 0.1 (comunidad)**
6\. Tablero General con posts + comentarios + likes.
7\. Tablero Perdidos (con estado y mapa picker).
8\. Tablero Adopción (con filtros básicos).

**MVP 0.2 (descubrimiento)**
9\. Mapa Pet Friendly (listado + detalle + rating + guardar).
10\. Reporte y moderación básica.

**MVP 0.3 (pulido)**
11\. Notificaciones en-app.
12\. Búsqueda y filtros unificados.

---

## 10) APIs (borrador)

**Auth**

- `POST /auth/google` → login/registro con token Google.

**Usuarios**

- `GET /me` → perfil; `PATCH /me` → actualizar.

**Mascotas**

- `POST /pets` | `GET /pets` | `GET /pets/:id` | `PATCH /pets/:id` | `DELETE /pets/:id`
- `POST /pets/:id/treatments` | `GET /pets/:id/treatments`
- `POST /pets/:id/events` | `GET /pets/:id/events` | `PATCH /events/:id`

**Posts**

- `POST /posts` (tipo: anuncio|perdido|adopción)
- `GET /posts?tipo=&q=&page=`
- `PATCH /posts/:id` (estado)
- `POST /posts/:id/comments` | `GET /posts/:id/comments`
- `POST /posts/:id/like` | `DELETE /posts/:id/like`

**Lugares**

- `POST /places` | `GET /places?tipo=&tag=&near=`
- `GET /places/:id` | `POST /places/:id/rating`

**Reportes & Notifs**

- `POST /reports` | `PATCH /reports/:id`
- `GET /notifications` | `PATCH /notifications/:id`

---

## 11) Integraciones

- **Google OAuth** para login.
- **Mapa**: Google Maps o Leaflet + OpenStreetMap (costos vs licencias).
- **Email**: SES/Resend/SendGrid (uno) para recordatorios.
- **Storage**: S3 compatible para imágenes.

---

## 12) Seguridad y cumplimiento

- **JWT** con expiración 7d, refresh simple (post-MVP si hace falta).
- **Rate limiting** en publicaciones y subida de imágenes.
- **Validación** de imágenes (tipo, tamaño, scanning básico).
- **GDPR-like**: export/delete account (post-MVP si aplica).

---

## 13) UX/UI (líneas guía MVP)

- **Minimalista + pasteles**, tipografía legible, iconografía simple.
- Navegación por **tabs**: *Mascotas*, *Tablero*, *Perdidos*, *Adopción*, *Mapa*.
- **Empty states** claros y con CTA.
- **Accesibilidad**: contraste AA, labels, foco visible.

---

## 14) Métricas y analítica

- Registro/activación: % usuarios con ≥1 mascota.
- Engagment: posts/usuario/semana, comentarios, likes.
- Eficacia: % perdidos resueltos, % adopciones confirmadas.
- Descubrimiento: aperturas de mapa, ratings, lugares guardados.

---

## 15) Riesgos y supuestos

- **Riesgo**: abuso/spam en tableros. **Mitigación**: rate limit, reportes, flags.
- **Riesgo**: costos de mapas. **Mitigación**: OSM/Leaflet en MVP.
- **Riesgo**: moderación de contenidos sensibles. **Mitigación**: pautas claras + flujos de reporte.
- **Supuesto**: foco en Argentina (ES) en MVP; internacionalización post-MVP.

---

## 16) Roadmap (8–10 semanas sugeridas)

- **W1–2**: Auth + Perfil + CRUD Mascotas.
- **W3**: Tratamientos/Eventos + Email.
- **W4**: Tablero General.
- **W5**: Perdidos.
- **W6**: Adopción.
- **W7**: Mapa + Lugares + Rating.
- **W8**: Moderación + Notifs + Pulidos.

---

## 17) Fuera de alcance (MVP)

- Chat en tiempo real.
- Roles complejos multi-cuidadores.
- Verificación de ONGs/Refugios (manual, post-MVP).
- Integraciones con clínicas veterinarias.

---

### Anexos

- **Diccionario de datos** y **diagramas** ERD/Flujos se pueden adjuntar en iteración siguiente.

