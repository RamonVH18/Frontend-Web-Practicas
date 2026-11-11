# RESPUESTAS PRACTICA 19

### 1.- ¿Qué archivo de Angular hace el papel de main.tsx, de App.tsx y de vite.config.ts?
    R:  * main.tsx -> main.ts: Es el punto de entrada de la aplicación donde se arranca (bootstrap) el componente principal.
        * App.tsx -> app.component.ts (y app.component.html): Es el componente raíz (Root Component) de la aplicación sobre el que se monta la interfaz.
        * vite.config.ts -> angular.json: Es el archivo de configuración global del proyecto donde se definen las opciones de compilación, estilos y rutas de assets.

---

### 2.- ¿Por qué clase() lleva paréntesis y para qué sirve track?
    R:  * clase() lleva paréntesis porque es un Signal. Al ser una función reactiva, invocarla con () lee su valor actual y suscribe automáticamente la plantilla a sus cambios.
        * track sirve para identificar de forma única cada elemento dentro de un bucle @for (igual que la propiedad key en React), lo que permite a Angular optimizar el renderizado del DOM al modificar la lista.

---



