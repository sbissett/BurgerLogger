-- CREATE DATABASE burgers_db;

USE v0w4fhgr1qcdjijr;
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(200) NOT NULL,
    devoured BOOLEAN default FALSE,
    date TIMESTAMP,
    PRIMARY KEY(id)
)