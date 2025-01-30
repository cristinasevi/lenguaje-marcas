# 2ª Evaluación

### Acceso a objetos

- **A través del ID del elemento:**  
```javascript
  $("#nombre_del_id")
 ```

 - **A través de la CLASE del elemento:**  
```javascript
  $(".nombre_de_clase")
 ```

- **A través del TAG o ETIQUETA del elemento:**  
```javascript
  $("div")
 ```

- **A los objetos ya PREDEFINIDOS:**  
```javascript
  $(document)
 ```

- **El evento sobre el que se ha producido el evento:**  
```javascript
  $(this)
 ```

### Funciones

- `ready()`: Se ejecuta cuando la página ha terminado de cargar. Es equivalente al evento `onload()`.
```javascript
  $(document).ready(function() {
    // Código que se ejecuta al cargar la página
});
```
- `text()`: Permite insertar texto en el elemento seleccionado.
```javascript
  $("#elemento").text("Texto insertado");
```
- `html()`: Permite agregar etiquetas o tags HTML en el elemento seleccionado.
```javascript
  $("#elemento").html("<strong>Texto en negrita</strong>");
```
- `mousemove()`: Se activa al mover el ratón sobre el elemento.
```javascript
  $(document).mousemove(function(event) {
    // Código que se ejecuta al mover el ratón
  });
```
- `click()`: Se activa al hacer clic sobre el elemento.
```javascript
  $("#elemento").click(function() {
    // Código que se ejecuta al hacer clic
  });
```
- `animate()`: Modifica las propiedades de estilo del elemento seleccionado y permite crear animaciones.
  Estructura: `animate({estilos_que_se_ejecutan, otro_estilo}, tiempo_en_ejecutarse, string_con_tipo_animacion, cuando_acaba_animacion_que_tiene_que_hacer)`
```javascript
  $("#elemento").animate(
    {
        backgroundPositionX: "5000px"  // Mover el fondo hacia la derecha
    }, 
    5000,                              // Duración en milisegundos
    "swing",                           // Tipo de animación
    function() {                       // Acción cuando termina la animación
        console.log("Animación completada");
    }
  );
```
- `css()`: Permite aplicar estilos CSS al elemento seleccionado.
  Estructura: `css(propiedad, valor)`
```javascript
  $("#elemento").css("color", "red"); // Cambia el color del texto a rojo
```
```javascript
  $("#elemento").css({ 
        width: "200px",
        height: "15px",
        backgroundColor: "yellow",
        borderStyle: "solid",
        borderWidth: "3px",
        fontFamily: "Verdana",
        padding: "20px",
        fontSize: "12px",
        textAlign: "center",
        color: "blue",
        // Cambia varios estilos en formato .json
  });
```
- `append()`: Permite agregar contenido nuevo (como texto, elementos HTML o incluso objetos) dentro del elemento seleccionado.
```javascript
  $("#elemento").append($("<input>")
```
- `attr()`: Permite añadir atributos o modificar los ya existentes en el elemento seleccionado.
   Estructura: `attr(propiedad, valor)`
```javascript
  $("#elemento").append($("<input>").attr("type", "button").attr("value", "Hola"));
```
- `slideDown()`: Aplica un efecto persiana hacia abajo en el elemento seleccionado.
- `slideUp()`: Aplica un efecto persiana hacia arriba en el elemento seleccionado.

  Estructura: `.slideDown(milisegundos);` |  `.slideUp(milisegundos);`
```javascript
  $("#elemento").slideDown(10000);
```
- `stop()`: Detiene la animación en curso del elemento seleccionado.
```javascript
  $("#elemento").stop();
```
- `keydown()`: Se activa al pulsar una tecla en el elemento seleccionado.
```javascript
  $("#input").keydown(function(event)
```
- `keyup()`: Se activa al soltar una tecla en el elemento seleccionado.
```javascript
  $("#input").keyup(function(event)
```
- `val()`: Obtiene o asigna el valor de un input tipo texto.
```javascript
  $("#input").val("Nuevo valor");
```
- `hide()`: Oculta un elemento con una transición que puede personalizarse con la duración.
- `show()`: Muestra un elemento con una transición que también puede personalizarse.

  Estructura: `.hide(milisegundos);` |  `.show(milisegundos);`
```javascript
  $("#elemento").hide(4000);
```
- `addClass()`: Añade una clase al elemento seleccionado.
```javascript
  $("#elemento").addClass("nombre_clase");
```
- `removeClass()`: Elimina la clase de un elemento.
```javascript
  $("#elemento").removeClass("nombre_clase");
```
- `find()`: Busca elementos dentro del elemento seleccionado.
```javascript
  $("#elemento").find("a").attr("href"); // Obtiene el valor del atributo href
```
- `appendTo()`: Mueve el elemento seleccionado al final del elemento especificado por selector.
- `prependTo()`: Mueve el elemento seleccionado al principio del elemento especificado por selector.
```javascript
  $("#elemento:first").appendTo("#objeto");
  $("#elemento:last").prependTo("#objeto");
```
- `setInterval()`: Ejecuta una instrucción repetidamente en intervalos de tiempo especificados.
```javascript
  setInterval(function, milisegundos);
```
- `fadeOut()`: Permite hacer que un elemento desaparezca de la página con una transición suave en un tiempo determinado, en milisegundos. Es una forma sencilla de ocultar elementos con efectos visuales.
- `fadeIn()`: Permite que un elemento aparezca gradualmente en la página con una transición suave en el tiempo especificado, en milisegundos.
```javascript
  $(#elemento).fadeOut(milisegundos, callback);
```
- `next()`: Se utiliza para seleccionar el siguiente elemento que sigue inmediatamente al elemento actual seleccionado. 
```javascript
$("#elemento").next("div").css("color", "red"); 
```
- `end()`: Se utiliza cuando necesitas volver al conjunto de elementos anterior, para deshacer una acción de selección y regresar a la selección previa. Es útil cuando se hace una serie de selecciones encadenadas.
```javascript
$("#elemento").css("font-weight", "bold").end().css("color", "blue");
```

