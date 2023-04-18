# Pokedex

¡Bienvenido a Pokedex! Esta es una aplicación web desarrollada con Node.js, Express y JavaScript que utiliza la API de Pokemon para mostrar información detallada sobre distintos pokemones. La aplicación utiliza el patrón de diseño Modelo-Vista-Controlador (MVC) para una organización y estructura de código eficientes.

## Características

- Lista de pokemones: La aplicación muestra una lista de pokemones obtenidos a través de la API de Pokemon, con su nombre, imagen y número de pokedex.
- Detalles del pokemon: Al hacer clic en un pokemon de la lista, se muestran los detalles del pokemon, incluyendo su imagen, tipo, habilidades, evoluciones y más.
- Búsqueda de pokemones: Se puede buscar pokemones por su nombre en la barra de búsqueda, lo que permite a los usuarios encontrar rápidamente su pokemon favorito.
- Rutas parametrizadas: La aplicación utiliza rutas parametrizadas para manejar las diferentes vistas de los pokemones y sus detalles, lo que permite una navegación suave y amigable para el usuario.

## Tecnologías utilizadas

- Node.js: Plataforma de JavaScript que permite ejecutar código JavaScript en el servidor.
- Express: Framework de Node.js que facilita la creación de aplicaciones web y la implementación de rutas.
- JavaScript: Lenguaje de programación utilizado para el desarrollo del frontend y backend de la aplicación.
- API de Pokemon: API pública que proporciona información sobre los pokemones, incluyendo sus detalles, habilidades, evoluciones, entre otros.

## Estructura del código

La aplicación sigue el patrón de diseño Modelo-Vista-Controlador (MVC) para una organización eficiente del código. La estructura del código se organiza de la siguiente manera:

- **Modelo**: La carpeta "models" contiene los modelos de datos que definen la estructura y comportamiento de los pokemones y sus detalles. Estos modelos son utilizados para interactuar con la API de Pokemon y manejar los datos obtenidos.
- **Vista**: La carpeta "views" contiene las plantillas de vistas en formato EJS (Embedded JavaScript), que son utilizadas para renderizar el contenido HTML que se muestra en el navegador. Estas vistas muestran la lista de pokemones, los detalles de un pokemon y la barra de búsqueda.
- **Controlador**: La carpeta "controllers" contiene los controladores que manejan las peticiones HTTP realizadas por los usuarios. Estos controladores interactúan con los modelos y las vistas para obtener los datos necesarios y renderizar las vistas correspondientes.

## Instalación

Para instalar y ejecutar la aplicación en tu entorno local, sigue estos pasos:

1. Clona el repositorio de la aplicación desde [URL del repositorio].
2. Abre la terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias necesarias.
4. Ejecuta el comando `node app.js` para iniciar la aplicación.
5. Abre tu navegador y accede a `http://localhost:3000` para ver la aplicación en funcionamiento.

¡Listo! Ahora puedes explorar la Pokedex y obtener información detallada sobre tus pokemones favoritos.

Espero que disfrutes
