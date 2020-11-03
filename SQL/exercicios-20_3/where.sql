SELECT * FROM sakila.film WHERE length = 50;
SELECT * FROM sakila.film WHERE title <> 'alien center';
SELECT * FROM sakila.film WHERE title <> 'alien center' and length < 50;

SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;

SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;