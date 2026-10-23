// Declaración de variables (const para valores fijos, let para los que cambian)
const producto = "Camiseta";
const precio = 50000; // Fijo
let cantidad = 3; // Puede cambiar
const hayStock = true;

// Función para calcular el total aplicando scope, variables locales y condicionales
function calcularTotal(precio, cantidad) {
    const IVA = 0.19; // Scope de función
    let subtotal = precio * cantidad;

    // Condicional if con scope de bloque (descuento del 10% si lleva 3 o más)
    if (cantidad >= 3) {
        let descuento = subtotal * 0.10;
        subtotal = subtotal - descuento;
    }

    return subtotal * (1 + IVA);
}

// Función principal para mostrar el resultado en consola
function mostrarResumen() {
    // Operadores lógicos (&&), de comparación (>) y aritméticos (*, +, -)
    const esValido = hayStock && cantidad > 0;

    // Operador ternario: condición ? verdadero : falso
    let resultadoFinal = esValido ? calcularTotal(precio, cantidad) : "Sin stock";

    console.log(producto + ": " + resultadoFinal);
}

// --- CASOS DE PRUEBA EXIGIDOS POR EL PDF ---
// Caso 1: Con 3 unidades (da exactamente 160650 como pide la guía)
mostrarResumen();

// Caso 2: Cambiamos la cantidad a 1 unidad para el segundo escenario
cantidad = 1;
mostrarResumen();