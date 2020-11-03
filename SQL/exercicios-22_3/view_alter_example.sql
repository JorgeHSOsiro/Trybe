USE sakila;
CREATE TABLE actor_clone LIKE sakila.actor;
CREATE VIEW top_10_customers AS
    SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
    FROM sakila.payment p
    INNER JOIN sakila.customer c ON p.customer_id = c.customer_id
    GROUP BY customer_id
    ORDER BY total_amount_spent DESC
    LIMIT 10;
    
SELECT * FROM top_10_customers;
SELECT first_name FROM top_10_customers WHERE customer_id = 526;

DROP VIEW top_10_customers;

USE sakila;
CREATE TABLE noticia(
    noticia_id INT PRIMARY KEY,
    titulo VARCHAR(100),
    historia VARCHAR(300)
) engine = InnoDB;

SELECT * FROM sakila.noticia;
ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;
ALTER TABLE noticia MODIFY noticia_id BIGINT;
ALTER TABLE noticia MODIFY noticia_id BIGINT auto_increment;
ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;
ALTER TABLE noticia DROP COLUMN data_postagem;
ALTER TABLE noticia ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;
SHOW COLUMNS FROM sakila.noticia;