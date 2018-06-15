CREATE TABLE owner (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(80) NOT NULL,
	last_name VARCHAR(80) NOT NULL
);


CREATE TABLE pet (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	breed VARCHAR(80) NOT NULL,
	color VARCHAR(80) NOT NULL,
	is_checked_in VARCHAR(10)
);

CREATE TABLE owner_pet (
	PRIMARY KEY("owner_id", "pet_id"),
    owner_id integer NOT NULL REFERENCES owner,
    pet_id integer NOT NULL REFERENCES pet
);

INSERT INTO owner (first_name, last_name)
VALUES ('James', 'Meyers'),
('Laurie', 'Crone'),
('Patti', 'Sanderson'),
('Megan', 'Solga'),
('Brittany', 'Fabrello');

INSERT INTO pet (name, breed, color, is_checked_in)
VALUES ('Charles', 'Cat', 'Blue', 'IN'),
('Harley', 'Cat', 'Grey', 'IN'),
('Lily', 'Cat', 'Tabby', 'IN'),
('Charlie', 'Dog', 'Miniature American Eskimo', 'IN'),
('Tollie', 'Cat', '???', 'IN');

INSERT INTO owner_pet 
VALUES (1, 1),
(2, 2),
(2, 3),
(4, 5),
(5, 4);

SELECT owner.first_name as owner, pet.name, pet.breed, pet.color, is_checked_in FROM owner_pet
JOIN pet ON owner_pet.pet_id = pet.id
JOIN owner ON owner_pet.owner_id = owner.id;

SELECT owner.id, owner.first_name as name, count(pet.id) as pets FROM owner_pet
JOIN pet ON owner_pet.pet_id = pet.id
JOIN owner ON owner_pet.owner_id = owner.id
GROUP BY owner.id;