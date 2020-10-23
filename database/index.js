/* eslint-disable camelcase */
/* eslint-disable no-console */
//const { Client } = require('pg');
const { Pool } = require('pg');
const config = require('../server/pg_config.json');

// const connection = new Pool(config);
const pool = new Pool(config);

pool.connect((err) => {
  if (err) {
    console.log('Could not connect to postgres: ', err);
    return;
  }
  console.log('Connected to Postgres');
});

const gatherPhotos = (id, callback) => {
  const queryStr = 'SELECT * FROM photo  INNER JOIN restaurant ON  restaurant.id = photo.restaurant_id WHERE restaurant.id=$1';
  pool.query(queryStr, [id], callback);
};

const addPhoto = (id, user_id, description, date, category, url, callback) => {
  console.log('in query');
  const queryStr = 'INSERT INTO photo (user_id, description, date, restaurant_id, category, url) values($1, $2, $3, $4, $5, $6)';
  pool.query(queryStr, [user_id, description, date, id, category, url], callback);
};

module.exports = {
  gatherPhotos,
  addPhoto,
};
