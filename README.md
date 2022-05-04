# Ejercicios 11 javascript

#Realizar los siguientes 20 Ejercicios utilizando el lenguaje javascript

## EJERCICIO 1

var nombre = prompt("Ingresa tu nombre");
console.log("Ahora estas en la matriz:" + nombre);



## EJERCICIO 2

var decimal = parseFloat(prompt("Ingrese un numero decimal: "));
var entero = parseInt(prompt("Ingrese un numero entero: "));
var suma = decimal+entero
console.log("El primer numero es: " +decimal);
console.log("El segundo numero es: " +entero);
console.log("El resultado de la suma es: " +suma);



## EJERCICIO 3

var numero1 = parseFloat(prompt("Ingrese el primer numero:"));
var numero2 = parseFloat(prompt("Ingrese el segundo numero:"));
var suma = parseFloat(numero1 + numero2);
var numero3 = parseFloat(prompt("Ingrese el tercer numero:"));
var resultado = parseFloat(suma * numero3);
console.log("Primer Numero:" + numero1);
console.log("Segundo Numero:" + numero2);
console.log("El resultado de la suma es: " + suma);
console.log("El resultado de la multiplicacion es: " + resultado);

## EJERCICIO 4

var kilometros = parseFloat(prompt("Ingrese los kilometros recorridos: "));
var consumo = parseFloat(prompt("Ingrese los litros de combustible consumidos: "));
console.log("los kilometros recorridos son : " +kilometros + " Km");
console.log("El consumo de combustible es : " +consumo + " litros")
var litrosxKm =kilometros/consumo
console.log("El consumo por kilometro es : " +litrosxKm + " litros")


## EJERCICIO 5

var numero1 = parseFloat(prompt("Ingrese una temperatura en Fahrenheint:"));
var celsius = parseFloat((5 / 9) * (numero1 - 32));
console.log("La temperatura en Fahrenheint es:" + numero1);
console.log("La temperatura en celsius es:" + celsius);


## EJERCICIO 6

var num_1 = parseFloat(prompt("Ingrese el primer número: "));
var num_2 = parseFloat(prompt("Ingrese el segundo número: "));
var num_3 = parseFloat(prompt("Ingrese el tercer número: "));
var prom = (num_1+num_2+num_3)/3
console.log("El primer número es: "+ num_1);
console.log("El segundo número es: "+ num_2);
console.log("El tercer número es: "+ num_3);


## EJERCICIO 7

let num1 = (prompt)("Ingrese un numero");
console.log("E resultado final restandole el 15% es:" + num1 * 0.85);


## EJERCICIO 8


var palabra_1 = (prompt("Ingrese la primera palabra: "));
var palabra_2 = (prompt("Ingrese la segunda palabra: "));
console.log("La primera palabra es: "+ palabra_1);
console.log("la segunda palabra es: "+ palabra_2);
var union = palabra_1+ " " + palabra_2
console.log(union);


## EJERCICIO 9


var texto = (prompt)("Ingresa un texto");
let primerLetra = texto.charAt(0);
let num = (prompt)("Ingrese un numero menor a la cantidad de caracteres del texto que ingreso");
let indice = texto.length
if (num >= 0 && num <= indice) {
    console.log("La primera letra del texto ingresado es : " + primerLetra)
    console.log(" El caracter del texto ubicado en la posicion " + num + " Es el caracter: " + texto.charAt(num));

} else("Numero Incorrecto");


## EJERCICIO 10


let show = (prompt("Cuantos Shows musicales a visto en el último año?: "));
console.log(" Shows vistos en el ultimo año: " +show)

if (show <=3){
  console.log(false)   
}else{
  console.log(true)  
} 


## EJERCICIO 11


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




## EJERCICIO 13


let edad = (prompt)("Ingresa tu edad");
let numArticulos = (prompt)("Ingresar el numero de articulos comprados:");

if (edad >= 18 && numArticulos > 1) {
    console.log("Tu edad es: " + edad + "" + true);
} else {
    console.log("tu edad es: " + edad + "" + false);
}


## EJERCICIO 14


let texto = (prompt("Ingrese una Frase: "));
console.log("La Frase es: "+ texto);

if (texto.length%2 ==0){
  console.log(true)   
}else{
  console.log(false)  
} 



## EJERCICIO 15


var texto1 = (prompt)("Ingrese la primer palabra");
var texto2 = (prompt)("Ingrese la segunda palabra");
if (texto1.length > texto2.length) {
    console.log("primer palabra" + texto1);
    console.log("primer palabra" + texto2);
    console.log(true);
} else {
    console.log("primer palabra" + texto1);
    console.log("segunda palabra" + texto2);
    console.log(false);

}



## EJERCICIO 16


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


## EJERCICIO 17


let num1 = parseFloat(prompt("Ingrese un numero "));
let numAux
if (num1 < 0) {
    numAux = num1 * -1
} else {
    numAux = num1
}
console.log("Numero Ingresado" + num1);
console.log("Numero: " + numAux);



## EJERCICIO 18


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


## EJERCICIO 19

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



* Mario Fernando Gonzalez
* 82202015531
* Ingenieria de sistemas y telecomunicaciones

