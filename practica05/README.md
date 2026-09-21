# RESPUESTAS PRACTICA 5

### 1. ¿Qué generó el comando nest new?
    R: Genero los archivos necesarios para poder usar el api con NestJS
---

### 2. ¿Qué hace el AppService que ya viene generado?
    R: Devuelve el mensaje "Hello World"

---

### 3. ¿Por qué la ruta funciona sin declarar nada en app.module.ts?
    R: Porque el AppModule ya viene con el controlador integrado no es necesario asignarle uno

---

### 4. ¿Qué pasaría si el cuerpo de la petición viniera vacío?
    R: Se agregaria un objeto vacio al arreglo, es por ello que se debe hacer validaciones sin importar que estemos usando typescript.

---

### 5. ¿En qué archivo vive hoy toda la lógica de la práctica?
    R: Dentro del archivop app.controller.ts