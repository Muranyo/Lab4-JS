function valorBoton(valor){
    operador = valor;
    document.getElementById("pantallacalculo").innerHTML = document.getElementById("pantallanumeros").innerHTML + operador;
    valor1 = document.getElementById("pantallanumeros").innerHTML;
    
    document.getElementById("pantallanumeros").innerHTML = "";
}

var valor1;
var valor2;
var operador = '';

function recibirNumero(valor) {
    actualizarvisor(valor);
}

function actualizarvisor(texto) {
    
    var textoactual = document.getElementById("pantallanumeros").innerHTML;
    if(textoactual == '') {
        
    document.getElementById("pantallanumeros").innerHTML = texto;
    }
    else {
        document.getElementById("pantallanumeros").innerHTML = textoactual + texto;
    }
}


function calculador() {

    switch(operador) {
        case "+": 
        valor2 = document.getElementById("pantallanumeros").innerHTML;
        document.getElementById("pantallacalculo").innerHTML = document.getElementById("pantallacalculo").innerHTML + valor2 + "  =  " + (Number(valor1)+Number(valor2));
        break;

        case "-":
        valor2 = document.getElementById("pantallanumeros").innerHTML;
        document.getElementById("pantallacalculo").innerHTML = document.getElementById("pantallacalculo").innerHTML + valor2 + "  =  " + (Number(valor1)-Number(valor2));
        break;

        case "*":
        valor2 = document.getElementById("pantallanumeros").innerHTML;
        document.getElementById("pantallacalculo").innerHTML = document.getElementById("pantallacalculo").innerHTML + valor2 + "  =  " + (Number(valor1)*Number(valor2));
        break;

        case "/":
        valor2 = document.getElementById("pantallanumeros").innerHTML;
        document.getElementById("pantallacalculo").innerHTML = document.getElementById("pantallacalculo").innerHTML + valor2 + "  =  " + (Number(valor1)/Number(valor2));
        break;
    }
}

