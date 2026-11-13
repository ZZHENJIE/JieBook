---
layout: doc
---

# [PostgreSQL](https://www.postgresql.org/) 学习笔记

## 简介与工具
PostgreSQL是一个免费的对象-关系数据库服务器(ORDBMS).

### [Dbeaver](https://dbeaver.io/download/)
是一个免费开源支持PostgreSQL的跨平台数据库管理工具

### PSQL
安装PostgreSQL默认带的工具
```bash
# 这是使用命令连接数据库 指定主机 端口 用户 数据库
psql -h localhost -p 5432 -U <username> -d <database>
```

## 常用数据类型
|大类|类型/别名|尺寸|范围/精度|速记口诀|典型DDL|常见坑/技巧|
|---|---|---|---|---|---|---|
|小整|smallint/int2|2B|-3.28E4…3.28E4|万级|id smallint PK|溢出报错|
|整型|integer/int4|4B|-2.15E9…2.15E9|默认|id serial PK|21亿爆|
|大整|bigint/int8|8B|-9.22E18…9.22E18|雪花|id bigserial|索引翻倍|
|精确|numeric(p,s)|变长|1.31E5位整数+1.64E4位小数|金额|amount numeric(10,2)|性能最差|
|单浮|real/float4|4B|6-7位十进制|传感器|temp real|0.1+0.2≠0.3|
|双浮|double|8B|15-16位十进制|经纬|lat double|误差小|
|自增|serial|同底层|1…3.28E4/2.15E9/9.22E18|隐藏|id serial|重启ID回跳|
|变串|varchar(n)|变长|≤1GB|常用|name varchar(120)|n仅约束|
|定串|char(n)|定长|补空格|固定位|zip char(6)|补空格查不到|
|长文|text|变长|≤1GB|无脑|body text|与varchar同速|
|日期|date|4B|1E0…5.87E6天|无时分|born date|无时区|
|时间|time|8B|0…8.64E4s(1µs)|每日|open time|无日期|
|时区|timestamptz|8B|-2.45E11…2.94E11µs|全球|created timestamptz|写入转UTC|
|纯戳|timestamp|8B|同上无TZ|本地|created timestamp|换时区乱|
|间隔|interval|16B|±1.78E11µs|时长|delta interval|复合单位|
|布尔|boolean|1B|true/false/null|1B|is_ok boolean|可隐式转换|
|JSON文本|json|原样|1GB|人读|meta json|每次重解析|
|JSON二进制|jsonb|去重排序|1GB|生产|meta jsonb|支持GIN|
|数组|int[]/text[]|变长|1GB|列表|tags text[]|下标从1|
|枚举|create type mood enum|4B|256标签|省空间|mood mood|改值需ALTER|
|UUID|uuid|16B|3.4E38|全球|id uuid DEFAULT gen_random_uuid()|比bigint宽|
|货币|money|8B|±9.22E16分|本地化|price money|受lc_monetary影响|
|网络|inet|7/19B|IPv4/6|段查询|ip inet|支持>>|
|网络|cidr|同inet|网络号|网段|segment cidr|自动清0|
|MAC|macaddr|6B|4.8E14|设备|mac macaddr|大小写兼容|
|位图|bit(n)/varbit|定/变长|8.39E7位|压缩|flags bit(64)|位运算|
|几何|point|16B|(x,y)|距离|loc point|<->算子|
|范围|int4range等|变长|上下界|区间|during tsrange|&&/@>索引|

## 命令
PostgreSQL命令都是在psql工具下执行的

###  创建数据库
`create database <db_name>;`

### 打印所有数据库
`\l`

### 选择数据库
`\c <db_name>`

### 删除数据库
`drop database <db_name>;`

### 创建表
```sql
create table <table_name>(
    <pk_name>   <pk_type>,
    <key_name>  <key_type>,
    data text not null,
    primary key(<pk_name>,<key_name>)
);
```

### 打印所有表
`\d`

### 打印表详细信息
`\d <table_name>`

### 删除表
`drop table <table_name>;`
