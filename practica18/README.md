# RESPUESTAS PRACTICA 17

### 1.- ¿Cuánto se ahorró y por qué el ahorro es pequeño en esta aplicación?
    R: Se ahorraron 0.8 kb el ahorro es pequeño porque es una apliicacion pequeño con pocos elementos. En aplicaciones mas grandes el ahorro es mayor.

---

### 2.- ¿Por qué falla la API si el preview corre en el puerto 4173?
    R: Esto debido a que la API tiene habilitado el CORS lo que evita que cualquier otro puerto que no sea el 5173 sea bloqueado por este.

---

### 3.- ¿Cuándo conviene un contexto y cuándo un store?
    R: El contexto sirve para repartir datos que casi no cambian a varios componentes a la vez, como la sesión del usuario. En cambio, un store conviene para administrar datos globales que cambian seguido, ya que actualiza solo las partes necesarias de la pantalla y evita volver a pedir información a la API que ya se había cargado.

---

