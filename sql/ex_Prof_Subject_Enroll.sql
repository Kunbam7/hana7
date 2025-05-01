-- 예시문제 34p.
create table Prof (
	id smallint not null primary key comment '교수번호',
    name varchar(21) not null comment '교수명',
    likecnt int not null default 0
);
alter table Prof modify column id smallint unsigned not null comment '교수번호';
desc Prof;
desc student;
show create table Prof;
desc Subject;

create table Subject (
	id smallint unsigned not null primary key,
    name varchar(31) not null comment '과몽명',
	prof smallint unsigned null comment '교수번호',
    foreign key fk_Subject_prof_Prof (prof) 
		references Prof(id) on Update cascade on Delete set null
);

create table Enroll (
	id int unsigned not null primary key,
    subject smallint unsigned not null comment '과목번호',
    student int not null comment '학번',
    foreign key fk_Enroll_suject (subject)
		references Subject (id) on Update cascade on Delete cascade,
	foreign key fk_Enroll_student (Student)
		references Student (id) on Update cascade on Delete cascade
);

-- bulk insert (batch)
insert into Student(name, birthdt, major, mobile, email)
			values('김일수', '19990123', 1, '01012340001', 'kim@gmail.com'),
					('김일수', '19990123', 1, '01012340001', 'kim@gmail.com');

insert into Student(name, birthdt, major, mobile, email)
			values('김사수', '19990123', 1, '01012340001', 'kim@gmail.com')
	on duplicate key update updatedate = now();
    
    
select * from Major;
select * from Prof;
select * from Student;
select * from Enroll;
select * from Subject;



