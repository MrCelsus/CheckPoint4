CREATE TABLE
    users(
        `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `email` VARCHAR(80) UNIQUE,
        `password` LONGTEXT,
        `role` VARCHAR(10) DEFAULT 'user'
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    profils(
        `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `firstname` VARCHAR(80),
        `lastname` VARCHAR(80),
        `src` VARCHAR(255),
        `user_id` INT,
        CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    brands (
        `id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `brand` varchar(255) NOT NULL,
        `logo` LONGTEXT NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    brands(brand, logo)
VALUES (
        'Renault',
        'https://www.logo-voiture.com/wp-content/uploads/2021/03/renault-fond-noir.jpg'
    ), (
        'Peugeot',
        'https://logodownload.org/wp-content/uploads/2014/09/peugeot-logo-0-1.png'
    ), (
        'Ford',
        'https://guichetcartegrise.com/storage/img/brand/voiture/Ford.png'
    );

CREATE TABLE
    car_models (
        `id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `model` varchar(255) NOT NULL,
        `brand_id` int NOT NULL,
        CONSTRAINT fk_brand_id FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    car_models(model, brand_id)
VALUES ('Clio IV', 1), ('Twingo III', 1), ('Kangoo', 1), ('206', 2), ('207', 2), ('208', 2), ('Fiesta', 3), ('Focus', 3), ('Ka', 3);

CREATE TABLE
    externals (
        `id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `label` VARCHAR(80) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO externals(label)
VALUES ("Parfait état"), ("Très bon état"), ("État correct"), ("État satisfaisant");

CREATE TABLE
    interiors (
        `id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `label` VARCHAR(80) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO interiors(label)
VALUES ("Parfait état"), ("Très bon état"), ("État correct"), ("État satisfaisant");

CREATE TABLE
    fuels (
        `id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `label` LONGTEXT NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO fuels(label)
VALUES ("Diesel"), ("Essence"), ("Electrique");

CREATE TABLE
    faqs (
        `id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `question` LONGTEXT NOT NULL,
        `answer` LONGTEXT NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    faqs (question, answer)
VALUES (
        "C'est quoi la puissance fiscale ?",
        "La puissance fiscale ou puissance administrative est une unité administrative calculée, en partie, à partir de la puissance réelle du moteur. Elle permet de déterminer, région par région, le montant de la taxe sur les certificats d'immatriculation due lors de l'immatriculation du véhicule."
    ), (
        "C'est quoi la puissance moteur ?",
        "La puissance moteur est une unité de mesure qui va venir impacter directement la vitesse maximale de la voiture."
    ), (
        "Quels sont les meilleures voiture pour jeune permis ?",
        "Toutes les voitures présente sur le site sont faites pour jeune permis, faible consommation, fiable sur un plan mécanique et économique. Mais en toute impartialité je dirais Renault >>> all"
    ), (
        "Quel est le bruit de la voiture ?",
        "La voiture fait VROUM VROUM"
    );

CREATE TABLE
    cars (
        `id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `model_id` INT NOT NULL,
        `fiscal_power` INT NOT NULL,
        `motor_power` INT,
        `external_id` INT NOT NULL,
        `interior_id` INT NOT NULL,
        `fuel_id` INT NOT NULL,
        `kilometers` INT NOT NULL,
        `description` LONGTEXT NOT NULL,
        `price` INT NOT NULL,
        CONSTRAINT fk_model_id FOREIGN KEY (model_id) REFERENCES car_models(id) ON DELETE CASCADE,
        CONSTRAINT fk_fuel_id FOREIGN KEY (fuel_id) REFERENCES fuels(id) ON DELETE CASCADE,
        CONSTRAINT fk_external_id FOREIGN KEY (external_id) REFERENCES externals(id) ON DELETE CASCADE,
        CONSTRAINT fk_interior_id FOREIGN KEY (interior_id) REFERENCES interiors(id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    cars(
        model_id,
        fiscal_power,
        motor_power,
        external_id,
        interior_id,
        fuel_id,
        kilometers,
        description,
        price
    )
VALUES (
        1,
        4,
        90,
        1,
        1,
        1,
        250000,
        "Ceci est une belle voiture rouge",
        4100
    ), (
        4,
        4,
        75,
        2,
        3,
        2,
        213000,
        "Ceci est une belle voiture bleu",
        3200
    ), (
        7,
        4,
        95,
        2,
        4,
        1,
        168750,
        "Ceci est une belle voiture grise",
        2450
    );

CREATE TABLE
    car_images (
        `id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `src` LONGTEXT NOT NULL,
        `car_id` INT(11) NOT NULL,
        CONSTRAINT fk_car_id FOREIGN KEY (car_id) REFERENCES cars(id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    car_images(src, car_id)
VALUES (
        "https://images.caradisiac.com/images/2/5/4/4/192544/S1-renault-clio-4-d-occasion-les-pires-et-les-meilleures-versions-693511.jpg",
        1
    ), (
        "https://images.caradisiac.com/images/2/5/4/4/192544/S8-renault-clio-4-d-occasion-les-pires-et-les-meilleures-versions-693540.jpg",
        1
    ), (
        "https://images.caradisiac.com/images/2/5/4/4/192544/S8-renault-clio-4-d-occasion-les-pires-et-les-meilleures-versions-693537.jpg",
        1
    ), (
        "https://storage.googleapis.com/benzin/lead/original/img_5fae5a66b11de.jpg",
        2
    ), (
        "https://storage.googleapis.com/benzin/lead/original/img_5fae5a67ee6e0.jpg",
        2
    ), (
        "https://storage.googleapis.com/benzin/lead/original/img_5fae5dd83470a.jpg",
        2
    ), (
        "http://www.j-breat-auto.com/base-de-donnees/moteur_annonces/vehicules/@Ford_Fiesta_1285535081/photo1-bg.jpg",
        3
    ), (
        "http://www.j-breat-auto.com/base-de-donnees/moteur_annonces/vehicules/@Ford_Fiesta_1285535081/photo2-bg.jpg",
        3
    ), (
        "http://www.j-breat-auto.com/base-de-donnees/moteur_annonces/vehicules/@Ford_Fiesta_1285535081/photo3-bg.jpg",
        3
    );