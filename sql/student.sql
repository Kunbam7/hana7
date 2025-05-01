-- 학과테이블
create table Major(
    id smallint unsigned auto_increment primary key comment '학과번호',
    name varchar(31) not null comment '학과명'
);

select * from Major;

insert Major(name) values('철학과');
insert Major(name) values('컴공과');
insert Major(name) values('건축과');

select * from Major;

create table Student(
	id int not null auto_increment primary key comment '학번',
    createdate timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '입학일시',
    updatedate timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일시',
    name varchar(31) not null comment '이름',
    birthdt varchar(10) not null comment '생년월일',
    major smallint unsigned not null comment '학과번호',
    mobile varchar(11) not null comment '핸드폰번호',
    email varchar(127) not null comment '이메일주소',
    gender bit not null default 0 comment '성별(1: 남, 0: 여)',
    graduatedat date null comment '졸업일자, 재학 중일 경우 null'
);

alter table Student modify column name varchar(25) not null comment '학생이름';
desc Student;
show create table Student;

alter table Student add constraint foreign key (major) references Major(id);	-- foreign key can be other table's primary key

