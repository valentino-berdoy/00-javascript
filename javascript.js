/* en esta practica realizada junto a los empleados Santiago Piedrafita y Javier Valdez (mencion
especial a Ignacio Bergantiños) estamos aprendiendo a usar comentarios, console.log, todas sus
variantes y todos los tipos de datos primitivos, para luego, implementarlas en algun 
programa a futuro */
//--------------------------------------------------------------------------------------------------------------------
/*Ejercicio 1: Mensajes Básicos

Muestra un mensaje en la consola que diga "Hola, mundo!".
Muestra en la consola tu nombre.
Muestra en la consola tu ciudad y país */

console.log("hola, mundo");
console.log("valentino berdoy");
console.log("CABA, argentina");

/*Ejercicio 2: Diferentes Niveles de Mensajes

Muestra un mensaje normal en la consola diciendo "Bienvenido al sistema".
Muestra un mensaje de información en la consola diciendo "Cargando aplicación...".
Muestra una advertencia en la consola diciendo "Advertencia: Espacio en disco bajo".
Muestra un error en la consola diciendo "Error: No se pudo conectar al servidor". */

console.log("Bienvenido al sistema");
console.info("Cargando aplicacion...");
console.warn("Advertencia: espacio del disco bajo");
console.error("Error: no se pudo conectar al servidor");

/*Ejercicio 3: Pirámide.

Crea un script que imprima tres líneas de estrellas * para que parezca una pirámide en la pantalla.
Ejecute y realice cambios hasta que vea que funciona correctamente. */

console.group("piramide");
console.log("  *")
console.log(" ***")
console.log("*****")
console.groupEnd("piramide")

/*Ejercicio 4: Debugger

Imprimir en la consola los números del 1 al 10, haciendo que el codigo se pause en luego de mostrar el número 5.
Ejecutar paso a paso el resto de los numeros.*/

console.group("numeros");
console.log("1")
console.log("2")
console.log("3")
console.log("4")
console.log("5")
//debugger;
console.log("6")
console.log("7")
console.log("8")
console.log("9")
console.log("10")
console.groupEnd("numeros")


//-------------- practica 2----------------


/*Ejercicio 1: Palabras Reservadas

Escribe un comentario que liste al menos 8 palabras reservadas en JavaScript. */

//este console group muestra palabras reservadas
console.group("palabrasReservadas")
console.log("null")
console.log("public")
console.log("private")
console.log("static")
console.log("void")
console.log("typeof")
console.log("true")
console.log("with")
console.groupEnd("palabrasReservadas")

/*Ejercicio 2: Tipos de Datos Primitivos

Escribe un comentario que liste todos los tipos de datos primitivos en JavaScript.
Usa console.log para mostrar un ejemplo de cada tipo de dato primitivo.
https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_datatypes1 (no hacer el de objetos) */

/*
tipos de datos primitivos:

string
number
bigint
boolean
symbol
null
undefined 

*/

/*Ejercicio 3: Práctica Combinada

Escribe un bloque de código que haga lo siguiente:

Incluya un comentario explicativo al inicio.
Liste varias palabras reservadas en un comentario.
Use console.log para mostrar ejemplos de diferentes tipos de datos primitivos. */

let length = 16;          // number
console.log(typeof(length));
let lastName = "Johnson"; // string
console.log(typeof(lastName));
let bo = false;            // boolean
console.log(typeof(bo));


//------------- practica 3---------------


/*Ejercicio 1: Operadores Aritméticos

Usa console.log para realizar y mostrar las siguientes operaciones:
La suma de 15 y 30.
La resta de 100 menos 45.
El producto de 8 y 7.
La división de 56 entre 8.
El módulo de 27 entre 4 */

console.log(15+30);
console.log(100-45);
console.log(7*8);
console.log(56/8);
console.log(27%4);

/*Ejercicio 2: Valores y Expresiones

Usa console.log para mostrar el resultado de las siguientes expresiones:
La suma entre 20 y 22.
La concatenación de las cadenas "Hola" y "Mundo".
El resultado de multiplicar 5 por la suma de 3 y 2. */

console.log(20+22);
console.log("hola "+"mundo!");
console.log(5*(3+2));

/*Ejercicio 3: Operadores de Cadena y Número

Usa console.log para concatenar una cadena y un número.
Usa console.log para concatenar una cadena, un número y volver a concatenar una cadena.
Usa console.log para mostrar una cadena que incluya el resultado de una operación aritmética. */

console.log("numero: "+5);
console.log("ejercicio: "+3+". hecho!");
console.log("ejercicio: "+(3+97)+". hecho!");

/*Ejercicio 4: Operadores de Comparación

Escribir código que muestre en consola:
‘True’ usando == y ===.
‘False’ usando == y ===.
‘True’ usando != y !==.
‘False’ usando != y !==.
‘True’ usando >, <, >=, y <=.
‘False’ usando >, <, >=, y <=. */

console.log(2=="2" && 2===2);
console.log(2==4 && 2 ===4);
console.log(5!=8989898 && 1 !== 6);
console.log(5!=5 && 1 !== 1);
console.log(2<3 && 2<=2 && 67>5 && 67>=9);
console.log(4<3 && 5<=2 && 45>666 && 67>=994);



//----------------- practica 4 ----------------------



//1. Declarar una variable de tipo string cuyo nombre represente de forma clara su contenido.

let nombre = "ricardito";
console.log(nombre);

//2. Declarar una variable de tipo number cuyo nombre represente de forma clara su contenido.

let numeroDos = 2;
console.log(numeroDos);

