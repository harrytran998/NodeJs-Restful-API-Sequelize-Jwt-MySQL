# Building a Restful CRUD API with Node.js, Express and MariaDB

We’ll be building a RESTful CRUD (Create, Retrieve, Update, Delete) API with Node.js, Express and MariaDB. We’ll use MySQL for interacting with the database.

### Firstly, you connect with MariaDb, then you must create database

```mysql
create database test
```

### Secondly, create table Bitch and add data

```mysql
CREATE TABLE `Bitch` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` int NOT NULL,
  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

INSERT INTO `Bitch` (`id`, `name`, `price`)
VALUES(1,'Ngoc Hoa',20000),
	(2,'Quang Hiep',40000),
	(3,'Tien Manh',50000),
	(4,'Xuan Cuong',50000),
	(5,'Dac Sang',50000),
	(6,'Phong Pham',50000),
	(7,'Tu',50000),
	(8,'Manhattan',50000)
```

### To test Project

```
$ yarn dev
```
So if you want to start this projet => 
```
$ yarn start
```





