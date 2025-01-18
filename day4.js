//1. REST 
/*
Representational State Transfer
REST is an architectural style that defines a set of 
constraints to be used for creating web services.

*/


// 2. CRUD operations

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


// 3. index route 
// Implement : GET /posts
// //Index Route

// GET     /posts    to get data for all parts


file name - index.js

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "anujkumar",
        content: "I love coding!"
    },
    {
        username: "mayank thakur",
        content: "consistency is the key to success"
    },
    {
        username: "rudra naresh",
        content: "har har mahadev!"
    }
];

app.get("/posts",(req, res) => {
    res.render("index.ejs", {posts});
});

app.listen(port,() => {
  console.log(`Server is listening on ${port}`);
});


/*folder name -> views/index.ejs
file name index.ejs */

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All posts</title>
    <link rel="stylesheet" href="/style.css" />
</head>
<body>
     <h1>Quora Posts</h1>
     <% for(post of posts) { %>
         <div class="post">
            <h3 class="user">@<%= post.username %> </h3>
            <h4 class="content"><%= post.content %> </h4>
         </div>
<%     }    %>
</body>
</html>

/*public folder - public/style.css
file name style.css */

h1{
    color: maroon;
}

.post {
    background-color:darkkhaki;
}

.user {
    font-style: italic;
}

// 4. CREATE AND NEW ROUTE 
/*Create Route 
POST       /posts          to add a new post 

2 routes 
~ Serve the form     GET         /posts/new
~ Add the new post   POST          /posts 
*/

// Create a folder name views
// views/new.ejs
// file name new.ejs
   
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Create new POST</title>
</head>
<body>
    <form method="post" action="/posts">
        <input placeholder="enter username" name="username">
        <br> <br>
        <textarea placeholder="Write your post" name="content"></textarea>
        <hr>
        <button>Submit post</button>
    </form>
</body>
</html>

// note: get req only in query parameters
// post req only uses body
// in res.send() we send text,html,object
// res.render() -> ejs // we render the page ,send the rendered HTML as a response to the client.

// main file ~ Index.js :

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "anujkumar",
        content: "I love coding!"
    },
    {
        username: "mayank thakur",
        content: "consistency is the key to success"
    },
    {
        username: "rudra naresh",
        content: "har har mahadev!"
    }
];

app.get("/posts",(req, res) => {
    res.render("index.ejs", {posts});
});

//form path
app.get("/posts/new",(req, res) => {
    res.render("new.ejs");
})

//submission path
app.post("/posts",(req,res) => {
   let {username, content} = req.body;
   posts.push({ username, content });
   res.send("post request working");
});

app.listen(port,() => {
  console.log(`Server is listening on ${port}`);
});


// 5. Redirect - 
   // res.redirect ( URL )

// index.js - main file -
//submission path
app.post("/posts",(req,res) => {
   let {username, content} = req.body;
   posts.push({ username, content });
   res.redirect("/posts");
});

// index.ejs file -
<a href="http://localhost:3000/posts/new">Create new Post</a>


// 6. Implement : GET/posts/:id
 Show route 

GET     /posts/:id         to get one post (using id)

views/show.ejs-
   
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post in Detail</title>
    <link rel="stylesheet" href="/style.css" />
</head>
<body>
    <h2>Here is your post in detail</h2>
    <p>Post id : <%= post.id %> </p>
<div class="post">
    <h3 class="user">@<%=post.username%></h3>
    <h4><%= post.content %></h4>
</div>
</body>
</html>

index.js - file name
app.get("/posts/:id",(req,res) => {
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

//7 Create id for Posts
/* UUID Package
Universally unique indentifier */ 

    npm install uuid
to create a random id 

// to require uuid in server
const path = require("path");
const { v4: uuidv4 } = require('uuid'); 
// to require uuid in server

// acquire id like this in post
    {
        id: uuidv4(),
        username: "rudra naresh",
        content: "har har mahadev!"
    }
// acquire id like this in post

// push id here - 
app.post("/posts",(req,res) => {
   let {username, content} = req.body;
   let id = uuidv4();
   posts.push({ id, username, content });
   res.redirect("/posts");
});
// push id here-




