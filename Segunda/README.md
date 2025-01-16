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

---
