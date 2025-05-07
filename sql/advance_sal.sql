WITH RECURSIVE cte (n, p) AS
(
    SELECT 1, 1
    union all
    select n + 1, pow(n + 1, 2) from ste where n < 5
)
select * from cte;

select d.dname, e.dept, avg(e.salary) avgsal
    from Emp e inner join Dept d on e.dept = d.id
  group by dept
  order by avgsal desc;
  
WITH AvgSal AS 
    (select d.dname, e.dept, avg(e.salary) avgsal
        from Emp e inner join Dept d on e.dept = d.id
      group by dept), 
    MaxSal AS (select * from AvgSal order by avgsal desc limit 1),
    MinSal AS (select * from AvgSal order by avgsal limit 1),
    SumUp AS
    (
        select * from MaxSal
        UNION
        select * from MinSal)
select * from SumUp
UNION
select '', '평균차액', ' - ', max(avgsal) - min(avgsal) from SumUp;

insert into Dept(pid, dname) values(6, '인프라셀');
insert into Dept(pid, dname) values(6, 'DB셀');
insert into Dept(pid, dname) values(7, '모바일셀');

select * from Dept d1 inner join Dept d2 on d1.id = d2.pid;

select row_number() over (order by dept, salary desc) '순번',  
    dept, salary,
    round(avg(salary) over (partition by dept order by salary desc)) avgsal,    
    sum(salary) over (partition by dept order by salary desc) sumal
  from Emp e where ename like '박%';

select p.id pid, d.id did, 
        (case when p.id is not null then max(p.dname) else '-총계-' end) '상위부서', 
        (case when d.id is not null then max(d.dname) else '-소계-' end) '하위부서',
   format( sum(e.salary), 0) '급여합'
  from Dept p inner join Dept d on p.id = d.pid
    inner join Emp e on e.dept = d.id
  group by p.id, d.id
  with rollup;
  
-- pivot
select max(d.dname) '부서',
        format(round(avg(e.salary) * 10000), 0) '평균급여',
        format(sum(e.salary) * 10000, 0) '총 급여',
        format(min(e.salary) * 10000, 0) '최소급여',
        format(max(e.salary) * 10000, 0) '최대급여'
  from Emp einnter join Dept d on e.dpet = d.id
group by e.dept
order by d.id;