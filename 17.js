let num1 = parseFloat(prompt("Ingrese un numero "));
let numAux
if (num1 < 0) {
    numAux = num1 * -1
} else {
    numAux = num1
}
console.log("Numero Ingresado" + num1);
console.log("Numero: " + numAux);