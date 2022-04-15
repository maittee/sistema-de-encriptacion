var botonEncriptar = document.querySelector("#boton-encriptar");
var botonDesencriptar = document.querySelector("#boton-desencriptar");
var botonCopiar = document.querySelector("#boton-copiar");
var botonLimpiar = document.querySelector("#boton-limpiar");
var textAreaCifrador = document.querySelector("#text-cifrador");
var textAreaResultado = document.querySelector("#text-resultado");

function validarTexto(texto){
    var filtro = 'abcdefghijklmnñopqrstuvwxyz ';
        
        for (var i = 0; i < texto.length; i++)
           if (esCaracterValido(filtro, texto, i)) {
                return false;
           }
            
        return true;
}

function esCaracterValido(texto, letra, i){
    return texto.indexOf(letra.charAt(i)) == -1;
}

function encriptar(texto){
    var textoEncriptado = "";
    
    if(texto.length == 0){
        alert("No has ingresado nada");
    }
    if(validarTexto(texto)) {
        textoEncriptado = texto.replace(/e/g, "enter");
        textoEncriptado = textoEncriptado.replace(/i/g, "imes");
        textoEncriptado = textoEncriptado.replace(/a/g, "ai");
        textoEncriptado = textoEncriptado.replace(/o/g, "ober");
        textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
    } else {
        alert("Sólo se admiten letras minúsculas y sin acentos");
    }
    return textoEncriptado;
}

function desencriptar(texto){
    var textoDesencriptado = "";
    
    if(texto.length == 0){
        alert("No has ingresado nada");
    }
    if(validarTexto(texto)) {
    textoDesencriptado = texto.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");
    }
    else {
        alert("Sólo se admiten letras minúsculas y sin acentos");
    }

    return textoDesencriptado;
}

function copiarTexto(){
    var copiarTexto = document.getElementById("text-resultado");
    
    copiarTexto.select();
    copiarTexto.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copiarTexto.value);
}

//eventos botones
botonEncriptar.addEventListener("click", function() {
    textAreaResultado.value = encriptar(textAreaCifrador.value);
    textAreaCifrador.value = "";
});

botonDesencriptar.addEventListener("click", function() {
    textAreaResultado.value = desencriptar(textAreaCifrador.value);
    textAreaCifrador.value = "";
});

botonCopiar.addEventListener("click", function() {
    copiarTexto();
});

botonLimpiar.addEventListener("click", function() {
    textAreaResultado.value = "";
});
