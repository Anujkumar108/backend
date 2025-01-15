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
