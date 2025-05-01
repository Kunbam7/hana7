CREATE DEFINER=`tester`@`%` PROCEDURE `sp_deptInfo`(_dept_name varchar(31))
BEGIN
    select d.id, d.dname, ifnull(e.ename, '공석') captinName,
          (select format(avg(salary) * 10000, 0) from Emp where dept = d.id) avgsal  
        from Dept d inner join Emp e on d.id = e.dept and d.captin = e.id
      where d.dname like concat(_dept_name, '%');
END