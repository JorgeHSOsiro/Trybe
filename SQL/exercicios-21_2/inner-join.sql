SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT act.actor_id, act.first_name, film_id FROM sakila.actor AS act 
INNER JOIN sakila.film_actor as film
ON act.actor_id = film.actor_id;

SELECT * from sakila.staff;
SELECT * from sakila.address;
SELECT stf.first_name, stf.last_name, ende.address FROM sakila.staff AS stf 
INNER JOIN sakila.address as ende
ON stf.address_id = ende.address_id;

