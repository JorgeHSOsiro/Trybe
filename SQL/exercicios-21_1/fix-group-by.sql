select * from sakila.customer;
#1
select active, count(*) from sakila.customer group by active;
#2
select active, store_id, count(*) as quant from sakila.customer group by active, store_id;
#3
select avg(length) as media, rating from sakila.film group by rating order by media desc;
#4
select district, count(address) as register from sakila.address group by district order by register desc;
