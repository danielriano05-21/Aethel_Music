# Especificación de Requisitos de Software (SRS)
## Proyecto: Aethel Music

**Versión:** 1.0  
**Fecha:** 10/11/2026  
**Estándar de referencia:** IEEE 830  

**Elaborado por:** Equipo Aethel Music (Juan Castañeda, Eduard Martinez, Camilo Ruiz, Daniel Riaño)

---

## 1. Introducción

### 1.1 Propósito
El presente documento tiene como objetivo definir de manera clara y completa los requisitos funcionales, no funcionales y de interfaz del sistema **Aethel Music**. Sirve como base para el diseño, desarrollo, pruebas y validación del producto.

### 1.2 Alcance
Aethel Music es una aplicación de reproducción y mezcla de audio digital que permite:
- Reproducir archivos de audio locales.
- Gestionar listas de reproducción.
- Realizar mezclas mediante una consola de DJ.
- Funcionar con y sin conexión a internet.
- Personalizar la interfaz (tema, tamaño de texto, etc.).

El producto no tiene fines comerciales ni infringe derechos de autor. No añade marcas de agua a las creaciones del usuario.

### 1.3 Definiciones, Acrónimos y Abreviaturas
| Término | Definición |
|---------|----------|
| RF | Requisito Funcional |
| RNF | Requisito No Funcional |
| RI | Requisito de Interfaz |
| DJ | Disc Jockey |
| MIX | Mezcla de audio |
| SRS | Software Requirements Specification |

### 1.4 Referencias
- Documento de Requisitos Funcionales, No Funcionales y de Interfaz de Aethel Music.
- Historias de Usuario y Criterios de Aceptación de Aethel Music.
- IEEE Std 830-1998 – IEEE Recommended Practice for Software Requirements Specifications.

### 1.5 Visión General
El documento está organizado en tres secciones principales: Introducción, Descripción General y Requisitos Específicos. Los requisitos específicos se detallan a partir de los documentos de requisitos e historias de usuario previamente elaborados.

---

## 2. Descripción General

### 2.1 Perspectiva del Producto
Aethel Music es una aplicación independiente orientada a la reproducción y edición básica de audio. Puede ejecutarse de forma local (sin conexión) para las funciones de reproducción y mezcla, y opcionalmente sincronizarse con la nube para respaldo y acceso multi-dispositivo.

### 2.2 Funciones del Producto
- Reproducción de audio digital (RF-001 a RF-016).
- Gestión de listas de reproducción (RF-024 a RF-031).
- Consola de DJ y creación de mezclas (RF-032 a RF-044).
- Configuración y accesibilidad (RF-018 a RF-021).
- Gestión de usuario y nube (RF-046 a RF-050).

### 2.3 Características de los Usuarios
- **Usuario casual**: Reproduce música y crea listas de reproducción.
- **Administrador / DJ**: Utiliza la consola de mezclas, pads, faders y crea mixes.
- Ambos roles pueden compartir contenido y gestionar su perfil.

### 2.4 Restricciones
- Debe funcionar sin conexión a internet para las funciones básicas de reproducción.
- Debe soportar los formatos: MP3, WAV, AIFF, M4A, OPUS.
- La búsqueda automática de archivos no debe superar los 5 minutos.
- La interfaz principal debe cargar en menos de 3 segundos.

### 2.5 Suposiciones y Dependencias
- El usuario dispone de archivos de audio digital en su dispositivo.
- El sistema operativo permite el acceso al sistema de archivos.
- Para funciones de nube se requiere conexión a internet.

---

## 3. Requisitos Específicos

### 3.1 Requisitos de Interfaces Externas

#### 3.1.1 Interfaces de Usuario
- Barra de navegación inferior siempre visible (Navbar).
- Lista lateral de canciones visible en las interfaces de reproducción y DJ.
- Controles de reproducción visibles (play, pausa, siguiente, anterior).
- Barra de progreso con tiempo actual y total.
- Íconos intuitivos para favorito, repetir y shuffle.
- Consistencia visual entre interfaces y contraste adecuado en modo claro/oscuro.
- Botones e íconos con feedback visual al pasar el mouse y al ser seleccionados.

#### 3.1.2 Interfaces de Hardware
- Compatible con dispositivos que ejecuten navegadores modernos.
- Diseño 100 % responsive.
- No requiere hardware especializado.

#### 3.1.3 Interfaces de Software
- Frontend moderno (HTML5, CSS3, JavaScript/TypeScript + framework).
- Soporte para ejecución offline de las funciones básicas.

#### 3.1.4 Interfaces de Comunicación
- No aplica para la versión actual (N/A).

### 3.2 Requisitos Funcionales

Los requisitos funcionales se detallan a continuación. Cada uno está respaldado por su correspondiente Historia de Usuario y Criterios de Aceptación (ver documento de Historias de Usuario).

