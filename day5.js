// SQL
/* 
Our 1st Database: SQL 

sql is case insensitive language 
sql stands for structured Query language.

MySQl is a database (DB)
SQL is a (Language)

what is a database ?
It is a collection of data in format that can be be easily accessed.

what is dbms ?
dbms is a layer of databases.
allows you to create, manage, and manipulate a database 
Sql queries is under the dmbs.

Why databases ?
1) can store large data
2) features like security, scalability etc.
3) Easier to insert, update or delete data.

*/

/*
SQL v/s NoSQL 

SQL
relational Database 
(data stored in tables)

eg. MySQL, Oracle
PostgreSQL etc.

NoSQL
Non Relational Database
(data stored in document/key-val/graphs etc.)

eg - MongoDB, Cassandra,
NEo4j etc.
*/

/*
SQL (Structured Query Language)

SQL is programming langauge used to interact with relational databases.
*/

/*
// table in SQL 

columns- design (Schema)
[id, name, email, followers, following]
rows -> tuple 

1) My SQL Server -> DB(tables)
2) My SQL Workbench
*/

/*
// Our 1st Database 

Create DATABASE db_name;

DROP DATABASE db_name;

USE db_name;

*/

/*
Our 1st Table 

CREATE TABLE table_name (
   column_name1 datatype constraint,
   column_name2 datatype constraint,
   column_name2 datatype constraint
);

ex. 
CREATE DATABASE college;

USE college;

CREATE TABLE student (
  rollno INT,
  name VARCHAR(30),
  age INT
);

INSERT INTO student
VALUES 
(101, "adam", 12),
(102, "bob", 14);

SELECT * FROM student;
*/

ex. 
CREATE DATABASE TECH;

USE TECH;

CREATE TABLE employees (
   roll_no INT,
   name VARCHAR(30),
   age INT
);

INSERT into employees
VALUES
(8, "anuj", 21),
(12, "bhavika", 22),
(17, "akira", 21); 

SELECT * FROM employees;



/*
//Database Queries 

CREATE DATABASE db_name;
CREATE DATABASE IF NOT EXISTS db_name;

DROP DATABASE db_name;
DROP DATABASE IF EXISTS db_name;

SHOW DATABASES;
SHOW TABLES;
*/

/*
//Table Queries 
tuples is a row in sql 

~Create 
~Insert
~Update 
~Alter - table ke schema ko alter kar sakte hai /columns ko change kar sakte hai
~Truncate - delete all data from a table 
~Delete - delete only a table from a database 

//create table (schema/columns)

CREATE TABLE table_name (
   column_name1 datatype constraint,
   column_name2 datatype constraint,
);

// DATATYPES IN SQL 

CHAR - string(0,-256), can store characters of fixed length   / Usage CHAR(50)
VARCHAR - string(0,255), can store characters up to given length / Usage VARCHAR(50)
BLOB - string(0, -65535), can store binary large object / Usage BLOB(1000)
INT - integer(-2,147,483,648 to 2,147,483,647) / USAGE INT
TINYINT - integer (-128 to 127) / USAGE TINYINT
BIGINT - integer / USAGE BIGINT
BIT - can store x-bit values, x can be range from 1 to 64 / USAGE BIT(2)
FLOAT - Decimal number - with precision to 23 digits / USAGE FLOAT
DOUBLE - Decimal number - with precision to 23 digits / FLOAT
BOOLEAN - Boolean values 0 or 1 / BOOLEAN
DATE - date in format of YYYY-MM-DD ranging from 1000-01-01 to 9999-12-31 / USAGE DATE
YEAR - year in 4 digits format ranging from 1901 to 2155 / YEAR


*/

/*
What Are CONSTRAINTS 
Rules for data in the table 

NOT NULL - columns cannot have a null value 
UNIQUE - all values in column are different
DEFAULT - sets the default value of a column
CHECK - it can limit the values allowed in a column 

salary INT DEFAULT 25000

CONSTRAINT age check CHECK ( age >= 18 AND city="Delhi")

key Constraints

PRIMARY KEY  
make a column unique & not null but used only for one 

CREATE TABLE temp (
   id int not null,
   PRIMARY KEY (id)
);

FOREIGN KEY 
prevent actions that would destroy links between tables

CREATE TABLE temp (
cust_id int,
FOREIGN KEY (cust_id) references customer(id)
);

*/

/*
What are keys ?
keys are special columns in the table

PRIMARY KEY 
it is a column (or set of columns) in a table that uniquely identofies each row.
(a unique id) There is only 1 PK & it should be NOT null

FOREIGN KEY
A foreign key is a column (or set of columns) in a table that refers to the primary key in 
another table 

FKs can have duplicate & null values.

There can be multiple FKs.
*/



/*
Insert into Table 

INSERT INTO table_name
(colname1, colname2);

VALUES 
(col1_v1, col2_v1),
(col1_v2, col2_v2);

ex. 
INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob123@gmail.com",200, 200),
(2, 16, "casey", "casey@gmail.com", 300, 306),
(4, 17, "donald", "donald@gmail.com", 200, 105);

*/

/*
//Select Command 
-Selects & Show data from the DB

Syntax
SELECT col1, col2 FROM table_name;

Syntax(to show all)
SELECT * FROM table_name;

Ex.
SELECT DISTINCT age FROM user;
*/

