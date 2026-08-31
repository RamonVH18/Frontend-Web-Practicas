type EstadoPrestamo = 'activo' | 'vencido' | 'devuelto';

interface Prestamo {
    folio: string;
    multa: number;
    ejemplar: number;
    estado: EstadoPrestamo;
    socio: String;
}

function calcularMulta(prestamo: Prestamo): number {
    const cargoFijo = 50;
    return prestamo.multa + cargoFijo;
}

function armarRecibo(prestamo: Prestamo) {  
    if (prestamo.estado === 'vencido') {
        return 'No se puede generar el recibo, el préstamo está vencido.';
    }
    return 'Recibo generado para el préstamo con folio: ' + prestamo.folio;
}

const prestamo: Prestamo = {
    folio: 'F001',
    multa: 350,
    ejemplar: 14, 
    estado: 'vencido',
    socio: 'Daniel Coronel'
};

console.log(calcularMulta(prestamo));
console.log(armarRecibo(prestamo));

// Ejemplo de uso con un préstamo el cual tiene un atributo de tipo incorrecto
const prestamoConError: Prestamo = { folio: 'F002', multa: 0, ejemplar: 5, estado: 'vencido', socio: 12345 };

// Ejemplo de uso con un préstamo con estado inválido
const prestamoInvalido: Prestamo = { folio: 'F003', multa: 50, ejemplar: 1, estado: 'cancelado', socio: 'Carlos' };

// Intento de calcular la multa con un objeto de tipo incorrecto
console.log(calcularMulta('F001'));