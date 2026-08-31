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

