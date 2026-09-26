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

    let esValido = true;

    document.getElementById('error-txtSueldoBase').textContent = "";
    document.getElementById('error-txtVentas').textContent = "";
    document.getElementById('error-txtPrecio').textContent = "";

    let valMonto = document.getElementById('txtSueldoBase').value.trim();
    let valTasa = document.getElementById('txtVentas').value.trim();
    let valPlazo = document.getElementById('txtPrecio').value.trim();


    if (valMonto === "") {
        document.getElementById('error-txtSueldoBase').textContent = "El monto es obligatorio.";
        esValido = false;
    } else if (isNaN(valMonto)) { // Si tiene letras, isNaN será verdadero
        document.getElementById('error-txtSueldoBase').textContent = "Solo se permiten números, no letras.";
        esValido = false;
    } else if (parseFloat(valMonto) < 500 || parseFloat(valMonto) > 50000) {
        document.getElementById('error-txtSueldoBase').textContent = "El monto debe estar entre $500 y $50,000.";
        esValido = false;
    }

    if (valTasa === "") {
        document.getElementById('error-txtVentas').textContent = "La tasa es obligatoria.";
        esValido = false;
    } else if (isNaN(valTasa)) { // Si tiene letras
        document.getElementById('error-txtVentas').textContent = "Solo se permiten números.";
        esValido = false;
    } else if (parseInt(valTasa) <= 1 || parseInt(valTasa) > 30) {
        document.getElementById('error-txtVentas').textContent = "La tasa debe ser mayor a 1 y máximo 30%, (Sin decimales) ";
        esValido = false;
    }

    if (valPlazo === "") {
        document.getElementById('error-txtPrecio').textContent = "El campo es obligatorio.";
        esValido = false;
    } else if (!/^\d+(\.\d{1,2})?$/.test(valPlazo)) {
        // ^\d+(\.\d{1,2})?$ -> Bloquea letras y permite números enteros o con máximo 2 decimales
        document.getElementById('error-txtPrecio').textContent = "Solo números (máximo 2 decimales, No letras).";
        esValido = false;
    } else if (parseFloat(valPlazo) < 0.1 || parseFloat(valPlazo) > 1000) {
        // Usamos parseFloat en lugar de parseInt para no perder los decimales al evaluar
        document.getElementById('error-txtPrecio').textContent = "El valor debe estar entre 0.1 y 1000.";
        esValido = false;
    }


    if (esValido) {
        let monto = parseFloat(valMonto);
        let tasaAnual = parseFloat(valTasa);
        let plazo = parseInt(valPlazo);

        // Fórmula de amortización
        let tasaMensual = (tasaAnual / 100) / 12;
        let cuota = monto * (tasaMensual / (1 - Math.pow(1 + tasaMensual, -plazo)));
        let totalPagar = cuota * plazo;
        let intereses = totalPagar - monto;

        // Imprimimos en TUS spans originales
        document.getElementById('spSueldoBase').textContent = "$" + cuota.toFixed(2);
        document.getElementById('spComision').textContent = "$" + intereses.toFixed(2);
        document.getElementById('spTotal').textContent = "$" + totalPagar.toFixed(2);
    }
}