# RESPUESTAS PRACTICA 1 

### 2.- ¿Hubo algún error, alguna advertencia o algo en la consola que avisara?
  R: No, no aparecio ninguna advertencia ni en el codigo ni al correrlo.

---

### 3.- Si el archivo tiene un error de tipos, ¿por qué node lo ejecuta? ¿Cuál comando revisa y cuál ejecuta?
  R: Porque en tiempo de ejecuccion node lo lee como javascript, typescript solo existe en el codigo antes de compilar. El comando para revisar sin ejecutarlo es este: "npx tsc --noEmit" y si se usa asi "npx tsc" lo ejecuta.

---

### 4.- De las dos líneas que usan const, ¿por qué sólo una falla?
  R: Esto debido a que la primera sirve para declarar la constante, pero no se puede definir otra constante con el mismo nombre ni cambiar su valor una vez creada.

---

### 4.1.- Al asignarle un texto a la variable con let, nadie escribió que fuera un número. ¿De dónde salió ese tipo?
  R: Se le asigno el tipo number debido a que fue el tipo del valor que se le asigno. Typescript no ocupa declarar el tipo, porque ya sabe cual es, el mismo lo declara.

