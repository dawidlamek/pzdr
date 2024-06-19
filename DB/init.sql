-- Create database if it does not exist
CREATE DATABASE IF NOT EXISTS car_service;

-- Use the database
USE car_service;

-- Create tables
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE parts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT NOT NULL,
    status VARCHAR(50) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    date DATE NOT NULL,
    time TIME NOT NULL,
    FOREIGN KEY (client_id) REFERENCES users(id)
);

CREATE TABLE margins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    margin DECIMAL(5, 2) NOT NULL
);

-- Insert data into tables
INSERT INTO roles (name) VALUES ('admin'), ('serwis'), ('klient');

INSERT INTO users (username, password, role_id) VALUES 
('admin1', 'password1', 1),
('service1', 'password2', 2),
('service2', 'password3', 2),
('client1', 'password4', 3),
('client2', 'password5', 3);

INSERT INTO parts (name, quantity, price) VALUES 
('Klocki hamulcowe', 100, 25.50),
('Filtr oleju', 150, 7.25),
('Filtr powietrza', 200, 15.00);

INSERT INTO orders (description, status, user_id) VALUES 
('Wymień klocki hamulcowe', 'W toku', 2),
('Zmień filtr oleju', 'W trakcie', 2),
('Wymień air filter', 'Completed', 3);

INSERT INTO appointments (client_id, date, time) VALUES 
(4, '2024-06-20', '10:00:00'),
(5, '2024-06-21', '14:00:00');

INSERT INTO margins (category, margin) VALUES 
('Klocki hamulcowe', 15.00),
('Filtr oleju', 10.00),
('Filtr powietrza', 12.50);
