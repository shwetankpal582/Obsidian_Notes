---
tags:
  - DataBase
  - SQL
Date: 2025 - 04 - 14
Topic:
  - SQL Syntax
Subject: database
Code:
---
# SQL statements
SQL statements consists of keywords that are easy to understand.
The following SQL statement returns all records from a table named "Customers".
```sql
SELECT * FROM Customers;
```


## Database Tables
A database most often contains one or more tables. Each table is identified by a name(e.g. "Customers" or "Orders"), and contain records (rows) with data.
Below is a selection from the customers table used in the examples:

|CustomerID|CustomerName|ContactName|Address|City|PostalCode|Country|
|---|---|---|---|---|---|---|
|1|Alfreds Futterkiste|Maria Anders|Obere Str. 57|Berlin|12209|Germany|
|2|Ana Trujillo Emparedados y helados|Ana Trujillo|Avda. de la Constitución 2222|México D.F.|05021|Mexico|
|3|Antonio Moreno Taquería|Antonio Moreno|Mataderos 2312|México D.F.|05023|Mexico|
|4|Around the Horn|Thomas Hardy|120 Hanover Sq.|London|WA1 1DP|UK|
|5|Berglunds snabbköp|Christina Berglund|Berguvsvägen 8|Luleå|S-958 22|Sweden|
The table above contains five records (one for each customer) and seven columns 


- ! SQL keywords are NOT case sensitive: `select` is the same as `SELECT`


> [!important] Semicolon after SQL required ?
> Some database system require a semicolon at the end of the ea
