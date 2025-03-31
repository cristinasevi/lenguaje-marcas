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

### Marcas para formularios

- `<header>`: Representa la cabecera de una página o sección, generalmente contiene logotipos, menús de navegación y encabezados.
- `<hgroup>`: Agrupa un conjunto de encabezados (`<h1>` a `<h6>`) y subtítulos relacionados dentro de una sección o artículo.
- `<nav>`: Define una sección de navegación que contiene enlaces a otras partes del sitio web o páginas externas.
- `<section>`: Representa una división temática de contenido en un documento, usualmente con un título propio.
- `<article>`: Contiene contenido independiente y reutilizable, como artículos de blogs, noticias o comentarios.
- `<footer>`: Representa el pie de página de una sección o documento, suele contener información sobre el autor, enlaces de contacto y derechos de autor.
- `<hr>`: Inserta una línea horizontal para separar visualmente secciones dentro de un documento.
- `<aside>`: Define contenido relacionado pero independiente, como barras laterales, anuncios o información adicional.
- `<span>`: Elemento en línea utilizado para aplicar estilos o manipular partes específicas del texto sin afectar su estructura.

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
