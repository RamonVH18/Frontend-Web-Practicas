# RESPUESTAS PRACTICA 8

### 1. ¿Por qué el paquete del adaptador se llama adapter-mariadb si usamos MySQL?
    R: Porque prisma usa el controlador de mariadb esto debido a que es el que funciona para node.js, y como mariadb y MySQL usan la misma base, se puede usar sin problemas.

---

### 2. ¿Editar schema.prisma cambió algo en la base de datos antes de migrar?
    R: No, solo me cambio hasta que migre la base de datos.

---

### 3. ¿La carpeta de migraciones es una foto del esquema o un historial?
    R: Es mas del tipo historial, marca un historial de las consultas hechas en estilo SQL.

---

### 4. ¿Por qué Horario.clase sí crea columna y Clase.horarios no?
    R: Esto es porque la unica que crea columna es donde esta la llave foranea. Del otro lado la linea horarios[], solo sirve para que prisma pueda hacer la relacion correctamente.

---

### 5. ¿De dónde sale la relación de muchos a muchos entre Miembro y Horario, si nunca se declaró?
    R: Esto es debido a que inscripcion esta en medios de ellas.