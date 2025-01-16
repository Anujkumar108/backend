// miscellaneous 

/*
Get and post requests

get 
> Used to Get some response 
> Data sent in query strings
(limited, string data & visible in URL)

Post 
> Used to POST something (for Create/ Write/Update)
> Data sent via request body (any type of data)

*/

const express = require("express");
const app = express();

const port = 3000;

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`standard POST response. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
   res.send("standard POST response");
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

/*
Handling Post requests :-
1) Set up POST request route to get some response
2) Parse POST request data

app.use(express.urlencoded({ extended: true }));
app.use(express.join());
// middlewares 

handling get and post req:-

const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended:  true }));
app.use(express.json());

app.get("/register",(req, res) => {
   let {user, password} = req.query;
   res.send(`standard GET response. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    let { user, password} = req.body;
    console.log(`standard POST response. Welcome ${user}`);
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

*/


const student1 = {
    name: anuj,
    age: 19,
    marks: 90,
};

const student2 = {
    name: "arya",
    age: 20,
    marks: 99,
};

const student3 = {
    name: "akshu",
    age:  22,
    marks: 93,
};

//in oops, we connect programming to real world

/*
Object prototypes-
prototypes are the mechanism of which javascript object inherits features from one another.

It is like a single template objects inherit methods and properties from without having
their own copy.

arr._proto_(reference)
Array.prototype(actual object)
String.prototype

note: ebery object in js has a built in property, which is called its prototype. The prototype is
itself an object, so the prototype, will have its own prototype, making what's called a prototype
chain. the chain ends when we reach a protype has null for its own prototype.

*/


