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
~Alter 
~Truncate
~Delete

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
