SET GLOBAL innodb_optimize_fulltext_only = ON;
OPTIMIZE TABLE testdb.Notice;
SET GLOBAL innodb_optimize_fulltext_only = OFF;
SET GLOBAL innodb_ft_aux_table='testdb/Notice';