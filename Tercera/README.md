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
