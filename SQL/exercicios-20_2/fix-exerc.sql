SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT DISTINCT CONCAT( title, release_year, rating ) AS 'movie' FROM sakila.film;
SELECT COUNT( CONCAT( title, release_year, rating )) AS 'movie' FROM sakila.film;
#1000
SELECT * FROM sakila.customer;
SELECT COUNT(*) FROM sakila.customer;
#599
SELECT COUNT( DISTINCT last_name) FROM sakila.customer;
#599
SELECT * FROM sakila.category;
SELECT COUNT(*) FROM sakila.category;
#16
SELECT COUNT(*) FROM sakila.country;
#109
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film ORDER BY length DESC, replacement_cost ASC LIMIT 20 ;