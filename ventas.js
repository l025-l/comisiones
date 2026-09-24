const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto){
    let comision=0;

    if(numeroVentas > VENTAS_BASE){
        let ventasExtras=numeroVentas-VENTAS_BASE;
        comision= ventasExtras*(precioProducto*0.10);
    }

    return comision;
}

function calcular(){
    //recuperamos propiedades de las cajas de texto
    //let componenteSueldoBase=document.getElementById("txtSueldoBase");
    //let componenteVentas=document.getElementById("txtVentas");
    //let componentePrecio=document.getElementById("txtPrecio");

    //recuperamos el valor de las cajas de texto
    //let sueldoBaseStr=componenteSueldoBase.value;
    
    let sueldoBase=recuperarFloat("txtSueldoBase");
    let numeroVentas=recuperarFloat("txtVentas");
    let precioProducto=recuperarFloat("txtPrecio");

    //let numeroVentasStr=componenteVentas.value;
    //let precioProductoStr=componentePrecio.value;

    //convertimos el texto a numero
    //let sueldoBase=parseFloat(sueldoBaseStr);
    //let numeroVentas=parseFloat(numeroVentasStr);
    //let precioProducto=parseFloat(precioProductoStr);

    let comision=calcularComision(numeroVentas, precioProducto);

    let total=sueldoBase+comision;

    //let spSueldoBase=document.getElementById("spSueldoBase");
    //let spComision=document.getElementById("spComision");
    //let spTotal=document.getElementById("spTotal");

    //spSueldoBase.textContent=sueldoBase;
    //spComision.textContent=comision;
    //spTotal.textContent=total;

    mostrarEnSpan("spSueldoBase", sueldoBase);
    mostrarEnSpan("spComision", comision);
    mostrarEnSpan("spTotal", total);

}