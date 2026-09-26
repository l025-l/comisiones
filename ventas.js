const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.10);
    }

    return comision;
}



function validarInput(input) {
    // Obtenemos el span de error correspondiente usando el id del input
    const spanError = document.getElementById('error-' + input.id);
    const valor = input.value.trim();

    // 1. Validar que no esté vacío
    if (valor === "") {
        spanError.textContent = "El campo no puede estar vacío.";
        return;
    }

    // 2. Validar que sean solo números (expresión regular)
    if (!/^\d+$/.test(valor)) {
        spanError.textContent = "Solo se permiten números.";
        return;
    }

    // 3. Validar máximo 5 dígitos
    if (valor.length > 5) {
        spanError.textContent = "Máximo 5 dígitos permitidos.";
        return;
    }

    // Si pasa todas las validaciones, borramos el mensaje de error
    spanError.textContent = "";
}

function calcular() {



    //recuperamos propiedades de las cajas de texto
    //let componenteSueldoBase=document.getElementById("txtSueldoBase");
    //let componenteVentas=document.getElementById("txtVentas");
    //let componentePrecio=document.getElementById("txtPrecio");

    //recuperamos el valor de las cajas de texto
    //let sueldoBaseStr=componenteSueldoBase.value;

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    //let numeroVentasStr=componenteVentas.value;
    //let precioProductoStr=componentePrecio.value;

    //convertimos el texto a numero
    //let sueldoBase=parseFloat(sueldoBaseStr);
    //let numeroVentas=parseFloat(numeroVentasStr);
    //let precioProducto=parseFloat(precioProductoStr);

    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;

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