# aleho-dev-backend

¡Bienvenido al backend de aleho-dev! Esta es una plantilla robusta y escalable para construir la base de tus aplicaciones.

## 📑 Tabla de Contenidos

- [aleho-dev-backend](#aleho-dev-backend)
  - [📑 Tabla de Contenidos](#-tabla-de-contenidos)
  - [🧐 Sobre el Proyecto](#-sobre-el-proyecto)
  - [🚀 Empezando](#-empezando)
    - [Prerequisites](#prerequisites)
    - [Instalación](#instalación)
  - [🛠️ Uso](#️-uso)
    - [Scripts Disponibles](#scripts-disponibles)
  - [✨ Características](#-características)
  - [📂 Estructura del Proyecto](#-estructura-del-proyecto)
  - [💻 Tecnologías Utilizadas](#-tecnologías-utilizadas)
  - [📖 Endpoints de la API](#-endpoints-de-la-api)
    - [Usuarios](#usuarios)
    - [Chatbot](#chatbot)
    - [Server](#server)
  - [🤝 Contribuciones](#-contribuciones)
  - [📞 Contacto](#-contacto)

## 🧐 Sobre el Proyecto

Este proyecto es una plantilla de backend diseñada para ser el punto de partida de cualquier aplicación web. Proporciona una arquitectura sólida con funcionalidades esenciales como autenticación de usuarios, gestión de datos y una API documentada.

## 🚀 Empezando

Sigue estos pasos para tener el backend funcionando en tu entorno local.

### Prerequisites

*   **Node.js y pnpm:** Asegúrate de tener instaladas las últimas versiones. Puedes descargarlas desde [nodejs.org](https://nodejs.org/).
*   **Un editor de código:** Visual Studio Code, Sublime Text, o tu preferido.

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/Aleho84/aleho-dev-backend.git
    ```

2.  **Instala las dependencias:**
    ```bash
    pnpm install
    ```

3.  **Configura las variables de entorno:** Crea un archivo `.env` en la raíz del proyecto y complétalo con la información necesaria. Puedes usar el archivo `example.env` como guía.
    ```bash
    # .env Example
    NODE_ENV=development
    PROTOCOL=http
    HOST=localhost
    PORT=8080
    KEY=./certificates/key.pem
    CERT=./certificates/cert.pem

    COOKIE_SECRET=cookiesecret-replaceme
    JWT_SECRET=jwtsecret-replaceme

    CORS={ "origin": "*", "methods": ["GET, POST, PUT, DELETE, OPTIONS"] }

    DB_MODE=mongoDB
    MONGOOSE_URI=mongodb://localhost:27017/dev
    ```

4.  **Inicia el servidor:**
    ```bash
    pnpm start
    ```

5.  **¡Disfruta de la API!** 🎉 La documentación de Swagger estará disponible en `http://localhost:8080/api/v1/docs/`.

## 🛠️ Uso

### Scripts Disponibles

En el `package.json`, encontrarás varios scripts para facilitar el desarrollo:

*   `pnpm dev`: Inicia el servidor en modo de desarrollo con `nodemon`, que reinicia automáticamente el servidor al detectar cambios.
*   `pnpm start`: Inicia el servidor en modo de producción.
*   `pnpm test`: Ejecuta los tests de la aplicación con Mocha.
*   `pnpm update`: Actualiza las dependencias del proyecto.
*   `pnpm build-doker`: Construye la imagen de Docker para la aplicación.

## ✨ Características

*   **Autenticación JWT:** Sistema de autenticación seguro basado en JSON Web Tokens.
*   **API RESTful:** Una API bien estructurada para una fácil integración con el frontend.
*   **Documentación con Swagger:** Documentación interactiva de la API para facilitar las pruebas y el desarrollo.
*   **Contenerización con Docker:** Listo para ser desplegado en contenedores.
*   **Logging:** Sistema de logs con Winston para un seguimiento detallado de los eventos.

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular para mantener el código organizado y escalable:

```
aleho-dev-backend/
├── config/         # Configuración (variables de entorno, Passport, logs)
├── controllers/    # Controladores (lógica de peticiones y respuestas)
├── db/             # Lógica de acceso a la base de datos
├── docs/           # Documentación de Swagger
├── middlewares/    # Middlewares de Express
├── models/         # Esquemas de la base de datos (Mongoose)
├── public/         # Archivos estáticos (CSS, imágenes)
├── routes/         # Definición de rutas de la API
├── services/       # Lógica de negocio
├── test/           # Archivos de testing
├── utils/          # Funciones de utilidad (bcrypt, mailer)
├── views/          # Plantillas de EJS
├── app.js          # Punto de entrada de la aplicación
├── Dockerfile      # Definición del contenedor de Docker
└── package.json    # Dependencias y scripts del proyecto
```

## 💻 Tecnologías Utilizadas

*   **Node.js:** Entorno de ejecución de JavaScript.
*   **Express.js:** Framework para construir APIs web.
*   **MongoDB:** Base de datos NoSQL.
*   **Mongoose:** ODM para MongoDB.
*   **Passport.js:** Middleware de autenticación.
*   **JWT:** JSON Web Tokens para autenticación.
*   **EJS:** Motor de plantillas.
*   **Swagger:** Documentación de API.
*   **Docker:** Plataforma de contenerización.
*   **Mocha & Chai:** Librerías para testing.
*   **Winston:** Librería para logging.

## 📖 Endpoints de la API

La API está documentada con Swagger y se puede explorar interactivamente en `http://localhost:8080/api/v1/docs/`.

### Usuarios

| Método | Ruta                      | Descripción                      |
| :----- | :------------------------ | :------------------------------- |
| POST   | /api/v1/users/signin      | Registrar un nuevo usuario.      |
| POST   | /api/v1/users/login       | Iniciar sesión.                  |
| DELETE | /api/v1/users/:userId     | Eliminar un usuario por ID.      |
| GET    | /api/v1/users/list        | Obtener una lista de todos los usuarios. |
| PUT    | /api/v1/users/:userId     | Modificar un usuario por ID.     |
| POST   | /api/v1/users/:userId/activation-code | Solicitar un nuevo código de activación. |

### Chatbot

| Método | Ruta                       | Descripción                     |
| :----- | :------------------------- | :------------------------------ |
| GET    | /api/v1/chatbot/list       | Obtener una lista de todos los chatbots. |
| POST   | /api/v1/chatbot/new        | Crear un nuevo chatbot.         |
| PUT    | /api/v1/chatbot/:chatBotId | Modificar un chatbot por ID.    |
| DELETE | /api/v1/chatbot/:chatBotId | Eliminar un chatbot por ID.     |

### Server
| Método | Ruta                         | Descripción                     |
| :----- | :--------------------------- | :------------------------------ |
| GET    | /api/v1/server/SystemInfo    | Obtener información del sistema.|
| GET    | /api/v1/server/systemProcess | Obtener información sobre los procesos del sistema.|
| PUT    | /api/v1/server/isOnline      | Verificar si una puerto de una determinada IP esta activo.|


## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar este proyecto, por favor, haz un fork del repositorio, realiza tus cambios y crea un pull request.

## 📞 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme.

*   **Email:** alejandro.r.abraham@gmail.com
*   **GitHub:** [Aleho84](https://github.com/Aleho84)
