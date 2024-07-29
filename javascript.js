/* en esta practica realizada junto a los empleados Santiago Piedrafita y Javier Valdez (mencion
especial a Ignacio Bergantiños) estamos aprendiendo a usar comentarios, console.log, todas sus
variantes, todos los tipos de datos primitivos y mas!, para luego, implementarlas en algun 
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
cadenitaCarmen = (nununumero1+nununumero2+palabrita1+palabrita2);
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


//-----------Cuestionario Variables------------

/*

1- ¿Qué es una variable en JavaScript?
es un espacio en la memoria para almacenar datos, sea cual sea el tipo

2- ¿Qué diferencia hay entre var, let y const?
var y let son variables mutables y const son variables inmutables. let y const son tipos 
de variables mas nuevos

3- ¿Cuál es el ámbito de una variable declarada con var?
tiene un ambito de funcion

4- ¿Cuál es el ámbito de una variable declarada con let?
tiene un ambito de bloque

5- ¿Cuál es el ámbito de una variable declarada con const?
tiene un ambito de bloque

6- ¿Qué sucede si intentas redeclarar una variable con var en el mismo ámbito?
eso esta permitido, es posible y no genera ningun inconveniente

7- ¿Qué sucede si intentas redeclarar una variable con let en el mismo ámbito?
no te lo permite, tirando error ya que su ambiente es de bloque

8- ¿Qué sucede si intentas cambiar el valor de una constante declarada con const?
no te lo permite, ya que una veez creada la constante no te permite cabiar su contenido

9- ¿Es posible declarar una variable sin inicializarla? Si es así, ¿qué valor tiene por defecto?
es posible y su tipo es "undefined"

10- ¿Qué tipo de error se genera al intentar usar una variable no declarada?
salta un error de "Uncaught", y te describe el error con que no esta definida la varible

11- ¿Qué diferencia hay entre declarar una variable e inicializarla?
declarar una variable es indicar que existe simplemente e inicializarla es
declararla y darle algun valor

12- ¿Qué es el hoisting en JavaScript?
significa que si inicializamos una variable en medio del codigo el programa automaticamente
la declarará al inicio del programa o "scope"

13- ¿Cómo afecta el hoisting a las variables declaradas con var?
el hoisting al declarar las funciones al inicio del scope, significa que hasta ser inicializadas su
valor sera "undefined"

14- ¿Qué sucede si intentas acceder a una variable antes de declararla con let o const?
no se puede acceder y saltara un "ReferenceError"

15- ¿Qué es una variable global?
es una variable que se puede acceder en cualquier parte del codigo, ya que
no se limita a su bloque

16- ¿Es posible cambiar el tipo de datos de una variable en JavaScript? Da un ejemplo.
si es posible de varias maneras.
un ejemplo es simplemente que le asignemos otro valor, utilizando funciones
reservadas como String(), entre otros

17- ¿Cómo se puede verificar el tipo de una variable en JavaScript?
es posible verificarlo con el la funcion typeof()
*/



//----------------------------- TP condicionales ---------------------------


//If:

//1. Crea un bloque de código que compare dos variables numéricas. Si el número A es mayor que el número B, 
//imprimir en consola ‘El número A es mayor a B‘.

if (numerito1 > numerito2)
    console.log(`el numero ${numerito1} es mayor a ${numerito2}`)

//2. Crea un bloque de código que tome la edad de un usuario y la compare con un número de referencia.
//Si la edad es mayor al 

let edadusu = 50;
if (edadusu > 30)
    console.log("ya estas medio viejo");

//3. Crea un bloque de código que compare dos números e imprima en consola un valor booleano.
let puerta = false
if (nununumero1 == nununumero2)
    console.log(puerta);

//4. Crea un bloque de código que compare dos nombres, y si ambos son iguales imprima en consola el nombre.

let humano1 = "Alside";
let humano2 = "Alside";

if (humano1 == humano2)
    console.log(humano1);

//5. Crea un bloque de código que compare dos nombres, y si ambos son diferentes imprima en consola un mensaje.

humano1 = "Alside";
humano2 = "Ricardo";

if (humano1 != humano2)
    console.log("son dos personas diferentes");

//6. Crea un bloque de código que imprima en consola un número en caso de que sea un número negativo.

let deuda = -90;
if(deuda < 0)
    console.log(deuda);

//7. Crea un bloque de código que imprima en consola un número en caso de que NO sea un número negativo.

deuda = 99990;
if(deuda > 0)
    console.log(deuda);

//--------------- If…else: ---------------

//8. Crea un bloque de código que compare dos números. Si el número es par, imprimir en consola 
//‘El número es par’. De lo contrario, imprimir ‘El número es impar’.

let comparasion =80;
if (comparasion % 2 == 0)
    console.log("es par")
else
    console.log("es impar");

//9. Crea un bloque de código que compare dos números y luego imprima en consola si es positivo o negativo.

let maquinola = 30

if (maquinola > 0)
    console.log("es positivo");
else
    console.log("es negativo");

//10. Crea una función que tome de referencia una variable string cuyo valor sea una letra,
//y luego imprima en consola si es una vocal o una consonante.

let letroide = "ñ"
if (letroide == "a" || letroide == "e" || letroide == "i" || letroide == "o" || letroide == "u")
    console.log("es una vocal");
else
    console.log("es consonante");

//11. Crea un bloque de código que tome de referencia un nombre.
//Si el nombre ingresado es ‘Pedro’ imprimir en consola ‘Hola Pedro, como estás?’.
//De lo contrario, imprimir ‘Hola! Cómo te llamas?’.

let saludo = "pedro"

if (saludo == "pedro")
    console.log("hola pedro como andas?");
else
    console.log("quien sos");

//12. Crea un bloque de código que tome de referencia la nota de un examen y devuelva ‘Estás aprobado’
//si la nota es mayor o igual a 7, o ‘Estás desaprobado’ si la nota es menor a 7.

let lanota420 = 9;
if (lanota420 >= 7)
    console.log("estas aprobado");
else
    console.log("aplazado!!!!!!");


//-------------Else if:----------

//13. Crea un bloque de código que tome de referencia un número e imprima en pantalla si el número es menor 
//a 10, mayor a 50, o si está entre esos dos valores.

let numeraso = 40;

if (numeraso > 50)
    console.log("el numero es mayo a 50")
else if (numeraso < 10)
    console.log("es menor a 10")
else
    console.log("esta entre 10 y 50");

//14. Crea un bloque de código que compare dos números. Si ambos números son menores a 10,
//imprimir en consola el múltiplo. Si ambos números son mayores a 50,
//imprimir en consola su suma. Sino, imprimir en consola el primer número menos el segundo.

numeraso = 39;
numeraso2 = 590;

if (numeraso > 50 && numeraso2 > 50)
    console.log("su suma es: "+numeraso+numeraso2)
else if (numeraso < 10 && numeraso2 <10)
    console.log("su multiplo es: "+numeraso*numeraso2)
else
    console.log("su resta es: "+(numeraso-numeraso2));

//15. Crea un bloque de código que tome de referencia un número del 1 al 7 y devuelva el día de la semana correspondiente. 
//Por ejemplo: 1 = ‘lunes’.

let diahermoso = 5;
if (diahermoso == 1)
    console.log("hoy es lunes");
else if (diahermoso == 2)
    console.log("hoy es martes");
else if (diahermoso == 3)
    console.log("hoy es miercoles");
else if (diahermoso == 4)
    console.log("hoy es jueves");
else if (diahermoso == 5)
    console.log("hoy es viernes");
else if (diahermoso == 6)
    console.log("hoy es sabado");
else if (diahermoso == 7)
    console.log("hoy es domingo");

//16. Crea un bloque de código que reciba un número e imprima en pantalla si es divisible por 2, 3, o ninguno.

let sujeto = 30;

if (sujeto % 2 == 0)
    console.log("es divisible por 2");
else if (sujeto % 3 == 0)
    console.log("es divisible por 3");
else if (sujeto % 2 != 0 && sujeto % 3 != 0)
    console.log("no es divisible por ninguno")

//17. Crea un bloque de código que tome de referencia un número del 1 al 12 y devuelva el mes correspondiente. 
//Por ejemplo: 1 = ‘Enero’.
let mesaso = 4
if (mesaso == 1)
    console.log("enero");
else if (mesaso == 2)
    console.log("febrero");
else if (mesaso == 3)
    console.log("marzo");
else if (mesaso == 4)
    console.log("abril");
else if (mesaso == 5)
    console.log("mayo");
else if (mesaso == 6)
    console.log("junio");
else if (mesaso == 7)
    console.log("julio");
else if (mesaso == 8)
    console.log("agosto");
else if (mesaso == 9)
    console.log("septiembre");
else if (mesaso == 10)
    console.log("octubre");
else if (mesaso == 11)
    console.log("noviembre");
