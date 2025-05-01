show create database testdb;

create table T (
	id int not null auto_increment primary key,
    name  varchar(31) not null 
);  

show create table T; 

insert into T(name) values('홍길동');
select * from T;  

CREATE TABLE `T` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(31) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

rename table T to TT;

select * from Dept where id = 4;

select e.*, d.name 
	from Emp e inner join Dept d on e.dept = d.id;
    
desc Emp;

-- 예시문제 30p.way1
alter table Emp modify column auth tinyint(1) unsigned not null default 9
	comment '0:sysadmin, 1:superuser, 3: manager, 5:employee, 7:temporary, 9:guest'
    after dept;
-- way2
alter table Emp add column auth2
	enum('sysadmin', 'superuser', 'manager', 'employee', 'temporary', 'guest');
    
alter table Emp drop column auth2;