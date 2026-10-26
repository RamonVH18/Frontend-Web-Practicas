# RESPUESTAS PRACTICA 13

### 1.- ¿Por qué en la pestaña Red salen dos peticiones al cargar?
    R: Eso se debe a que React realiza la accion del montaje dos veces esto con el fin de detectar efectos secundarios.

---

### 2.- ¿Qué pasa si quitas el arreglo de dependencias del efecto? 
    R: Pues se ejecutarian varias veces la peticion de setProductos y en la pestaña Red es donde se verian estos cambios al mostrar varias peticiones.

---

### 3.- ¿Qué hace e.preventDefault() y qué pasa si lo quitas?

    R: Se detiene la accion nativa de los navegadores para recargar la pagina en automatico, con esto podemos encargarnos con puro codigo javascript.

---

