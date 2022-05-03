let edad = (prompt)("Ingresa tu edad");
let numArticulos = (prompt)("Ingresar el numero de articulos comprados:");

if (edad >= 18 && numArticulos > 1) {
    console.log("Tu edad es: " + edad + "" + true);
} else {
    console.log("tu edad es: " + edad + "" + false);
}