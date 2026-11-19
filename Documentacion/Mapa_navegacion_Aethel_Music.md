# Aethel Music — Mapa de Navegación

## Descripción general
Aplicación web (instalable o usable en navegador) para reproducción y edición de archivos de audio digital.  
Los usuarios suben sus archivos locales y los gestionan desde la aplicación.  
Registro público. Sin sistema de pagos (gratuito, código en GitHub).

## Roles
- **Usuario**
- **DJ**
- **Administrador**

Todos los roles pueden navegar libremente por las secciones después de iniciar sesión.  
La diferencia de permisos se aplica principalmente en funciones específicas (ej. Gestión de usuarios solo para Administrador).

## Estados de la aplicación
- **No logueado (Invitado)**: Puede subir y reproducir archivos de audio, pero **no** puede editar ni crear playlists.
- **Logueado**: Acceso completo a todas las funciones.

## Zona Pública (No logueado)

- Página de Inicio
  - Botón: Iniciar sesión
  - Botón: Crear usuario
  - 2 videos tutoriales
- Login
- Crear usuario
  - Confirmación de contraseña
  - Correo único (usado como ID)
- Reproductor invitado
  - Subir archivos
  - Reproducir archivos
  - Sin edición ni playlists

## Zona Privada (Logueado)

### Navbar Global (siempre visible)
No interrumpe la reproducción de audio. Permite navegar libremente entre:
- Reproducción
- DJ
- Playlists
- Configuración
- Perfil
- Gestión de usuarios (solo visible para Administrador)

### Interfaz de Reproducción (pantalla principal post-login)
- Menú lateral de control de audio (siempre presente):
  - Play / Pause
  - Avanzar
  - Retroceder
  - Lista de archivos actuales
- **Botón “Marcar como favorito”**
  - Al marcar un archivo como favorito, se añade automáticamente a la carpeta **Favoritos**
  - La carpeta **Favoritos** existe por defecto en la Interfaz de Playlists
  - Es **no eliminable**, solo editable

### Interfaz de DJ
- **Plato A**: reproducción de 1 archivo
- **Plato B**: reproducción de 1 archivo
- **Pads de sonido** (estilo consola de mezclas real)
- Mezclar
- Descargar mixes
- Menú lateral de control de audio (igual que en Reproducción)

### Interfaz de Playlists
- Carpeta **Favoritos** (fija, no eliminable, solo editable)
- Carpetas personalizables
- Crear, editar y eliminar carpetas (excepto la carpeta Favoritos)
- Agregar / quitar pistas dentro de las carpetas
- Menú lateral de control de audio

### Interfaz de Configuración
- Accesibilidad
- Decoración / Apariencia

### Interfaz de Perfil
- CRUD del propio usuario:
  - Ver datos
  - Editar perfil
  - Cambiar contraseña
  - Eliminar cuenta

### Gestión de usuarios (solo Administrador)
- Listado de usuarios
- Crear / editar / eliminar usuarios
- Asignar roles (Usuario / DJ / Administrador)

## Elementos persistentes
- **Navbar global**: presente en toda la zona privada
- **Menú lateral de control de reproducción**: presente en las interfaces de Reproducción, DJ y Playlists
- El audio continúa reproduciéndose al navegar entre secciones

## Flujos principales
1. Usuario llega a la Página de Inicio → puede hacer login, registrarse o usar el reproductor invitado.
2. Tras login o registro → redirige a la **Interfaz de Reproducción**.
3. Desde cualquier sección puede marcar archivos como favoritos → se añaden automáticamente a la carpeta Favoritos.
4. En la Interfaz de DJ puede usar Plato A + Plato B + Pads de sonido y descargar el mix resultante.