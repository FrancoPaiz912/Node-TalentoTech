# API REST - Gestión de Productos

Proyecto realizado en el marco del curso **Talento Tech**, donde se desarrolla una API REST utilizando **Node.js y Express**, implementando una arquitectura por capas y conexión con una base de datos en la nube mediante **Firebase Firestore**.

## Descripción

La aplicación permite gestionar productos mediante operaciones CRUD (crear, consultar y eliminar), utilizando una estructura organizada en rutas, controladores, servicios y modelos.

Además, cuenta con un sistema de autenticación mediante **JWT (JSON Web Token)** para proteger las rutas de la API y permitir el acceso mediante un **Bearer Token**.

## Tecnologías utilizadas

* Node.js
* Express.js
* Firebase Firestore
* JWT (JSON Web Token)
* dotenv
* CORS
* Body Parser
* JavaScript ES Modules

## Arquitectura del proyecto

El proyecto está organizado siguiendo una arquitectura por capas:

```
src/
│
├── config/
│   └── firebase.js
│
├── controllers/
│   ├── products.controller.js
│   └── auth.controller.js
│
├── services/
│   ├── products.service.js
│   └── auth.service.js
│
├── models/
│   └── products.model.js
│
├── routes/
│   ├── products.routes.js
│   └── auth.routes.js
│
├── middlewares/
│   └── auth.middleware.js
│
└── index.js
```

## Funcionalidades

### Productos

Endpoints disponibles:

| Método | Endpoint               | Descripción                 |
| ------ | ---------------------- | --------------------------- |
| GET    | `/api/products`        | Obtiene todos los productos |
| GET    | `/api/products/:id`    | Obtiene un producto por ID  |
| POST   | `/api/products/create` | Crea un nuevo producto      |
| DELETE | `/api/products/:id`    | Elimina un producto         |

### Autenticación

Endpoint:

| Método | Endpoint      | Descripción                                     |
| ------ | ------------- | ----------------------------------------------- |
| POST   | `/auth/login` | Autentica un usuario y devuelve un Bearer Token |

Ejemplo de autenticación:

```json
{
    "email": "admin@correo.com",
    "password": "1234"
}
```

Respuesta:

```json
{
    "message": "Login exitoso",
    "token": "Bearer <token>"
}
```

## Configuración del proyecto

Instalar dependencias:

```bash
npm install
```

Crear un archivo `.env`:

```env
PORT=3000
SECRET_KEY=clave_secreta
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```

Ejecutar el servidor:

```bash
node index.js
```

## Pruebas

Los endpoints pueden probarse utilizando herramientas como:

* Postman
* Thunder Client
* Insomnia

Para acceder a las rutas protegidas se debe enviar el token obtenido en el login mediante el header:

```
Authorization: Bearer <token>
```

## Autor

Proyecto desarrollado como parte del curso **Talento Tech**.
# Node-TalentoTech
API REST de gestión de productos con Node.js, Express, Firebase Firestore, JWT y separación de responsabilidades.
