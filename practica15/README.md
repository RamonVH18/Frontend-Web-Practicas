# RESPUESTAS PRACTICA 15

### 1.- ¿Por qué el 404 sí tiene encabezado y pie?

    R: R: Porque la ruta del error 404 está definida dentro del mismo componente o plantilla principal que contiene el <Header/> y el <Footer/>. Al ser renderizada dentro de esta estructura compartida, hereda automáticamente el encabezado y el pie de página de la aplicación.

---

### 2.- ¿Qué cambia en la pestaña Red si usas <a href> en lugar de Link? 
    R: Con <a href>: El navegador realiza una recarga completa de la página. En la pestaña Red verás que se vuelven a solicitar desde cero todos los archivos HTML, scripts de JavaScript, hojas de estilo CSS y recursos estáticos.

Con <Link> (React Router / Next.js): Se realiza una navegación del lado del cliente (Client-Side Routing). No se recarga la página; en la pestaña Red solo verás solicitudes asíncronas de datos (como llamadas a APIs o carga diferida de módulos JS), conservando el estado global de la aplicación.

---

### 3.- ¿En qué tipo de dato llega el id de la URL y qué pasa si no lo conviertes?

    R: El id que se obtiene de los parámetros de la URL siempre llega como un tipo de dato string.

---

### 4.- ¿Qué pasa al ir de /clases/1 a /clases/2 si el id no está en las dependencias del efecto?

    R: El efecto (useEffect) no se volverá a ejecutar. La URL cambiará a /clases/2, pero el componente mantendrá y mostrará la información cargada originalmente para la clase 1, ya que React solo reejecuta el efecto si alguna de las variables declaradas en su arreglo de dependencias sufre un cambio.

---
