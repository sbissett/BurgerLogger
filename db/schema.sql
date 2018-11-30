CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers (
    id INT NOT NULL,
    burger_name VARCHAR(200) NOT NULL,
    devoured BOOLEAN default FALSE,
    date TIMESTAMP,
    PRIMARY KEY(id)
)