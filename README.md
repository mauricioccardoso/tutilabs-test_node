# User Management

API for user management built in Node.js and Express, using the DDD (Domain-Driven Design) architecture.

### Technologies Used

- [Node](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Typeorm](https://typeorm.io/)
- [Docker e Docker Compose](https://www.docker.com/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)
- And more...

### Requirements

- [Node e NPM - v^18](https://nodejs.org/en)
- [MySQL](https://www.mysql.com/)

or

- [Docker and Docker Compose](https://www.docker.com/)

### Project Architecture

The project is developed using the DDD (Domain-Driven Design) architecture.

### Techniques and Tools

- DDD - Domain Driven Design
- SOLID Principles
- Docker
- Code Reusability
- And more...

---

## Routes

Base url: http://localhost:3333

- Create User
  - Route: ***POST*** /users
  - Body
    
    ```bash
      {
        "nome": "test",
        "cpf": "00000000000",
        "setor": "test",
        "email": "test@mail.com",
        "senha": "123"
      }
    ```

- Login
  - Route: ***POST*** /login
  - Body

    ```bash
      {
        "email": "test2@mail.com",
        "senha": "12345"
      }
    ```

- List Users
  - Route: ***GET*** /users
  - Headers: Authorization: Bearer {token} 


- List Users By Setor
  - Route: ***GET*** /users?setor=test
  - Headers: Authorization: Bearer {token}


- List Users By CFP
  - Route: ***GET*** /users/:cpf
  - Headers: Authorization: Bearer {token}


- Update User
  - Route: ***PUT*** /users
  - Headers: Authorization: Bearer {token}
  - Body

    ```bash
      {
        "email": "test2@mail.com",
        "senha": "12345"
      }
    ```


- Delete User
  - Route: ***DELETE*** /users/:id
  - Headers: Authorization: Bearer {token}

### Observations:

- When the user logs in, the API will provide an authentication token that must be sent in the header to validate the user when making requests to routes, except for the creation and login routes.

- The update, list, and delete routes should receive the token for user authentication.

- The project contains a file named "tutiplast_Insomnia_2023-10-29" with all the pre-configured routes, which can be imported into the Insomnia application. You only need to adjust some varying data.

---

## Configuration

1. Clone the project to your machine

```bash
git clone https://github.com/mauricioccardoso/tutilabs-test_node.git
```

1.1 If you have Docker and Docker Compose configured on your machine, proceed to [Docker and Docker Compose](#docker-and-docker-compose-configuration).
If you don't have Docker, continue to the configuration below.

2. Access the project's root folder and navigate to the app folder

```bash
cd tutilabs-test_node/backend
```

3. Install dependencies

```bash
npm install
```

4. Wait for the project dependencies to be installed

5. After generating and configuring your database. Configure the variables related to the database in the ormconfig.json file


6. Execute the migration command

```bash
npm run typeorm migration:run
```

7. Start the backend development server

```bash
npm run dev
```

8. After configuring the database and the development server is up, use a tool like Insomnia to test the API. Use the route:

```bash
http://localhost:3333
```

### Docker and Docker Compose Configuration

1. After cloning the project, navigate to the project's root folder from the terminal or in the text editor or IDE terminal
   
2. Use the following command to start the containers and wait for the completion.

```bash
docker compose up -d
```

or, to start the containers and check the logs in case of an error

```bash
docker compose up -d && docker compose logs -f
```

4. Once the containers are ready, use a tool like Insomnia to test the API. Use the route:

```bash
http://localhost:3333
```

---



## Contribution

- ***[Maurício Erick da Costa Cardoso](https://portfolio-mauricio-cardoso.vercel.app/home)***

    - FullStack Developer - ***PHP LARAVEL VUE.js TYPESCRIPT NODE.js DOCKER TAILWIND BOOTSTRAP MYSQL POSTGRESS LINUX GIT and More***

- **[GitHub](https://github.com/mauricioccardoso)**

- **[LinkedIn](https://www.linkedin.com/in/mauricioccardoso/)**

- **<mauricioerick17@gmail.com>**