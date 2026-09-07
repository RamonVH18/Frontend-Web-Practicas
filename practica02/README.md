# RESPUESTAS PRACTICA 2

### 2.- ¿Por qué una unión de valores y no una enumeración?
    R: Esto debido a que pesan menos y que tienen mayor compatibilidad con valores provinientes de otros lenguajes como JSON. Ademas de que Typescript tarda mas en usar los enums. 

---

### 3.- ¿Qué se gana con el tipo desconocido en lugar del que acepta todo?
    R: Any hace que toda la ventaja de Typescript se deseche, por otro lado unknown lo unico que hace es que prohibe usar ese objeto hasta que se le asigne un tipo de objeto con la funcion typeof

---

### 4.- ¿Por qué la fecha entra como parámetro?
    R: Facilita pruebas y aparte evita que se generen distintas fechas.