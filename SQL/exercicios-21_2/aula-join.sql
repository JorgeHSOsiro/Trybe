select * from sakila.address;

select * from sakila.city where city_id = 576;

select A.address, A.district, A.city_id, C.city from sakila.address as A inner join sakila.city as C on A.city_id = C.city_id
where C.city_id=2;