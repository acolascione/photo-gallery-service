DROP DATABASE IF EXISTS datastore;

CREATE DATABASE datastore;

\c datastore;

CREATE TABLE IF NOT EXISTS users (
 id SERIAL PRIMARY KEY,
 username VARCHAR(40) NOT NULL,
 first_name VARCHAR(25) NOT NULL,
 last_name VARCHAR(25) NOT NULL,
 avatar TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS restaurant (
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS photo (
photo_id SERIAL PRIMARY KEY,
user_id integer NOT NULL,
description VARCHAR(150) NOT NULL,
date DATE,
restaurant_id integer NOT NULL,
category VARCHAR(20) NOT NULL,
url TEXT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (restaurant_id) REFERENCES restaurant(id)
);

COPY restaurant (name) FROM '/home/ec2-user/seeding/restaurant_data.csv' DELIMITERS ',' CSV header;

COPY restaurant (name) FROM '/home/ec2-user/seeding/restaurant_data2.csv' DELIMITERS ',' CSV header;

COPY users (id, username, first_name, last_name, avatar) FROM '/home/ec2-user/seeding/user_data.csv' DELIMITERS ',' CSV header;

COPY photo (user_id, description, date, restaurant_id, category, url)  FROM '/home/ec2-user/seeding/photo_data.csv' DELIMITERS ',' CSV header;

COPY photo (user_id, description, date, restaurant_id, category, url)  FROM '/home/ec2-user/seeding/photo_data2.csv' DELIMITERS ',' CSV header;

COPY photo (user_id, description, date, restaurant_id, category, url)  FROM '/home/ec2-user/seeding/photo_data3.csv' DELIMITERS ',' CSV header;

COPY photo (user_id, description, date, restaurant_id, category, url)  FROM '/home/ec2-user/seeding/photo_data4.csv' DELIMITERS ',' CSV header;


COPY photo (user_id, description, date, restaurant_id, category, url)  FROM '/home/ec2-user/seeding/photos_data5.csv' DELIMITERS ',' CSV header;

COPY photo (user_id, description, date, restaurant_id, category, url)  FROM '/home/ec2-user/seeding/photosCsv.csv' DELIMITERS ',' CSV header;