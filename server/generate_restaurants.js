/* eslint-disable no-console */
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const connection = require('./index.js');

const writer = csvWriter();

const outer = async () => {
  const createRestaurants = () => new Promise((resolve) => {
    writer.pipe(fs.createWriteStream('restaurant_data.csv'));
    for (let i = 0; i < 1000000; i += 1) {
      if (i === 5000 || i === 50000 || i === 500000 || i === 1000000 || i === 5000000) {
        console.log(`Seeded ${i} Records`);
      }
      writer.write({
        name: faker.company.companyName(),
      });
    }

    writer.end();

    writer.on('finish', () => {
      console.log('done');
      resolve();
    });
  });
  await createRestaurants();
  const res = await connection.query("COPY restaurant (name) FROM '/Users/alissacolascione/hrsf130/photo-gallery-service/server/restaurant_data.csv' DELIMITERS ',' CSV header;");
  console.log('Inserted', res);
  await connection.end();
};
outer();
