# RESPUESTAS PRACTICA 4

### 1. Express manda los rechazos de un handler async directo al middleware de errores, sin try/catch en cada ruta. ¿Qué tendrían que agregar en cada ruta si esto no fuera así?
    R: Esto lo tendria que meter dentro de un bloque try catch para poder registrar y reenviar el error
---

### 2. ¿Por qué el servicio no lanza directamente un 409 en vez de EjemplarPrestadoError?
    R: Esto se hace para poder separar responsabilidades, el EjemplarPrestadoError es informacion de la capa de servicio, esta se ocupa traducir a la capa web

---

### 3. Si mañana agregaran una app móvil que también consume esta API, ¿qué archivos de esta práctica tendrían que tocar?
    R: Se podria decir que se ocupa cambiar principalmente la capa del Servidor.


