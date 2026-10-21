# RESPUESTAS PRACTICA 13

### 1.- ¿Por qué el Layout no necesita saber que es una tienda?
    R: Porque el Layout debe cumplir con su unica responsabilidad que es el servir de plantilla para cualquier parte del sistema donde sea utilizado, no debemos amarrarlo a que unicamente servira para el apartado de la tienda.

---

### 2.- ¿Qué pasa si escribes onClick={onAgregar(producto)} sin la flecha?
    R: La función onAgregar(producto) se ejecutará inmediatamente durante el renderizado del componente en lugar de esperar a que el usuario haga clic. Y esto generara muchos renderizados y esto quemara la pagina.

---

### 3.- ¿Por qué con carrito.push(...) el contador no se mueve y no sale ningún error?
    R: Porque .push() muta (modifica) el arreglo original directamente en memoria, lo que rompe la regla de inmutabilidad de React.

---