CREATE DATABASE college;

CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user (
id INT,
age INT,
name VARCHAR(30) NOT NULL,
email VARCHAR(50) UNIQUE,
followers INT DEFAULT 0,
following INT,
CONSTRAINT CHECK (age >= 13),
PRIMARY KEY (id)
);

CREATE TABLE post (
id INT,
content VARCHAR(100),
user_id INT,
FOREIGN KEY (user_id) REFERENCES user(id)
);


INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 19 , "anuj", "anuj@yahoo.in", 45, 54),
(2, 21 , "akira", "akira@yahoo.in", 45, 54),
(3, 25 , "ashima", "ashima@yahoo.in", 45, 54),
(4, 28 , "agni", "agni@yahoo.in", 45, 54);

SELECT *  FROM user;



// SQL (part 2)

/*
//Where Clause :
To define some conditions

SELECT col1, col2 FROM table_name
WHERE conditions;

ex. 
SELECT name, age 
FROM user
WHERE age < 16;

*/

/*
//Operators in where :

Arithmetic operators: +(addition), -(subtraction), *(multiplication), /(division), %(modules)
Comparison operators:  = (equal to), != (not equal to), >, >=, <, <=
Logical Operators: AND, OR, NOT, IN, BETWEEN, ALL, LIKE, ANY
Bitwise Operators: & (Bitwise AND), | (Bitwise OR)

X  Y   Result
0  0     0
0  1     1
1  0     1
1  1     1

*/

/*
Frequently used Operators :

AND (to check for both conditions to be true)
OR (to check for one of the conditions to be true)
BETWEEN (selects for a given range)
IN (matches any value in the list)
NOT (to negate the given condition)

*/

/*
Limit Clause 
Sets an upper limit on number of (tuples) rows to be returned

SELECT col1, col2 FROM table_name
LIMIT number;

EX. 
SELECT name, age, email
FROM user
LIMIT 3;

*/

/*
Order by Clause 
To sort in ascending (ASC) or descending order (DESC)

SELECT col1, col2 FROM table_name
ORDER BY col_name(s) ASC;

ex.
SELECT name, age, followers
FROM user
ORDER BY followers ASC;


*/

/*
Aggregate Functions:
Aggregate functions perform a calculation on a set of values, 
and return a single value.

- COUNT()
- MAX()
- MIN()
- SUM()
- AVG()

ex.1
SELECT max(followers)
FROM user;

ex.2
SELECT max(age)
FROM user;

*/

/*
Group by Clause :
Groups rows that have the same values into summary rows.
It collects data from multiple records and groups the result
by one or more column.

SELECT col1, col2
FROM table_name
GROUP BY col_name(s);

*Generally we use group by with some aggregation function.

*/

/*
Having Clause :
similar to Where i.e applies some condition on rows.
But it is used when we want to apply any condition after grouping.

SELECT col1, col2
FROM table_name
GROUP BY col_name(s)
HAVING condition 

- WHERE is for the table, HAVING is for a group
- Grouping is necessary for HAVING

*/

/*
General Order:

SELECT column(s)
FROM table_name
WHERE condition
GROUP BY columns 
HAVING condition
ORDER BY column(s) ASC;
*/

/*
Update Table:

(to update existing rows)

UPDATE table_name
SET col1 = vol1, col2 - val2
WHERE condition;

*/

/*
DELETE table
(To delete existing rows)

DELETE FROM table_name
WHERE condition;
*/

/*
Alter (to change the schema)

ADD column
ALTER TABLE table_name
ADD COLUMN column_name datatype constraint;

DROP Column
ALTER TABLE table_name
DROP COLUMN_name;

RENAME Table
ALTER TABLE table_name
MODIFY col_name new_datatype new_constraint;

*/

/*
Truncate (to delete table's data)

TRUNCATE TABLE table_name;

*/

/*
Practise Qs

Qs Create a database for your college.
Create a table named Teacher to store (id, name, subject, salary)

Insert following data in the table :

23, "ajay", "math", 50,000
47, "bharat", "english", 60,000
18, "chetan", "chemistry", 45,000
9, "divya", "physics", 75,000

- Select teachers whose salary is more than 55k
- Rename the salary column for teacher table to ctc
- Update salary of all teachers by giving them an increament of 25%
- Add a new column for teachers called city. The default city should be "Gurgoan"
- Delete the salary column for teacher table

*/

/*
Practise Qs

Qs. Create a table to store info (roll_no, name, city, marks),

Insert following data in the table :

110, "adam" , "Delhi" , 76
108, "bob" , "Mumbai" , 65
124, "casey" , "Pune" , 94
112, "duke" , "Pune" , 80

- Select all students who scored 75+
- Find name of all cities where students are from
- Find the maximum marks of students from each city
- Find the average of the class
- Add a column grade, assign grade such that:

marks > 80 , grade = O
marks 70-80, grade = A
marks 60-70, grade = B

*/

//NODE WITH SQL

/*
Using Faker 
To generate fake data

let getUser = () => {
    return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.inernet.email(),
    faker.internet.password(),
    ];
};

*/

/*
MySQL2 Package 
To connect Node with MySQL

connection.end();   //To close connection

*/ 