//3. Declarar una variable de tipo boolean cuyo nombre represente de forma clara su contenido.

let verdadero = true
console.log(verdadero);

//4. Declarar dos variables de tipo string. Luego declarar una nueva variable cuyo valor
//sea la concatenación de las dos variables previamente creadas

let hola =  "hola,";
let comoEstas = " como estas?"
let frase =  hola+comoEstas;
console.log(frase);

/*5. Declarar dos variables de tipo number.
Luego declarar una nueva variable cuyo valor sea la suma de las dos variables previamente creadas. 
Luego declarar una nueva variable cuyo valor sea la resta de las dos variables previamente creadas. 
Luego declarar una nueva variable cuyo valor sea la multiplicación de las dos variables previamente creadas. 
Luego declarar una nueva variable cuyo valor sea la división de las dos variables previamente creadas. 
Luego declarar una nueva variable cuyo valor sea el módulo entre las dos variables previamente creadas. */ 

let numerito1 = 66;
let numerito2 = 79023;
let suma = String(numerito1 + numerito2);
let resta = String(numerito1 - numerito2)
let multi = String(numerito1 * numerito2)
let division = String(numerito1 / numerito2)
let modulo = String(numerito1 % numerito2)
console.log(suma, resta, multi, division, modulo);

/*6. Declarar una variable de tipo number y otra de tipo string. 
Luego sumar ambas variables y guardar su resultado en una nueva variable. 
De qué tipo será la tercera variable? */

let numeroideInt = 45;
let numeroideString = "3";
let resultaloide = numeroideInt + numeroideString;
console.log(resultaloide);
console.log(typeof(resultaloide)) // es string

/*7.Declarar una variable de tipo booleano cuyo nombre represente su valor.
Luego declarar una nueva variable cuyo valor sea opuesto a la variable previamente creada. */

let buleancito = false;
let opuesto = !buleancito;
console.log(opuesto);

/*8. Crear una variable de tipo number. 
Reasignar un nuevo valor a esa misma variable para que sea su valor + 1. 
Repetir la operación anterior utilizando una estrategia diferente
Repetir ambas operaciones con operadores de resta, multiplicación y división.*/

let sumador = 90;
sumador += 1;
sumador = sumador +1;
sumador -= 1;
sumador = sumador - 1;
sumador *= 1;
sumador = sumador * 1;
sumador /= 1;
sumador = sumador / 1;
console.log(sumador);

/*9. Declarar una constante e intentar reasignarle otro valor luego de su declaración. Que output recibis? */
const constantinopla = "guaracha";
// me dice: Uncaught TypeError: Assignment to constant variable.

/*10. Crear dos variables de tipo string y dos variables de tipo number. 
Crear una nueva variable cuyo valor sea un string que incluya las cuatro variables previamente creadas. 
Repetir el punto anterior utilizando una estrategia diferente. */

let nununumero1 = 777777777;
let nununumero2 = 333333333;
let palabrita1 = "marcelo";
let palabrita2 = "tinelli";
let cadenitaCarmen = String(nununumero1+nununumero2+palabrita1+palabrita2);
cadenitaCarmen = toString(nununumero1+nununumero2+palabrita1+palabrita2);
console.log(cadenitaCarmen);

/*11. Crear dos variables de tipo number.
Crear cuatro nuevas variables de tipo boolean comparando los dos valores utilizando operadores de comparación. */

let peruano1 = 33;
let peruano2 = 0;
let boliviano1 = peruano1 == peruano2;
let boliviano2 = peruano1 <= peruano2;
let boliviano3 = peruano1 >= peruano2;
let boliviano4 = peruano1 != peruano2;
console.log(boliviano1, boliviano2, boliviano3, boliviano4);

/*12. Declarar cinco variables de tipo string cuyo valor contenga operaciones aritméticas.
Intenta utilizar diferentes estrategias.*/

let esclavo1 = ""
let esclavo2 = ""
let esclavo3 = ""
let esclavo4 = ""
let esclavo5 = ""
esclavo1 = String(2+5)
esclavo2 = 2-5888
esclavo3 = String(2000/5)
esclavo4 = String(2*5)
esclavo5 = String(27%5)
console.log(esclavo1, esclavo2, esclavo3, esclavo4, esclavo5);

/*13. Crea un bloque de código que, utilizando variables con nombres representativos,
calcule la cantidad de propina a dejar en un restaurante,
basada en el total de la cuenta y el porcentaje de propina ingresado por el usuario. */

let cuenta = 1000;
let propinaUsuario = 1;
let propinaADejar = cuenta * (propinaUsuario/100);
console.log("la propina es: "+ propinaADejar+ "$");

/*14. Crea un bloque de código que calcule el precio final
de un producto luego de aplicar un descuento. */

let precio = 10000;
let descuento = 20;
let precioFinal = precio - (precio* (descuento/100));
console.log("precio con descuento: "+precioFinal+"$");

/*15. Crea un bloque de código que, tomando el año de nacimiento de una persona, 
devuelva su edad actual. */

const añoActual = 2024;
let nacimiento = 2005;
console.log("su edad es: "+(añoActual - nacimiento));

/*16. Crea un bloque de código que, definiendo las variables necesarias, 
calcule el área de un círculo, un cuadrado y un triángulo. */

//en milimetros
const pi = 3.14159;
let radio = 6;
let base = 70;
let altura = 40;
console.log("el area del circulo es: "+(pi*radio**2))
console.log("el area del cuadradito: "+(altura*4))
console.log("el area del triangulo es: "+(0.5*base*altura))