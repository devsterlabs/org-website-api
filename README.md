# Devster API
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/devsterlabs/org-website-api.git
   cd org-website-api/
   
2.  **Install dependencies:**

    ```bash
    npm install`

3.  **Configure environment variables:**

    Create a `.env` file in the root directory and define environment-specific variables as needed.

    ```plaintext
    MONGO_URI=mongodb://localhost:27017/mydb
    JWT_SECRET=your_secret_key

3.  **Start the server:**

    ```bash
    npm start

* * * * *

Usage
-----
To use this API, make sure MongoDB is running locally or provide a remote MongoDB URI in the `.env` file. After cloning the repository and installing dependencies, start the server using `npm start`. Use tools like Postman to interact with the API endpoints.

* * * * *

Endpoints
---------

## Login Endpoints

### `POST /login`
- **Description**: Authenticate user and generate token.
- **Controller Method**: `login` in `LoginController`.

---

## Client Endpoints

### `GET /client`
- **Description**: Retrieves all clients.
- **Controller Method**: `getAll` in `ClientController`.

### `GET /client/:title`
- **Description**: Retrieves a client by title.
- **Controller Method**: `get` in `ClientController`.

### `POST /client`
- **Description**: Creates a new client.
- **Controller Method**: `post` in `ClientController`.

### `DELETE /client/:id`
- **Description**: Deletes a client by ID.
- **Controller Method**: `delete` in `ClientController`.

---

## File Endpoints

### `GET /file/:id`
- **Description**: Retrieves a file by ID.
- **Controller Method**: `getById` in `FilesController`.

### `POST /file`
- **Description**: Uploads a file.
- **Controller Method**: `upload` in `FilesController`.

### `PUT /file/:id`
- **Description**: Updates a file by ID.
- **Controller Method**: `update` in `FilesController`.

---

## Reviews Endpoints

### `GET /reviews`
- **Description**: Retrieves all reviews.
- **Controller Method**: `getAll` in `ReviewsController`.

### `GET /reviews/:id`
- **Description**: Retrieves a review by ID.
- **Controller Method**: `getById` in `ReviewsController`.

### `POST /reviews`
- **Description**: Creates a new review.
- **Controller Method**: `post` in `ReviewsController`.

### `PUT /reviews/:id`
- **Description**: Updates a review by ID.
- **Controller Method**: `update` in `ReviewsController`.

### `DELETE /reviews/:id`
- **Description**: Deletes a review by ID.
- **Controller Method**: `delete` in `ReviewsController`.

---

## Services Endpoints

### `GET /services`
- **Description**: Retrieves all services.
- **Controller Method**: `getAll` in `ServicesController`.

### `GET /services/:id`
- **Description**: Retrieves a service by ID.
- **Controller Method**: `getById` in `ServicesController`.

### `POST /services`
- **Description**: Creates a new service.
- **Controller Method**: `post` in `ServicesController`.

### `PUT /services/:id`
- **Description**: Updates a service by ID.
- **Controller Method**: `update` in `ServicesController`.

### `DELETE /services/:id`
- **Description**: Deletes a service by ID.
- **Controller Method**: `delete` in `ServicesController`.

---

## Subscribers Endpoints

### `GET /subscribers`
- **Description**: Retrieves all subscribers.
- **Controller Method**: `getAll` in `SubscribersController`.

### `POST /subscribers`
- **Description**: Creates a new subscriber.
- **Controller Method**: `post` in `SubscribersController`.

### `DELETE /subscribers/:id`
- **Description**: Deletes a subscriber by ID.
- **Controller Method**: `delete` in `SubscribersController`.

---

## Team Endpoints

### `GET /team`
- **Description**: Retrieves all team members.
- **Controller Method**: `getAll` in `TeamController`.

### `GET /team/:id`
- **Description**: Retrieves a team member by ID.
- **Controller Method**: `getById` in `TeamController`.

### `POST /team`
- **Description**: Creates a new team member.
- **Controller Method**: `post` in `TeamController`.

### `PUT /team/:id`
- **Description**: Updates a team member by ID.
- **Controller Method**: `update` in `TeamController`.

### `DELETE /team/:id`
- **Description**: Deletes a team member by ID.
- **Controller Method**: `delete` in `TeamController`.

* * * * *

Authentication
--------------


-   **JWT Authentication**
    -   Include a valid JWT token in the `Authorization` header for protected routes.

* * * * *

Technologies Used
-----------------

List of technologies/frameworks/libraries used in the project.

-   Node.js
-   Express.js
-   MongoDB (Mongoose)
-   bcryptjs
-   JSON Web Tokens (JWT)

* * * * *