// 1. Creararrays con el nombre de las imagenes  -Hecho
// 2. Crear 3 cuadrados, en los cuales se insertaran las frutas Html - Hecho
// 3. Generar un numero aleatorio para cada uno de las arrays - Hecho
// 4. El usuario tiene que introducir monedas, por lo que tendremos que desactivar la opcion de insertar mas - Hecho, falta desactivar la opcion de introducir monedas
// 5. Añadir un boton  "Tirar", en este momento gastara una moneda y mostrara las tres imagenes aleatorias - Hecho
// 6. Añadir un boton "Salir", para que muestre una alerta el numero total de monedas
// 7. Mostrar en formato lista el historial de monedas ganadas y perdidas en cada tirada - Hecho


// Dinero - Premios

// Si sale una zanahora, 1 moneda
// Si salen 2 zanahorias, 4 monedas
// Si salen tres zanahorias , se ganan 10 monedas
// Si salen dos hortalizas iguales que no sean zanahorias se ganan 2 monedas
// Si salen 3 hortalizas iguales que no sean zanahorias se ganan 5 monedas
// Si sale un zanahoria y dos hortalizas iguale se gnana tres monedas.

//Array, contiene las img de frutas
let frutas = ["Zanahoria", "Manzana", "Naranja", "Piña", "Sandía"]

// Global Variables
var num1, num2, num3;
var intervalIdOne, intervalIdTwo, intervalIdThree;
var monedas = 0;
var monedasIntroducidas = 0;
// Random numbers
function numAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//Spins de cada slot
function spinSlotOne() {
    let slotOne = document.getElementById('slot-1');
    num1 = numAleatorio(0, 4);
    slotOne.src = "/img/" + frutas[num1] + ".png";
    return num1;
}

function spinSlotTwo() {
    let slotTwo = document.getElementById('slot-2');
    num2 = numAleatorio(0, 4);
    slotTwo.src = "/img/" + frutas[num2] + ".png";
    return num2;
}

function spinSlotThree() {
    let slotThree = document.getElementById('slot-3');
    num3 = numAleatorio(0, 4);
    slotThree.src = "/img/" + frutas[num3] + ".png";
    return num3;
}
function insertCoin() {
    if (document.getElementById('input-coins').value == "" || document.getElementById('input-coins').value == undefined) {
        alert("Inserte Monedas Para Jugar");
    } else if (!document.getElementById('input-coins').disabled) {
        monedasIntroducidas = document.getElementById('input-coins').value;
        monedas += parseInt(monedasIntroducidas);
        document.getElementById('monedas-disp').innerHTML = `Monedas disponibles: ${monedasIntroducidas}`
        document.getElementById('input-coins').disabled = true;
        document.getElementById('input-coins').value = 'Insert Coin';
    }
}

function actualizaMonedas() {
    monedas += parseInt(document.getElementById('input-coins').value);
    document.getElementById('monedas-disp').innerHTML = `Monedas disponibles: ${monedas}`
}

function spin() {
    if (monedas <= 0) {
        alert("Inserta monedas para poder Jugar");
    } else {
        monedas -= 1;
        document.getElementById('monedas-disp').innerHTML = `Monedas disponibles: ${monedas}`
        intervalIdOne = setInterval(spinSlotOne, 80);
        intervalIdTwo = setInterval(spinSlotTwo, 80);
        intervalIdThree = setInterval(spinSlotThree, 80);
        document.getElementById('spin').disabled = true;
        document.getElementById('coins').disabled = false;
    }
}

// Testeando las monedas ganadas en base a que numeros han salido.
function stop() {
    setTimeout(() => {
        clearInterval(intervalIdOne);
    }, 1000);
    setTimeout(() => {
        clearInterval(intervalIdTwo);
    }, 2000);
    setTimeout(() => {
        clearInterval(intervalIdThree);
    }, 3000);
    setTimeout(() => {
        document.getElementById('coins').addEventListener('click', testingWin(num1, num2, num3));
    }, 6500);
    setTimeout(() => {
        document.getElementById('monedas-disp').innerHTML = `Monedas disponibles: ${monedas}`
    }, 6500);
    setTimeout(() => {
        document.getElementById('spin').addEventListener('click', changeButton('spin'));
    }, 6500)

}

