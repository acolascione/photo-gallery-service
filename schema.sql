DROP DATABASE IF EXISTS datastore;

CREATE DATABASE datastore;

\c datastore;

CREATE TABLE IF NOT EXISTS users (
 id SERIAL PRIMARY KEY,
 username VARCHAR(20) NOT NULL UNIQUE,
 first_name VARCHAR(20) NOT NULL,
 last_name VARCHAR(20) NOT NULL,
 avatar TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS restaurant (
id SERIAL PRIMARY KEY,
name VARCHAR(25) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS photo (
photo_id SERIAL PRIMARY KEY,
user_id integer NOT NULL,
description VARCHAR(30) NOT NULL,
restaurant_id integer NOT NULL,
category VARCHAR(20) NOT NULL,
url TEXT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (restaurant_id) REFERENCES restaurant(id)
);