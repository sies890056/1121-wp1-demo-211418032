CREATE TABLE card_32(
    id int NOT NULL PRIMARY KEY,
    title varchar(255),
    descrip varchar(255),
    category varchar(255),
    img varchar(255),
    remote_url varchar(255)
)

INSERT INTO card_32(id,title,descrip,category,img,remote_url)
VALUES
(1,'Seven Reasons Why Coffee Is Awesome','Lorem ipsum dolor, sit amet consectetu
r adipisicing elit.', 'LIFESTYLE','/images/photo-1.jpg',''),
(2,'Travel To Paris','Lorem ipsum dolor, sit amet consectetur adipisicing elit
.', 'travel','/images/photo-2.jpg',''),
(3,'Seven Reasons Why Coffee Is Awesome','Lorem ipsum dolor, sit amet consectetu
radipisicing elit.','LIFESTYLE','/images/photo-3.jpg',''),
(4,'Seven Reasons Why Coffee Is Awesome','Lorem ipsum dolor, sit amet consectetu
r adipisicing elit.','LIFESTYLE','/images/photo-4.jpg',''),
(5,'Seven Reasons Why Coffee Is Awesome','Lorem ipsum dolor, sit amet consectetu
r adipisicing elit.','LIFESTYLE','/images/photo-5.jpg',''),
(6,'Travel To Paris','Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
'travel','/images/photo-6.jpg',''),
(7,'Seven Reasons Why Coffee Is Awesome','Lorem ipsum dolor, sit amet consectetu
r adipisicing elit.','Travel','/images/photo-7.jpg',''),
(8,'Seven Reasons Why Coffee Is Awesome','Lorem ipsum dolor, sit amet consectetu
r adipisicing elit.','Travel','/images/photo-8.jpg',''),
(9,'Seven Reasons Why Coffee Is Awesome','Lorem ipsum dolor, sit amet consectetu
r adipisicing elit.','Travel','/images/photo-9.jpg','');