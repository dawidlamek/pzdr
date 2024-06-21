-- Create database if it does not exist
CREATE DATABASE IF NOT EXISTS car_service;

USE car_service;

-- Drop tables if they exist to avoid conflicts
DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS parts;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;

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

CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    date DATETIME NOT NULL,
    time TIME NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES users(id)
);

-- Insert roles
INSERT INTO roles (name) VALUES ('admin'), ('serwis'), ('klient');

-- Insert users with hashed passwords
INSERT INTO users (username, password, role_id) VALUES 
('admin1', '$2a$10$19e.vSWE4Im3UfoqP7JVJuV4O0UD4uX50tShjACS6FW5KI6P6YLXm', 1), -- 'password1'
('service1', '$2a$10$0hp2C7Jurq/BjE311qsl.eKYPhDdvo0K9.8sZjKT/rKzlvAeRZEEO', 2), -- 'password2'
('client1', '$2a$10$yCHwKsp7ANhkoHj98eR4nOkK43R9AJDCrqADAKZINGfKhNHA83OM.', 3); -- 'password3'

-- Insert parts
INSERT INTO parts (name, quantity, price) VALUES 
('Klocki hamulcowe', 100, 25.50),
('Filtr oleju', 150, 7.25),
('Filtr powietrza', 200, 15.00);

-- Insert appointments (make sure client IDs match existing user IDs)
INSERT INTO appointments (client_id, date, time) VALUES 
(3, '2024-06-20 10:00:00', '10:00:00'), -- client1
(3, '2024-06-21 14:00:00', '14:00:00'); -- client1
