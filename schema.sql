DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(6,2) NULL,
  stock_qty INT NULL,
  cost_wholesale DECIMAL(6,2) NULL
);

INSERT INTO products (product_name, department_name, price, stock_qty, cost_wholesale) values ('Nintendo 64', 'Electronics', 400, 30, 180);
INSERT INTO products (product_name, department_name, price, stock_qty, cost_wholesale) values ('A Dirty Cat', 'Pets', 1, 9, 0);
INSERT INTO products (product_name, department_name, price, stock_qty, cost_wholesale) values ('X Box 2', 'Electronics', 360.36, 100, 180);
INSERT INTO products (product_name, department_name, price, stock_qty, cost_wholesale) values ('A Good Dog', 'Pets', 1000, 10, 100);
INSERT INTO products (product_name, department_name, price, stock_qty, cost_wholesale) values ('Burrito', 'Food', 4, 30, 1.25);
INSERT INTO products (product_name, department_name, price, stock_qty, cost_wholesale) values ('Chips', 'Food', 2.50, 50, 1.80);
INSERT INTO products (product_name, department_name, price, stock_qty, cost_wholesale) values ('GameBoy', 'Electronics', 100, 25, 35);
INSERT INTO products (product_name, department_name, price, stock_qty, cost_wholesale) values ('A TV', 'Electronics', 100, 20, 10);
INSERT INTO products (product_name, department_name, price, stock_qty, cost_wholesale) values ('Chop Stix', 'Kitchen Stuff', 0.75, 300, 0.01);
INSERT INTO products (product_name, department_name, price, stock_qty, cost_wholesale) values ('Tea Pot', 'Kitchen Stuff', 5, 20, 1.80);


