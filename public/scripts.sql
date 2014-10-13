CREATE DATABASE adinidhiwedding;

CREATE USER 'adinidhi'@'localhost' IDENTIFIED BY 'adinidhi';
GRANT ALL PRIVILEGES ON adinidhiwedding.* TO 'adinidhi'@'localhost';

CREATE TABLE guestbook (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     email VARCHAR(100) NOT NULL,
     message VARCHAR(1000)
     PRIMARY KEY (id)
) ENGINE=MyISAM;



CREATE TABLE IF NOT EXISTS guestbook ( \
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY \
	name VARCHAR(100), \
	email VARCHAR(100), \
	message VARCHAR(1000) \
	datetime DATETIME
	);
