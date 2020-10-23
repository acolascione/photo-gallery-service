/* eslint-disable no-console */
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();
const writer2 = csvWriter();

const outer = async () => {
  const createRestaurants = () => new Promise((resolve) => {
    writer.pipe(fs.createWriteStream('restaurant_data.csv'));
    for (let i = 0; i < 4000000; i += 1) {
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
};
outer();

const outer2 = async () => {
  const createRestaurants2 = () => new Promise((resolve) => {
    writer2.pipe(fs.createWriteStream('restaurant_data2.csv'));
    for (let i = 0; i < 3000000; i += 1) {
      if (i === 5000 || i === 50000 || i === 500000 || i === 1000000 || i === 5000000) {
        console.log(`Seeded ${i} Records`);
      }
      writer2.write({
        name: faker.company.companyName(),
      });
    }
    writer2.end();

    writer2.on('finish', () => {
      console.log('done');
      resolve();
    });
  });
  await createRestaurants2();
};
outer2();
