/* eslint-disable camelcase */
/* eslint-disable no-console */
// const { Client } = require('pg');
const { Pool } = require('pg');
const Redis = require('ioredis');
const config = require('../server/pg_config.json');

const redis = new Redis({ port: 6379, host: 'localhost' });
// const connection = new Pool(config);
const pool = new Pool(config);

redis.on('connect', () => {
  console.log('Redis connected');
});

redis.on('error', (err) => {
  console.log('Redis Error ', err);
});

pool.connect((err) => {
  if (err) {
    console.log('Could not connect to postgres: ', err);
    return;
  }
  console.log('Connected to Postgres');
});

const gatherPhotos = (id, callback) => {
  const queryStr = 'SELECT * FROM photo  INNER JOIN restaurant ON  restaurant.id = photo.restaurant_id WHERE restaurant.id=$1';
  redis.get(id)
    .then((cache) => {
      if (cache) { callback(null, cache); }
      if (!cache) {
        pool.query(queryStr, [id], (err, results) => {
          if (!err) {
            redis.set(id, results);
            console.log('saved to redis');
          }
          callback(err, results);
        });
      }
    })
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
