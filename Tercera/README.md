# 3ª Evaluación

### Marcas para formularios

#### Atributos para `type="text"`
- `autofocus`: Hace que el campo se seleccione automáticamente cuando se carga la página.
- `required`: Indica que el campo es obligatorio y no se puede enviar el formulario sin completarlo.
- `placeholder`: Muestra un mensaje dentro del campo que indica qué se debe escribir. Este mensaje desaparece al comenzar a escribir.
- `autocomplete`: Permite que el navegador recuerde y sugiera valores previamente ingresados en ese campo.

#### Atributos para `type="range"` y `type="number"`
- `min`: Define el valor mínimo permitido.
- `max`: Define el valor máximo permitido.
- `value`: Establece un valor predeterminado.
- `step`: Define el incremento en el que cambia el valor (por ejemplo, de 2 en 2).

#### Atributos para `type="email"`
- `list`: Permite vincular una lista de sugerencias de contactos mediante la etiqueta `<datalist>`.

**Etiquetas**
- `<datalist>`: Define una lista de opciones sugeridas para un campo de entrada.
- `<option>`: Representa cada opción dentro del <datalist>, proporcionando un valor que el usuario puede seleccionar.

#### Otros tipos de input
- `type="color"`: Permite seleccionar un color mediante un selector de color.
- `type="url"`: Campo específico para ingresar URLs, validando el formato adecuado.

#### Atributos para `<div>`
- `contenteditable="true"`: Convierte un `<div>` en un campo editable.

### Marcas HTML5

#### Estructura de la Página
- `<header>`: Representa la cabecera de una página o sección, generalmente contiene logotipos, menús de navegación y encabezados.
- `<footer>`: Representa el pie de página de una sección o documento, suele contener información sobre el autor, enlaces de contacto y derechos de autor.
- `<nav>`: Define una sección de navegación que contiene enlaces a otras partes del sitio web o páginas externas.
- `<section>`: Representa una división temática de contenido en un documento, usualmente con un título propio.
- `<article>`: Contiene contenido independiente y reutilizable, como artículos de blogs, noticias o comentarios.
- `<aside>`: Define contenido relacionado pero independiente, como barras laterales, anuncios o información adicional.
- `<hr>`: Inserta una línea horizontal para separar visualmente secciones dentro de un documento.

#### Texto y Agrupación
- `<hgroup>`: Agrupa un conjunto de encabezados (`<h1>` a `<h6>`) y subtítulos relacionados dentro de una sección o artículo.
- `<span>`: Elemento en línea utilizado para aplicar estilos o manipular partes específicas del texto sin afectar su estructura.

#### Formularios
- `<form>`: Crea un formulario para recoger datos del usuario. Puede contener campos como `<input>`, `<select>`, `<textarea>`, y botones para enviar la información.
- `<label>`: Asocia un texto descriptivo a un campo del formulario (como un `<input>`). Mejora la accesibilidad y permite que al hacer clic sobre el texto se seleccione automáticamente el campo relacionado. Se vincula con el atributo `for`, que debe coincidir con el `id` del campo de entrada.
```javascript
<form id="contactoForm">
    <label for="id">ID:</label>
    <input id="id" name="id" required><br>
    <label for="nombre">Nombre:</label>
    <input id="nombre" name="nombre" required><br>
    <button type="submit">Agregar contacto</button>
</form>
```

#### Tablas
- `<table>`: Crea una tabla para organizar datos en filas y columnas.
- `<thread>`: Agrupa el encabezado de la tabla. Suele contener las etiquetas `<tr>` y `<th>`.
- `<tbody>`: Agrupa el contenido principal de la tabla (las filas que no son parte del encabezado o pie).
- `<tr>`: Define una fila dentro de la tabla.
- `<th>`: Representa una celda de encabezado (negrita y centrada por defecto).

### JavaScript

- `execCommand`: permite ejecutar comandos de edición sobre un documento HTML.
Sintaxis: `execCommand(acción_a_ejecutar, boolean, valor)`

```javascript
function negrita() {
    document.execCommand("bold", false, null);
}

function backgroundColor() {
    color = prompt("Introduce el color del fondo");
    window.document.execCommand("backcolor", false, color);
}

function insertarImagen() {
    imagen = prompt("Introduce la ruta y el nombre del archivo");
    window.document.execCommand("insertimage", false, imagen);
}

function hipervinculo() {
    var url = prompt("Introduce la URL: ", "http://");
    window.document.execCommand("createlink", false, url);
}

function publicar() {
    var content = document.getElementById("contenido").innerHTML;
    document.getElementById("mensajes").innerHTML = content;
}
```

