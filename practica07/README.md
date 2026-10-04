# RESPUESTAS PRACTICA 7

### 1. ¿Por qué esta interfaz no menciona Express, NestJS ni memoria?
    R: Porque no debe de saberlo, practicamente no debe rebelar con que se trabaja solo debe decir que reglas de negocio esta aplicando a si sin un dia cambiamos Express, NestJS o usamos una base de datos. Quienes consuman la interfaz ni se enteran.

---

### 2. ¿Qué palabra de esa clase es la que promete cumplir la interfaz del paso anterior?
    R: Porque se diseñan pensando en cómo funcionará el sistema en producción y no solo en la prueba local. Casi cualquier base de datos real maneja operaciones asíncronas, así que dejar las promesas desde el inicio permite que el servicio use async/await de forma natural. Si mañana se migra de un arreglo en memoria a una base de datos externa, no hay que reescribir ni tocar la lógica del servicio.

---

### 3. ¿Por qué este archivo no sabe qué es una petición HTTP?
    R: La palabra reservada implements. Con ella, el compilador de TypeScript verifica y exige en tiempo de compilación que la clase contenga todos los métodos y propiedades definidos por la interfaz.

---

### 4. ¿Por qué el Service se inyecta sin token en el Controller, y el repositorio sí necesita uno?
    R: Porque su responsabilidad se limita a la lógica de negocio o de aplicación, manteniéndose agnóstico al protocolo de transporte. El encargado de lidiar con peticiones, respuestas y códigos de estado HTTP es el Controlador. Al desacoplar el servicio de HTTP, este puede ser consumido más adelante por otros canales (como eventos, colas de mensajes, CLI o WebSockets) sin modificar su código.

---

### 5. ¿Qué prueba, en los hechos, que agregar Miembros no rompió nada de Inscripciones?
    R: Porque el servicio es una clase concreta, por lo que sigue existiendo en tiempo de ejecución tras la compilación de TypeScript a JavaScript. NestJS aprovecha esto para usar la referencia de la propia clase como token de inyección implícito en el constructor. Por el contrario, el repositorio se define como una interfaz, la cual sufre de type erasure (desaparece al compilar a JS); por ello, NestJS no puede deducir qué inyectar y requiere un token explícito (como @Inject('REPO_TOKEN')) para resolver la dependencia.