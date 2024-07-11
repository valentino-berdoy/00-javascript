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




console.log(15+30);
console.log(100-45);
console.log(7*8);
console.log(56/8);
console.log(27%4);



console.log(20+22);
console.log("hola "+"mundo!");
console.log(5*(3+2));



console.log("numero: "+5);
console.log("ejercicio: "+3+". hecho!");
console.log("ejercicio: "+(3+97)+". hecho!");



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
let suma = numerito1 + numerito2
let resta = numerito1 - numerito2
let multi = numerito1 * numerito2
let division = numerito1 / numerito2
let modulo = numerito1 % numerito2
console.log(suma + resta + multi + division + modulo);


let numeroideInt = 45;
let numeroideString = "3";
let resultaloide = numeroideInt + numeroideString;
console.log(resultaloide);
console.log(typeof(resultaloide)) // es string

let buleancito = false;
let opuesto = !buleancito;
console.log(opuesto);

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

const constantinopla = "guaracha";
// me dice: Uncaught TypeError: Assignment to constant variable.

let nununumero1 = 777777777;
let nununumero2 = 333333333;
let palabrita1 = "marcelo";
let palabrita2 = "tinelli";
let cadenitaCarmen = String(nununumero1+nununumero2+palabrita1+palabrita2);
cadenitaCarmen = toString(nununumero1+nununumero2+palabrita1+palabrita2);
console.log(cadenitaCarmen);

let peruano1 = 33;
let peruano2 = 0;
let boliviano1 = peruano1 == peruano2;
let boliviano2 = peruano1 <= peruano2;
let boliviano3 = peruano1 >= peruano2;
let boliviano4 = peruano1 != peruano2;
console.log(boliviano1, boliviano2, boliviano3, boliviano4);

let esclavo1 = ""
let esclavo2 = ""
let esclavo3 = ""
let esclavo4 = ""
let esclavo5 = ""
esclavo1 = String(2+5)
esclavo2 = String(2-5888)
esclavo3 = String(2000/5)
esclavo4 = String(2*5)
esclavo5 = String(27%5)
console.log(esclavo1, esclavo2, esclavo3, esclavo4, esclavo5);

let cuenta = 1000;
let propinaUsuario = 1;
let propinaADejar = cuenta * (propinaUsuario/100);
console.log("la propina es: "+ propinaADejar+ "$");

let precio = 10000;
let descuento = 20;
let precioFinal = precio - (precio* (descuento/100));
console.log("precio con descuento: "+precioFinal+"$");

const añoActual = 2024;
let nacimiento = 2005;
console.log("su edad es: "+(añoActual - nacimiento));

//en milimetros
const pi = 3.14159;
let radio = 6;
let base = 70;
let altura = 40;
console.log("el area del circulo es: "+(pi*radio**2))
console.log("el area del cuadradito: "+(altura*4))
console.log("el area del triangulo es: "+(0.5*base*altura))