| ID | Descripción |
|----|-------------|
| RF-001 | Seleccionar y cargar archivo de audio digital. |
| RF-002 | Redirección a página principal. |
| RF-003 | Ver listas de canciones disponibles. |
| RF-004 | Seleccionar una canción. |
| RF-005 | Reproducir la canción seleccionada. |
| RF-006 | Pausar la canción. |
| RF-007 | Observar el nombre de la canción actual. |
| RF-008 | Observar el nombre del artista de la canción. |
| RF-009 | Observar la duración total de la canción. |
| RF-010 | Observar el tiempo actual de reproducción. |
| RF-011 | Avanzar a la siguiente canción. |
| RF-012 | Retroceder a la canción anterior. |
| RF-013 | Repetir canción en loop. |
| RF-014 | Activar la reproducción aleatoria (shuffle). |
| RF-015 | Activar la reproducción por orden alfanumérico. |
| RF-016 | Marcar canción como favorita. |
| RF-017 | Buscar canciones por nombre, artista o género. |
| RF-018 | Ingresar a opciones de configuración. |
| RF-019 | Cambiar colores (claro/oscuro/dispositivo). |
| RF-020 | Cambiar tamaño del texto. |
| RF-021 | Confirmar los cambios de configuración. |
| RF-022 | Añadir nuevas carpetas de pistas desde la memoria del equipo. |
| RF-023 | Permitir filtrar canciones antes de instalar una carpeta. |
| RF-024 | Ingresar a la interfaz de playlist. |
| RF-025 | Crear listas de reproducción. |
| RF-026 | Agregar canciones a una lista de reproducción. |
| RF-027 | Eliminar canciones de una lista de reproducción. |
| RF-028 | Eliminar listas de reproducción. |
| RF-029 | Editar el nombre de listas de reproducción. |
| RF-030 | Reproducir una lista de reproducción completa. |
| RF-031 | Ver las canciones dentro de una lista de reproducción. |
| RF-032 | Acceder a menú de DJ. |
| RF-033 | Seleccionar la melodía del disco (izquierda y derecha). |
| RF-034 | Retroceder la melodía con el disco (izquierda y derecha). |
| RF-035 | Pausar la melodía con el disco (izquierda y derecha). |
| RF-036 | Adelantar la melodía con el disco (izquierda y derecha). |
| RF-037 | Saltar, pausar y saltar a la anterior pista con los botones laterales. |
| RF-038 | Poner en bucle la melodía (izquierda y derecha). |
| RF-039 | Configurar efectos para cada pad (izquierda y derecha). |
| RF-040 | Presionar los pads para reproducir un sonido específico (izquierda y derecha). |
| RF-041 | Modular el volumen subiendo o bajando el fader (izquierda y derecha). |
| RF-042 | Crear una mezcla / MIX. |
| RF-043 | Preescuchar sus mezclas / MIX. |
| RF-044 | Descargar su mezcla / MIX. |
| RF-045 | Compartir canción o mix. |
| RF-046 | Crear usuario. |
| RF-047 | Inicio de sesión. |
| RF-048 | Modificar contraseña. |
| RF-049 | Modificar foto de perfil. |
| RF-050 | Subir archivos a un servidor en la nube. |

> **Nota:** Cada RF tiene asociada una Historia de Usuario con al menos dos escenarios (positivo y negativo) y criterios de aceptación definidos en el documento de Historias de Usuario.

### 3.3 Requisitos de Rendimiento
- La interfaz principal debe cargar en menos de 3 segundos (RNF-008).
- La reproducción de audio debe iniciar en menos de 1 segundo (RNF-016).
- El sistema debe responder a las acciones del usuario en menos de 1 segundo (RNF-014).
- La búsqueda automática de archivos no puede tomar más de 5 minutos (RNF-005).

### 3.4 Restricciones de Diseño
- Debe funcionar en diferentes sistemas operativos (RNF-006).
- Debe permitir ejecución sin conexión para funciones básicas de reproducción (RNF-015).
- La aplicación debe consumir una cantidad moderada de recursos (RNF-011).

### 3.5 Atributos del Sistema de Software

#### 3.5.1 Fiabilidad
- La reproducción de audio no debe presentar interrupciones ni cortes (RNF-009).
- El sistema debe manejar errores sin cerrarse inesperadamente (RNF-012).
- Debe evitar pérdida de datos en caso de cierre inesperado (RNF-017).

#### 3.5.2 Disponibilidad
- Funciones básicas disponibles sin conexión a internet.

#### 3.5.3 Seguridad
- Autenticación mediante nickname y contraseña (RNF-018).
- Posibilidad de modificar contraseña (RF-048).

#### 3.5.4 Mantenibilidad
- El sistema debe permitir actualizaciones sin afectar datos del usuario (RNF-013).

#### 3.5.5 Portabilidad
- Compatible con múltiples sistemas operativos y navegadores modernos.

#### 3.5.6 Usabilidad
- Interfaz intuitiva y fácil de usar para nuevos usuarios (RNF-010).
- Íconos intuitivos y consistencia visual (RI-019, RI-020).

### 3.6 Otros Requisitos
- Sincronización con la nube para funciones globales (RNF-019, RNF-020).
- Detección de estado de conexión a internet (RI-024).
- Sincronización de BPM en la interfaz de DJ (RI-023).

---

## 4. Anexos

### Anexo A – Historias de Usuario
Las Historias de Usuario completas con sus criterios de aceptación se encuentran en el documento *Historias_de_Usuario_AethelMusic.md*. Cada historia está identificada con el mismo código que el Requisito Funcional correspondiente (RF-001 a RF-050).

### Anexo B – Trazabilidad
Existe una relación 1:1 entre los Requisitos Funcionales (RF-001 a RF-050) y las Historias de Usuario.

---

**Fin del documento**
