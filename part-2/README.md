## Part 2: Command Line Grocery Store

Build a command line tool that emulates a grocery store. The tool will interact with a PostgreSQL database to store and retrieve information. You will have to design a database to store **grocery items**, **shoppers**, and **orders**. Let's call the database `grocery_store`.

You'll need to design the schema and write some SQL statements to insert data. Look closely at the commands and their sample outputs to determine how to design your schema.

Write a command line script called `store` that retrieves information from the database

The `store` command should support the following sub commands:

| command        | description                                              | example usage                            |
|----------------|----------------------------------------------------------|------------------------------------------|
| product-list   | lists all products which belong to the given section     | ./store product-list `<product-section>` |
| shopper-orders | lists the orders for a given shopper                     | ./store shopper-orders `<shopper-id>`    |
| real-shoppers  | lists the names of all shoppers who have at least 1 order | ./store real-shoppers                    |

### Example Usage

Note: The example output below is not exactly what you would see in reality. (Since the output would depend on the seed data that you add to your database) Use the output below as a template for how each command should display the data.

#### List all `products` from a `section`
```
$ ./store product-list dairy
|--------------+---------+
| Product Name | Section |
|--------------+---------+
| Butter       | dairy   |
| Cheese       | dairy   |
| Cream Cheese | dairy   |
| Eggs         | dairy   |
| Milk         | dairy   |
| Sour Cream   | dairy   |
| Yogurt       | dairy   |
|--------------+---------+
```

#### List all orders for a given `shopper id`, returns the `order id`, and the total cost of the order.
```
$ ./store shopper-orders 1
|----------+------------|
| order id | total cost |
|----------+------------|
|        1 |      27.99 |
|        4 |      18.75 |
|----------+------------|
```

#### List all the `shoppers` that have at least 1 order, and also display the number of orders for them.
```
$ ./store real-shoppers
|--------------+------------------|
| shopper name | number of orders |
|--------------+------------------|
| Shanti       |                1 |
| Mary         |                2 |
| Justin       |                2 |
|--------------+------------------|
```

### Requirements
- [ ] __10:__ All files are stored under the `part-2/` folder
- [ ] __10:__ Database schema (all `CREATE TABLE` statements) is defined in a file `schema.sql`
- [ ] __10:__ SQL script to insert [grocery seed data][grocery-data] and load from CSV is created in a file `load-data.sql`
- [ ] __10:__ SQL statements to insert data into the `orders` and `shoppers` table is added to the file `load-data.sql`. (Add at least 5 rows in each table)
- [ ] __10:__ All database query functions are written in a file `database.js`, and tests for queries are written in a file `database_test.js`
- [ ] __10:__ Tests can be run with the command `$ npm test`

User Stories: Ensure that your schema design can satisfy the following scenarios
- [ ] __10__: As a shopper I can fetch all my orders
- [ ] __10__: As a shopper I can have multiple items in an order. (Assume the quantity of each item is always 1)

Command line interface requirements
- [ ] __10__: Create a command line Node script called `store.js`
- [ ] __20__: Command `product-list` has been implemented
- [ ] __40__: Command `shopper-orders` has been implemented
- [ ] __30__: Command `real-shoppers` has been implemented

Write tests with [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/) in `database_test.js` that assert:
- [ ] __20__: The database function for the command `product-list` is tested
- [ ] __20__: The database function for the command `shopper-orders` is tested
- [ ] __20__: The database function for the command `real-shoppers` is tested
