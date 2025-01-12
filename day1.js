// Node.js 
/*
Javascript Runtime Environment
It is used for server side programming

* node.js is not a language, library or framework

browser is a environment where js runs 

node js is one of the most poplular env for make a backend

node js gives power to javascript to run the code outside the browser

node js also used for IOT devices , game development 
*/

/*
Process
this object provides information about, and control over, the current node.js process.

process.argv: returns an array containing the command- line arguements passed when the Node.js
process was launched.

console.log(process.argv);
// it finds where the file stores and which directory i run

let args = process.argv;

for(let i = 2; i < args.length; i++) {
    console.log("hello to ", args[i]);
}
//output
hello to  anuj
hello to  mayank
hello to  rudra

*/



/*
module.exports: requiring files 

require() 
a built-in function to include external modules that exist in seprate files.

module.exports - a special object

what is npm ?
npm is the standard package manager for node.js
npm is like a library of packages

package - someone written code which we can use 
ex. expressjs , react js 
// kisi aur developer ka code jisse hum use kar rahein hai 

npm is also a command line tool 

*/


/*
installing Packages
1) node_modules 
The node_modules folder contains every installed dependency for your project
// sari dependency install karke rakhi hai isne

2) package-lock.json
it records the exact version of every installed dependency,
including its sub-dependencies and their versions.
// dependency se related information sambhal ke rkhta hai 

3) package.json
The package.json file contains descriptive and functional metadata about a project
such as name, version and dependencies

    npm init

4) local   v/s Global Installation

    npm install -g <- package name -> 

    npm link <- package name ->

5) Import modules 
Es6 version

we can't selectively load only the pieces we need with require but with import
we can selectively load only the pieces we need, which can save memory.

Loading is synchronus for 'require' but can be asynchronus for 'import'.


*/




// Backend 2 (Node: express)

/*
library vs framework

library
A library is a collection of pre-written code
can be used to perform specefic tasks.

eg - axios 

framework 
A framework is a set of pre written code that provides a 
structure for developing software applications.

eg- express

2) Express 
A node js web application framework that helps us to make web applications
it is used for server side of programming.

uses of express :
1) listen for incoming requests
2) parse
3) match reponse with routes 
4) response

client -> frontend 
server -> backend

// client sents request to server
// server returns response to client

express actually a package in npm
express have different tools and utilities which helps in server side of programming.
*/