/*Agregar elementos al final de un array:
● Crea un array vacío llamado numbers.
● Agrega los números del 1 al 5 al array.
● Imprime el array resultante.
● Eliminar el último elemento del array*/

let numbers=[]
numbers.push(0,1,2,3,4,5);
console.log(numbers)
numbers.pop()
console.log(numbers)

/*Utiliza el array numbers del ejercicio anterior.
● Elimina el último número del array.
● Imprime el array resultante.
● Agregar elementos al principio del array*/

numbers.pop();
numbers.unshift(29)
console.log(numbers)

/*Crea un array vacío llamado colors, agregando cada elemento al principio del array.
● Agrega los siguientes colores al array en el siguiente orden: 'red', 'blue', 'green'*/

let colors = ['red', 'blue', 'green']

/*Eliminar el primer elemento de un array:
● Utiliza el array colors del ejercicio anterior.
● Elimina el primer color del array.*/

colors.pop()
console.log(colors)

/*Agregar múltiples elementos al final de un array:
● Crea un array vacío llamado fruits.
● Agrega los siguientes elementos al array: 'apple', 'banana', 'orange'. */

let fruits = []
fruits.push('apple', 'banana', 'orange')

/*Eliminar múltiples elementos al final de un array:
● Utiliza el array fruits del ejercicio anterior.
● Elimina los últimos dos elementos del array utilizando el método pop. */

fruits.pop()
fruits.pop()

/*Agregar múltiples elementos al principio de un array:
● Utiliza el array fruits del ejercicio 5.
● Agrega los siguientes elementos al principio del array: 'grape', 'kiwi'. */

fruits.unshift('grape', 'kiwi')
console.log(fruits)

/*Eliminar múltiples elementos al principio de un array:
● Utiliza el array fruits del ejercicio anterior.
● Elimina los primeros dos elementos del array. */

fruits.shift()
console.log(fruits)
fruits.shift()
console.log(fruits)

/*Agregar un elemento específico al final de un array:
● Utiliza el array colors del ejercicio 3.
● Agrega el color 'yellow' al final del array. */

colors.push("yellow")

/*Eliminar un elemento específico del principio de un array:
● Utiliza el array colors del ejercicio 9.
● Elimina el primer color del array. */

colors.shift()

/*Desarrollar una función que reciba el nombre de un alumno, las notas de sus materias,
y la nota de aprobación (4/6/7) e imprima:
Nombre del usuario
Cantidad de materias cursadas
Cantidad de materias aprobadas
Las notas de las materias aprobadas
Cantidad de materias reprobadas
Las notas de las materias reprobadas
Si el alumno pasó de año (aprobó todas las materias)
La nota más alta */

let nombre = "juanito"
let notas =[6,6,6,6,7,8,7,2]
let aprobacion = 6;
function colegio(nombre, notas, aprobacion){
    console.log(`alumno:${nombre}`)
    console.log(`materias cursadas:${notas.length}`)
    console.log(`materias aprobadas:${notas.filter(function(nota){
        let aprobadas = []
        if(nota >= 6){
            aprobadas.push(nota)
        }
        console.log(aprobadas.length)
        return 
    })}`)
    console.log(`las notas de estas:${notas.filter(function(nota,aprobacion){
        let aprobadas = []
        if(nota >= 6){
            aprobadas.push(nota)
            return aprobadas
        }
        
    })}`)

    console.log(`materias desaprobadas:${notas.filter(function(nota, aprobacion){
        let cont = 0
        if (nota < aprobacion){
            cont += 1
            return cont
        }
        
        
    })}`)
    
    console.log(`las notas de estas: ${notas.filter(function(nota,aprobacion){
        let desaprobadas = []
        if(nota < aprobacion){
            desaprobadas.push(nota)
            console.log(`materias desaprobadas: ${desaprobadas.length}`)
            return desaprobadas
        }
        
    })}`)
    console.log(`el alumno ${notas.find(function(nota){
        if (nota>6){
            return "aprobo"
        }
        else{
            return "desaprobo"
        }
    })} el año`)
    console.log(`la nota mas alta es${notas.filter(function(nota){
        let alta = 0
        if (nota > alta){
            alta = nota
        }
        return nota
    })}`)
} 

colegio(nombre, notas, aprobacion);

//------------------------------------------------------------------------------------

//1. Declara un array llamado pelisFavoritas con tres elementos y muéstralo en la consola
let pelisFavoritas = ["dalmatas", "batman", "gladiador"]
console.log(pelisFavoritas)

//2. Accede y muestra en la consola el segundo elemento del array pelisFavoritas.

console.log(pelisFavoritas[1])

