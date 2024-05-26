//Declarar variables 
var numeroA; 
var numeroB; 
var operacion;
var resultado = document.getElementById('resultado');

// Llamar a los botones
var reset = document.getElementById('reset');
var borrar = document.getElementById('borrar');

// Eventos de click
uno.onclick = function() {
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function() {
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function() {
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function() {
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function() {
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function() {
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function() {
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function() {
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function() {
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function() {
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function() {
    resetear();
}
suma.onclick = function() {
    numeroA = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function() {
    numeroA = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function() {
    numeroA = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function() {
    numeroA = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function() {
    numeroB = resultado.textContent;
    resolver();
}

// Funciones
function limpiar() {
    resultado.textContent = '';
}

function resetear() {
    resultado.textContent = '';
    numeroA = 0;
    numeroB = 0;
    operacion = '';
}

function resolver() {
    var solucion = 0;
    switch(operacion) {
        case "+":
            solucion = parseFloat(numeroA) + parseFloat(numeroB);
            break;
        case "-":
            solucion = parseFloat(numeroA) - parseFloat(numeroB);
            break;
        case "*":
            solucion = parseFloat(numeroA) * parseFloat(numeroB);
            break;
        case "/":
            solucion = parseFloat(numeroA) / parseFloat(numeroB);
            break;
    }
    resetear();
    resultado.textContent = solucion;
}