else if (mesaso == 12)
    console.log("diciembre");

//---------------Switch:---------

//18. Crea un bloque de código que tome de referencia un número del 1 al 7.
//Utiliza una sentencia Switch para imprimir en consola el día de la semana correspondiente.

let quediaes = 1;

switch (quediaes){
    case 1:
        console.log("es lunes");
        break;
    case 2:
        console.log("es martes");
        break;
    case 3:
        console.log("es miercoles");
        break;    
    case 4:
        console.log("es jueves");
        break;
    
    case 5:
        console.log("es viernes");
        break;
    case 6:
        console.log("es sabado");
        break;    
    case 7:
        console.log("es domingo");
        break;
}

//19. Crea un bloque de código que tome de referencia una letra correspondiente al género 
//(‘H’, ‘M’, ‘X’…). Utiliza una sentencia switch para imprimir en consola el género correspondiente.

let genero = "h"
switch(genero){
    case "h":
        console.log("hombre");
        break;        
    case "m":
        console.log("mujer");
        break;
    case "x":
        console.log("nb");
        break;
}

//20. Crea un bloque de código que reciba un número del 1 al 10.
//Utiliza switch para imprimir en consola ‘Uno’, ‘Dos’, ‘Tres’, o ‘Mayor a 3’, según corresponda. 

let numeo = 7;
switch(numeo){
    case 1:
        console.log("uno");
        break;
    case 2:
        console.log("dos");
        break;
    case 3:
        console.log("tres");
        break;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("mayor a tres");
        break;
    default:
        console.log("ingrese otro numero")
}

//21. Crea un bloque de código que tome de referencia una letra.
//Utiliza switch para imprimir en consola si es una vocal, una consonante, o un caracter especial.
let caractersito = 6

switch(typeof caractersito){
    case "number":
        console.log("es un numero");
        break;
        case "string":
        console.log("es una letra");
        break;
}

//22. Crea un bloque de código que tome de referencia un número del 1 al 4.
//Utiliza switch para imprimir en consola la estación del año correspondiente.

let estacionAño = 3;

switch(estacionAño){
    case 1:
        console.log("verano");
        break;    
    case 2:
        console.log("otoño");
        break;
    case 3:   
        console.log("invierno");
        break;
    case 4:
        console.log("primavera");
        break;
    default:
        console.log("que estacion estas animal");
        break;
}

//---------Operador ternario:----------------

//23. Crea un bloque de código que tome de referencia una variable ‘edad’.
//Utiliza el operador ternario para imprimir en consola si es o no mayor de edad.

let edadas =10;
console.log(edadas >= 18 ? "sos mayor" : "sos menor");

//24. Crea un bloque de código que tome de referencia un número.
//Utiliza el operador ternario para determinar si es par o impar y muestra el resultado en consola.

let otroNumeroMas =60;
console.log(otroNumeroMas % 2 == 0 ? "es par" : "es impar");

//25. Crea un bloque de código que tome de referencia dos números y utilice el operador ternario para determinar cual de los dos es el mayor.
//Luego imprime en consola el resultado.

let maaasNumeros1 = 20;
let maaasNumeros2 = 9090909090909;

console.log(maaasNumeros1 > maaasNumeros2 ? maaasNumeros1 : maaasNumeros2)

//26. Crea un bloque de código que tome de referencia un número del 1 al 7 y utilice el operador
//ternario para imprimir en consola el día de la semana correspondiente.
let dia = 3;
console.log(dia === 1 ? "lunes": 
            dia === 2 ? "martes":
            dia === 3 ? "miercoles":
            dia === 4 ? "jueves":
            dia === 5 ? "viernes":
            dia === 6 ? "sabado":
            dia === 7 ? "domingo": 
            "numero cualquiera");

//27. Crea un bloque de código que tome de referencia un número.
//Utiliza el operador ternario para determinar si es positivo, negativo o cero e imprime el resultado en consola.

let teGustanLosNumerosPREGUNTANoPREGUNTABuenoAcaHayMas = -22267767676767622;
console.log(teGustanLosNumerosPREGUNTANoPREGUNTABuenoAcaHayMas >= 0 ? "positivo" : "negativo");

//28. Crea un bloque de código que tome de referencia un número del 1 al 100
//y utilice el operador ternario para determinar si es múltiplo de 3 y 5
//para imprimir el resultado en consola.

let hola2LaVenganza = 90;
console.log(hola2LaVenganza % 5 == 0 ? `multiplo de 5: ${hola2LaVenganza / 5 } * 5 = ${hola2LaVenganza}`:
            hola2LaVenganza % 3 == 0 ? `multiplo de 3: ${hola2LaVenganza / 3 } * 3 = ${hola2LaVenganza}`: 
            "no garpa");
console.log(hola2LaVenganza % 3 == 0 ? `multiplo de 3: ${hola2LaVenganza / 3 } * 3 = ${hola2LaVenganza}`:
            hola2LaVenganza % 5 == 0 ? `multiplo de 5: ${hola2LaVenganza / 5 } * 5 = ${hola2LaVenganza}`: 
            "no garpa");

//-------------------- Prácticas: ----------------------

//29. Crea un bloque de código que tome de referencia un número del 1 al 100 y,
//utilizando el tipo de condicional que prefieras, imprimir si es múltiplo de 2, 3 o 5 
//incluyendo las diferentes combinaciones posibles.

let numero3p = 50;
console.log((numero3p % 2 === 0 && numero3p % 3 === 0 && numero3p % 5 === 0) ? 'Multiplo de 2, 3 y 5' :
            (numero3p % 2 === 0 && numero3p % 3 === 0) ? 'Multiplo de 2 y 3' :
            (numero3p % 2 === 0 && numero3p % 5 === 0) ? 'Multiplo de 2 y 5' :
            (numero3p % 3 === 0 && numero3p % 5 === 0) ? 'Multiplo de 3 y 5' :
            (numero3p % 2 === 0) ? 'Multiplo de 2' :
            (numero3p % 3 === 0) ? 'Multiplo de 3' :
            (numero3p % 5 === 0) ? 'Multiplo de 5' :
            'No es multiplo de niguno');

//30. Crea un bloque de código que reciba un numero del 1 al 1000.
//Utiliza el tipo de condicional que prefieras para imprimir en consola si el numero es par o impar,
//si es divisible por 2, por 3 o por 5, y si es mayor o menor a 50.

let lionelMessi = 34;

console.log((lionelMessi % 2 === 0 && lionelMessi % 3 === 0 && lionelMessi % 5 === 0) ? 'Divisible por 2, 3 y 5' :
            (lionelMessi % 2 === 0 && lionelMessi % 3 === 0) ? 'Divisible por 2 y 3' :
            (lionelMessi % 2 === 0 && lionelMessi % 5 === 0) ? 'Divisible por 2 y 5' :
            (lionelMessi % 3 === 0 && lionelMessi % 5 === 0) ? 'Divisible por 3 y 5' :
            (lionelMessi % 2 === 0) ? 'Divisible por 2' :
            (lionelMessi % 3 === 0) ? 'Divisible por 3' :
            (lionelMessi % 5 === 0) ? 'Divisible por 5' :
            'No es divisible por 2, 3 ni 5');
console.log((lionelMessi > 50) ? 'Mayor que 50' : 'Menor o igual a 50');
console.log((lionelMessi % 2 === 0) ? 'Par' : 'Impar');

//31. Desarrolla 10 nuevas situaciones en donde requieras de utilizar condicionales para su resolución.


