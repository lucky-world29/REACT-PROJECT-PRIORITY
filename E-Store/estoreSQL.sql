-- create table categories
-- (
--  id int auto_increment,
--  category varchar(50),
--  parent_category_id int,
--  created_on timestamp default now(), 
--  primary key (id)
--  );
--  
--  insert into categories(category) value ("Men");
--  
--  insert into categories(category,parent_category_id) value ("jackets",1),("Shirt",1);
--  
--  insert into categories(category) values("Women"),("Kids");
--  
--  UPDATE `estore`.`categories` SET `category` = 'Jackets' WHERE (`id` = '2');
--  
--  
--  insert into categories (category,parent_category_id) values("Party Wear",4),("Foot Wear",4),("Accessories",4),("Accessories",5),("Jackets",5);
--  
--  create table products(id int auto_increment, product_name varchar(50), category_id int, product_img varchar(100), price float, created_on timestamp default now(), primary key(id));
--  
--  insert into products (product_name, category_id, product_img, price) values("Jacket", 1, "shop-1.jpg",45 );
--  
 
--

-- INSERT INTO categories (id, category, parent_category_id, created_on) VALUES
-- (1, 'Men', NULL, '2023-03-14 15:10:40'),
-- (2, 'Casual Wear', 1, '2023-03-14 15:12:22'),
-- (3, 'Accessories', 1, '2023-03-14 15:12:43'),
-- (4, 'Women', NULL, '2023-04-10 10:14:23'),
-- (5, 'Kids', NULL, '2023-04-10 10:14:23'),
-- (6, 'Party Wear', 4, '2023-04-10 10:47:41'),
-- (7, 'Foot Wear', 4, '2023-04-10 10:47:41'),
-- (8, 'Accessories', 4, '2023-04-10 10:47:41');


INSERT INTO products (id, product_name, category_id, product_img, price, created_on) VALUES
(1, 'Jacket', 2, 'shop-1.jpg', 45, '2023-04-10 14:39:16'),
(2, 'Purse', 6, 'shop-2.jpg', 20, '2023-04-10 14:39:13'),
(3, 'Dress', 6, 'shop-3.jpg', 50, '2023-04-10 14:40:13'),
(4, 'Denim Jeans', 2, 'shop-4.jpg', 60, '2023-04-10 14:41:13'),
(5, 'Laced Boots', 7, 'shop-5.jpg', 55, '2023-04-10 14:42:13'),
(6, 'Backpack', 3, 'shop-6.jpg', 25, '2023-04-10 14:43:13'),
(7, 'Earings', 8, 'shop-7.jpg', 15, '2023-04-10 14:43:13'),
(8, 'Scarf', 3, 'shop-8.jpg', 18, '2023-04-10 14:43:13'),
(9, 'Leather Boots', 7, 'shop-9.jpg', 115, '2023-04-10 14:44:13');


 
 