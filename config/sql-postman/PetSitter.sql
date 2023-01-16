CREATE DATABASE PetSitter;
USE  PetSitter;

CREATE TABLE State(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL
);
CREATE TABLE City(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
    stateId INT NOT NULL,
    FOREIGN KEY (stateId) REFERENCES State(id)
);
CREATE TABLE PetsType(
	id INT PRIMARY KEY AUTO_INCREMENT,
	`description` varchar(100) NOT NULL
);
CREATE TABLE PetSitter(
	id INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    cellphone VARCHAR(15) NOT NULL,
    photoURL VARCHAR(100) NOT NULL,
    cityId INT NOT NULL,
	FOREIGN KEY (cityId) REFERENCES City(id)
);
CREATE TABLE petSitterType(
	id INT PRIMARY KEY AUTO_INCREMENT,
    petSitterId INT NOT NULL,
    petsTypeId INT NOT NULL,
    FOREIGN KEY (petSitterId) REFERENCES PetSitter(id),
    FOREIGN KEY (petsTypeId) REFERENCES PetsType(id)
);
ALTER TABLE petSitterType ADD UNIQUE INDEX uniqueSitterType (petSitterId, petsTypeId);

DESCRIBE PetSitter;
DESCRIBE City;
DESCRIBE petSitterType;
DESCRIBE State;
DESCRIBE PetsType;

SELECT * FROM PetSitter;
SELECT * FROM City;
SELECT * FROM petSitterType;
SELECT * FROM State;
SELECT * FROM PetsType;

INSERT INTO State (nombre) VALUES ("SINALOA");
INSERT INTO City (nombre, stateId) VALUES ("Culiacan", 1);
INSERT INTO PetsType (`description`) VALUES ("Perros");
INSERT INTO PetSitter (`name`, lastName, email, cellphone, photoURL, cityId) VALUES ("victor", "volado", "victorvolado@gmail.com", 6671172020, "www.urlPhoto.com", 1);
iNSERT INTO petSitterType (petSitterId, petsTypeId) VALUES (3,3 );





