//1. REST 
/*
Representational State Transfer
REST is an architectural style that defines a set of 
constraints to be used for creating web services.

*/


// 2. CRUD operations

Create - for create we have to sent POST req
Read - for READ WE HAVE to sent GET request
Update - use PATCH request to update
Delete - for delete we have to sent delete request

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
 //Show route 

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

//8 Implement: PATCH /posts/:id
/* Update Route

PATCH     /posts/:id   to update specefic post */

app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.send("patch request working");
});

// views/ edit.ejs

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Post</title>
</head>
<body>
    <h2>Edit your post</h2>
    <p>Post id: <%= post.id %> </p>
    <p>Post username: @<%= post.username %></p>
    <form method="post" action="/posts/<%= post.id %>?_method=PATCH">
<textarea rows="10" cols="35" name="content"> <%= post.content %> </textarea>
<br>
<button>Submit</button>
    </form>
</body>
</html>
*/

//9 Create Form for Update 
/*Edit Route
Serve the edit form          GET      /posts/:id/edit      */

// index.js
app.get("/posts/:id/edit",(req, res) => {
    let { id } = req.params;   // id nikalna
    let post = posts.find((p) => id === p.id); //post find
    res.render("edit.ejs", {post});
});


// method override require 
const methodOverride = require("method-override");

//middleware 
app.use(methodOverride("_method"));

//10 Implement: /posts/:id 
/* Destroy Route 
DELETE          /posts/:id          to delete specific post 
*/

// main file index.js -
app.delete("/posts/:id", (req, res) => {
    let {id }= req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});


// views/index.ejs -
            <form method="post" action="/posts/<%= post.id %>?_method=DELETE"> 
                <button> Delete Post </button>
            </form>



// all files of frontend -

/*   index.ejs - file name   (All posts)         
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
            <br>
            <a href="http://localhost:3000/posts/<%=post.id%>">See in Detail</a>
            <a href="http://localhost:3000/posts/<%=post.id%>/edit">Edit</a>
            <form method="post" action="/posts/<%= post.id %>?_method=DELETE"> 
                <button> Delete Post </button>
            </form>
         </div>
<%}%>

<br  />
<br   />
<a href="http://localhost:3000/posts/new">Create new Post</a>
</body>
</html>
*/

/*
new.ejs - file name (Create a post)

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

*/

/*
(show.ejs) Post in Details

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

*/

/*
edit.ejs (Edit post)

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Post</title>
</head>
<body>
    <h2>Edit your post</h2>
    <p>Post id: <%= post.id %> </p>
    <p>Post username: @<%= post.username %></p>
    <form method="post" action="/posts/<%= post.id %>?_method=PATCH">
<textarea rows="10" cols="35" name="content"> <%= post.content %> </textarea>
<br>
<button>Submit</button>
    </form>
</body>
</html>
*/

/*
//backend 
// server of any website

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "anujkumar",
        content: "I love coding!"
    },
    {
        id: uuidv4(),
        username: "mayank thakur",
        content: "consistency is the key to success"
    },
    {
        id: uuidv4(),
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
});

//submission path
app.post("/posts",(req,res) => {
   let {username, content} = req.body;
   let id = uuidv4();
   posts.push({ id, username, content });
   res.redirect("/posts");
});

app.get("/posts/:id",(req, res) => {
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req, res) => {
    let { id } = req.params;   // id nikalna
    let post = posts.find((p) => id === p.id); //post find
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req, res) => {
    let {id }= req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port,  () => {
  console.log(`Server is listening on ${port}`);
});

*/
