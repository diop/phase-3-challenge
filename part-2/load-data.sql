\copy grocery_items(name, price, section) FROM './grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers (name)
VALUES ('Joe'), ('James'), ('John'), ('Jimbo'), ('Jim');

INSERT INTO orders (id, item_id, shopper_id)
VALUES
  (1, 2, 3),
  (1, 3, 3),
  (1, 4, 3),
  (2, 1, 3),
  (2, 2, 3),
  (3, 6, 4),
  (4, 10, 1),
  (5, 9, 5),
  (5, 17, 5);
