\q
\
psql -U postgres -d postgresql_part1

relational db -> tables
tables connected using relationships 

users tables
posts tables
comments table 

1 post -> 1 user
1 comment -> 1 post

1 user -> many posts

non relational dd -> doesn't organize data using connected tables
documents, key-value pairs

when to use sql
data has clear structure, relational sequence, transactions, joins, strong validation at db level
example: banking app, commerce, CRM

Non-relational - data changes very often, docs independent, not much joins