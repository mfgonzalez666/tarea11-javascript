var texto = (prompt)("Ingresa un texto");
let primerLetra = texto.charAt(0);
let num = (prompt)("Ingrese un numero menor a la cantidad de caracteres del texto que ingreso");
let indice = texto.length
if (num >= 0 && num <= indice) {
    console.log("La primera letra del texto ingresado es : " + primerLetra)
    console.log(" El caracter del texto ubicado en la posicion " + num + " Es el caracter: " + texto.charAt(num));

} else("Numero Incorrecto");