//3. Declara un array vacío llamado libros y agrega tres elementos.

let libros = ["libro1", "libro2", "libro3"]

//4. Elimina el último elemento del array libros y muéstralo en la consola.

libros.pop()

//5. Declara un array llamado colores con cuatro elementos y muestra su longitud en la consola.

let colores = ["rosa", "verde"]
console.log(colores.length)

//6. Del array de colores usando anteriormente, agrega 2 elementos al inicio del mismo y muéstralo en la consola.
colores.unshift("naranja")
colores.unshift("azul")
console.log(colores)

//7. Elimina el primer elemento del array colores y muéstralo en la consola.

console.log(colores.shift())

//8. Declara un array llamado frutas con tres elementos y verifica si contiene 'Manzana'. Muestra el resultado en la consola.
let frutas = ["peras", "durazno"]
console.log(frutas.includes("manzana"))

//9. Declara un array de numeros del 1 al 15 y encuentra el primer número mayor que 3 en el array numeros.

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(numeros.find(function(num){
    return num > 3
}))

//10. Ecuentra todos los números menores que 4 en el array numeros.

console.log(numeros.filter(function(num){
    return num > 3
}))

//11. Declara una función llamada agregarElemento que acepte un array y un elemento como parámetros,
//agregue el elemento al final del array y devuelva la nueva longitud del array.

let agregarElemento = numeros
agregarElemento.push("manzana")
console.log(agregarElemento.length)

//12. Declara una función llamada eliminarPrimerElemento que acepte un array como parámetro,
//elimine el primer elemento del array y devuelva el elemento eliminado.

function eliminarPrimerElemento(array){
    console.log(array.shift())
}
eliminarPrimerElemento(numeros)

//13. Declara una función llamada longitudArray que acepte un array como parámetro y devuelva
//la longitud del array mostrado en un mensaje como estee “La longitud de mi array es de [longitud]”.

function longitudArray(array){
    console.log(`la longitud de este array es de: ${array.length}`)
}
longitudArray(numeros)

//14.Declara una función llamada verificarElemento que acepte un array y un elemento como parámetros,
//y devuelva true si el elemento está en el array o false si no lo está.

function verificarElemento(array, elemento){
    console.log(array.includes(elemento))
}
verificarElemento(numeros, 690)

//15. Declara una función llamada encontrarElemento que acepte un array y un elemento como parámetros,
//y devuelva el primer elemento del array que sea igual al elemento dado. Si no se encuentra, devuelve
//undefined.

function encontrarElemento(array, elemento){
    elemento = elemento
    console.log(array.find(function(el){
        return el == elemento
    }))
}
encontrarElemento(numeros, 9)

//16. Declara una función llamada filtrarArray que acepte un array y un número como parámetros, y
//devuelva un nuevo array con todos los elementos mayores al número dado.
function filtrarArray (array, numero){
    console.log(array.filter(function(num){
        let nuevoArray = []
        if (num > numero){
            nuevoArray.push(num)
            return nuevoArray
        }
        
    }))
}
filtrarArray(numeros, 4)

//17. Dado un array de números, verifica si todos son mayores que cero. Devuelve en consola el resultado
numeros.pop()
console.log(numeros.every(function(num){
    return num > 0
}))

//18. Validar que todos los strings son no vacíos

console.log(frutas.every(function(str){
    return str != ""
}))

//19. Comprueba si todos los elementos en un array de strings contienen algún carácter.
//Devuelve en consola el resultado

console.log(frutas.every(function(str){
    return str.length > 1
}))

//20. Confirmar que todos los estudiantes pasaron el examen:
let estudiantes = [4,6,4,7,8,9]
console.log(estudiantes.every(function(num){
    return num >= 6
}))

//22.Verificar si todas las edades son de adultos:
let edades = [22,56,34,12,13,15]
console.log(edades.every(function(num){
    return num >= 18
}))

//24. Comprobar si todos los números son divisibles por 5:
console.log(numeros.every(function(num){
    return num % 5 === 0
}))

//25. Verificar si al menos un número en un array es mayor que 10.
console.log(numeros.some(function(num){
    return num > 10
}))

//26. Comprobar si al menos un string en un array está vacío.

console.log(frutas.some(function(str){
    return str == ""
}))

//27. Verificar si al menos un estudiante no pasó el examen (calificación menor a 6).
let notitas = [3,8,8,5,1,1,1,5,7]
console.log(notitas.some(function(num){
    return num <= 6
}))

//28. Comprobar si al menos una edad en un array corresponde a un adolescente (13-17 años).

console.log(edades.some(function(num){
    return num >= 13 || num <=17
}))g