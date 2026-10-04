# RESPUESTAS PRACTICA 6

### 1. ¿Qué pasaría si el módulo no quedara registrado en la raíz?
    R: No arrancaria, debido a que el modulo no seria detectado correctamente.

---

### 2. ¿Por qué los métodos del repositorio devuelven promesas si los datos van a estar en memoria?
    R: Por que el acceso a las bases de datos es asincrono, ademas de ello. Esto favorece a la construccion modular, evitando un acoplamiento innecesario si en algun futuro se quiere agregar una base de datos real.

---

### 3. ¿Qué error apareció al cambiar a la interfaz, y por qué la clase sí se había resuelto sola?
    R: El error que aparecio fue el de UnknownDependenciesException, la razon fue que. Esto debido a que NestJS no puede solucionar los problemas de dependencias, y es por esto que utilizamos una inyeción utilizando el comando inject().

---

### 4. ¿Por qué el servicio necesita un token para el repositorio, pero el controlador no lo necesita para el servicio?
    R: Esto es para que NestJS sepa que clase en concreto debe de instancia, por otro lado el controlador inyecta esta clase el mismo en su constructor.

---

### 5. ¿Cuál es la diferencia entre un 400 y un 409?
    R: El 400 salta, cuando se quiere ingresar un objeto con datos invalidos o un objeto invalido en general. Mientras que el 409 sale cuando hay un problema con un recurso en especifico, ejemplo si se quiere inscribir a alguien en una clase en la que ya esta o en otra que le causa conflicto.

---

### 6. ¿Por qué cambió el código de estado de esa última petición?
    R: Porque al cancelar la inscripcion se libero un cupo y por ello se podia inscribir a el en otra clase.