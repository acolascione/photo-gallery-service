/* eslint-disable no-console */
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const { images } = require('./images.js');
const { list } = require('./s3images.js');

const writer = csvWriter();

const categories = ['Food', 'Drink', 'Interior', 'Exterior', 'Atmosphere'];

// cassandra

const createPhoto = () => new Promise((resolve) => {
  writer.pipe(fs.createWriteStream('cass_photos2.csv'));
  for (let i = 4000001; i < 8000000; i += 1) {
    if (i === 4500000 || i === 5000000 || i === 5500000 || i === 6000000 || i === 7000000) {
      console.log(`Seeded ${i} Records`);
    }
    writer.write({
      id: i + 1,
      restaurant_id: faker.random.number({ min: 1, max: 1000000 }),
      restaurant_name: faker.company.companyName(),
      user_id: faker.random.number({ min: 1, max: 10000 }),
      username: faker.internet.userName(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      avatar: faker.random.arrayElement(images),
      description: faker.lorem.sentence(),
      date: faker.date.between('2020-08-01', '2020-10-1').toISOString(),
      category: faker.random.arrayElement(categories),
      url: faker.random.arrayElement(list),
    });
  }

  writer.end();

  writer.on('finish', () => {
    console.log('done');
    resolve();
  });
});
createPhoto();
