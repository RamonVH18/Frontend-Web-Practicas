# RESPUESTAS PRACTICA 10

## PARTE 1

### 1.- ¿Por qué el filtro atrapa la clase base y no cada error por separado?
    R: Porque al heredar de una misma clase base, un solo filtro captura cualquier error derivado. Esto evita duplicar código por cada excepción, unificando la respuesta y variando solo el código de error.
    

---

### 2.- ¿Por qué este middleware no podría decidir si un usuario tiene permiso para una ruta?
    R: Porque se ejecuta antes del handler de la ruta, por lo que todavía no conoce a qué rol o handler va destinada la petición.

---

### 3.- ¿Por qué la petición que responde 409 no aparece en ese registro?
    R: Porque el operador tap no se invoca si el handler lanza una excepción; la petición es interceptada antes por un ExceptionFilter.

---

### 4.- ¿Por qué este cambio rompe a cualquier cliente que ya estuviera usando la API?
    R: Porque cambia la estructura del JSON: la clave data pasa a estar anidada junto a meta, obligando al cliente a cambiar la ruta de acceso a los datos (de res a res.data).

---

### 5.- Si el servidor respondió en los dos casos, ¿quién bloquea y a quién protege?
    R: El navegador es quien bloquea el acceso a la respuesta para proteger al usuario (cliente web) de peticiones no autorizadas entre distintos orígenes.

---

## PARTE 2

### 1.- ¿Por qué el campo se llama passwordHash y no password?
    R: Por claridad declarativa: indica de forma explícita que se guarda el valor procesado por un algoritmo de hashing y no la contraseña en texto plano.

---

### 2.- ¿Por qué los dos errores del inicio de sesión dicen exactamente lo mismo?
    R: Por seguridad: evita revelar si un correo ya existe en el sistema, impidiendo que un atacante enumere usuarios válidos.

---

### 3.- Si el contenido se puede leer, ¿qué es lo que protege la firma?
    R: Protege la integridad del token, permitiendo al servidor validar con su clave secreta que la información no fue alterada en el trayecto.

---

### 4.- ¿Por qué es más seguro proteger todo y abrir a mano, que al revés?
    R: Por seguridad por defecto: evita que el desarrollador olvide proteger una ruta nueva por descuido y deje una vulnerabilidad abierta.

---

### 5.- ¿Cuál es la diferencia entre un 401 y un 403?
    R: El 401 indica que el usuario no está autenticado (se desconoce su identidad), mientras que el 403 significa que ya está autenticado pero no tiene permisos suficientes para ese recurso.

---

### 6.- ¿Cuántas líneas del AuthService tuvieron que cambiar para pasar de memoria a MySQL? ¿Por qué?
    R: Solo una línea en la configuración del módulo. Gracias a que AuthService depende de una interfaz (inversión de dependencias), NestJS inyecta la implementación concreta configurada sin modificar la lógica interna del servicio.

---

### 7.- ¿Por qué es importante tomar al usuario de los claims del token y no de un parámetro de la URL o del cuerpo? Da un ejemplo concreto de qué pasaría si la API confiara en algo como GET /miembros/3/inscripciones o en el miembroId del cuerpo sin compararlo contra el token. Explica qué claim se usa y por qué el cliente no puede falsificarlo
    R: Porque los datos de la URL o del cuerpo se pueden alterar fácilmente en la petición. Se utiliza el claim sub (subject), el cual no se puede falsificar porque cualquier modificación rompe la firma del JWT. Si se confiara en un miembroId del cuerpo o de la URL sin validarlo contra el sub, cualquier usuario autenticado podría cambiar ese número con herramientas como Postman para consultar o modificar información de otros usuarios.