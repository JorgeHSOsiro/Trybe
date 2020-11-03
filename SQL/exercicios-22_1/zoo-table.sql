DROP DATABASE zoo;
CREATE DATABASE IF NOT EXISTS zoo;
USE zoo;

-- animal - id, Nome, Especie, Sexo, Idade, Localizacao
-- cuidador - id, animal_id, nome
-- gerente - id, cuidador_id, nome

CREATE TABLE IF NOT EXISTS animal (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome_animal VARCHAR(50) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    sexo CHAR(1) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS cuidador (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome_cuidador VARCHAR(20) NOT NULL,
    sobrenome_cuidador VARCHAR(20) NOT NULL,
    sexo CHAR(1) NOT NULL,
    animal_id INT NOT NULL,
    CONSTRAINT `fk_animal` FOREIGN KEY (animal_id) REFERENCES animal(id)
);

CREATE TABLE IF NOT EXISTS gerente (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome_gerente VARCHAR(50) NOT NULL,
    sobrenome_gerente VARCHAR(20) NOT NULL,
    sexo CHAR(1) NOT NULL,
    cuidador_id INT NOT NULL,
    CONSTRAINT `fk_cuidador` FOREIGN KEY (cuidador_id) REFERENCES cuidador(id)
);

