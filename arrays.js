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
    console.log(`materias aprobadas:${notas.filter(function(nota,aprobacion){
        let aprobadas = []
        if(nota >= 6){
            aprobadas.push(nota)
        }
        let cont = aprobadas.length
        return cont
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
        }
        return cont
        
    })}`)
    
    console.log(`las notas de estas: ${notas.filter(function(nota,aprobacion){
        let desaprobadas = []
        if(nota < 6){
            desaprobadas.push(nota)
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


