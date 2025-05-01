-- p49. Dept 테이블에 이름이 가장 빠른 직원(가나다 순)을 captain으로 update 하시오
select dept, min(ename) from Emp
	group by dept;
    
select * from Emp where ename = SOME(select min(ename) from Emp group by dept);
    
select *
  from Emp e1 left outer join Emp e2 p e1.dept = e2.dept and e1.ename > e2.ename
    where e2.id is null;
    
select *
  from Dept d
    inner join (select dept, min(ename) minName from Emp group by dept) sub
    on d.id = dub.dept
  order by d.id;
  
update Dept d
	inner join (select e1.id, e1.dept
				 from Emp e1 left outer join Emp e2
                   on e1.dept = e2.dept and e1.ename > e2.ename
				 where e2.id is null) sub
	on d.id = sub.dept
  set d.captin = sub.id
where d.id > 0;

select * from Dept where captin is not null;

-- p50. Emp table에 outdt(퇴사일) 컬럼 추가
alter table Emp add column outdt date comment '퇴사일';
alter table Emp add column outdt2 varchar(10) comment '퇴사일2';

-- 1) Emp.id가 3, 5 인 직원을 4월 25일자 퇴사 처리
update Emp set outdt = CAST('2025-04-25' as date), outdt2 = '2025-04-25'
-- update Emp set oudt = '2025-04-26', outdt2 = '2025-04-25';
  where id in (3,5);

-- 2) Emp.id가 14, 26 인 직원을 오늘자 퇴사 처리
start transaction;

update Emp e left outer join Dept d on d.id = d.captin
	set outdt = curdate(), e.outdt2 = curdate(),
		d.captin = null
  where e.id in (14, 26);

commit;
rollback;

select * from Emp where id in (3, 5, 14, 26);

select id, f_empinfo(id) from Emp limit 10;


