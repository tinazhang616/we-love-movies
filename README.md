# we-love-movies
# Instructions
Both setting up the database and building a number of routes that will be used by the frontend application. For this project, you will start by making the necessary changes to the data tier and then proceed to make changes to the application tier following an inside-out development workflow. Each table is detailed below, as is each route.

## Database tables
Create five tables for this project. View the docs/tables/ folder in this project to get more detailed information on each table.
Create migrations for each of these tables and run those migrations.
Seed data is included in this project in the ./src/db/seeds folder. The seeds will run correctly if and only if the tables are setup as described in the previous documents.
Routes
Create five routes for this project. View the docs/routes/ folder in this project to get more detailed information on each table. Note that some routes return data dependent on query parameters.
## General tasks
### Make sure the following tasks are complete.

app.js file and server.js file are correctly configured, with your app.js file exporting the application created from Express.
Make use of the cors package so that requests from the frontend can correctly reach the backend.
If a request is made to a route that does not exist, the server returns a 404 error.
If a request is made to a route that exists, but the HTTP method is wrong, a 405 error is returned.
All of your routes should respond with the appropriate status code and should use a data key in the response.
Note: In addition to needing to pass the tests and requirements in the instructions here, please review the Rubric Requirements for the human-graded part of this project in your Thinkful curriculum page.
