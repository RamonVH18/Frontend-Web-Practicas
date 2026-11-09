# RESPUESTAS PRACTICA 17

### 1.- ¿La ruta protegida hace segura la aplicación? ¿Qué es lo que de verdad protege los datos?
    R:No la ruta protegida no protege la aplicación, lo que protege la aplicación es el JWT enviado en el Header de la aplicación. Esto es debido a que el front se corre en el dispositivo de un usuario y el usuerio podria modificarlo para usarlo de mala forma.

---

### 2.- ¿Por qué no se manda el miembroId al inscribirse?
    R: Porque un usuario malintencionado podria usar ese miembroId para inscribirlo a otras clases o cambiarlo e inscribir a otra persona.

---

### 3.- ¿Qué diferencia hay entre un 401 y un 403?
    R: El 401 es cuando no existe o no estan autorizadas las credenciales del usuario. Se usa cuando aun no se loguean o se loguean mal, es un no se quien eres.

    Mientras que el 403 es cuando el usuario se registra, esta todo bien con su cuenta y todo pero no tiene permiso para hacer una accion en concreto, es un si se quien eres pero no tienes permiso para hacer eso.

---

