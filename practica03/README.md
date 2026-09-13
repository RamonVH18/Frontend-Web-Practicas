# RESPUESTAS PRACTICA 3

### 1. ¿Hizo falta una base de datos real para probar la regla de negocio? ¿Qué dice eso sobre para qué sirve el patrón Repository?
    R: No hizo falta una base de datos real, esto es gracias al patron repository. Pudimos usar un mock de la base de datos y el servicio ni siquiera se dio cuenta gracias al desacoplamiento.

---

### 2. El Service recibe el repositorio como Repository<Prestamo>, no InMemoryPrestamoRepository. ¿Qué se rompía si usaban la clase concreta?
    R: Esto haria que el servicio y el repositorio quedaran acoplados, lo que haria que cualquier modificacion en en el repositorio afectaria al servicio y obligaria a modificarlo de igual forma.

---

### 3. Si cambiaran el Map en memoria por una base de datos real, ¿cuántos archivos tocarían? ¿Por qué tan pocos?
    R: Pues realmente solo se modificaria un archivo que fuese el que actuari como repositrio, esto con el fin de que sirva como conexion con la base de datos. Son muy pocos porque el servicio no conoce al repositorio solo ve lo su interfaz y es con quien se comunica.
