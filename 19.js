let letra = prompt("Ingrese una letra");
let vocal = letra.indexOf(letra);
console.log(letra.indexOf(letra))
if (letra.length == 1) {
    if (letra.indexOf(letra) !== -1) {
        console.log("es vocal");
    } else {
        console.log("No es vocal");
    }
} else {
    console.log("No se puede procesar el dato");
}