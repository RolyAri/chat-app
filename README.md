# Chat en tiempo real con GraphQL, React y Prisma

Este proyecto implementa una aplicación de chat en tiempo real con autenticación JWT, utilizando las siguientes tecnologías:

* **GraphQL:** Para la API y la gestión de datos.
    * **Apollo Server:**  Para crear la API GraphQL en el servidor, incluyendo _queries_, _mutations_ y _subscriptions_.
    * **Apollo Client:**  Para consumir la API GraphQL en el cliente React.
* **Express:** Framework de Node.js para el servidor.
* **React:** Librería de JavaScript para la interfaz de usuario.
* **MySQL:** Base de datos para almacenar los mensajes y la información de los usuarios.
* **Prisma:** ORM para facilitar la interacción con la base de datos.
* **JWT (JSON Web Tokens):** Para la autenticación segura de usuarios.
* **WebSockets:** Para la comunicación en tiempo real a través de _subscriptions_ de GraphQL.


## Características principales

* **Autenticación de usuarios con JWT:**  Login seguro con generación y validación de tokens.
* Creación de salas de chat.
* Envío y recepción de mensajes en tiempo real mediante WebSockets.
* Notificaciones de nuevos mensajes.
* Interfaz de usuario intuitiva y responsive.

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/RolyAri/chat-app.git
