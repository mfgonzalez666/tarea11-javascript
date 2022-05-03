let numero_1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero_2 = parseFloat(prompt("Ingrese el segundo numero: "));
let aux
if(numero_1 > numero_2){
    aux = numero_1;
}else{
    aux = numero_2;
}
console.log("El Primer valor ingresado es: " + numero_1);
console.log("El Segundo numero ingresado es: " + numero_2);
console.log("El numero mayor es: " + aux);