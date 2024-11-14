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
  - `valign`: Controla la alineación vertical del contenido dentro de una celda.
    - `valign="top"`: Alinea el contenido en la parte superior de la celda.
    - `valign="center"`: Centra el contenido verticalmente en la celda.
    - `valign="bottom"`: Alinea el contenido en la parte inferior de la celda.
   
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

### CSS



### JavaScript


---
