DROP KEYSPACE IF EXISTS datastore;

CREATE KEYSPACE datastore WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE datastore;


CREATE TABLE photo (
    id uuid,
    restaurant_id int,
    restaurant_name text,
    user_id int,
    username text,
    first_name text,
    last_name text,
    avatar text,
    description text,
    date date,
    category text,
    url text,
    PRIMARY KEY ((restaurant_id, id), date, user_id)

)
WITH CLUSTERING ORDER BY (date DESC);

CREATE TABLE user (
    user_id int,
    username text,
    first_name text,
    last_name text,
    avatar text,
    PRIMARY KEY (user_id)
);

