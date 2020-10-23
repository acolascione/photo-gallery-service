/* eslint-disable no-console */
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const connection = require('../database/index.js');
const { images } = require('./images.js');

const writer = csvWriter();

const outer = async () => {
  const createUsers = () => new Promise((resolve) => {
    writer.pipe(fs.createWriteStream('user_data.csv'));
    for (let i = 0; i < 10000; i += 1) {
      if (i === 100 || i === 500 || i === 1000 || i === 5000) {
        console.log(`Seeded ${i} Records`);
      }
      writer.write({
        id: i + 1,
        username: faker.internet.userName(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        avatar: faker.random.arrayElement(images),
      });
    }
    writer.end();

    writer.on('finish', () => {
      console.log('done');
      resolve();
    });
  });
  await createUsers();
  const res = await connection.query("COPY users (id,username, first_name, last_name, avatar) FROM '/Users/alissacolascione/hrsf130/photo-gallery-service/server/user_data.csv' DELIMITERS ',' CSV header;");
  console.log('Inserted', res);
  await connection.end();
};
outer();
