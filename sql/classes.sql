set @x = 0;
set @y = 0;

call sp_ttt(@x, @y);

select @x, @y;

call sp_emplist(10);

select d.id, d.dname, ifnull(e.ename, '공석') captinName,
      (select format(avg(salary) * 10000, 0) from Emp where dept = d.id) avgsal  
        from Dept d inner join Emp e on d.id = e.dept and d.captin = e.id
      where d.dname like concat('영업', '%');
      
call sp_deptinfo('영업');
call sp_deptinfo('개발');


call sp_dept_salary();