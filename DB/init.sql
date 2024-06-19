-- Tworzenie bazy danych
CREATE DATABASE car_service_db;

-- Użycie bazy danych
USE car_service_db;

-- Tworzenie tabeli roles
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Tworzenie tabeli users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- Tworzenie tabeli parts
CREATE TABLE parts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Tworzenie tabeli orders
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT NOT NULL,
    status VARCHAR(50) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Tworzenie tabeli appointments
CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    date DATE NOT NULL,
    time TIME NOT NULL,
    FOREIGN KEY (client_id) REFERENCES users(id)
);

-- Tworzenie tabeli margins
CREATE TABLE margins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    margin DECIMAL(5, 2) NOT NULL
);

-- Wstawienie danych do tabeli roles
INSERT INTO roles (name) VALUES ('admin');
INSERT INTO roles (name) VALUES ('serwis');
INSERT INTO roles (name) VALUES ('klient');

-- Wstawienie przykładowych danych do tabeli users
INSERT INTO users (username, password, role_id) VALUES ('admin1', 'password1', 1);
INSERT INTO users (username, password, role_id) VALUES ('service1', 'password2', 2);
INSERT INTO users (username, password, role_id) VALUES ('service2', 'password3', 2);
INSERT INTO users (username, password, role_id) VALUES ('client1', 'password4', 3);
INSERT INTO users (username, password, role_id) VALUES ('client2', 'password5', 3);

-- Wstawienie przykładowych danych do tabeli parts
INSERT INTO parts (name, quantity, price) VALUES ('Klocki hamulcowe', 100, 25.50);
INSERT INTO parts (name, quantity, price) VALUES ('Filtr oleju', 150, 7.25);
INSERT INTO parts (name, quantity, price) VALUES ('Filtr powietrza', 200, 15.00);

-- Wstawienie przykładowych danych do tabeli orders
INSERT INTO orders (description, status, user_id) VALUES ('Wymień klocki hamulcowe', 'W toku', 2);
INSERT INTO orders (description, status, user_id) VALUES ('Zmień filtr oleju', 'W trakcie', 2);
INSERT INTO orders (description, status, user_id) VALUES ('Wymień air filter', 'Completed', 3);

-- Wstawienie przykładowych danych do tabeli appointments
INSERT INTO appointments (client_id, date, time) VALUES (4, '2024-06-20', '10:00:00');
INSERT INTO appointments (client_id, date, time) VALUES (5, '2024-06-21', '14:00:00');

-- Wstawienie przykładowych danych do tabeli margins
INSERT INTO margins (category, margin) VALUES ('Klocki hamulcowe', 15.00);
INSERT INTO margins (category, margin) VALUES ('Filtr oleju', 10.00);
INSERT INTO margins (category, margin) VALUES ('Filtr powietrza', 12.50);
