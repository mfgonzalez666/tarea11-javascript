let fecha = (prompt)("Ingresar Fecha de 8 numeros:");
let dia = fecha.charAt(0) + "" + fecha.charAt(1);
let mes = fecha.charAt(2) + "" + fecha.charAt(3);
let anio = fecha.charAt(4) + "" + fecha.charAt(5) + "" + fecha.charAt(6) + "" + fecha.charAt(7);

if (dia > 31) {
    console.log("Ingrese un dia valido")
} else {
    if (mes > 12) {
        console.log("ingrese un mes valido")
    } else {
        console.log("la fecha ingresada es: " + dia + "/" + mes + "/" + anio);
    }
}