SELECT * FROM sakila.customer;
SELECT CONCAT(first_name,' ',  last_name) AS 'Cliente' FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
SELECT * FROM sakila.customer WHERE active = '0' AND first_name <> 'Kenneth' ORDER BY first_name ASC;
SELECT * FROM sakila.film;
SELECT title, description, release_year, replacement_cost FROM sakila.film WHERE (rating = 'PG' OR rating = 'PG-13') AND replacement_cost <= '18.00' ORDER BY replacement_cost DESC LIMIT 100;
SELECT count(first_name) from sakila.customer WHERE active = '1' and store_id = 1;
#318
SELECT * from sakila.customer WHERE active = '0' and store_id = 1;
SELECT title, rental_rate, rating from sakila.film WHERE rating = 'NC-17' or rating = 'R'  order by rental_rate limit 50 ;

