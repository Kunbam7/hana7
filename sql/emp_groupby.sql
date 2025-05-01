select * from Emp order by id desc limit 0, 10;
select * from Emp order by id desc limit 10, 10;
select * from Emp order by id desc limit 20, 10;

select * from Emp order by id desc limit 250, 10;
select * from Emp order by id desc limit (page - 1) * 10, 10;

select floor(count(*) / 10), count(*) % 10 from Emp;

select * from Emp;
-- max로 중복 충돌 방지
select * from Emp where salary = (select max(salary) from Emp);
-- select * dept, max(salary) group by dept;

select (select max(dname) from Dept where id = e.dept) dept_name,
	dept, count(*), sum(salary) total, avg(salary) avgsal from Emp e group by dept;

-- 연습문제p40. 부서 별 급여 평균이 전체 평균보다 높은 부서의 id와 평균 급여
-- 1) from 절에 sub-query
-- join 모른다는 전제
select *
	from (select dept, max(salary) avgsal from Emp group by dept) sub
      where avvgsal > (select avg(salary) from Emp);
      
-- 2) having
select dept, avg(salary) avgsal from Emp
	group by dept having avgsal > (select avg(salary) from Emp);
    
-- 위의 결과에서 부서별까지 출력
-- 1) sub-query
select (select dname from Dept where id = Emp.dept) dept_name, 
	dept, avg(salary) avgsal from Emp
	group by dept having avgsal > (select avg(salary) from Emp);

-- 2) join
select e.dept, avg(salary) avgsal, d.dname
	from Emp e inner join Dept d on e.dept = d.id
	group by dept having avgsal > (select avg(salary) from Emp);

select e.*, d.dname
	from Emp e inner join Dept d on e.dept = d.id; -- d.id = e.dept

update Emp set salary = 900 where id in (152, 97, 18, 80, 133, 47, 128);
-- 연습문제p43.
update Emp set salary = 901 + dept where id in (152, 97, 18, 80, 133, 47, 128);
-- 1) 전체 급여 평균보다 더 높은 급여자 (부서id, 부서명, 직원id, 직원명, 급여)
select e.dept, d.dname, e.id, e.ename, e.salary
  from Emp e inner join Dept d on e.dept = d.id
	where e.salary > (select avg(salary) from Emp);

-- select e.dept, d.dname, e.id, e.ename, e.salary
	-- from Emp e inner join Dept d on e.dept = d.id
	  -- group by dept having e.salary > (select avg(salary) from Emp);

-- 2) 부서 별 최고 급여자
  select e.dept, DeptMaxSal.dname, e.id, e.ename, e.salary
  from Emp e
    inner join
      (select d.dname, e.dept, max(salary) maxsal
         from Emp e inner join Dept d on e.dept = d.id
        group by dept) DeptMaxSal
    on e.dept = DeptMaxSal.dept and e.salary = DeptMaxSal.maxsal
 order by e.dept;
      
select * from Dept; 