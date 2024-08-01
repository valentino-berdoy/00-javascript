function saludo(nombre){
    if(nombre != null){
        console.log(`bienvenido ${nombre.trim()}`);
        return nombre.trim()
    }
    else if(nombre == null || nombre.trim() == ""){
        console.log("No ingreso nombre lo llamaremos cliente");
        return "cliente"
    }
}

function verificarEdad(edad){
    edad = parseFloat(edad);
    if (typeof edad === "number"){
        if (edad < 18){
            console.warn("Usted es menor de edad, recuerde que no podemos venderle bedidas alcoholicas");
            return false;
        }
        else if(edad <= 0 || edad >=100){
            console.log("edad invalida, lo consideraremos como un menor de edad")
            return false;
        }
        else {
            console.log("Usted puede consumir bebidas alcoholicas");
            return true;
        }
    }
    else{
        console.log("no ingreso un numero, lo consideraremos un menor de edad")
        return false;
    }
}

function bebidas(edad, cantidadBebidas, bebida){
    if (typeof bebida === "string"){
        if( edad < 18 && edad >0 || edad >=100){
            switch(bebida.toLowerCase()){
                case "cerbeza":
                    console.error("Usted es menor no puede pedir alcohol");
                    break;
                case "cocacola":
                    console.log(`${cantidadBebidas} Coca Cola/s`);
                    break;
                case "sprite":
                    console.log(`${cantidadBebidas} Sprite/s`);
                    break;
                case "agua":
                    console.log(`${cantidadBebidas} Agua/s`);
                    break;
                case "nada":
                    console.log("usted no pidio bebida");
                    break;
                default:
                    console.log("no tenemos esa bebida, disculpe");
                    
            }
        }
        else{
            switch(bebida.toLowerCase()){
                case "cerbeza":
                    console.log(`${cantidadBebidas} Cerbeza/s`);
                    break;
                case "cocacola":
                    console.log(`${cantidadBebidas} Coca Cola/s`);
                    break;
                case "sprite":
                    console.log(`${cantidadBebidas} Sprite/s`);
                    break;
                case "agua":
                    console.log(`${cantidadBebidas} Agua/s`);
                    break;
                case "nada":
                    console.log("usted no pidio bebida");
                    break;
                default:
                console.log("no tenemos esa bebida, disculpe");
            }
        }
    }
    else {
        console.log("no ingreso algo valido, no se le asignara bebida")
    }
}

function comida(cantidadPlatos, plato){
    if(typeof plato === "string"){
        switch(plato.toLowerCase()){
            case "ñoquis":
                console.log(`${cantidadPlatos} plato/s de ñoquis`);
                break;
            case "ravioles":
                console.log(`${cantidadPlatos} plato/s de ravioles`);
                break;
            case "vacio":
                console.log(`${cantidadPlatos} plato/s de vacio`);
                break;
            case "sanguche de bondiola":
                console.log(`${cantidadPlatos} sanguche/s de bondiola`);
                break;
            case "nada":
                console.log("usted no pidio comida");
                break;
            default:
                console.log("no tenemos ese plato, disculpe");
        }
    }
    else{
        console.log("no ingreso algo valido, no se le entregara plato")
    }
}

function horaPedido(HORA, nombre){
    if (HORA >= 12 && HORA <= 14){
        console.warn("Pueden haber demoras en el pedido, disculpe las molestias, sepa comprendernos")
    }
    else{
        console.log("Su pedido saldra pronto",nombre+"!")
    }
}

function calcularPrecio(cantidadPlatos, plato, cantidadBebidas, bebida, edad, metodoDePago){
    let precioBebidas = 0
    let precioPlatos = 0
    let precioTotal
    let Descuento60 = false
    let DescuentoEfectivo
    
    switch(plato.toLowerCase()){
        case "ñoquis":
            precioPlatos = cantidadPlatos * 5000;
            break;
        case "ravioles":
            precioPlatos = cantidadPlatos * 7500;
            break;
        case "vacio":
            precioPlatos = cantidadPlatos * 10000;
            break;
        case "sanguche de bondiola":
            precioPlatos = cantidadPlatos * 15000;
            break;
    }

    switch(bebida.toLowerCase()){
        case "cerbeza":
            precioBebidas = cantidadBebidas * 2000
            break;
        case "cocacola":
        case "sprite":
            precioBebidas = cantidadBebidas * 1500
            break;
        case "agua":
            precioBebidas = cantidadBebidas * 1000
            break;
    }

    precioTotal = precioBebidas + precioPlatos
    if(edad >= 60){
        precioTotal= precioTotal - (precioTotal *0.1)
        console.log("Tiene un descuento del 10% al tener mas de 60 años, su cuenta es:",precioTotal+(precioTotal*0.05));
    }

    if(metodoDePago.toLowerCase() === "efectivo"){
        precioTotal= precioTotal - (precioTotal *0.1)
        console.log("Tiene un descuento del 10% al pagar en Efectivo, su cuenta es:",precioTotal+(precioTotal*0.05));
    }

    else{
        console.log("Su precio es:",precioTotal);
    }
    if (metodoDePago.toLowerCase()==="efectivo" || metodoDePago.toLowerCase()==="tarjeta" || metodoDePago.toLowerCase()==="aplicacion"){
        console.log("Metodo de pago:",metodoDePago);
        return precioTotal
    }
    else{
        console.error("no tenemos ese metodo de pago, disculpe las molestias")
        return precioTotal
    }

}

function valorCubierto(precioTotal){
    console.log("valor del cubierto:",precioTotal*0.05);
}

function gestionarPedido(){
    let cantidadBebidas = 0;
    let cantidadPlatos = 0;
    let nombre = prompt("ingrese su nombre")
    let edad = parseFloat(prompt("ingrese su edad"))
    let bebida = prompt("elija una bebida, tenemos: cerbeza, cocacola, sprite y agua")
    if(bebida === "cerbeza" || bebida === "cocacola" || bebida === "sprite" || bebida === "agua"){
        cantidadBebidas = prompt(`cuantas ${bebida}s quiere?`)
    }
    let plato = prompt("elija un plato, tenemos: ñoquis, ravioles, vacio y sanguche de bondiola")
    if(plato === "ñoquis"|| plato === "ravioles" || plato === "vacio" || plato === "sangunche de bondiola"){
        cantidadPlatos= prompt(`cuantas platos de ${plato} quiere?`)
    }
    let metodoDePago = prompt("elija el metodo de pago, puede ser: efectivo, tarjeta o aplicacion");
    const HORA = 150
    let precioTotal
    nombre = saludo(nombre);
    verificarEdad(edad);
    console.groupCollapsed("Pedido");
    bebidas(edad, cantidadBebidas, bebida);
    comida(cantidadPlatos, plato);
    horaPedido(HORA, nombre)
    console.groupEnd("Pedido")
    console.groupCollapsed("Factura")
    precioTotal = calcularPrecio(cantidadPlatos, plato, cantidadBebidas, bebida, edad, metodoDePago)
    valorCubierto(precioTotal);
    console.groupEnd("Factura")
}

gestionarPedido();