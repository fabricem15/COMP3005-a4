# Project Description 

This is a full-stack CRUD application that interacts with a SQL database and allows the user to perform CRUD operations on the Student database. It is a web application is built using Node.js and Express as the backend and HTML, CSS, and Javascript for the frontend. 

The homepage displays all the students in the database in a table that shows all the attributes in the corresponding students SQL relation. 
From the homepage, the user can delete a student using their student id, click on a link to add a new student or edit an existing student's email address. 

All of the relevant function implementations can be found in the /routes/ folder. The index.js file contains the functions for selecting and deleting students while the student.js file contains the functions for adding a new student or updating a student. 

# Database setup instruction 
- Create a database called Student using PostgreSQL
- Run the `ddl.sql`` file to create the students table
- Fill it with initial data from the `schema.sql`` file 
- Replace the database login credentials and port number in the `db.js` file as necessary
    
# App setup instruction 
    1. Ensure you have Node installed.
    2. Install the depencies using `npm start`
    3. Run the app with the `node app.js` command
    4. Open the application at http://localhost:3000 






