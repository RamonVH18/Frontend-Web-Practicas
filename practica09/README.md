# RESPUESTAS PRACTICA 9

### 1. ¿Qué línea del Service o del Controller tuvo que cambiar para que Clases hablara con MySQL?
    R: Solo se tuvo que cambiar la parte del inyeccion de dependencias, que en si no fue ni una linea completa.

---

### 2. ¿Por qué InscripcionesService no tuvo que cambiar ni una línea de las reglas de cupo y duplicados?
    R: Gracias al desacoplamiento, de esta forma todo funciona igual sin importar si proviene de memoria o de una base de datos.

---

### 3. ¿Por qué una interfaz no puede validar nada en tiempo de ejecución?
    R: Porque las interfaces no existen en tiempo de ejecucción por lo tanto no pueden validar nada.

---

### 4. ¿Qué código de estado responde y qué trae en el cuerpo?
    R: Responde un 400, y en el cuerpo trae la info de cada validación.

---

### 5. ¿Cuántas líneas quedó más corto el controlador?
    R: Que como con menos de 60 lineas. Lo cual fue un gran cambio

---

### 6. Si la respuesta llega en los dos casos, ¿quién bloquea realmente y a quién protege?
    R: Es el navegador el que bloquea esto con el fin de proteger el front end