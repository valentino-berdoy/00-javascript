//1.Declara una función llamada saludar que muestre en la consola "Hola, mundo!" cuando se llame. Ejecutarla.
function holaMundo(){
    console.log("hola, mudo!")
}
holaMundo();

//2.Declara una función llamada despedirse que muestra en la consola "Adiós, mundo!" y llámala. Ejecutarla.
function adiosMundo(){
    console.log("adios, mundo!")
}
adiosMundo();

//3.Declara una función llamada calcularCuadrado que acepte un número como parámetro y devuelva
//el cuadrado de ese número. Ejecutarla.
function calcularCuadrado(numero){
    if (typeof numero === "number")
        console.log("cuadrado calculado");
    else
        console.log("error: se ingreso otro tipo de dato");
}
console.log(calcularCuadrado(90));

//4.Escribir una funcion llamada minutosAHoras que reciba un número entero de minutos como parámetro,
//y devuelva un número representando la misma cantidad de tiempo pero en horas.
function minutosAHoras(minutos){
    return minutos / 60;
}
console.log("esos minutos son: "+minutosAHoras(120)+" horas")

//5.Declara una función llamada saludarPersona que acepte un parámetro nombre y muestre en la consola
//"Hola, " seguido del nombre.
function saludarPersona(nombre){
    if (typeof nombre === "string")
        return `Hola, ${nombre}`;
    else
        return "numero detectado error";
}
console.log(saludarPersona("ricardo"));

//6.Declara una función llamada sumarNumeros que acepte dos números como parámetros y devuelva su suma.
function sumarNumeros(num1, num2){
    if (typeof num1 === "number" && typeof num2 === "number")
        return num1 + num2;
    else
        return "se ingreso otro tipo de dato, pancho"
}
console.log(sumarNumeros(2,2));

//7.Declara una función llamada multiplicarNumeros que acepte tres números como parámetros y devuelva su producto.
function multiplicarNumeros(num1,num2,num3){
    return num1*num2*num3;
}
console.log(multiplicarNumeros(2,90909090,9));

//8.Escribir una funcion que se llame concatenar3, que reciba 3 strings como parametros. Definir dentro de la
//funcion una variable que se llame separador. La funcion debe devolver un solo string, concatenando los 3 ingresados
//como parametro y separados por el separador. 
function concatenar3(str1, str2, str3){
    let separador =" ";
    let frase = str1 + separador + str2 +separador +str3;
    return frase;
}
console.log(concatenar3("hola","como","estas?"));

//9.Escribir una funcion llamada promedioDeCuatroNumero, que reciba 4 numeros como parametros y devuelva el
//promedio de los numeros introducidos.
function promedioDeCuatroNumero(num1,num2,num3,num4){
    return (num1 + num2 +num3 + num4) / 4;
}
console.log(`promedio: ${promedioDeCuatroNumero(5,5,5,10)}`);

//10.Declara una función llamada presentarPersona que acepta dos parámetros, nombre y edad, y muestre en la
//consola "Mi nombre es [nombre] y tengo [edad] años."
function presentarPersona(str1, num1){
    return `Mi nombre es ${str1} y tengo ${num1} años`;
}
console.log(presentarPersona("elver",54));

//11.Declara una función llamada areaRectangulo que acepte dos parámetros, ancho y alto, y devuelva el área
//del rectángulo. Comprobarlo asignando la función a una variable, y mostrando en consola el valor de la misma.
function areaRectangulo(num1, num2){
    return num1*num2;
}
let area = areaRectangulo(2,23);
console.log(area);

//12.Declara una función llamada calcularPropina que acepte un número como parámetro y devuelva la cantidad de
//propina a dejar en base a cuanto salió el total de la comida. Comprobarlo asignando la función a una variable
//y mostrando en consola el valor de la misma.
function calcularPropina(precio){
    return precio * 0.1;
}
let propina = calcularPropina(10000);
console.log("propina a dejar: "+propina+"$");

//13.Declara una función llamada calcularSalario que acepta dos parámetros, horasTrabajadas y
//tarifaPorHora, y devuelva el salario calculado.
function calcularSalario(horasTrabajadas, tarifaPorHora){
    return horasTrabajadas * tarifaPorHora;
}
console.log("tu salario es: "+calcularSalario(8,10000)+"$");

