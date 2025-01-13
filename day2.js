// Getting started with express

/*
npm init command used to make package.json

npm install express to install express

-> const express = require("express");
   const app = express();

   let port = 3000;


   app.listen(port, () => {
    console.log(`app is listening http://localhost:${port}`);
});

/* Ports are the logical endpoints of a network
connection that is used to exchange information between
a web server and a web client  

*/


/*
handling requests

app.use((req, res) => {
    console.log("request received");
    });

    //listening track requests
*/

/*
Sending a response :

res.send();

res.send({
    name: "anuj",
    class: "gender"
})
we can send a object in reponse also

*/

/*
Routing
It is a process of selecting a path for traffic
in a network or between or across multiple networks.

app.get("/apple", (req, res) => {
    res.send({
        name: "apple",
        color: "red", 
    });
});

*/

/*
Nodemon 
To automatically restart server with code changes.

nodemon day2.js
*/

/*
Path Parameters 
req.params
// req ke parameter ko show karta hai

app.get("/ig/:username/:id",(req,res) => {
    let { username } = req.params;
    res.send(`This account belongs to @${username}`);
    let htmlStr = `<h1>Welcome to the page of @${username}</h1>`
    res.send(htmlStr);
});

*/

/*
Query Strings 

app.get("/search", (req,res) => {
    console.log(req.query);
    res.send("no results");
});

*/

// BACKEND (NODE: EJS) 3

/*
Templating
EJS (Embedded Javascript templates)
EJS is a simple templating language that lets you generate HTML markup
with plain Javascript.
// embedded - kisi dusri cheez ko kisi value m add kardena 
*/

/*
Using EJS 

app.set("view engine", "ejs"); // 

app.get("/", (req,res) => {
    res.render("home.ejs");
});

in express we sending the response
but in ejs we sending the render
render : means sending files

-we can send send string, array, boolean, object, html
app.set Method:

-It is used to set application-level variables or configurations in Express.
Syntax: app.set(key, value).
Key: "view engine":

-The "view engine" key tells Express which template engine to use for rendering views.
Value: "ejs":

Specifies EJS as the templating engine.

const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", pathjoin(__dirname, "/views")); // path is a package here

// Render the "index.ejs" template when the root route is accessed
app.get("/", (req, res) => {
    res.render("index", { title: "Welcome to EJS!" });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

*/


/*
Views Directory 

const path = require("path");

app.set("views", path.join(__dirname, "/views"));
*/

/*
Interpolation Synatx
Interpolation refers to embedding expressions into marked up text.
*/


const express = require("express");
const app = express();
const path = require("path");

const port = 3000;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


app.get("/",(req, res) => {
    res.render("home.ejs"); // express finds home.ejs in views folder
});

app.listen(port,() => {
    console.log(`listening on port ${port}`);
});

