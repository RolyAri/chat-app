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
* Creación de usuarios y salas de chat.
* Envío y recepción de mensajes en tiempo real mediante WebSockets.
* Interfaz de usuario intuitiva y responsive.

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/RolyAri/chat-app.git
2. **Instala las dependencias del servidor:**
   ```bash
   cd chat-app-server
   yarn install

3. **Instala las dependencias del cliente:**
   ```bash
   cd chat-app-client
   yarn install

4. **Configura las variables de entorno:**
     * **Crea un archivo .env en la carpeta server y define las siguientes variables:.**
   ```bash
   DATABASE_URL="mysql://usuario:contraseña@localhost:3306/nombre_de_la_base_de_datos"
   JWT_SECRET="tu_clave_secreta_para_jwt"
5. **Ejecuta las migraciones de Prisma:**
   ```bash
   npx prisma migrate dev
6. **Inicia el servidor:**
   ```bash
   yarn dev
7. **Inicia el servidor:**
   ```bash 
   cd chat-app-client
   yarn dev
## Uso

1. **Regístrate:** Crea una cuenta con tu nombre de usuario y contraseña.
2. **Inicia sesión:** Obtén un token JWT que te autentica en la aplicación.
3. **Accede a una sala de chat** Dirigete sobre un contacto y accede al chat.
4. **Envía mensajes** a otros usuarios en la sala.
5. **Recibe mensajes** cuando otro usuario te envíe un nuevo mensaje.

## Contribución

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu feature o corrección de error.
3. Realiza tus cambios y crea un commit con un mensaje descriptivo.
4. Envía un pull request a la rama principal del repositorio.


## Contacto

[Roly Ari] - [rolyari09@gmail.com]
