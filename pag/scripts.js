// Datos del servicio en MisApps (const para lo fijo, let para lo que cambia)
const nombreServicio = "MisApps Pro Pack";
const precioBase = 50000; // Precio fijo de la licencia de app
let cantidadUsuarios = 3; // let porque la cantidad cambia en las pruebas
const plataformaDisponible = true;

// Función para calcular el costo total de las licencias de aplicaciones
function calcularCostoApps(precio, cantidad) {
    const IVA = 0.19; // Impuesto fijo (Scope de función)[cite: 7]
    let subtotal = precio * cantidad;

    // Si adquieren 3 o más licencias, aplicamos un 10% de descuento por volumen
    if (cantidad >= 3) {
        let descuentoVolumen = subtotal * 0.10; // Variable local de bloque[cite: 3, 7]
        subtotal = subtotal - descuentoVolumen;
    }

    // Retorna el valor total sumando el IVA
    return subtotal * (1 + IVA);
}

// Función principal para mostrar el resumen en la consola de tu página
function mostrarResumenApps() {
    // Usamos operadores lógicos (&&), de comparación (>) y aritméticos (*, +, -)[cite: 3]
    const servicioValido = plataformaDisponible && cantidadUsuarios > 0;

    // Operador ternario: si la plataforma está activa calcula el total, si no muestra aviso[cite: 7]
    let resultadoFinal = servicioValido ? calcularCostoApps(precioBase, cantidadUsuarios) : "Servicio no disponible";

    console.log(nombreServicio + ": " + resultadoFinal);
}

// --- CASOS DE PRUEBA EXIGIDOS POR EL TALLER ---
// Caso 1: Probando con 3 usuarios/licencias (debe aplicar el descuento de la guía)[cite: 5, 7]
mostrarResumenApps();

// Caso 2: Cambiamos la variable 'cantidadUsuarios' a 1 para el segundo escenario[cite: 9]
cantidadUsuarios = 1;
mostrarResumenApps();