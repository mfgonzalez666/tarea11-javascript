let nombre1 = (prompt("Ingresa tu nombre: "));
let nombre2 = (prompt("Ingrese otro nombre: "));

if (nombre1.charAt(0)==nombre2.charAt(0)|| nombre1.charAt(nombre1.length - 1)== nombre2.charAt(nombre2.length - 1)){

    console.log("Tu nombre: " + nombre1);
    console.log("Otro Nombre: " + nombre2);
    console.log(true);

}else{

    console.log("Tu nombre: " + nombre1);
    console.log("Otro Nombre: " + nombre2);
    console.log(false);

}