// Testeando las monedas ganadas en base a que numeros han salido.
function testingWin(opt1, opt2, opt3) {
    // Si salen tres zanahorias , se ganan 10 monedas
    if ((opt1 == opt2 && opt2 == opt3) && (opt1 == 0 && opt2 == 0)) {
        monedas += 10;
        document.getElementById("textarea-historial").value += `Resultado: ${frutas[num1]}, ${frutas[num2]}, ${frutas[num3]}. Bonus: 10. Monedas: ${monedas}`;
        // Si salen 3 hortalizas iguales que no sean zanahorias se ganan 5 monedas
    } else if ((opt1 == opt2 && opt2 == opt3) && (opt1 != 0 && opt2 != 0)) {
        monedas += 5;
        document.getElementById("textarea-historial").value += `Resultado: ${frutas[num1]}, ${frutas[num2]}, ${frutas[num3]}. Bonus: 5. Monedas: ${monedas}` + '\n';
        // Si salen 2 zanahorias, 4 monedas
    } else if ((opt1 == opt2 || opt2 == opt3 || opt1 == opt3) && (opt1 == 0 && opt2 == 0)) {
        monedas += 4;
        document.getElementById("textarea-historial").value += `Resultado: ${frutas[num1]}, ${frutas[num2]}, ${frutas[num3]}. Bonus: 4. Monedas: ${monedas}` + '\n';
        // Si salen dos hortalizas iguales que no sean zanahorias se ganan 2 monedas 
    } else if ((opt1 == opt2 || opt2 == opt3 || opt1 == opt3) && (opt1 != 0)) {
        monedas += 2;
        document.getElementById("textarea-historial").value += `Resultado: ${frutas[num1]}, ${frutas[num2]}, ${frutas[num3]}. Bonus: 2. Monedas: ${monedas}` + '\n';
        // // Si sale un zanahoria y dos hortalizas iguales se ganan 3 monedas.
    } else if ((opt1 == 0 || opt2 == 0 || opt3 == 0) && (opt1 == opt2 || opt2 == opt3 || opt1 == opt3) && (opt1 != 0 || opt2 != 0)) {
        monedas += 3;
        document.getElementById("textarea-historial").value += `Resultado: ${frutas[num1]}, ${frutas[num2]}, ${frutas[num3]}. Bonus: 3. Monedas: ${monedas}` + '\n';
        // Si sale una zanahora, 1 moneda
    } else if ((opt1 == 0 || opt2 == 0 || opt3 == 0)) {
        monedas += 1;
        document.getElementById("textarea-historial").value += `Resultado: ${frutas[num1]}, ${frutas[num2]}, ${frutas[num3]}. Bonus: 1. Monedas: ${monedas}` + '\n';
    } else {
        document.getElementById("textarea-historial").value += `Resultado: ${frutas[num1]},${frutas[num2]}, ${frutas[num3]}. Bonus: 0. Monedas: ${monedas}` + '\n';
    }
}


// Logic for the button to exit the game. 
function exit() {
    monedas = 0;
    document.getElementById('monedas-disp').innerHTML = `Monedas disponibles: ${monedas}`
    if (document.getElementById('input-coins').disabled = true) {
        document.getElementById('input-coins').disabled = false;
    }
    //Clear textarea
    document.getElementById("textarea-historial").value = "";
    document.getElementById("input-coins").disabled;
}

//Disabling spin or stop button whenever other is available
function changeButton(btn) {
    if (document.getElementById(btn).disabled == true) {
        document.getElementById('coins').disabled = true;
    }
    document.getElementById('spin').disabled = false;
}

