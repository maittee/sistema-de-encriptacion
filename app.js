var botonEncriptar = document.querySelector("#boton-encriptar");
var botonDesencriptar = document.querySelector("#boton-desencriptar");
var botonCopiar = document.querySelector("#boton-copiar");
var botonLimpiar = document.querySelector("#boton-limpiar");
var textAreaCifrador = document.querySelector("#text-cifrador");
var textAreaResultado = document.querySelector("#text-resultado");

function encriptar(texto){
    var textoEncriptado = "";
    
    textoEncriptado = texto.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
    
    return textoEncriptado;
}

function desencriptar(texto){
    var textoDesencriptado = "";
    
    textoDesencriptado = texto.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

    return textoDesencriptado;
}

function copiarTexto(){
    var copiarTexto = document.getElementById("text-resultado");
    
    copiarTexto.select();
    copiarTexto.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copiarTexto.value);
}

function validarTexto(texto){
    var filtro = 'abcdefghijklmnñopqrstuvwxyz ';
        
    for (var i = 0; i < texto.length; i++) {
        if (!esCaracterValido(filtro, texto, i)) {
            return false;
        }    
    }
    return true;
}

function esCaracterValido(texto, letra, i){
    return texto.indexOf(letra.charAt(i)) != -1;
}

function esVacio(texto){
    return texto.length == 0;
}

function errorMensaje(){
    var error = document.querySelector("#error");
    error.textContent = "Error. Ha ingresado un carácter inválido.";
}

function textoVacioMensaje(){
    var mensaje = document.querySelector("#error");
    mensaje.textContent = "No ha ingresado ningún texto.";
}

//eventos botones
botonEncriptar.addEventListener("click", function() {
    var input = textAreaCifrador.value;
    
    var error = !validarTexto(input);
    var vacio = esVacio(input);
    
    if(vacio){
        textoVacioMensaje();
        return;
    }
    
    if(error){
        errorMensaje();
        return;
    }
    
    var errorReset = document.querySelector("#error");
    errorReset.innerHTML = "";
    
    textAreaResultado.value = encriptar(input);
    textAreaCifrador.value = "";
    
});

botonDesencriptar.addEventListener("click", function() {
    var input = textAreaCifrador.value;
    
    var error = !validarTexto(input);
    var vacio = esVacio(input);
    
    if(vacio){
        textoVacioMensaje();
        return;
    }
    
    if(error){
        errorMensaje();
        return;
    }
    
    var errorReset = document.querySelector("#error");
    errorReset.innerHTML = "";

    textAreaResultado.value = desencriptar(input);
    textAreaCifrador.value = "";
});

botonCopiar.addEventListener("click", function() {
    copiarTexto();
});

botonLimpiar.addEventListener("click", function() {
    textAreaResultado.value = "";
});
