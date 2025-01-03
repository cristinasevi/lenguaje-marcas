# 1ª Evaluación

### Formato de texto

**Negrita**: `<b>` o `<strong>`

**Cursiva (itálica)**: `<i>`

**Subrayado**: `<u>`

**Acentos**: 

| Código HTML      | Carácter |
|------------------|----------|
| `&aacute;`       | á        |
| `&eacute;`       | é        |
| `&iacute;`       | í        |
| `&oacute;`       | ó        |
| `&uacute;`       | ú        |
| `&ntilde;`       | ñ        |

**Espacio**: `&nbsp;`

**Salto de Línea**: `<br>`

**Comentarios**: ```html <!-- Este es un comentario en HTML --> ```

### Listas 

- **Listas ordenadas** (`<ol>`)
  - Puedes especificar el tipo de numeración utilizando el atributo `type`:
    - `type="1"`: números (1, 2, 3…)
    - `type="a"`: letras minúsculas (a, b, c…)
    - `type="A"`: letras mayúsculas (A, B, C…)
    - `type="i"`: números romanos minúsculos (i, ii, iii…)
    - `type="I"`: números romanos mayúsculos (I, II, III…)

- **Listas no ordenadas** (`<ul>`)
  - Puedes especificar el tipo de numeración utilizando el atributo `type`:
    - `type="disc"`: viñetas redondas rellenas (predeterminado)
    - `type="circle"`: viñetas circulares huecas
    - `type="square"`: viñetas cuadradas
   
### Tablas

- **Elementos básicos de una tabla:**
  - `<table>`: Define una tabla.
  - `<tr>`: Define una fila en la tabla.
  - `<td>`: Define una celda dentro de una fila.
  - `<th>`: Define una celda de encabezado.

- **Atributos:**
  - `border: 1px solid black`: Define el borde de la tabla con una línea negra sólda de 1px.
    
  - `valign`: Controla la alineación vertical del contenido dentro de una celda.
    - `valign="top"`: Alinea el contenido en la parte superior de la celda.
    - `valign="center"`: Centra el contenido verticalmente en la celda.
    - `valign="bottom"`: Alinea el contenido en la parte inferior de la celda.

  - `cellpadding`: Define el espacio entre el contenido de la celda y su borde.
  - `cellspacing`: Define el espacio entre las celdas de la tabla.
   
  - `colspan`: Expande una celda horizontalmente, ocupando varias columnas.
  - `rowspan`: Expande una celda verticalmente, ocupando varias filas.
 
- **Elementos en Formulario `<form>`:**
  - `<input type="text">`: Campo de texto para ingresar información. `size` controla el ancho visible, y `maxlength` define el máximo de caracteres permitidos.
  - `<select>`: Lista desplegable que permite seleccionar una opción predefinida. Se necesita usar `<option>` dentro del `<select>` para definir cada una de las opciones disponibles.
  - `<input type="radio">`: Botón de opción que permite elegir una sola opción en un grupo.
  - `<input type="checkbox">`: Casilla de verificación que permite seleccionar varias opciones.
  - `<textarea>`: Campo para ingresar texto en varias líneas. Controlado por `cols` y `rows` para el ancho y el alto.
  - `<input type="reset">`: Botón para restablecer el formulario.
  - `<input type="submit">`: Botón para enviar el formulario.

Dentro de la etiqueta del `<form>` se tienen que poner estos elementos:
  - `action`: Define la URL a la que se enviarán los datos del formulario cuando el usuario haga clic en el botón de envío. Ejemplo: `action="programa.php"`
  -  `method`: Especifica el método HTTP que se usará para enviar los datos. Hay dos opciones comunes: `post` y `get`. Ejemplo: `method="post"`.

### Enlaces Internos en HTML

Permiten navegar dentro del mismo documento HTML. Se utilizan para crear saltos a secciones específicas del contenido sin necesidad de cargar una nueva página.

**1. Definir un destino**: Se asigna un **`id`** único al elemento de destino (puede ser un encabezado, un párrafo, etc.).

```html
   <h2 id="salto">Este es el apartado al que quiero saltar</h2>
```

