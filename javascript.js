/* en esta practica realizada junto a los empleados Santiago Piedrafita y Javier Valdez (mencion
especial a Ignacio Bergantiños) estamos aprendiendo a usar comentarios, console.log, todas sus
variantes y todos los tipos de datos primitivos, para luego, implementarlas en algun 
programa a futuro */


console.log("hola, mundo");
console.log("valentino berdoy");
console.log("CABA, argentina");



console.log("Bienvenido al sistema");
console.info("Cargando aplicacion...");
console.warn("Advertencia: espacio del disco bajo");
console.error("Error: no se pudo conectar al servidor");



console.group("piramide");
console.log("  *")
console.log(" ***")
console.log("*****")
console.groupEnd("piramide")



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



//----------------- practica 3 ----------------------

let nombre = "ricardito";
console.log(nombre);

let numeroDos = 2;
console.log(numeroDos);

let verdadero = true
console.log(verdadero);

let hola =  "hola,";
let comoEstas = " como estas?"
let frase =  hola+comoEstas;
console.log(frase);

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
numeroideString = parseInt(numeroideString);
let resultaloide = numeroideInt + numeroideString;
console.log(resultaloide);

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