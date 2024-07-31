function saludo(nombre, apellido){
    console.log(`bienvenido ${nombre} ${apellido}`);
}

function verificarEdad(edad){
    if (edad < 18){
        console.warn("Usted es menor de edad, recuerde que no podemos venderle bedidas alcoholicas");
        return false;
    }
    else{
        console.log("Usted puede consumir bebidas alcoholicas");
        return true;
    }
}

function bebidas(edad, cantidadBebidas, bebida){
    if( edad < 18){
        switch(bebida){
            case 1:
                console.warn("Usted es menor no puede pedir alcohol");
                break;
            case 2:
                console.log(`Usted pidio ${cantidadBebidas} Coca Cola/s`);
                break;
            case 3:
                console.log(`Usted pidio ${cantidadBebidas} Sprite/s`);
                break;
            case 4:
                console.log(`usted pidio ${cantidadBebidas} Agua/s`);
                break;
            default:
                console.log("usted no pidio bebida");
        }
    }
    else{
        switch(bebida){
            case 1:
                console.log(`${cantidadBebidas} Cerbeza/s`);
                break;
            case 2:
                console.log(`${cantidadBebidas} Coca Cola/s`);
                break;
            case 3:
                console.log(`${cantidadBebidas} Sprite/s`);
                break;
            case 4:
                console.log(`${cantidadBebidas} Agua/s`);
                break;
            default:
                console.log("usted no pidio bebida");
                break;
        }
    }
}

function comida(cantidadPlatos, plato){
        switch(plato){
            case 1:
                console.log(`${cantidadPlatos} plato/s de ñoquis`);
                break;
            case 2:
                console.log(`${cantidadPlatos} plato/s ravioles`);
                break;
            case 3:
                console.log(`${cantidadPlatos} plato/s de vacio`);
                break;
            case 4:
                console.log(`${cantidadPlatos} sanguche/s de bondiola`);
                break;
            default:
                console.log("usted no pidio comida");
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
    let precioPlatos
    let precioTotal
    let Descuento60 = false
    let DescuentoEfectivo

    switch(plato){
        case 1:
            precioPlatos = cantidadPlatos * 5000;
            break;
        case 2:
            precioPlatos = cantidadPlatos * 7500;
            break;
        case 3:
            precioPlatos = cantidadPlatos * 10000;
            break;
        case 4:
            precioPlatos = cantidadPlatos * 15000;
            break;
    }

    switch(bebida){
        case 1:
            precioBebidas = cantidadBebidas * 2000
            break;
        case 2:
            precioBebidas = cantidadBebidas * 1500
            break;
        case 3:
            precioBebidas = cantidadBebidas * 1500
            break;
        case 4:
            precioBebidas = cantidadBebidas * 1000
            break;
    }

    precioTotal = precioBebidas + precioPlatos
    if(edad >= 60){
        Descuento60 = true
    }

    if(metodoDePago === "Efectivo"){
        DescuentoEfectivo = true
    }

    if(Descuento60=== true && DescuentoEfectivo ===false){
        precioTotal= precioTotal - (precioTotal *0.1)
        console.log("Tiene un descuento del 10% al tener mas de 60 años, su cuenta es:",precioTotal+(precioTotal*0.05));
        console.log("Metodo de pago:",metodoDePago);
    }
    else if (Descuento60 === false && DescuentoEfectivo === true){
        precioTotal= precioTotal - (precioTotal *0.1)
        console.log("Tiene un descuento del 10% al pagar en Efectivo, su cuenta es:",precioTotal+(precioTotal*0.05));
        console.log("Metodo de pago:",metodoDePago);
    }
    else if (Descuento60 === true && DescuentoEfectivo === true){
        precioTotal= precioTotal - (precioTotal *0.1)-(precioTotal*0.1)
        console.log("Tiene dos descuentos del 10%, al pagar en efectivo y al ser mayor de 60 años, su cuenta es:",precioTotal+(precioTotal*0.05));
        console.log("Metodo de pago:",metodoDePago);
    }
    else{
        console.log("Su precio es:",precioTotal);
        console.log("Metodo de pago:",metodoDePago);
    }
    return precioTotal
}

function valorCubierto(precioTotal){
    console.log("valor del cubierto:",precioTotal*0.05);
}

function gestionarPedido(){
    let edad = 10
    let nombre = "Santiago"
    let apellido = "Piedrafita"
    let cantidadBebidas = 3
    let bebida = 2
    let cantidadPlatos= 2
    let plato = 2
    let metodoDePago = "Efectivo"
    const HORA = 150
    let precioTotal 
    saludo(nombre, apellido);
    verificarEdad(edad);
    console.group("Pedido");
    bebidas(edad, cantidadBebidas, bebida);
    comida(cantidadPlatos, plato);
    horaPedido(HORA, nombre)
    precioTotal = calcularPrecio(cantidadPlatos, plato, cantidadBebidas, bebida, edad, metodoDePago)
    valorCubierto(precioTotal);
}

gestionarPedido();