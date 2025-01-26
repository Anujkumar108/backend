
//shell

mongosh //to start

use college // to create & use a new database called "college"

C create   /insert
R Read    /find
U update
D Delete




BSON ~
- mongo db convert Json data into binary format called BSON
- mongo stored data in BSON format

Json have same issues like:
1) Text based data 
2) space inefficient
3) Json have less datatypes
4) readability by human and machine

BSON
1) bson readable by Machine only.
2) Bson have high datatypes. 
*/


Document & collections
1) Document: Mongo stores data in form of documents (BSON docs)
2) Collection: MongoDB stores documents in collections

{
    name: "ai",
    age: 19,
    status: "A",
    groups: [ "politics", "news" ]
}

this is called as a document in mongo db 
when we have group of documents is called collections.

*/


INSERT in DB
insertOne

db.collection.insertOne()  // inserts a single document into a collection.

show collections

db.student.insertOne({ name: "adam", marks: 79 })

db.student.find()

if a collection does not exist , Mongo db creates the collection 
when you first store data for that collection




insertMany (array of documents)

db.student.insertMany([{ name: "bob", marks: 65}, {name: "eve", city: "Delhi"}])

db.collection.insertMany()   //inserts multiple documents into a collection.

ex. 
db.student.insertMany([ {name: "anuj", marks: 64, city: "Delhi"},{name: "rashi", marks: 89, city: "Mumbai"}]);




FIND in DB
db.collection.find() // returns everything

for specefic queries-
db.collection.find({ key: value })

db.collection.findOne({ key : value })

ex. 1
db.student.find({ city: "Delhi" });

ex. 2
db.student.find({ city: "Mumbai" });



Query Operators -
FIND in DB :

Q. Find students where marks > 75

db.students.find( {marks: {$gt: 75}} )

Q. Find students who live in Delhi or Mumbai

db.students.find({ city: {$in: ["Delhi", "Mumbai"]}} )

Q. Find students who scored > 75 or live in Delhi

db.student.find( {$or: [ {marks: {$gt: 75}}, {city: "Delhi"}]}  )




// UPDATE in Db
updateOne

db.collection.updateOne()
Updates at most a single document that match a specefied filter even though
multiple documents may match the specefied filter.

db.collection.updateOne( <filter>, <update>, <options> )

db.student.updateOne( {name: "adam"}, {$set: {marks:99}} )

//update Many
db.student.updateMany( {city: "Delhi"}, {$set: {city: "New Delhi"}} )

replace One
db.student.replaceOne ( {name: "bob"}, {name: "shraddha", marks: 97, state: "Haryana"} )





Nesting 

{
  id: ObjectId("64fdfcad780181c3d03ec623"),
  name: 'farah',
  performance: {marks: 88, grade: 'A'}
}

to find
db.student.findOne ( {"performance.marks": 88} )




//DELETE in DB

deleteOne
db.collection.deleteOne( <filter>, <options> )

deleteMany
db.collection.deleteMany(<filter>, <options>)

db.dropDatabase()



// MONGO db part2


1) what is mongoose ?

- A library that creates a connection between MongoDB & Node.js Javascript Runtime
Environment

It is an ODM(Object Data Modelling) Library.



2) Schema :

1) Schema is a overall structure
2) Schema defines the shape of the documents within that collection.

const userSchema = new mongoose.Schema ({
  name: string,
  email: String,
  age: Number,
});


3) Models 
models in mongoose is a class with which we construct documents.

const User = mongoose.model("User", userSchema);
// User is actually a model name 




4)Insert in mongoose:

 things we write capital in js convert into small in mongo db
for ex. if we create a collection in js 
1. User -> users
2. Product -> products
 
// Step 1: Create a new user with some details
const user2 = new User({
    name: "akira",
    email: "akirathakur10@gmail.com",
    age: 19,
});

// Step 2: Save the user to the database
user2
    .save() // Try to save the user
    .then((res) => {
        // If successful, print the saved data
        console.log("User saved:", res);
    })
    .catch((err) => {
        // If there's an error, print the error details
        console.log("Error occurred:", err);
    });

*/

// 5) Insert in Mongoose


// note:  Mongoose uses operation Buffering


Mongoose lets you start using your models immediately. without 
waiting for mongoose to establish a connection to MongoDB.



User.insertMany([
    {name: "Tony", email: "tony@gmail.com",age:50},
    {name: "Peter", email: "peter@gmail.com", age: 30},
    {name: "bruce", email: "bruce@gmail.com", age: 47},
]).then((res) => {
    console.log(res);
});



//6. Find in mongoose

 
Model.find() // returns a Query Object (thennable)

*Mongoose Queries are not promises. But they have a .then()

User.find().then((data) => {
    console.log(data);
});

User.find({ age: { $gte: 47 } }).then((data) => {
    console.log(data);
});


//7 UPDATE 

Model.updateOne() -

User.updateOne({ name: "Bruce" }, { age: 49}).then((res) => {
     console.log(res);
});

Model.updateMany() -

User.updateMany({ age: { $gt: 45 } }, { age: 45 }).then((res) => {
     console.log(res); 
});

//8 FindAndUpdate

Model.findOneAndUpdate()

User.updateMany({ age: { $gt: 45 } }, { age: 45 }).then((res) => {
    console.log(res);
});

User.findOneAndUpdate({ name: "Tony }, {age: 60}, { new: true}).then(
    (data) => {
    console.log(data);
    }
);

//9 Delete in Mongoose

ModeldeleteOne() // returns count

User.deleteOne({ name: "anuj" }).then((res) => {
console.log(res);
});

Model.deleteMany() // returns count

User.deleteMany({ age: {$gt: 40} }).then((res) => {
console.log(res);
})


//10 Schema validations 
Bascially Rules for Schema 

// we make a connection
const mongoose = require("mongoose");

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// than we define the schema

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
});

// create a model.

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Mathematics",
    author: "rd sharma",
    price: 1200,
});

book1
.save()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

// parse - one type converted into another type 

    11) SchemaType Options

const bookSchema = mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    }
price: {
    type: Number,
    min: [1, "please enter a valid price"],    
},
discount: {
    type: Number,
    default: 0,    
},
genre: [String],
    category: {
       type: "String",
       enun: ["fiction", "non-fiction"];
    },
});