//14.Declara una función llamada calcularDescuento que acepte un parámetro precioOriginal.
//La función debe declarar una variable descuento con un valor de 0.1 (10%). Luego, calcula el precio
//con descuento y devuelve el resultado.
function calcularDescuento (precioOriginal){
    let descuento = precioOriginal * 0.1;
    return precioOriginal - descuento;
}
console.log("precio final: "+ calcularDescuento(10000)+"$");

//15.Declara una función llamada evaluarNumero que acepte un parámetro num. La función debe devolver
//"positivo" si el número es mayor que 0, "negativo" si es menor que 0, y "cero" si es exactamente 0.
function evaluarNumero (num){
    if (num >= 0)
        return "positivo";
    else
        return "negativo";
}
console.log(evaluarNumero(2));

//16.Declara una función llamada evaluarEdad que acepte un parámetro edad. La función debe devolver
//"Menor de edad" si la edad es menor de 18, y "Mayor de edad" si es 18 o mayor.
function evaluarEdad(edad){
    if (edad >= 18)
        return "mayor de edad";
    else
        return "menor de edad";
}
console.log(evaluarEdad(66));

//17.Declara una función llamada esPar que acepte un número como parámetro. Si el número es par,
//debe mostrar en la consola "El número es par". Si es impar, debe mostrar "El número es impar".
function esPar(num){
    if(num%2 === 0)
        return "es par";
    else
        return "impar papu";
}
console.log(esPar(2));

//18.Declara una función llamada compararNumeros que acepte dos números como parámetros. La función
//debe mostrar en la consola cuál de los dos números es mayor o si son iguales.
function compararNumeros(num1, num2){
    if (num1>num2)
        console.log("el numero "+ num1+" es mayor");
    else if (num2>num1)
        console.log("el numero "+ num2+" es mayor");
    else
        console.log("son iguales wtffff");
}
compararNumeros(2222,1);

//19.Declara una función llamada sumaEsPar que acepte dos números como parámetros. La función debe
//mostrar en la consola si la suma de los dos números es par o impar.
function sumaEsPar(num1,num2){
    if ((num1+num2)%2==0)
        console.log("la suma es par")
    else
        console.log("la suma no es par")
}
sumaEsPar(23,22);

//20.Declara una función llamada ambosPositivos que acepte dos números como parámetros. La función
//debe mostrar en la consola si ambos números son positivos, si solo uno es positivo, o si ninguno es
//positivo.
function ambosPositivos(num1,num2){
    if(num1 >= 0 && num2 >= 0)
        console.log("ambos son positivos");
    else if (num1 >= 0 || num2 >= 0)
        console.log("uno de los dos es positivo");
    else
        console.log("ninguno es positivo");
}
ambosPositivos(2,2322)

//21.Declara una función llamada calcularImpuesto que acepte un parámetro ingreso. Si el ingreso
//es menor de 10000, el impuesto es del 10%. Si es entre 10000 y 20000, el impuesto es del 15%.
//Si es mayor de 20000, el impuesto es del 20%. La función debe devolver el valor del impuesto.
function calcularImpuesto(ingreso){
    if(ingreso < 10000)
        console.log(ingreso + ingreso * 0.10);
    else if(ingreso > 10000 && ingreso < 20000)
        console.log(ingreso + ingreso * 0.15);
    else
    console.log(ingreso + ingreso * 0.20);
}
calcularImpuesto(3000);

//22.Declara una función llamada clasificarNota que acepte un parámetro nota. Si la nota es 90 o más,
//devuelve "A". Si es entre 80 y 89, devuelve "B". Si es entre 70 y 79, devuelve "C". Si es entre 60 y
//69, devuelve "D". Si es menor de 60, devuelve "F".
function clasificarNota(nota){
    if (nota > 90)
        console.log("A");
    else if (nota > 80 && nota <89)
        console.log("B");
    else if (nota > 70 && nota <79)
        console.log("C");
    else if (nota > 60 && nota <69)
        console.log("D");
    else
        console.log("F");
}
clasificarNota(500);
console.log("------------------------------------------------------------------------------------------------------------")