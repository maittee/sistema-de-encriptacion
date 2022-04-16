var botonEncriptar = document.querySelector("#boton-encriptar");
var botonDesencriptar = document.querySelector("#boton-desencriptar");
var botonCopiar = document.querySelector("#boton-copiar");
var botonLimpiar = document.querySelector("#boton-limpiar");
var textAreaCifrador = document.querySelector("#text-cifrador");
var textAreaResultado = document.querySelector("#text-resultado");

//eventos botones
botonEncriptar.addEventListener("click", function(event) {
    event.preventDefault();
    var input = textAreaCifrador.value;
    
    var error = !esTextoValido(input);
    var vacio = esVacio(input);
    
    console.log(esTextoValido(input));
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

botonDesencriptar.addEventListener("click", function(event) {
    var input = textAreaCifrador.value;
    
    var error = !esTextoValido(input);
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