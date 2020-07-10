create database Book;

use Book;

create table books(
    title varchar(45),
    author varchar(45)
);

insert into books
('Harry Potter and the Chamber of Secrets', 'J.K. Rowling'),
('Jurassic Park', 'Michael Crichton');