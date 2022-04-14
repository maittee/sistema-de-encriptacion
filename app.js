var botonEncriptar = document.querySelector("#boton-encriptar");
var botonDencriptar = document.querySelector("#boton-desencriptar");

function encriptar(texto){
    var textoEncriptado = "";
    
    textoEncriptado = texto.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
    
    return textoEncriptado;
}

function desencriptar(texto){
    var textoDesencriptado = "";
    
    textoDesencriptado = texto.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");
    
    return textoDesencriptado;
}