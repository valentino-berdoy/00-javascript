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
function colegio(nombre, notas, _aprobacion){
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
    console.log(`las notas de estas:${notas.filter(function(nota,_aprobacion){
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
}))

//----------------------------------------------- practica 2 ------------------------------

/*1. Tienes dos listas de productos en tu tienda online. Combina estas listas en una sola usando lo visto
anteriormente y mostrarlo por consola.*/

let electronics = ['laptop', 'phone', 'tablet']; 
let accessories = ['headphones', 'charger', 'case'];

let allArticles = [...accessories, ...electronics]
console.log(allArticles)

/*2. Tienes una lista de los productos más vendidos. Extrae el primero y
el segundo producto usando destructuring.*/

let bestSellers = ['laptop', 'phone', 'tablet', 'monitor'];

let [best1, best2] = bestSellers
console.log(best1, best2)

/*3. Verifica si el producto phone existe en la lista de productos, si existe, mostrar por consola un mensaje
“Existe el producto [nombre del producto]” */

let saleItems = ['laptop', 'phone', 'headphones'];
function siExiste (array){
    return array.includes("phone")
}
if (siExiste(saleItems)== true){
    console.log("existe el producto")
}
else{
    console.log("no existe el producto")
}

/*4. Verifica si un producto específico está en la lista de deseos. Si existe, mostrar por
consola un mensaje “El producto existe, su nombre es [nombre del producto]” */

let wishlist = ['laptop', 'phone', 'headphones'];

let articulo = "laptop"
if (wishlist.includes(articulo)){
    console.log("el articulo existe, se llama",articulo)
}
else{
    console.log("el producto no existe")
}
//TO-DO
/*5. Filtra los productos que empiezan con la letra 'p' en la lista. */

let products = [
    'laptop',
    'phone',
    'tablet',
    'printer', 
    'pen',
    'monitor',
    'keyboard',
    'mouse',
    'headphones',
    'camera',
    'notebook'
  ];
  
  let pProductos = []
  pProductos = products.filter(function(num){
    return num.includes("p")
  })
  console.log(pProductos)

/*6. Escribe una función combineProductLists que tome dos listas de productos y las combine en una sola
usando la sintaxis spread.*/
function combineProductLists(array1, array2){
    let retorno =[]
    return retorno = [...array1, ...array2]

}
console.log(combineProductLists(products, saleItems))

/*7. Crea una función getTopTwo que tome una lista de productos y
devuelva los dos primeros usando destructuring.*/

function getTopTwo(array){
    let [p1, p2] = array
    console.log(p1,p2)
}
getTopTwo(products)

/*8.Escribe una función isOnSale que verifique si algún producto de una lista de
productos en oferta es un artículo específico.*/

let ofertitas = ["lavarropas", "secador", "phone"]
function isOnSale(array, producto){
    return array.includes(producto)
}

if (isOnSale(products, ofertitas[2])== true){
    console.log("esta en oferta")
}
else{console.log("no")}

/*9.Crea una función areAllWordsLong que verifique si todas las palabras en una lista tienen más
de tres letras. */

function areAllWordsLong(array){
    let chequer = array.every(function(num){
        return num.length > 3
    })
    return chequer
}
console.log(areAllWordsLong(ofertitas))

/*10.Crea una función areAllEven que verifique si todos los números en una lista son pares. */
let numeroides =[ 2,30,452,6666,]
function areAllEven(array){
    let chequer = array.every(function(num){
        return num %2 === 0;
    })
    return chequer
}
console.log(areAllEven(numeroides))

/*11. Escribe una función findProductWithLetter que encuentre el primer producto en la
lista que contiene una letra específica.*/

function findProductWithLetter(array){
    let retornator = array.find(function(str){
        return str.includes("a")
    })
    return retornator
}

console.log(findProductWithLetter(products))

/*12.Define una función createProduct que agregue a un array el producto, pero que antes verifique si el 
producto ya existe en ese array*/

function createProduct(array, producto){
    if(array.includes(producto)=== true){
        console.log("ya existe panchoide")
    }
    else{
        array.push(producto)
    }
}
console.log(createProduct(products,"salchichon primavera"), products);

/*13. Escribe una función arePricesInRange que compruebe si todos los precios de una lista están entre 50 y 150.*/

let precios = [120,140,55]
function arePricesInRange(array){
    chequer = array.every(function(num){
        return num >= 50 && num<= 150
    })
    return chequer
}
console.log(arePricesInRange(precios))

/*14. Define una función formatExpensiveProducts que tome una lista de precios y agregue una etiqueta
Caro a los precios superiores a 100. */

function formatExpensiveProducts(prices) {
    var expensivePrices = prices.filter(function(price) {
      return price > 100;
    });
  
    var cheapPrices = prices.filter(function(price) {
      return price <= 100;
    });
    var result = [];
    prices.filter(function(price) {
      if (expensivePrices.includes(price)) {
        result.push('Caro '+ price);
      } else {
        result.push(price.toString());
      }
    });
  
    return result;
  }
console.log(formatExpensiveProducts(precios))

/*15. Define una función addIfNotExists que añada un producto a una lista solo si no está ya presente.*/

function createProduct(array, producto){
    if(array.includes(producto)=== true){
        console.log("ya existe panchoide")
    }
    else{
        array.push(producto)
    }
}
console.log(createProduct(products,"salchichon primavera"), products);

/*16. Crea una función createDescriptions que tome una lista de nombres de productos y una lista de precios, y devuelva una lista de descripciones
que combine ambos usando map.*/

let preciosos = [20, 29, 89]
let productitos = ["tablet", "celular", "salchicha"]

function createDescriptions(arrayPrecios, arrayProductos){
    let resultado = arrayProductos.map(function(elemento, index){
        return console.log(arrayProductos[index]+" cuesta "+arrayPrecios[index])
    })
}
console.log(createDescriptions(preciosos, productitos))

/*17. Crea una función addToWishlist que añada un producto a la lista de deseos solo si el producto no
está ya presente y la lista de deseos tiene menos de 5 productos. Realizar validaciones correspondientes.*/


function createProduct(array, producto){
    if(array.includes(producto)=== true || array.length>=5){
        console.log("ya existe panchoide")
    }
    else{
        array.push(producto)
    }
}
console.log(createProduct(products,"salchichon primavera"));

/*18.Define una función inventoryMessages que tome una lista de productos y una lista de cantidades en
inventario, devolviendo una lista de mensajes que indiquen si cada producto está en stock o agotado.*/
let lasCaprichosas = ["sal","azucar", "vinagre"]
let cantidades =[4,0,99]
function inventoryMessages(array1, array2){
    array1.map(function(elemento, index){
        if(array2[index]!= 0){
            console.log(`el producto ${array1[index]} esta en stock`)
        }
        else{
            console.log("out of stock")
        }
    })
}
inventoryMessages(lasCaprichosas, cantidades)