**2. Crear el enlace**: Se usa un enlace con el atributo **`href="#id"`** para hacer referencia a ese destino.

```html
   <a href="#salto">Salta al apartado</a>
```

## CSS

#### **1. Selector de ID**
- Se usa para seleccionar un elemento único en el documento.
- En HTML, un ID se define con el atributo `id`.
- En CSS, los IDs se identifican con el prefijo `#`.

```html
<div id="mi_id">Texto con un ID único</div>
```
```css
#mi_id {
    color: red; /* Cambia el texto del ID a color rojo */
    font-size: 20px; /* Ajusta el tamaño de la fuente */
    text-transform: uppercase; /* Pone el texto en mayúsculas */
    border-width: 6; /* Define el grososr del borde */
    border-style: solid; /* El borde será una línea continua, dashed es con guiones, groove es un borde tallado... */
    border-color: black; /* Cambia el color del borde a negro */
    zIndex: 10 /* Controla el apilamiento de los elementos en el eje Z, es decir, la profundidad o el orden de los elementos en la pantalla cuando se solapan. */
}
```

#### **2. Selector de Clase**
- Se usa para seleccionar uno o varios elementos que comparten la misma clase.
- En HTML, una clase se define con el atributo `class`.
- En CSS, las clases se identifican con el prefijo `.`.

```html
<p class="mi_clase">Texto con clase compartida 1</p>
<p class="mi_clase">Texto con clase compartida 2</p>
```
```css
.mi_clase {
    background-color: #00FF00; /* Cambia el color de fondo de todos los elementos con esta clase a verde */
    font-weight: bold; /* Aplica negrita */
    text-align: center; /* Alinea el texto al centro */
    margin-top: 5; /* Establece el margen superior, también esta el margin-bottom, margin-left, margin-rigth */
    width: 30px; /* Indica el ancho del elemento, se puede dar en px, %, em... */
    height: 35px; /* Indica la altura del elemento */
}
```

#### **3. Selector de Etiqueta (Tag)**
- Se usa para seleccionar todos los elementos de un tipo específico (por ejemplo, todos los `<p>`, `<h1>`, etc.).
- En CSS, simplemente se escribe el nombre del tag.

```html
<p>Primer párrafo</p>
<p>Segundo párrafo</p>
<a href="imagenes/imagen.jpg">Enlace</a>
```
```css
p {
    font-family: Helvetica; /* Cambia el tipo de fuente de todos los párrafos a Helvetica */
    text-indent: 2.5in; /* Indentar a la derecha en inch */
}

a {
    text-decoration: none; /* Quita el subrayado de los enlaces */
    position: absolute; /* Posiciona el elemento de forma independiente, se puede mover con la propiedades: top, right, bottom y left */
}
```

| Selector | Descripción                           | Ejemplo CSS                |
|----------|---------------------------------------|----------------------------|
| `#id`    | Aplica a un único ID                 | `#mi_id { color: red; }`   |
| `.class` | Aplica a todos los elementos con esa clase | `.mi_clase { color: blue; }` |
| `tag`    | Aplica a todos los elementos de ese tipo (tag) | `p { font-size: 16px; }`    |

## JavaScript

### Eventos

| **Evento**           | **Descripción**                                                           | **Ejemplo**                                                |
|----------------------|---------------------------------------------------------------------------|------------------------------------------------------------|
| **`onclick`**         | Se activa al hacer clic en un elemento.                                   | `<button onclick="cambiar()">Haz clic</button>`             |
| **`onload`**          | Se activa cuando la página ha cargado completamente.                      | `<body onload="setInterval('mover()', 200)">`              |
| **`onmousedown`**     | Se activa cuando el botón izquierdo del ratón se presiona.                | `<div onmousedown="iniciarArrastre()">Arrastra</div>`       |
| **`onmousemove`**     | Se activa cuando el ratón se mueve sobre un elemento.                     | `<div onmousemove="moverElemento()">Mueve el ratón aquí</div>` |
| **`onmouseup`**       | Se activa cuando se suelta el botón del ratón.                            | `<div onmouseup="detenerArrastre()">Suelta el ratón aquí</div>` |
| **`onkeypress`**      | Se activa cuando se presiona una tecla.                                   | `<input onkeypress="pasar()">`                              |
| **`onkeydown`**       | Se activa cuando una tecla es presionada, incluso antes de que se registre el carácter. | `<input onkeydown="manejarTecla()">`                      |
| **`onmouseover`**     | Se activa cuando el ratón pasa sobre un elemento.                         | `<div onmouseover="cambiar()">Pasa el ratón</div>`           |
| **`onmouseout`**      | Se activa cuando el ratón sale de un elemento.                            | `<div onmouseout="restaurar()">Saca el ratón</div>`         |

