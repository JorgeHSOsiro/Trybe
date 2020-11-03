-- Encontra qualquer resultado finalizando com "don"
select * from sakila.film where title like '%don';
-- Encontra qualquer resultado iniciando com "plu"
select * from sakila.film where title like 'plu%';
-- Encontra qualquer resultado que contém "plu"
select * from sakila.film where title like '%plu%';
-- Encontra qualquer resultado que inicia com "p" e finaliza com "r"
select * from sakila.film where title like 'p%r';
-- Encontra qualquer resultado em que o segundo caractere da frase é "C"
select * from sakila.film where title like '_C%';
-- Encontra qualquer resultado em que o título possui exatamente 8 caracteres
select * from sakila.film where title like '________';
-- Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E
select * from sakila.film where title like '%E__';

#1
select * from sakila.film where title like '%ace%';
#2
select * from sakila.film where description like '%china';
#3
select * from sakila.film where description like '%girl%' and title like '%lord';
#4
select * from sakila.film where title like '___gon%';
#5
select * from sakila.film where title like '___%gon%' and description like '%Documentary%';
#6
select * from sakila.film where title like '%academy' or title like 'mosquito%';
#7
select * from sakila.film where description like '%monkey' and description like '%sumo%';