/*WWWWWWWWWNNWWWMMMMMMMMMMMMMMMMMMMMMMMMMWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWW
WWWWWWWWWNNWWWMMMMMMMMMMMMMMMMMMMMMMMMMWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
WWWWWWWWWNNWWWMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
WWWWWWWWWNNWWWMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
WWWWWWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
WWWWWWWNWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
WWWWWWWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
WWWWWWWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMWNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
WWWWWWWNNNNNWWWWMMMMMMMMMMMMMMMMMMMMMMMMWWNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
WWWWWWWNNNNNNWWWWMMMMMMMMMMMMMMMMMMMMMMMWWNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
WWWWWWWNNNNNNWWWWWWWMMMMMMMMMMMMMMMMMMMMWWNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
WWWWWWWWNNNNNWWWWWWWWWWMMMMMMMMMMMMMMMMMWWNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNNNNNNNNNNNNNWWWWWWWWWMMMMMMMMMMMMMMMMMMWNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNNNNNNNNNNNNNNWWWMWWWWWWMMMMMMMMMMMMMMMMWNNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWMMMM
NNNNNNNNNNNNNNNWWWWWWWMWWWWWMMMMMMMMMMMMMWNNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWMMMM
NNNNNNNNNNNNNNNWWWWWWWMWWWWWWWWMMMMMMMMMMWNNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWMMMM
NNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWMMMMMMMMMWWWNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWMMMM
NNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWMMMMMMMMMWWWNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWW
NNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWMMMMMMMWMWWWNNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWW
NNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWMMMMMMMWWWWWNNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWW
NNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWMMMMMWWWWWWNNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWW
NNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWWNNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWW
NNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWWNNNWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNNNWMMMMMMMMWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWW
NNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWWMMMMWWWNXXNWWWWNNNNNNWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWW
NNNNNNNNNNNNNNNNNNWWWWWWWWWWWWWMMMMMMMMWWMWWNNNWWMMWWMWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWWWWWWWWWNX0OOOOkxxddxxkkOO0KXNWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWMMMM
NNNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWMMMMMMMWWMWWNNNWWMMWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWMMMWWWWNNNNNXXXK000OOkkkkxdlc::::::;;;;;::cclodk0KNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWMMM
NNNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWWNNNWWWWWWMWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWNNNXK0OOkkxdlcccc:::;,,''....'......'',;;:clodOKXNWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWWW
NNNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWWNNNWWWWWWMMWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNNNNXK0Okxdooc:;,,,'.......  .............',;;:coxOXNNWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWWWW
NNNNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWNNNWWWMWMMMWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNNNK0Oxdolcc::;;,'.......        ...   ........,;::cdk0XNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWWWWW
NNNNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWNNNNWWMMMMWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWNXOdoolc::::;,,'....                    ..  ....',',;;cdOKNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWWWWW
NNNNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWNNNNWWWWWMWWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNNXkolooc::;;;,'...                              ......',;cdOXNNWWMWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWWWWW
NNNNNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWNNNNWWWWWWWWWWWWWWWWMMMMWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWWWWMWWNNN0dcclc::;,,'..                                  ... ...';:okKXNWWMMWWWWWWWWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWWWWW
NNNNNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWNNNNWWWWWWWWMWWWWWWWWWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWMMMMMMMMMMWWWWWWWWWWWWWWWWWNNXN0oclol:;'....                                          ..';cdOKXNWWWWWWMMMWWWWWWMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWMMMMMMMMMMMMMMMMWWWWWWWWWWWW
NNNNNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWNNNNWWWWWWWWWWWWWWWWWWWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMWWMWWWMMWMMMMMWMMMMWWWWWWMMWWWWWNNK0Oxdc,,clc,.....                                             ..';ldOXNWWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWMMMMMMMMMMMMMMMWWWWWWWWWWWW
NNNNNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWNNNNWWWWMWWWWWWWWWWWWWWWWNNNNNNXXXXXXXKKKKK0000OOOOOkkkkxxxdddddxkKWMWWMMMMWMWWWWWWWWWWNX0Okoc;;,',clc;....                                                 ..:oxOXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXXXXXKKKKK0000OOkxxkkxxxxddddoooolllccc::::;;;;;;;;;,,,,,,''''''''.............';dXWWMWWMWMWWWWWWWWNK0Oxoc::;;,;:cc;...              ....',;::::;;;;;;;;,'''...            .,codOXNWWMWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
Okkkkxxxddoooollllcccc::::;;;,,,'''''..........................................................................,dNMMMMMWWMMWWWWWKOOOdl:;;,'.'';:;.....      ...',;;:clooddddddddddddooooooolc:,'..       ..':llkKXWWWWWWWWWWWWWNNNNNNNNNXXXXXXXXXKKKKKXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
......                                        .................................................................'lKMMMMMWMMMWWWNKOkxoc;,,...'.';,.....    ..,:clloodddxxxxxxxxxxxxxxdddddddddddddol;'.     ...';cldxxdollccccc:::::::;;;;;,;;,,,,,'''';kNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
                                               ....................................''''''',,,,,;;;::::::cc:,....:0MMMMMWWMWKolddoolc;''..''.';,''...  ..,:cloddxxxxkkkkkkkkkkkkkxxxxxxxxxdddxxxxxxxdl;..     ..''',,,.. .         ..... .............,kWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
                                              ............''''',,;:cllllooddddxddddddxxxxxxxxxkkkkOkkkkkkkko'...:0WWMMMMWWWO:;clll:,''''..';;;,'..  .;:clodxxkkkkkkOOkkkkkkkkkkkkkkxxxxxxxxxxxxxxxxxxxo:.      .,;;::;''''...........................,kWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
             .............''.....',,;;;;;:::cccclllooooooooddddxxkO0000000000000OOOOOO00000000000000OOOOOOOx;...;OWMMMMMWWM0lclooc,.''...'',;;,.  .;loodxxkkOOOOOOOOOOOOOOOOkkkkkkkkkxxxxxxxxxxxkxxkkkxxo;.... ..,cllllcc::;;;,,,,,,'''''''''''''....,OWWWWWWWWWWNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
;;;::cccllllllloooooooodddxxdolooddxxxxxxxxkkkkkkkOOOOOOOOO0000000000000000000000000000000000000OOOOOOOOOOOx;...,kWMMMMMWWMKoclll:'''..'..'::'  .,codxkkOOO0000OOOOOOOOOOOOkkkkkkkkkkkkkxxxxxxxxxxxkkkkkkdc'......':lolc:::;;;,,,,,,,''''''''''......;OWNNNNNNNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
kkkkkkkkkkkkkkkkkOOOkOOOOOOOOOOOOOOOO00000000000000000000000000000000000000000000000000000000000000OOOkOOOOk:...,dNMMWWMWWWKdclll:;'.....,:;.  .:ldxkO00000000000OOOOOOOOOOOkkkkkkkkkkkkxxxxxxxxxxxxkkkkkkdc'......,clc:::::;;;;,,,,,'''''''''.......;0NNNNNNNNNNNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWWW
OO000000000000000000OOOOOOOOOOOOOOOOOOOOO0000000000000000000000000000000000000000000000000000000000OOOkOOOOOl...'oNMMWWWWMWXdcllc:;. .',::'. .,coxkO0000000000000OOOOOOOOOOkkkkkkkkkkkxxxxxxxxxxxxxxkkkkkkxoc,......;clc::::;;;;;,,,,''''''''''......:0NNNNNNNNNXXXXXNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWWWWWWWW
00OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00O0000000000000000000000000000000000000000000000000000000000000000OOOOOOl...'lXMWWMMMWWXdcllcl;..';::'. .,ldxOO00K00000000000OOOOOOOOOOkkkkkkkkkkkxxxxxxxxxxxxxxxxkkkkkxoc,.....':llc:::;;;;,,,,,,'''''''''......:KNNNNNXXXXXXXXXXNNNNNNNNNNNNNWWWWNWWWWWWWWWWWWWWWWWWWW
00000000OO000OOOOOOOOOOOOOO0OOOO000000000000000000000000000000000000000000000000000000000000000000000OOOOOOOo....lKWWMMMMWWXdllccl:..';:,. .'ldkO000000000000000OOOOOOOOOOOOkkkkkkkkkkkkxxxxxxxxxxxxxxxxkkkxdl:,.....;clcc::;;;;,,,,,,'''''''........cKNXNXXXXXXXXXXXXXXNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWWWW
000000000000000OOOOOO000000000000000000000000000000000000000000000OOO0000000000000000000000000000000OOOOOOOOd'...c0WWMWWWWMXxllcclc..,::. .'cdkO0KK00KKK00000000OOOOOOOOOOOOOOOOOOOOkkkkkkkxxxxxxxxxxxxxxkkxxdl:,'...,:cc::::;;;,,,,,,,''''''........lKNXXXXXXXXXXXXXXXXXNNNNNNNNNNNNNNNNNWWWWWWWWWWWWWWWWWW
0000000000000000000000000OOOOO00000OOOOOO00000000000000000000000000000OOOO00OOO00000000000000000000OOOOOOOkOd,...;0WWMWWWWMNxclc::c;.,c;...:okO0KKKKKKKK0K0000000OOOOOOOOOOOOOOOOOOOkkkkkkxxxxxxxxxxxxxxkkkkxxdl;,''',;clc::::;;;;,,,,'''''''........oKXXXXXXXXXXXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNWWWWWWWWWWWW
0000000OOOOOOOOOOOOOO000OOOOOO0000OOOOOOOOOOOOO00000000000OOOOOO0000000OO00000000000000000000000000OOOOOOOOOx;...,OWWWWMWWMNd:ccc::;',c:..;oxO0KKKKKKKKKK0000000OOOOOOOOOOOOOOOOOOOOkkxxddollcccccllodxxkkxkkxxoc;'',,;cccc::::::::;,',,'''''........oXXXXXXXXXXXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNWWW
OO000000OOOO0OOOOOOOOOOOOOOOOO0000OOOOOOO00OOOO0000000000000000000000000000000000000000000000000000000OOOOOOx;...,kWWWWWWWWNx;:cc:;;,;c:',cxk00KKKK0OOkkkkxxxxxxkkkOOOOOOOOOOOOOkkkxxdolc;,'''..''',:codxxkkkkxxo:,',;:ccc::::;;;::;,,'''''''........dXXXXXXXXXXXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
OOOOOOOOOOOO00OOOOOOOOOOOOOOOO000000000000000000000000000000000000000000000000000000000000000000000000OOOOkkkc...'dNWWWWWWWWx;:ll:;,,;;;,:oxO0KKK0kxdooolccccccodxxkkOOOOOOOOkkkxxxdol:,'.............'',;;;:::c:;;,,,;clc:::;;;;;,,,''''''''.... ...xXXXXXXXXXXXXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
000OOOOOOOO00000000000000OOOOO00000000000000OOO0000000000000000000000Okkkxxxxdddk00000000000000000000OOOOOOOkc....oNWWWWWWWNk,.;l:;;;;;;:ldk0000OxdoooooooooooodddxxkOOOOOOkkkxxdol:,'....'',,;;;;;;;;,,'''....''.;:,',:llc:::;;;;,,,,'''''...... ..'xXXXXXXXXXXXXXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
00000OOO0000000000000000000O0O0000000000000000O000000Okkxk0000OO0Okxxo;,:,.':llldO000000000000000000OOOOOOOkko....lXWWWWWWWWk'..cc;::;::coxO00OxdolccccccccccccclloddxkkOkkxol:;,'..',;::cloooooooooooollllc,..',.,;'.':lcc:::;;;;,,,,'''''......  .'kXXXXXXXXXXXXXXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
000000000O00000000000000000OOOOOkkkkkkxdooodollok000Oxoocck00Oxxkxdoooll:,''cdxxk0000000000000000000OOOOOOOkOo. ..cKWWWWWWWWk. .:l::cc:::cclcc:;;;;::::::::::;;;;;,,,',;,,''.....;cllccllloooodddddoooooolloo:....';...,ccc:::;;;;,,,,''''''.....  .,kXXXXXXXXXXXXXXXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
00000000OOOOOOkkxxkkxlcldxdoc;coc:llc:,',;;:cllok000xloo:,o00OkxOkooddxo;,;:ccloxO000000000000000000OOOOOOOOOd' ..:0WWWWWWWWk. .:dlclooc,.';cldxxxxxxxxxxxxxdddooddoocc:'...  .'colccccclllooooooooooooooolloc'.,..''..'cc::::;;;;,,,''''''......  .,OXXXXXXXXXXXXXXXXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
xdlc:::::;,:ol:;,:ol,....',,',:l::cc:,..'cclooodxO0Ol',l:.,xO0kxOkllooddooodoc:cdO000000000000000000OOOOOOOOOx,  .,OWWWWWWWWO'  :xdxOX0l,cxOOOkkkxxxkkkxxxddooooooddxko'.,::,..':lcc:::::ccccccc:clllllllllloc'..  .,..;cc::::;;;,,,,'''''......   .;0XXXXXXXXXXXXXXXXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
c:'.  .....'c:....,'..:lc:;,..,llcclc'..,loodoolokOkc..ll''ok00O0OxxxkkkkkkkkkkOO0000000000000000000OOOOOOOOOk;   'kWWWWWWWWO'  ;xkdx0Oc;dOkxddoodddxddolcccccllllooxxc,lkxdo:'',:c::;;;:clcc:;,,,;:::cclllloc','.  ','clcc:::;;;,,,,'''''......   .:0XXXXXXXXXXXKXXXXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
ll,.  ..'...;:....,'..lxlll,...:lccc:,..,lxO0kxdxkkkdookkxxOO000O0000000OOOOO0000000000000000000000000OOOOOOOk:   .xNWWWWWWW0,  ;kOdccoc:odoolllollllolcclc:cclolllodo:lkkxdol;..;cc:;;:cllcc:;:;:cc:;;:clloo:,cl;. .,codxdl:;:;;,,,,,'''''''...   .c0XXXXXXXXXXKKKXXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
cc,.  ... ..,c:,;:c:'.,;,,,,',;ldddxxdddxkO000000000000000000000000000000000000000000000000000000000000OOOOOOk:   .oNWWWWWWW0,  ;k0Od,'::codddddoolloxkdoolllcloooodxllk0kxddol,..;cc::;:cc:::::::cccccccclo:';dxd:..:odddxo:::;;,,,,,,'''''''..   .lKXXXXXXXXXXKKKKXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
:,.........,cooooodddoodxkkOkOO000000000000000000000000000000000000000000000000000000000000000000000000OOOOkkkc.   lXNWWWWNW0;  :O00kc.'ccdOOOkkxxddxxxxxdooooooooodolx0Okxxddoc,..,::::::::ccccccllllllllc,.,oxxxo::odo:;loc:;;;;;;,,,'''''''..   .oKXXXXXXXXKKKKKKXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
olllloddxkkkOO000000000O0000000000KK00000000000000K00K0KK0000000000000000000000OOO00000000000000000000OOOOOkxkl.   :KWNWWWNWK: .oO00Od;:ocd000OOOOOOkkkkxxxxddddoool:oO0Okxxdddol,...',;:cclllolllllcc::;,',:dxxkkdccddo;'cl::::;;;;,,,'','''...   .oKXXXXXXXKKKKKKKXXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
OOOOOOOOOO0OO00K0000K0000000000000KKKK00000000KKKKK00K000K00K000000OxdkOOkolxOkkkkO000000000000000000OOOOOOkxko.   ;KWNNWWNWK: .lxok00xxkc:k000000OOOkkkkkkkxxxdol:,ck0OOkxxdddool:;,,'''''',,,,,,,,,,;;:codxxxkkxdcldxd;,llccc::;;;,,,,,,,'''..   .dXXXXXXKKKKKKKKKKXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
OO00000000000000000KKK00000000000KKKKKKKK00000OOOOOOO0000OOO000000Odc:okkdc';dxxxxk000000000000000000OOOOOOkdxd.   ,0WWWWWNWK: .dxlxK0OO0kc;lxO000OOOkkkkkxdolc:::clxO0OOkxxdddooollcccc:::;;;;;::cllooddxdxxxkkkxdcldxxc;lollcc:::;;;,,,,''''..   .xXXXXKKKKKKKKKKKKXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
000000000000000KKKKKKKKKKKKK00000OkddxkOOkkkxxdddxkxkO00kdxxxO000OOxclxkd::::looold000000000000000000OOOOOOOxxd'   .o00KXXNNXc .dxlxKKOO0K0dlclllllllccccccc:ccldxxkOOOOOkxxddddoooollllcllllllllloooodddxxxxkkkxxdc:lodololllcc:::;;,,,,''''...   'kXXXXKKKKKKKKKKKKKXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
0000000K000000000000000000000OkOko,...lkxdxkkxxkkkkkkOOOxlooldkOOOOxc:ldl;cdoc;:lldO000000000000000000OOOOOOkkx,    ...,cxKXKc .lxokKKOk0K0K000OkkxddddddddxxxxxkkkOOO0OOkxxdddddoooooolllllloooooodddddxxxxxkkkxxdl:coddolcccc::;;,,,,''''.....   'kXKKKKKKKKKKKKKKKKXXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNN
OOOOOOOOkdlldxkOOOO0OOOOkkOOkxdxdo:;;,;dxdxxkxxxxxkkkOOkl;,,.';lkOOkocldxdxxdxxkOOO0000000000000000000OOOOOOOOk;    'cdOKNNNO, .:dkO0OkxO00KKKK00000OOOOOOOOOOOOOOOOO00OOkkxxdddddooooollllloooodddddddxxxxxxxkxxddoccoddolcccc:;;,,,;:cccc;,......,OXKKKKKKKKKKKKKKKKKXXXXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNN
;;;,,:odd:..:odxxdxkxxxddxxkxdoxdoxxdl:ldxxxxxxdddddxxxdlc:clloxOOOOO000000000000000000000000000000000OOOOOOkkk:   .oXNNNNNNO' ;lok00OxxO000KKKKK0000000OO00OOOOOOO00000Okkxxddddddooollllloooodddddddxxxxxxxxxxxdooccoooolc::::;,,,,,;cdkOkdooddood0KKKKKKKKKKKKKKKKKKKXXXXXXXXXXXXXXXXXNXXXXXXNNNNNNNNNNNN
.....:lllc'.:odxxxxkkkkoldxxkxdxdodxddoddddddddxxxxkO000O000000000O000000K000000000000000000000000000000OOOOkxkc.   cXNNNWNNKc,lookO0OkxO000KKKKKKKKK000000OOOOOOO000OOOkkxddooloodddooollloooodddddddxxxxxxxxxxxdooooooool::::;;;;,;cdkkkOOOOOOOOOO000Ok0KKKKKKKKKKKKKKKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
... .;dddc. .,,cxkkOO00xloxkOOOkxxkkkkOOOOOOO00OOO0000000000000000000000KK000000000000000000000000000000OOOOkxkl.   :XWNNNNNKxx0kxkOOOkkkO00KKKKKKKKK00000OkkkkkOOOkdloxkxdool:,',:loooooooooodddddddddxxxxxxxxxdddddxxdddl:::;;;;;:dOOOOOOOOOOOOOOOOOkxxOKKKK0KKKKKKKKKKKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
..   'dkxc.  ..;dxxO000OkkOOO00000000000000000000000000000000000000000000000OOO000000KK0000000000000000OOOOOOkOo.   .:lc::;,',xXXKK0O00OOO000KKKKKKK0000OOkkxkkOOOkdlodkkxdlllcc:::clooooooooddddddddddddxxxxxxxdddxxxxxxdc::;;;;;cxO0OOOOOOOOOOOOOOkxdxkk0K0KK00OOOOO00000KKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
,..',:xOkxdooxxkO0000000000000000000000000000000000000000K00KK0000OOO00000kdc,:k00000KKK000000000000000O00OOOOOd.            .dXXXXK00KKOOO000K0000000OOOkkxkkOO0OOOkOOkkxdolllllllloooooooddddddddddddddddxxxxdddddxkxxo;'''....,dOOOOOOOOOOO000OkxxxxkkO0000OkxxxxxxxxxxkkkkOO0KKKKKXKKKKKXXXXXXXXXXXXXXXX
kkOOOOO0OOOOOOOO00000000000000000000000000000000000000000000OOkxxkdldO000Odc:. .;;,lkK00000000000000000000OOOOOx'    .,,.    .oXXXXKK00K0kOO000000000OOOOkkkkO0000000OOkkxdddddooooooooooooooddddddddddddddddddddolclol;.        .d0OOOOOOkkOO00OkxdxkkkkkOO0kolooddddxxxxxxxxxdxkOO00KKKKKKKKKKKXXXXXXXXXXX
000000000000000000000000000000000000000000000OOOOOOOOkxxkkxoccooool:lxxxdc.    .''.'xK000000000000000000OOOO0OOk,    .::;.   .oKXXXKK00K0kkO0000000000OOOOkkOO00OO00OOOOkkkxxxxxddddoooooooooooooodddddddddddddddo;...    ..... .;x0OOOOkkkkkOOOkxxxkkkkkkkkkd:;:::::::cccclccccldxkkO0000KKKKKKKKKKKXXXXXXX
00000000000000000000000000000OkkkkkkxddxkOOkOo;cxOOkko,,;:,';odddxxooooc:.  .',:ddclk0K0000000000000000000OO0OOk;    .''.    .oXXXXXXK00OkkO0O00000O0000OOkkkOO0000000OOOkkkkkxxxdddddddooooollllloodddooodddddddo;.      .',;'.;dOkxxdxxxxkkkkkkxkkkkkkxkkxxo:;;;;;;,,,;;;;:::ccodxxkOOO00000KKKKKKKKKKKKKX
000000000000000000Okxdolc:;,''..,:lddloxkOOOkd,'looddc..'....,cdkkkdoooolc:loxkkOOO00KK0000000000000000000000OOk:            .lKXXXXXXKK0OkkOO000OOO000OOkkkkO0000OOOkkkxxxddddoooooooooooooollccccloddooooddddddol,.....'''''',lddddkOkxddxkkkkxkkkkkkkxxkkxolc:;;,,,;;;;;;;:::coddxxkkOOO00000KKKKKKKKKKKK
000000OOkxxdol:::c:'.          ..;cooc::ldkkxc....,:;;,...';cloxOOOkkO00000K000000000KKK000000000000000OOkkkoldl.            .lKXXXXXXXKkookOOOOOOOOOOOOkxxxkOOkxxdddxxddxxdddddolcccc:::::::::ccccloddoooooddddood:..'''''',,';codkxkO00Oxxxkkkxkkkkkkxxxkkdc::cccccccccccccccclodddxxkkOOOO00000KKKKKKKKKK
xoc::cl;'',,..  .,:'',,,,,,,.  .';:oo:,;:cloc'.':oxxdxxxxxkOO000000OO000000K0KK00000000000000OkkxdkOxxxxdlcc'...      ....   .lKXXXXXXX0d;:xOOOOOOOOOOOkxddddolccodxO00O0K0OOO00Oxddolc:;'..';loolodddooooooooooodxo'..........:xkkkkkkkkOOkkkkxxxxxkkkxxxxxd:;;::cllolllllcllcclodddxxxkkOOOO000000KKKKKKKK
:'.  .,'..''..  .':..:;,'...   .:lldxollooodddxkOOOOOO0000000000000000000KKKKKKK000OOkxxddolc:;'..,:,','..           .clll;. .lKXXXXXXXKd;;okOOOOOOOOOOkkdddoc,';oxOOOO00KK0O000Oxolccc;;,,:loddddddddooooooooooddxxc. ..'.....ckOOkOOkxxkxkOOkxdxxkkxxxdl:cc;,;;;::clllllccccclodddddxxxkkkOOO00000000KKKKK
;.    .....      .;,.'......',:lxkkkOOO00000000OOO000000000000000000000000OOkkxddolc:;,,'.....                       .cdllc. .lKXXXXXXX0d::lkOOOOOOOOOOOkxxxxkkddoddddddddooodddol::cccclloddddddddddollllloooooodxxo,..''..'''lOOO0KK0OkxxxkkkxxkOkxdodo;''',,,;;:::ccccccccccoodddddxxxxkkOOOO000000000KKK
;.  .,,'..  ..'',;lolooodxxkOOOOOOOOO000000000000000000000000000OOOOkkxddollc:;,'....                         ...    .coll:'.,okO00OOOxoclodxkkOkkkkOOOOOkkkOOOO0OOkkkkxxddodddddddoooooodddddddddddollllllloollodxxd:,,,,,;:::lkOO0K00000Okxxxddxkkkkkkl.  .:c:;::::::::ccccccodddddxxxxxkkkOOOO000000000KK
c,';cl::::cloxxkkkOO0000000000OOO00000000000000000000000OOOOOkkkxddol:;,'....                               .cll:'',,;:::;;;;;:::::::;,,,,::cdkkkkkkkOOOOOOOOO00000000OOkkxxxxxxdddddddddddddddddddoolllllllllllodxxd:''''',cddoxkO00000000Okxxdoddoddddc. ..;cccc::::ccllllccclodddddxxxxxkkOOOO000000000KK
kkkkOkOOOOOOOOOOOOO000000000000000O00000000000OO0OOOOOOOkxdolc:;,...                                     ...;c::;;;;;;;;;;;;,,,,,,,,,,,,,,,,;cdkkkkkkkOOOOOO0000000000OOOkkkxxxxxxxddddddddddddoooooollllllllcclodxxd;''''',cllodddxO00000OOkxxxkOkkkkxxoc:llllcccc::::::cccc:ccooddddxxxxxkkOOOO000000000KK
0000000000OO000000000000000000000OOOOOOOOOOOOOkkxxolc:;,'..                                          ..';;;;;;;;;;;,,;;,,,,,,,,,,,,,,,,,,,,;;;cdxkkkkkkOOOOOO000000000OOOkkkkxxxxxxxxddddddddddooooolllccccccccldddxo;.'........',coxkkO000OkkxxkOOOOOOkdoodddddool::::;,,,,'',clooddddxxxxkkkOOOO000000000K
000000000000000000000000Okkxxxxxxdoodxxxdoc:;,'...                                               ...',;;;;;;;,;;;,,,,,,,,,,,,,,,,,,,,,,,,,,,;;;cdxkkkOOOOOOOOO00000000OOOkkkkkkxxxxxxxddddddddooollllllcccc:ccloddddl,........'''..',':lcd0Oxdxxkkkkkkkxc,,::::cccc:ccc:;:;'..;llooodddxxxxxkkOOOOOO0000000K
00000000000000OOkddolldkxl:;:cc:;,'.....                                                 ..',;:ldxxo:;;;;;;;;;;;,,,,,,,,,,,,,,,,,,,,,,,,''',,,;;:lxkkkOOOOkkOOO000000000OOOkkkkkxxxxxxxxxddddooolllllcccc:::ccloddddc'........''''''.....coc:;:ldddkkxxdc,,,,,,,;;;;:cc;;:;...'cloooodddxxxxkkkOOOOOO0000000
000000000OOxo:;,......,::,..                                                    ..',;::coxkO000Okoc;;;;;;;;,;;;;,,,,,,,,,,,,,,,,,,,,,,'''''',,;,,,:dxkkkkkkkkOO0000000000OOOkkkxxxxxxxxxddddoollllccccc::;::cloooodo;.........''''''''.....cc..cdc,;cloddddl:;::;::clddl;;;'..;cloooddodddxxkkkOOOOO00000000
0000OOOOOkxl,.                                                         ..';:ldxk0KXXKKkdk00000ko:;;;;;;;;;,,,;;,,,,,,,,,,,,,,,'''''''''''''',,,,,'',cdxxxkkkkkOOO00000OOOOOkkkxxxxxddddddooollllcccc:;;;;;:cllooooo:'........'''''''.''''.'llloll:;'';lxkdl;:oolc:;,;looccccccccllllodddxxkxdddkOkkkkkOO0000
kxdol:;,'...                                                   ..',:lodO0XNNNNNNNNNNX0l:d00Oxoc;;;;;;,;;;,,,,,;,,'',,,,,,,,,,,''''''''''''''',,,''.'';:codxkxxkkkOOOOOOOOOkkkxxxxxddddooollllcc::::;,,,;::ccloooooc'.........''''''.''''''.';,,cool:;,;;;:cldddxxxdl;,:::;;,''.,cc;;:cokkxdoc:clc:;::ccloddx
..                                                        .,ldxkOOO0K0O0KXXNNNNNNNNNXOolkKOo:;;;,,,,,,;;;,,,,;,,''',,,,,,,,,,'''''''''''''''',,,'''''',,,:odddxxxxkkkOOOOkkxxxxxxxddooollccc:;;;;,,',,;::ccllllllc,.........''''''..'''''''''.',,''',,''...';clol;:lc;;,,;;,'';oOkdloodkkxxxxdoc;,',,,,,,;;;
                                               ....',;:;''lOXXNXXK0OOOOOO00XNNNNNNNNNXXKKkl:;;;;,,,,,,;;;,,,,;,,''',,,,,,,,,,'''''''''''''''',,,'''''',,,,:oddoodddxxkkkkkxxxxxdddoollcc::;;,''''',,,;:cclllllll:'..........''''''..'''''''',,,,,,,,,,,,,''..,;:cclxkxd:'',,,;:ldxO00000Oxoc;,'.,;;,,;;;;;;;
                                      ..';:loxkOOkkkdc;;codxkO0KXNXXKKKXXXXNNNNNNNNNNXX0dc;;;;;,,,;,,,,;;,,,,;,'''',,,,,,,,,''''''''''''''''',,,'''''',,,,,cxxdoolllloddddddddooollc:;,,''.....'',;;;:ccclllllc;'..........''''.....''''''''',,,,,,,,,,,,,,,,,''';clcclccc;,,''',,;clooc,....,'.:o:.......',
                                     .cOKXNXXXXXKOxolloddddddxxkO0KXXXXNNNNNNNNNNNNXNXOl:;;;;;;,,,,,,,,;,,,,,,,'''',,,,,,,,,'''''''''''''''''',,'''''',,,,,;oxxxddolc:;;:::;;;;;,,''........',,;;;;::cclllllc:,...........''''......'''''''',,,,,,,,,,,,,,,,,,,,'..,:ldxkkdoollool;.'',,''..';'.............
                      .......',;;;'.  'cdO000kdooodxOK0kxdddddxxxxxkOKKXXXXXXXXXXXXXKxc;;;;;;;,,,,,,,,,;,,,',,,'''',,,,,,,,,'''',,'''''''''''',,'''.'',,,,,,:dkxxxxddolc::;;,''''''''',,,,,;;;::::cccllllllc;'...........''''......'''''''',,,,,,,,,,,,,,,,,,''''',,,,,,;:cdxdxkdc'..';;:;,'.          ':c::
            ....',,;;;ldxddocoxOOkl',okxxddxxddxO00O0KKK0OkkxddoooodxkkO0KKXXXXKKKKko:;;;;;,;;,,,,,,,,,;;,'',,'''''',,,,,,,,''''',,''''''''''',,'''.'',,,,,,,lkkxxxxxxddoollcc:::;;;;;::::::cccclllllllllc;'...........'''''......'''''''',,,,,,,,,,,,,,,,,,',,,;;;;;,,,'..:xdl;,...cdxkkdoddoc,....,:oxkkkk
    .';:lodxxddddollloxOKKK0OO0KXkcckKXXXXXXKK0000000KXKKKK0kdllooooodddxxkOKKXXXKkl;;;;;;;,,,,,',,,,,,,;,'',,'''''',,,,,,,,''''',,''''''''''',,,''''',,,,,,,;okkkxxxxxdddoollccc:::ccclllllllooooooooc:,'...........'''''......''''''''',,,,,,,,,,,,,,,,,,,,;;;;;;,,,,,,,'';,,,;,..;cccodxkxdolll:ldkOOOOOk
cclooxOKXXXK0xdoooodxddxkO0OOxooollxKKKKXXKKKK0K0000KKXXK0Oxddxdddxxxxxoodddx0KK0xc;;;;;;;;,,,,,',,,,,,,;,'',,'''''',,,,,,,'''''',,,'''''''''',,,''''',,,,,,,,;okkkxxxxdddollcccccccclllooooodddddooc:,'....'..'''''''''''.....'''''''''',,,,,,,,,,,,,''',,;;,,,;,,,,,,,,,;;;;;,,,,''.';cllcloxxdddolloodddo
XKOOOkxdxkO00Okxxxxxxxxdxxxo::cdOKOxkKXKXXKKKK0000OOOOOkx:,;ldddddddddxl,'',lkOko:;;;;;;;;;;,,,,,,,,,',,,,'','''''',,,,,,,,'''''',,,'''''''''',,,'''',,,,,;,,,,;ldkkxxxddoollcccclllloooddddddddolc;'.....'''''''''''''''.....'''''''''',,,,,,,,,,,,,''',,,,,,,;,,,,,,,,,,;;,,;,,;;;;;;;,,;,,,;c:,,,..cooodd
KXXKK00Okxdoooddoc:::;,,',:odk0KKKK0kxOKKK00OOkkxxxddddc,';loool::c:;cl,   .ckkdc;;;;;;;,,;;,,,,',,,,',,,,'','''''',,,,,,,,'''''',,,''''''''',,,,''.'',,,,,,,,,,,,coxxxxddoolllooooooddddxxxdol:;''..'''''''''''''''''''.....'''''''''''',,,,,,,,,,,''',,,,,,,,,,,,,,,,,,;,,,,,;;;;;;;;;;;;;;,,,,,,,...'':xo
kKXXXXXXXNNX0Okxdl:'',,;:cdkkkkOOO00Oxollodxdddddddddc,',;;,'..  .,,;cl;    ;ddl;,;;;;,,,,,,,,'''',,,'',,,'','''''',,,,,,,,'''''',,,''''''''',,,,,'.''',,,,,,,,,,,'';clodddddoooooooddddolc:;,'....''''''''''''''''''''.....'''''''''''',,,,,,,,,,,''',,,,,,,,,,,,,',,,,,,,,,,;;;;;;;;;;;,,,,,,,,,''. .,',c:
dx0KXXXXXXXXXXKKK0kxdddddddddxxxxxxddddlc:;:looll:;,.  ',         ,,'ll,    .::;,,,,;,,,,,,,,,'''',,,'',,,'','''''''',,,,,,''.''',,,''''''''',,,,,''.''',,,,,,,,,,,,'',,;;:::::::::::;;,,''..''''''''''''''''''''''''.....'''''''''''',,,,,,,,,,,,,'',,,,,,,,,,,,,,,,,,,;,,,,,;;;;,,,,,,,,,,,,,,''''..,;,...
coxO0KXXXXXKKKK000Okxddddddddddddddddddolc,..'..       ':.        ,,.,l;.  .';;;,,,,,,,,,,,,,,''''',,''',,'',''''''''',,,,''''''',,,'''''''''',,,,''.''',,,,;;;,,,,,,,'''''''''''''''''''''''''''''''''''''''',,,'''.....'''''..'''''',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;;;,,,,,,,,,,,,,,,,,,,'',,,,,,,,''
,:ldkkO0KKKKKKKKK000Okxxdddddddoolc::;,,'...;:.        .:.        ,;  ';..;:;;;;,,,,,,,,,,,,,,''''',,,'',,','''''''''',,,,''.'''',,,''''''''',,,,,''''''',,,;;;;,,,,,,''''''''''''''''''''''''''''''''''''''',,,'''.....'''''..'''''',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,:codxkOKXXXXXXKKK0Okdoollc:;;,'''..'''',,,:c.        .:.        ';.  .;,::;;;;,,,,,,,,,,,,,,,''''','''',''''.''''''',,,,''.''',,,,''''''''',,,,,,'''''',,,,;;;;,,,,,,,'''''''''''''''''''''''''''''''''''',,''''....''''''..'''''',,,,,,,,,,,,,,,,,,,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'',,,,,,,,,,
..,:clddxk0KKK00Okdolc;;,,'''''',,;;;;::::;,,;.         ..        .;.  .,;;;;;;;,,,,,,,',,,'''''''''''''''''''.''''''',,,,'..''',,,,''''''''',,,,,,''''''',,,;;;,;,,,,,,''''''''''''''''',,,,,,,,,,'''''''',,,''.....''''''...'''''',,,,,,,,,,,,,,,,,,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'''',,,,,,,,,,,,
..,;:clodddddolc:;;,,,,,,,,,,,'',;:::;;,'''',c;         ,,        .;,,;,;;;;;;;;;,,,,,,''''''''''''''''''''''..''''''',,,''..''',,,,'''''''''',,,,,,'''''',,,,;,;;,,,,,,,''''''''',,,,,,,,,,,,,,,,''''''',,,,''...''''','''..','''',,,,,,,,,,,,,,,,,,''',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,''',,,,,,,,,,,,,,,,
 .'::::cc:;;;;;:::;,,,,,,,,''''''''''',,,,;;;l:.        ,;       .';clc;;;;;;;;;;;,,,,,,'''''''''''''''''''''..''''''',,,''..''',,,,'''''''''',,,,,,''''''',,,,;;;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,''''''''',,,,''....'''',,''..'','''',,,,,,,,,,,,,,,,,''',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  .,;:::;;,;:ccccc;,',,'',,''.......',;;,,;:;cc.        ';.....',cll:;;;;;;;;;;;;;,,,,,,,''''''.''''...''''''..''''''',,,''..''',,,,'''''''''',,,,,,,''''''',,,;;;,,,,,,,,,,,,,,,,,,,,,,,,,,,,'''''''',,,,,''...''''',,''..'',,''',,,,,,,,,,,,,,,,,,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
...';;;::;,,:cccc:;,''''''.......'''',,,'',,,:l.    ....,;;,;;,;loc;;;;;;;;;;;;;;,,,,,,,,,'''''...''....'''''..''''''',,,'...'',,,,,''''''''''',,,,,,''''''',,,,;,,,,,,,,'',,,,,,,,,,,,,,,,,''''''''',,,,,''...''''',,,''..',,,''',,,,,,,,,,,,,,,,,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
''.,::;:::,',;:c:,,,'''......'''''''''''''''';:,'',;;;;;::::;;clc:;;;;;;;;;;;;,;,,,,,,,'''''''............'''..'''''',,,''...'',,,,,''''''''''',,,,,,,''''''',,,,,,,,,,,,,,,,,,,,,,,,,,,,,''''''''',,,,,'''...'',,,,,,''..'',,,''',,,,,,,,,,,,,,,,,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;;;
,',,;;::::,''';ll;;,.......''''''''''''',,;;;:::::::::::::;,,clc;;;;;;;;;;;;,,,,,,,,,,,,''''''''...........''..'''''',,,''..''',,,,,''''''''''',,,,,,,,''''''',,,,,,,,,,,,,,,,,,,,,,,,,,''''''''',,,,,,'''..''',,,,,,'''.'',,,,''',,,,,,,,,,,,,,,,,'',,,,,,,,,,,,,,,,,,''',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,;:;;;;::;,,,;:odl;'....''''''''',,,;;::::::ccccc:::::;,...':l:;;;;;;;;,,,,,,,,,,,,,,,,'''''''''...............''''''',,'...''',,,,,''''''''''',,,,,,,,,'''''',,,,,,,,,,,,,,,,,,,,,,,,''''''''',,,,,,,''...'',,,,,,,,''.''',,,,''',,,,,,,,,,,,,,,,,',,,,,,,,,,,,,,,,,'''',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
;;::::::::;,';::;'....'''',,,;;;:::::::cccccccccc::;'....,:c:;;;;;;;,;;,,,,,,,,,,,,,,''''''''''''..............''''''',''...''',,,,,''''''''''',,,,,,,,,'''''',,,,,,,,,,,,,,,,,,,,,,,''''''''',,,,,,,''...'',,,,,,,,,'..'',,,,,''',,,,,,,,,'',,,,,,,,,,,,,,',,,,,,,,'''',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
::cccc::::,'.......',,;;;:::::::::ccccccccccc:;,'....';:cll:;;,;;;;;,;,,,,,,,,,,,,,,'''''''''''''...............'''''',''...''',,,,,''''''''''',,,,,,,,,,''''',,,,,,,,,,,,,,,,,,,,,''''''''',,,,,,,,''...'',,,,,,,,,,'..',,,,,,''',,,,,,,,,''',,,,,,,,,,,,,'',,,,,,'''',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
clllccccc:'...',;::::::cccccccccccccccccc:;'....',;:ccccccc;,;;;;;,,,,,,,,,,,,,,,,,,''''''''''''................''''''''....'',,,,,,'''''''''',,,,,,,,,,,'''''',,,,,,,',,,,,,,,,,,''''''''',,,,,,,,''...''',,,,,,,,,''.'',,,,,,''',,,,,,,,,''',,,,,,,,,',,''',,,,,,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
llollllc:'.';::cccccccccccccccccccccc;,'...',;:ccccccclc;,,;;;,;,,,,,,,,,,,,,,,,,,,'''''''''''...................'''''''...''',,,,,,'''''''''',,,,,,,,,,,''''''',,,,,,',,,,,,,,,''''''''',,,,,,,,,''...''',,,,,,,,,,''.'',,,,,,''',,,,,,,,,'''',,,,,,,,''''''',',,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
oooooc;'';:ccccccccccccccccccclcc;,'.'',;::ccccclcccccc:;;;;,;;,,,,,,,,,,,,,,,,,''''''''''''''....................''''''...''',,,,,,'''''''''',,,,,,,,,,,,'''''',,,,,,,,,,,,,,,''''''''',,,,,,,,,,''..'''',,,,,,,,,,''.'',,,,,,,'',,,,,,,,,,''',,,,,,,,'''''''''',,,,,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
ool:,',:cllllllclllllclcllllc:,'''',;::cccccllllcc;;:c;;;;;;,,,,,,,,,,,,,,,,,,,,''''''''''''.......................'''''...''',,,,,,''''''''',,,,,,,,,,,,,'''''',,,,,,,,,,,,,''''..''''',,,,,,,,,'''..'''',,,,,,,,,,''..',,,,,,,'',,,,,,,,,,'''',,,,,,,'''''''''',,,,',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
;,',;clloollllllllllllcc:;,,''',::ccccccllcc:;,'...,::;;;;;,,,,,,,,,,,,,,,,,,,,''''''''''''.................. ......''''...''',,,,,,'''''''',,,,,,,,,,,,,,''''''',,,,,,,,,,,'''''.''''',,,,,,,,,,''...'''',,,,,,,,,,''..',,,,,,,''',,,,,,,,,''''',,,,,,'''''''''',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,;colcc:coooloollc:;,''''',;:cccclllcc:;,'......'',;;,;,;;,,,,,,,,,,,,,,,,,,,''''''''''''....................  ......'''...''',,,,,,'''''''',,,,,,,,,,,,,,'''''''',,,,,,,,,''''''''''',,,,,,,,,,'''...'''',,,,,,,,,,''..',,,,,,,,''',,,,,,'''''''''''''''''''''',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
;:cccldl:colc:,,,'',,;:ccccccllc:;,'.......  ....,;,,;;,,,,,,,,,,,,,,,,,,'''''''''''''...................... .,'.....'''..'''',,,,,,,''''''',,,,,,,,,,,,,,,''''''',,,,,,,,'''''.'''''',,,,,,,,,,'''.'.'''',,,,,,,,,,''..',,,,,,,,''''',,,''''''''''''''''..'''',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
lc:;;cdo:',,,,,:cclllllllcc:;,'..     ... .... .,;,;,,,,,,,,,,,,,,,,,,,,'''''''''''''......................  .,:. ....''..'''',,,,,,,''''''''',,,,,,,,,,,,,''''''',,,,,,'''''''.''''',,,,,,,,,,''''...'''',,,,,,,,,,''..'',,,,,,'''''''''''''''''''''...''..''',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
oooc'.'...;cccccloollc:;'......    ...  ...... .,;,,,,,,,,,,,,,,,,,,,'''''''''''''''.....................      ,. ....'...'''',,,,,,'''''''''''',,,,,,,,,,,'''''''',,,'''''''''''''',,,,,,,,,,,''''...'''',,,,,,,,,,''...',,,,,,'''''''''''''''''''''........'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
c:;,'',',:ccllllc;,''''........  ...'..  .....',,,,,,,,,,,,,,,,,,''''''''''''''''''...................         .'.''......'''',,,,,,,,,'''''''',,,,,,,,,,,,'''''''',,,''''''.'''''',,,,,,,,,,,,''''..''''',,,,,,,,,,'''..'',,,,,'''''''''''''''''''''.........'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,;:;;clcc:::;''......,,'........  .. ...   .,;,,,,,,,,,,,,,,,,,'''''''''''''''''....................       ..',;::cl:,'...'''',,,,,,,,,'''''''',,,,,,,,,,,,'''''''',,,'''''..''''',,,,,,,,,,,,,'''...'''''',,,,,,,,,,''...'',,,,'''''''''''''''....'...........',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
ll::clol;................  .. .... ........,,,,,,,,,,,,,,,,'''''''''''''''''''''..................   ...',;:clllllloo:'...''''''',,,,,''''''',,,,,,,,,,,,,,,''''''',,,''''''''''',,,,,,,,,,,,,'''....'''''',,,,,,,,,,''....'''''''''''''''''''..................',,,,,,,,,,,,,,,,,,,',,,,,,,,,,,,,,,,,,,,,,,
:::lodoc'......... ........ ......   ...,,,,,,,,,,,,,,,,,,,''''''''''''''''''''''..................';:cclllllllooooooc,...'''''''',,,''''''',,,,,,,,,,,,,,,,''''.''','''''''''''',,,,,,,,,,,,,'''....'''''',,,,,,,,,,'''....'''''''''''''''......................'','''',,,,,,,,,,''',,,,,,,,,,,,,,,,,,,,,,,
:loddooc,.........   ...''.  ... ... .';;;,,,,,,,,,,,,,,,,,'''''''''''''''''''''...............';clllllllllllllloollol;...''''','',,,''''''',,,,,,,,,,,,,,,,''''..'''''''''''''',,,,,,,,,,,,,,'''....'''''',,,,,,,,,,,''.....''''''''''''''.......................''''''''',''''''''',,,,,,,,,,,,,,,,,,,,,,,
looooool;'..........  .....'. ..   ..,;,,,,'''',,,,,,,,,,,''''''''''''''''''''''..............,clllllllllllllllllllloo:'..'''',,',,,,''''''',,,,''''',,,,,,,''''..''','''''''''',,,,,,,,,,,,,,'''....'''''',,,,,,,,,,,'''.....'''''''''''..........................'''''''''''''''''',,,,'',,,,,,,,,,,,,,,,,
lolooool:,'..........  ... ...  .. .'c:'','''''''''''''''''''''''''''''''''''................;llllllllllllllllllllllllc,..''''',''''''''''''''''''''''',,,,,'''...'',,'''''''''',,,,,,,,,,,,,,'''....''''''',,,,,,,,,,,''......''''''''.................................''''''''''''''''''',,,,,,,,,,,,,,,,,
loooooool;,'....... ..   ...',.  ..  .';:,,''''''''''''''''''''''''''''''...................,clllllllllllllllllllllllll:'.'''''''''''''''''''''''''''''',,,,''''...'''''''''''',,,,,,,,,,,,,,''''..'''''''''',,,,,,,,,,'''......'''''''...................................'''''...'''''''''',,,,,,,,,,,,,,,,
lloooooooc;'....... ....  .......  ....,,,,'''''''''..........'..''........................'cllllllllllllllllccccllllllc,..'''''''''''''''''''''''''''''',,,''''...'''''''''''',,,,,,,,',,,,,''''.''''''''''',,,,,,,,,,''''.......'''''....................................''''....''''''''''''''',,,,,,,,,,
llooooooooc;'............  ....'..  ..'''''','''''''''.....................................;ccccccccccccccccccccccccclll:'..''''''''''''''''''''''''''''''''''''...'''''''''''',,,,,,''',,,,,'''''''..'''''''',,,,,,,,,''''........''''......................................'.....'''''''''''''''',,,,,,,,,
lllooooooooc;'........ ..   ...  ...,,,,,,,,,,,,,,,''''...................................':ccccccccccccccccccccccccccllc;..'''''''''''''''''''''''''''''''''''....''''''''''''',''''''',,,,,'''''''..''''''''',,,,,,,,'''''.......''''............................................''''''''''''''''',,,,,,,,
ooooooooooooc;'... ...     ........',,,,,,,,,,,,,,''''''''...............................;:cccccccccccccc::::::::::::::::,..'''''''''''''''''''''''''''''''''''.....'''''''''''''''''''',,,,,''''''...''''''''',,,,,,,,''''''......................................................''''''''''''''''',,,,,,,,
kooooooooooooc;''.............    .',,,,,,,,,,,,,,,'''''''.............................';:c::cc::::::::::;;;;;,,,,,''.......''''''''''''''''''''''''''''''''''......'''''''''''''''''''',,,,'''''''...''''''''',,,,,,,,,'''''.......................................................'''...'''''''''',,,,,,,,
KOdoooodooddool;'.......          .,,,,,,,,,,,,,,,''''''''.............................,;;;;;;;;;;;;;,,,,,,''''......     ....''''''''''''''''''''''''''''''''......''''''''''''''''''',,,,''''''''...''''''''',,,,,,,,,''''''.......................................................'.....''''''''',,,,,,,,
NX0xooooddddoool;..              .'',,,,,,,,,,,''''''''''''.................      .....'',,,,,,''''''''''........          .....''''''''''''''''''''''''''''''......'''''''''''''''''''',,,''''''''...''''''''',,,,,,,,,''''''............................................................''''''''''''''',,,
NNXKkdoooddddddol;.        ...',;clc;,,,,,,,,,,,,''''''''''..................    ...........................                ......'''''''''''''''''''''''''''.......''''''''''''''''''',,,,''''''''...''''''''',,,,,,,,'''''''.............................................................'''''''''''''''''
XNNXKOdooooddoooolc,'..'';:cclooolc;,,,,,,,,,,,,''''''''''''''''.........................................                    .....'''''''''''''''''''''''''''.......''''''''''''''''''',,,,''''''''''''''''''''',,,,'''''''''...............................................................''''''''''''''''
NNNXNX0xoooooooddooollloooddddddo:,,,,,,,,,,,,''''''''''''''''''.......................................                       ....''''''''''''''''''''''''''........'''''''''''.''''''',,,'''''''''''''''''''''''''''''''''''...............................................................''''''''''''''''
XNNXXXX0kdooooodddddddddddddddddoc;,,,,,,,,''''''',,,'''''''''''................................ ......                        .....''''''''''''....................'''''''''.....''''',,,''''''''''''''''''''''''''''''''''.................................................................'''''...'''''''
XXXXXXXXKkdododddddddddddddddooodoc;,,,,,,'',,,,,,,''''''''''''.....................................    ....                   .......''''''''......................''''''''......''''',,,'''''''''''''''''''''''''''''''''...........................................................................''''''
XXXXXXXXXX0xoooddddddddddddddooool:;,,,,,,,,,,,,,,,'''''''''''''.........................................'''.....               ......'''............................''''''.......'''',,,''''''''''''''''''''''''''''''''''...........................................................................''''''
XXXXXXXXXXXKkdooodddddddddddddodo:,,,,,,,,,,,,,,,,'''''''''''''..................... ..............'''''',;;;;,'.....            .....'..............................''''........''''',,'''''''''''''''''''''''''''''''''''............................................................................'''''
XXXXXXXNNXXXXOxooooddddddddddooooc,,,,,,,,,,,,,,,,,,,,'''''''''''''.....................  ....'',,,,,'''',;::::;'......          .....'..............................''''........''''',,'''''''''''''''''''''''''''''''''''............................................................................'''''
XXXXXXXXXXXXNXKkdooooooddooooooooc;,,,,,,,,,,,,,,,,,,,'''''''''''..................  ....',;;;;;;;,,,''''';;:;,..                 ..................................'''''........'''''''''''''''''''''''''''''''''''''''''.............................................................................'''''
XXXXXXXXXNXXXXXKOxolooooooooooooc,,,,,,,,,,,,,,,,,,,,,,,'''''''''....................';:::::::;;;;;,,''''','....                   .................................'''''.......''''''''''''''''''''''''''''''''''''''''''.............................................................................'''..
XXXXXXXXXXXXXXXXX0kollooooooooooc;,,,,,,,,,,,,,,,,,,,,,,''''''''..................':cccc:::::::;;;;,,'''....''......               .................................'''''.......''''''''''''''''''''''''''''''''''''''''''..................................................................................
XXXXXXXXXXXXXXXXXXKOdollloooooool:,,,,,,,,,,,,,,,,,,,,''''''''....................,:ccccc:::::::;;;,'.....','......                 .................................'''........''''''''''''''...'''''''''''''''''''''''''..............................................................................    
XXXXXXXXXXXNNNNXXXXXOdlllollloool:,,,,,,,,,,,,,,,,,,,''''''''''''''...............;ccccccc::::::;;,.....'''...''..                  .................................'''........''''''''''''''....''''''''''''''''''''''''..............................................................................    */