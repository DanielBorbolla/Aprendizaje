CREATE DATABASE database_links;

USE database_links;

CREATE TABLE
    users(
        id int NOT NULL,
        username VARCHAR(16) NOT NULL,
        password VARCHAR(60) NOT NULL,
        fullname VARCHAR(100) NOT NULL
    );

ALTER TABLE users ADD PRIMARY KEY (id);

ALTER TABLE users MODIFY id int NOT NULL AUTO_INCREMENT;

DESCRIBE users;

CREATE TABLE
    links (
        id INT NOT NULL,
        title VARCHAR(150) NOT NULL,
        url VARCHAR(255) NOT NULL,
        description TEXT,
        user_id int,
        created_at TIMESTAMP not null DEFAULT current_timestamp,
        CONSTRAINT fk_user FOREIGN Key (user_id) REFERENCES users(id)
    );

DESCRIBE links;