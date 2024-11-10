create table categories
(
 id int auto_increment,
 category varchar(50),
 parent_category_id int,
 created_on timestamp default now(), 
 primary key (id)
 );
 
 insert into categories(category) value ("Men");
 
 insert into categories(category,parent_category_id) value ("jackets",1),("Shirt",1);
 
 insert into categories(category) values("Women"),("Kids");
 
 UPDATE `estore`.`categories` SET `category` = 'Jackets' WHERE (`id` = '2');
 
 
 insert into categories (category,parent_category_id) values("Party Wear",4),("Foot Wear",4),("Accessories",4),("Accessories",5),("Jackets",5);