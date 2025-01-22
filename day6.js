/*
//shell

mongosh //to start

use college // to create & use a new database called "college"

C create   /insert
R Read    /find
U update
D Delete

*/

/*

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

/*
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
when we have group of documents is called collections

*/

/*
INSERT in DB
insertOne

db.collection.insertOne()  // inserts a single document into a collection.

show collections

db.student.insertOne({ name: "adam", marks: 79 })

db.student.find()

if a collection does not exist , Mongo db creates the collection 
when you first store data for that collection

*/

/*
insertMany (array of documents)

db.student.insertMany([{ name: "bob", marks: 65}, {name: "eve", city: "Delhi"}])

db.collection.insertMany()   //inserts multiple documents into a collection.

ex. 
db.student.insertMany([ {name: "anuj", marks: 64, city: "Delhi"},{name: "rashi", marks: 89, city: "Mumbai"}]);

*/

/*
FIND in DB
db.collection.find() // returns everything

for specefic queries-
db.collection.find({ key: value })

db.collection.findOne({ key : value })

ex. 1
db.student.find({ city: "Delhi" });

ex. 2
db.student.find({ city: "Mumbai" });
*/

/*
Query Operators -
FIND in DB :

Q. Find students where marks > 75

db.students.find( {marks: {$gt: 75}} )

Q. Find students who live in Delhi or Mumbai

db.students.find({ city: {$in: ["Delhi", "Mumbai"]}} )

Q. Find students who scored > 75 or live in Delhi

db.student.find( {$or: [ {marks: {$gt: 75}}, {city: "Delhi"}]}  )

*/

/*
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
*/



/*
Nesting 

{
  id: ObjectId("64fdfcad780181c3d03ec623"),
  name: 'farah',
  performance: {marks: 88, grade: 'A'}
}

to find
db.student.findOne ( {"performance.marks": 88} )

*/

/*
//DELETE in DB

deleteOne
db.collection.deleteOne( <filter>, <options> )

deleteMany
db.collection.deleteMany(<filter>, <options>)

db.dropDatabase()

*/
