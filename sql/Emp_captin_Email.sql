-- 예시문제 32p.
desc Emp;
desc Dept;

alter table Dept add column captin int unsigned null comment '부사장';

alter table Dept add constraint foreign key (captin) references Emp(id)
	on Delete set null on update cascade;
    
show create table Dept;
select * from Dept;

alter table Dept drop constraint dept_ibfk_1;

-- 예시문제 33p.
create table EmailLog(
  id int unsigned not null auto_increment primary key,
  sender int unsigned not null comment '발신자',
  receiver varchar(1024) not null comment '수신자',
  subject varchar(255) not null default '' comment '제목',
  body text null comment '내용',
  foreign key fk_EmailLog_sender_Emp (sender)
    references Emp(id) on update cascade on delete no action
) ENGINE = MyIsam;