### Uso de `sessionStorage`

`sessionStorage` es una API de almacenamiento en el navegador que permite guardar datos de sesión de forma temporal. Los datos se mantienen mientras la pestaña del navegador esté abierta, pero se eliminan al cerrar la pestaña.

#### Métodos principales de `sessionStorage`
- `sessionStorage.length`: Devuelve el número de elementos almacenados.
- `sessionStorage.setItem(key, value)`: Almacena un valor asociado a una clave.
- `sessionStorage.key(posicion)`: Obtiene la clave en la posición indicada.
- `sessionStorage.getItem(key)`: Obtiene el valor asociado a una clave.
- `sessionStorage[key] = value`: Otra forma de almacenar valores.
- `sessionStorage.removeItem(key)`: Elimina un elemento por su clave.
- `sessionStorage.clear()`: Vacía todo el almacenamiento de sesión.

### Insertar en `IndexDB`
#### Abrir base de datos con IndexedDB
- `window.indexedDB.open('contactos', 1)`: Abre (o crea si no existe) una base de datos llamada contactos.
- `request.onerror`: Muestra un mensaje en caso de error al abrir la base de datos.
- `request.onsuccess`: Se ejecuta cuando la base de datos se ha abierto correctamente. Aquí se establece un listener para el formulario.

#### Formulario de envío
- `e.preventDefault()`: Al enviar el formulario, se evita la acción por defecto (recargar la página).
- `db.transaction(['contactos'], 'readwrite')`: Crea una transacción de lectura y escritura para la base de datos.
```javascript
var db = event.target.result;
var transaction = db.transaction(['contactos'], 'readwrite');
```
- `transaction.objectStore('contactos')`: Obtiene un almacén de objetos (object store) dentro de la transacción que se está realizando en la base de datos.
```javascript
var store = transaction.objectStore('contactos');
```
- `var contacto = {id: id, name: nombre}`: Crea un objeto que contiene los datos del formulario.
```javascript
var contacto = { id: form.id.value, nombre: form.nombre.value };
```
- `store.add(contacto)`: Inserta el contacto (con ID y nombre) en la base de datos.
```javascript
var addRequest = store.add(contacto);
```

#### Actualizar versión de la base de datos
- `request.onupgradeneeded`: Se ejecuta cuando la base de datos necesita ser actualizada.
- `createObjectStore`: Se crea un `objectStore` para guardar los contactos con `keyPath: 'id'`, lo que significa que cada contacto tiene un ID único.
```javascript
var db = event.target.result;
var store = db.createObjectStore('contactos', { keyPath: 'id'});
```

### Leer de `IndexDB`
#### Abrir base de datos con IndexedDB
- `window.indexedDB.open('contactos', 1)`: Abre (o crea si no existe) una base de datos llamada contactos.
- `request.onerror`: Muestra un mensaje en consola si hay un error al abrir la base de datos.
- `request.onsuccess`: Se ejecuta al abrir la base de datos correctamente y permite acceder a los datos guardados.

#### Leer datos de la base de datos
- `db.transaction(['contactos'], 'readonly')`: Crea una transacción solo de lectura sobre la base de datos.
```javascript
var transaction = db.transaction(['contactos'], 'readonly');
```
- `transaction.objectStore('contactos')`: Obtiene el almacén de objetos contactos para acceder a los registros.
```javascript
var store = transaction.objectStore('contactos');
```
- `store.openCursor()`: Crea un cursor que recorre todos los registros almacenados uno por uno.
```javascript
var cursorRequest = store.openCursor();
```

#### Mostrar contactos
#### Modo lista
- `li.textContent = 'ID: ${cursor.value.id}, Nombre: ${cursor.value.nombre}'`: Crea un elemento `<li>` con los datos del contacto (id y nombre).
- `contactosList.appendChild(li)`: Añade el `<li>` a la lista en la página.
- `cursor.continue()`: Avanza al siguiente registro en la base de datos.
```javascript
cursorRequest.onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
        var li = document.createElement('li');
        li.textContent = `ID: ${cursor.value.id}, Nombre: ${cursor.value.nombre}`;
        contactosList.appendChild(li);
        cursor.continue();
    }
}
```

