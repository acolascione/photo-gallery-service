/* eslint-disable max-len */
// /* eslint-disable no-console */
// const faker = require('faker');
// const fs = require('fs');
// const csvWriter = require('csv-write-stream');
// const { images } = require('../images.js');
// const photos = require('../photos3.json');

// const writer = csvWriter();

// const categories = ['Food', 'Drink', 'Interior', 'Exterior', 'Atmosphere'];

// // cassandra

// const createPhoto = () => new Promise((resolve) => {
//   writer.pipe(fs.createWriteStream('cass_photos3.csv'));
//   for (let i = 8000001; i < 12000000; i += 1) {
//     if (i === 9000000 || i === 10000000 || i === 11000000) {
//       console.log(`Seeded ${i} Records`);
//     }
//     writer.write({
//       id: i + 1,
//       restaurant_id: faker.random.number({ min: 1, max: 1000000 }),
//       restaurant_name: faker.company.companyName(),
//       user_id: faker.random.number({ min: 1, max: 10000 }),
//       username: faker.internet.userName(),
//       first_name: faker.name.firstName(),
//       last_name: faker.name.lastName(),
//       avatar: faker.random.arrayElement(images),
//       description: faker.lorem.sentence(),
//       date: faker.date.between('2020-08-01', '2020-10-1').toISOString(),
//       category: faker.random.arrayElement(categories),
//       url: faker.random.arrayElement(photos),
//     });
//   }

//   writer.end();

//   writer.on('finish', () => {
//     console.log('done');
//     resolve();
//   });
// });
// createPhoto();

/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const faker = require('faker');
const fs = require('fs');
const photos = require('../photos3.json');
const { images } = require('../images.js');

const categories = ['Food', 'Drink', 'Interior', 'Exterior', 'Atmosphere'];

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const count = 20000000;
const filename = 'cass_photos4.csv';
const stream = fs.createWriteStream(filename);

const makePhoto = (i) => {
  const id = i + 8000000;
  const restaurant_id = randomNum(1000001, 8000000);
  const restaurant_name = faker.company.companyName();
  const user_id = randomNum(1, 10000);
  const username = faker.internet.userName();
  const first_name = faker.name.firstName();
  const last_name = faker.name.lastName();
  const avatar = faker.random.arrayElement(images);
  const description = faker.lorem.sentence();
  const date = faker.date.between('2020-08-01', '2020-10-1').toISOString();
  const category = faker.random.arrayElement(categories);
  const url = faker.random.arrayElement(photos);

  return `${id},${restaurant_id},${restaurant_name}${user_id},${username},${first_name},${last_name},${avatar},${description},${date},${category},${url}}\n`;
};

(async () => {
  for (let i = 0; i <= count; i += 1) {
    const photo = makePhoto(i);
    if (!stream.write(photo)) {
      await new Promise((resolve) => stream.once('drain', resolve));
    }
    if (i === 1000000 || i === 4000000 || i === 8000000 || i === 12000000 || i === 15000000 || i === 18000000 || i === 20000000) {
      console.log(`Seeded ${i} Records`);
    }
  }
})();
