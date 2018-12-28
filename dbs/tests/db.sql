select pg_terminate_backend(pid)
from pg_stat_activity
where datname='db_tests';
DROP DATABASE db_tests;
CREATE DATABASE db_tests;