### Funciones

**`document.getElementById()`**: Se utiliza para acceder y manipular elementos por su atributo id. 
```javascript
document.getElementById("num1").value = " "
```

**`parseInt()`**: Convierte una cadena de texto a un número entero. Utilizado para obtener y manipular valores como posiciones. 
```javascript
parseInt(elemento.style.left) + 20 + “px”
```

**`event.x`**: Devuelve la posición horizontal (eje X, left) del ratón. 

**`event.y`**: Devuelve la posición vertical (eje Y, top) del ratón. 

**`event.key`**: Devuelve la tecla presionada durante un evento de teclado. Es útil para realizar acciones basadas en la interacción del usuario con el teclado. Ejemplo:
```javascript
if (event.key == 'ArrowUp') { 
    console.log('Se presionó la tecla de flecha hacia arriba'); 
} 
if (event.key == 'a') { 
    console.log('Se presionó la tecla a'); 
} 
if (event.key == 'Enter') { 
    console.log('Se presionó la tecla Enter'); 
}
```

**`document.write()`**: Permite agregar contenido dinámico al documento, como texto o imágenes. 
```javascript
document.write("<body background=imagenes/fondo" + fecha.getSeconds() % 4 + ".jpg>")
```

**` innerHTML`**: Accede o modifica el contenido HTML de un elemento. 
```javascript
event.innerHTML = "<b>Texto en negrita</b>"
```

**`setInterval`**: Ejecuta una función a intervalos regulares.  
```javascript
setInterval(funcion()', 1000)
```

**`clearInterval()`**: Detiene la ejecución repetitiva de una función que ha sido configurada con `setInterval()`. 
```javascript
clearInterval(intervalo)
```

**`new Date()`**: Se utiliza para crear objetos de tipo **Date**, que representan un momento en el tiempo, con funcionalidades para manejar fechas y horas. 
Funcionalidades: `getMonth()`, `getDate()`, `getHours()`, `getMinutes()`, `getSeconds()`. 
```javascript
var fecha = new Date();
```

**`alert()`**: Muestra un cuadro de alerta con información.

**`console.log()`**: Imprime mensajes en la consola del navegador. Es útil para depuración, ya que permite ver el contenido de variables, resultados de funciones, o simplemente verificar si una parte del código se ha ejecutado correctamente.

### Función `switch`

La estructura **`switch`** permite ejecutar diferentes bloques de código según el valor de una expresión. Es útil para simplificar múltiples comparaciones condicionales.

```javascript
switch(operador.value) {
        case "+":
            resultado.innerHTML = parseInt(num1.value) + parseInt(num2.value);
            break;
        case "-":
            resultado.innerHTML = parseInt(num1.value) - parseInt(num2.value);
            break;
        case "*":
            resultado.innerHTML = parseInt(num1.value) * parseInt(num2.value);
            break;
        case "/":
            resultado.innerHTML = parseInt(num1.value) / parseInt(num2.value);
            break;
        }
```

### Operador condicional (ternario)

El **operador condicional** es una forma concisa de escribir una expresión condicional que devuelve un valor según si la condición es verdadera o falsa.

**Sintaxis del operador condicional**
```javascript
variable = (condicion) ? valor_si_verdadero : valor_si_falso;
```
**Ejemplo**
```javascript
horaStr = ((fecha.getHours() < 10)?"0":"") + fecha.getHours() + ":";
```

---
