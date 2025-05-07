alter table Emp add column remark json;
alter table Emp add column remark2 text;

update Emp set remark = '{"id": 1, "age": 30, "fam": [{"id": 1, "name": "유세차"}]}',
                remark2 = '{"id": 1, "age": 30, "fam": [{"id": 1, "name": "유세차"}]}'
 where id = 2;

update Emp set remark = '{"id": 3, "age": 33, "fam": [{"id": 1, "name": "유세차"}, {"id":2, "name": "홍길숭"}]}'
 where id = 3;
update Emp set remark = '{"id": 4, "age": 34, "fam": [{"id": 1, "name": "유세차"}]}'
 where id = 4;
update Emp set remark = json_object( 'id', 5, 'age', 44, 
                          'fam', json_array(
                              json_object('id', 1, 'name', '지세차'),
                              json_object('id', 2, 'name', '지세창')   )  )
 where id = 5;

select  json_pretty(remark), e.* from Emp where id <= 5;

select * from Emp where id <= 5;
select id, remark -> '$.age', remark2 ->> '$.age',
        remark -> '$.fam[0].name', remark2 ->> '$.fam[0].name',
        json_valid(remark), json_valid(remark2)
  from Emp where remark ->> '$.age' > 0;
  -- remark ->> '$.fam[0].name' = '유세차';    -- id = 2
  
alter table Emp add index index_Emp_remark_fam ((
  cast(remark->>'$.age' as char(127) array)
));