### Pseudoclases en jQuery

Las **pseudoclases en jQuery** son selecciones especiales que nos permiten aplicar filtros a un conjunto de elementos en función de su estado, posición o características. A diferencia de las pseudoclases de CSS, las pseudoclases en jQuery no se aplican solo al estilo de los elementos, sino que permiten realizar **acciones o manipulaciones** a esos elementos.

- `:first`: Selecciona el primer elemento dentro de un conjunto de elementos. 
- `:last`: Selecciona el último elemento dentro de un conjunto de elementos. 
```javascript
$("#elemento div:first").css("color", "red");
$("#elemento div:last").css("color", "blue");
```

- `:gt(n)`: (Significa "greater than", mayor que). Selecciona todos los elementos cuyo índice es mayor que n. Es útil para seleccionar un subconjunto de elementos en función de su posición.
```javascript
$("#elemento div:gt(0)").hide();
```

### Posiciones del ratón

Para registrar la posición del ratón:
    - `event.clientX` y `event.clientY`: Coordenadas relativas a la ventana del navegador.
    - `event.pageX` y `event.pageY`: Coordenadas relativas a la página completa.

```javascript
  $(document).mousemove(function(event) {
    console.log("Posición X: " + event.pageX + ", Posición Y: " + event.pageY);
  });
```

### Creación de una imagen dinámica

```javascript
var imagen = $("<img>", {
    src: "imagenes/imagen.jpg",  // Fuente de la imagen
    id: "imagen",                // Identificador único
    css: {                       // Estilos CSS aplicados a la imagen
        "padding": "2px",
        "cursor": "pointer"
    },
    click: function() {          // Evento 'click' en la imagen
        document.location = "index.html"; // Redirige a otra página
    }
});
```

### Mostrar la tecla y su código ASCII

```javascript
$(document).keydown(function(event) {
    var tecla = String.fromCharCode(event.which); // Carácter de la tecla
    var codigo = event.which;                    // Código ASCII
    console.log(tecla + " es " + codigo);
});
```

### Estilos CSS

- `transition`: Define qué propiedad será animada, la duración de la transición y el tipo de animación.
```css
div {
	background-color: red;
	padding: 10px;
	transition: all 5s ease; /* Cambia todos los atributos (all) durante 5 segundos con un efecto suave (ease). Si quisieras cambiar solo el background-color lo pondrías en vez de all */
}

div:hover {  /* :hover: Se activa cuando el ratón pasa sobre el elemento. */
	background-color: green;
	padding: 50px;
}
```
- `background: linear-gradient(color, color)`: Se utiliza para crear un fondo con un degradado lineal (transición suave entre dos o más colores).
```css
div {
	background: linear-gradient(#fff, #ccc);
}
```
- `z-index`: Define la posición en el eje Z (profundidad) del elemento. `z-index: 1;` asegura que el elemento se dibuje por encima de otros que no tienen un valor de `z-index` o tienen valores más bajos.

- `#menu > li`: Se utiliza para seleccionar los elementos `<li>` que son hijos directos de un contenedor con el id `#menu`. Lo que significa que solo los elementos `<li>` que están directamente dentro de `#menu` se verán afectados por las reglas de estilo definidas.
```css
#menu > li {
    background-color: blue;
}
```

#### Propiedades de transform

- `transform: scale()`: Aplica un escalado al elemento, cambiando su tamaño en los ejes X y Y. El valor 1 representa el tamaño original (100%), y valores mayores o menores que 1 aumentan o disminuyen su tamaño, respectivamente.
- `transform: skew()`: Aplica una distorsión de inclinación al elemento, inclinándolo a lo largo del eje X en un ángulo de los grados que le determines. Este efecto no cambia el tamaño del elemento, sino que lo deforma.
```css
div {
	transform: scale(1);  
	transform: skew(10deg);
}
```

#### Propiedades de animación

- `animation-duration: milisegundos`: Establece la duración de la animación. 
- `animation-name`: Define el nombre de la animación. 
- `@keyframes nombre_animacion`: Define los diferentes pasos de la animación.
```css
div {
	animation-duration: 1s;
	animation-name: nombre_animacion;
}

@keyframes nombre_animacion {
    0% {
        opacity: 0;
        left: -150;
    }
    50% {
        box-shadow: -10px 4px 8px 5px #000;
    }
    100% {
        opacity: 1;
        left: 1px;
    }
}
```

### Pseudoclases en CSS

Las **pseudoclases** son palabras clave que se agregan a los selectores de CSS para definir un estado especial o condiciones de un elemento. Se aplican para seleccionar elementos que no son fáciles de seleccionar con selectores simples.

- `:hover`: Se aplica cuando un usuario coloca el cursor sobre un elemento.
```css
button:hover {
    background-color: light-gray;
}
```

- `:active`: Se aplica a un elemento cuando se hace clic sobre él o se interactúa de alguna manera con él, hasta que se suelta el clic.
```css
a:active {
    color: red;
}
```

- `:first-child`: Selecciona el primer hijo de un elemento padre.
- `:last-child`: Selecciona el último hijo de un elemento padre.
```css
#parent div:first-child {color: red;}
#parent div:last-child {color: blue;}
```


---
