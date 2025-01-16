// REST 
/*
Representational State Transfer
REST is an architectural style that defines a set of 
constraints to be used for creating web services.

*/


//CRUD operations

Create
Read
Update
Delete

GET retrieves resources.
POST submits its new data to the server.
PUT updates existing data.
DELETE removes data.
PATCH update existing data partially.
DELETE removes data

GET - /posts   - to get data for all posts.   (INDEX) MAIN File
POST - /posts  - to add a new post.       CREATE
GET -  /posts/:id - to get one post (using id).   VIEW
PATCH - /posts/:id - to update specefic post.  UPDATE
DELETE - /posts/:id - to delete specefic post.  DESTROY

-> const express = require("express");
   const app = express();

  const port = 3000;
  const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

app.get("/",(req, res) => {
    res.send("server working well! ");
});

app.listen(port,() => {
  console.log(`Server is listening on ${port}`);
});



