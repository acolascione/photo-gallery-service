/* eslint-disable no-console */
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const { images } = require('./images.js');

const writer = csvWriter();

const createUsers = () => new Promise((resolve) => {
  writer.pipe(fs.createWriteStream('cass_users.csv'));
  for (let i = 0; i < 100000; i += 1) {
    if (i === 500 || i === 1000 || i === 5000 || i === 7500) {
      console.log(`Seeded ${i} Records`);
    }
    writer.write({
      user_id: i + 1,
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
createUsers();
