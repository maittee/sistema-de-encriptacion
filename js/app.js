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

function esTextoValido(texto){
    var valido = /^[a-z\s]+$/;
    return valido.test(texto);
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