#### Modo tabla
- `var row = contactosTable.insertRow()`: Crea una nueva fila en la tabla.
- `var idCell = row.insertCell(0)`: Crea una celda para el ID.
- `var nombreCell = row.insertCell(1)`: Crea una celda para el Nombre.
- `idCell.textContent = cursor.value.id`: Inserta el valor del ID en la celda.
- `nombreCell.textContent = cursor.value.nombre`: Inserta el valor del Nombre en la celda.
- `cursor = cursor.continue()`: Avanza al siguiente contacto.
```javascript
cursorRequest.onsuccess = function(event) {
    var cursor = event.target.result;
    while(cursor) {
        var row = contactosTable.insertRow();
        var idCell = row.insertCell(0);
        var nombreCell = row.insertCell(1);
        idCell.textContent = cursor.value.id;
        nombreCell.textContent = cursor.value.nombre;
        cursor = cursor.continue();
    }
}
```

#### Actualizar versión de la base de datos
- `request.onupgradeneeded`: Se ejecuta si la base de datos necesita actualizarse. Aquí se crea (o recrea) el almacén de objetos contactos con keyPath: 'id', asegurando que cada contacto tenga un ID único.
```javascript
request.onupgradeneeded = function(event) {
    var db = event.target.result;
    var store = db.createObjectStore('contactos', { keyPath: 'id'});
}
```

#### Acceso a IndexedDB en el navegador
La base de datos se guarda localmente en el navegador, y se puede inspeccionar a través de las herramientas de desarrollo (`F12` -> `Application` -> `IndexedDB`).

### Login con `Cookies`
#### Estructura HTML
Se crea un formulario simple con campos de texto y contraseña.
Al enviar el formulario, se ejecuta `guardarCredenciales()` sin recargar la página `return false`.
```javascript
<form onsubmit="guardarCredenciales(); return false;">
    Usuario: <input type="text" id="usuario"><br><br>
    Contraseña: <input type="password" id="password"><br><br>
    <button type="submit">Guardar</button>
</form>
```

#### Script JavaScript
- `nomUsuario = usuario.value`: Obtiene el valor del campo de usuario.
- `password.value`: Obtiene el valor del campo de contraseña.
- `document.cookie = 'usuario=${nomUsuario}; max-age=3600; path=/'`: Guarda cada valor en una cookie con duración de 1 hora `max-age=3600` y hace que la cookie esté disponible en todo el sitio. `path=/`.
```javascript
function guardarCredenciales() {
    nomUsuario = usuario.value;
    contra = password.value;
    document.cookie = `usuario=${nomUsuario}; max-age=3600; path=/`; 
    document.cookie = `password=${contra}; max-age=3600; path=/`; 
    alert("Credenciales guardadas en cookies!");
}
```

### Lectura de `Cookies`
- `lista.innerHTML = ""`: Limpia la lista antes de volver a llenarla.
- `const cookies = document.cookie.split(";")`: Separa cada cookie con un `;`.
- ` cookies.forEach(cookie => {}`: Recorre cada cookie.
- `const[clave, valor] = cookie.split("=")`: Separa la clave y el valor de cada cookie con un `=`.
- `const item = document.createElement("li")`: Crea un elemento `<li>`.
- `item.textContent = '${clave}: ${valor}'`: Mete el texto con la clave y el valor de la cookie.
- `lista.appendChild(item)`: Lo añade a la lista del HTML.
- `mostrarCookies()`: Llama a la función para que se ejecute nada más cargar la página

```javascript
function mostrarCookies() {
    lista.innerHTML = "";
    const cookies = document.cookie.split(";");
    cookies.forEach(cookie => {
        const [clave, valor] = cookie.split("=");
        const item = document.createElement("li");
        item.textContent = `${clave.trim()}: ${valor}`;
        lista.appendChild(item);
    });
}
mostrarCookies();
```

#### Acceso a Cookies en el navegador
La base de datos se guarda localmente en el navegador, y se puede inspeccionar a través de las herramientas de desarrollo (`F12` -> `Application` -> `Cookies`).

### Propiedades CSS

- `float: left;`: Hace que un elemento se alinee a la izquierda de su contenedor, permitiendo que el contenido fluya a su alrededor.
- `clear: both;`: Evita que los elementos flotantes (con `float`) afecten el flujo del contenido. Coloca el elemento debajo de cualquier flotante, tanto a la izquierda como a la derecha.
