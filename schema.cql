DROP KEYSPACE IF EXISTS datastore;

CREATE KEYSPACE datastore WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE datastore;


CREATE TABLE photo (
    id int,
    restaurant_id int,
    restaurant_name text,
    user_id int,
    username text,
    first_name text,
    last_name text,
    avatar text,
    description text,
    date timestamp,
    category text,
    url text,
    PRIMARY KEY ((restaurant_id), date, user_id)

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


COPY photo (id, restaurant_id, restaurant_name, user_id, username, first_name, last_name, avatar, description, date, category, url) FROM '/Users/alissacolascione/hrsf130/photo-gallery-service/server/cass_photos.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY photo (id, restaurant_id, restaurant_name, user_id, username, first_name, last_name, avatar, description, date, category, url) FROM '/Users/alissacolascione/hrsf130/photo-gallery-service/server/cass_photos2.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY photo (id, restaurant_id, restaurant_name, user_id, username, first_name, last_name, avatar, description, date, category, url) FROM '/Users/alissacolascione/hrsf130/photo-gallery-service/server/cass_photos3.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY user (user_id, username, first_name, last_name, avatar) FROM '/Users/alissacolascione/hrsf130/photo-gallery-service/server/cass_users.csv' WITH DELIMITER=',' AND HEADER=TRUE;