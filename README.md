This is a base nodejs Project template , which anyone can use as it has been prepared, by keeping some of the most important code prnciple and project management recommendations. Feel free to change anythin.

`src` -> Inside the src folder all the actual source cide regarding the project will reside , this not include anykind of tests

Let's take a look inside the `src` folder

- `config` -> In this folder anything and everthing regarding any configuration of setup of library or module will be done . for example : setting up `dotenv` so that we can use then environment variables any where in a cleaner fashion , this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningfull logs , so configuration for this library should also be done here

- `routes` -> In the routes folder , we register a route and the corresponding middleware and controller to it

- `middlewares` -> they are just going to intercept the incoming request where we can write our validators, authenticators , etc

- `controllers` -> they are kind of the last middlewares as post them you can your bussiness layer to execute the bussiness logic. In controllers we just recieve the incoming requests and then pass it to the business layer, and once business layer returs and output , we structure the API response in the controllers and send the output

- `repositories` -> this folder contains all the logic using which we interacts the DB by writing queries, all the raw queries or ORM queries will go here.

- `services` -> contains the business logic and interacts with respositoriees for the data from the database

- `utils` -> contains the helper methods , error , classes etc.

### Setup the project

- Download this template from github and open it in your favourite text editor.

- In the root directory create a `.env` file and the following env variables

  ```
      PORT=<port number of you choice>
  ```

  ex :

  ```
    PORT=3000
  ```

- Inside the `src/config` folder create a file name `config.json` and write the following code:

  ```
  {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  }
  ```

  - if you are setting up your development enviroment, then write the username of your db, password of your db and add in dialselect mention whatever db you are using ex : mariadb , mysql

  - If you want to avoid this config file the just go to `src` and run the command `npx sequelize init` the config file will be created automatically

### Regarding Sequelize

- To create db we have to use this command

  - ` npx sequelize db:create`

- To create the table in the db use this command

  - `npx sequelize model:generate --name Airplane --attributes modelNumber:string,capacity:integer `

- To Apply the migration
  - `npx sequelize db:migrate`
