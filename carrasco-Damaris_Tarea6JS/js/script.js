//Declarar variables 
var numeroA;
var numeroB;
var operacion;
var resultado = document.getElementById('resultado');

// Llamar a los botones
var reset = document.getElementById('reset');
var borrar = document.getElementById('borrar');

// Bucle para dar evento a los botones numéricos
for (let i = 0; i < 10; i++) {
    document.getElementById("b" + i).onclick = function () {
        resultado.textContent = i + "";
    }
}

//Eventos de click
reset.onclick = function () {
    resetear();
}
suma.onclick = function () {
    numeroA = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function () {
    numeroA = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function () {
    numeroA = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function () {
    numeroA = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function () {
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
    switch (operacion) {
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

