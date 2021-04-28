
# LAB - Class 06  


## Project: Bearer Authentication

### Author: Yuliya Barysevich

### Links and Resources

1. Deployed with Heroku (2 routes)

    - [Heroku / Sign Up](https://barysevich-bearer-auth.herokuapp.com/signup)
    - [Heroku/ Sign In](https://barysevich-bearer-auth.herokuapp.com/signin)



2. Github URLs

    - [GitHub Pull Request](https://github.com/YuliyaBarysevich/bearer-auth/pull/1)
    - [GitHub Actions](https://github.com/YuliyaBarysevich/bearer-auth/runs/2454006918?check_suite_focus=true)
  
### User Stories 

1. **As a user, I want to create a new account so that I may later login**
    - Using a tool such as `httpie`, `postman`, or a web form:
    - Make a **POST** request to the `/signup` route with **username** and **password**
    - Your server should support both JSON and FORM data as input
    - On a successful account creation, return a 201 status with the user object in the body
    - On any error, trigger your error handler with an appropriate error

2. **As a user, I want to login to my account so that I may access protected information**
    - Using a tool such as `httpie`, `postman`, or a web form:
    - Make a **POST** request to the `/signin` route
    - Send a basic authentication header with a properly encoded username and password combination
    - On a successful account login, return a 200 status with the user object in the body
    - On any error, trigger your error handler with the message “Invalid Login”


### Setup

- **.env requirements** 
i.e.
  - PORT - Port Number
  - MONGODB_URI = `mongodb://localhost:27017/bearer-auth`
  - SECRET = 12345

### How to initialize/run your application

- Download all dependencies `npm install`
- Create **.env** file and assign **PORT** variable to 3000 and **MONGODB_URI** 
- Run command `nodemon` in terminal to start app on localhost:3333
- To run tests, run command `npm run test` in terminal

### Tests

- 404 on a bad route
- 404 on a bad method
- 500 errors handler


### WRRC
