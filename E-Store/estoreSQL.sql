create table categories
(
 id int auto_increment,
 category varchar(50),
 parent_category_id int,
 created_on timestamp default now(), 
 primary key (id)
 );
 
 insert into categories(category) value ("Men");