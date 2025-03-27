/*
execCommand espera recibir 3 parámetros:
comando que quieres ejecutar, booleano, objeto
*/
function negrita() {
    window.document.execCommand("bold", false, null);
}

function cursiva() {
    window.document.execCommand("italic", false, null);
}

function subrayado() {
    window.document.execCommand("underline", false, null);
}

function alineaIzquierda() {
    window.document.execCommand("justifyleft", false, null);
}

function alineaCentro() {
    window.document.execCommand("justifycenter", false, null);
}

function alineaDerecha() {
    window.document.execCommand("justifyright", false, null);
}

function alineaJustificado() {
    window.document.execCommand("justifyfull", false, null);
}

function listaNoOrdenada() {
    window.document.execCommand("insertunorderedlist", false, null);
}

function listaOrdenada() {
    window.document.execCommand("insertorderedlist", false, null);
}

function subIndice() {
    window.document.execCommand("subscript", false, null);
}

function superIndice() {
    window.document.execCommand("superscript", false, null);
}

function foregroundColor() {
    color = prompt("Introduce el color de la fuente");
    window.document.execCommand("forecolor", false, color);
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