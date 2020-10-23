/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const faker = require('faker');
const fs = require('fs');
const photos = require('./photos3.json');

const categories = ['Food', 'Drink', 'Interior', 'Exterior', 'Atmosphere'];

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const count = 10000000;
const filename = 'photosCsv.csv';
const stream = fs.createWriteStream(filename);

const makePhoto = () => {
  const user_id = randomNum(1, 10000);
  const description = faker.lorem.sentence();
  const date = faker.date.between('2020-08-01', '2020-10-1').toISOString();
  const restaurant_id = randomNum(1, 7000000);
  const category = faker.random.arrayElement(categories);
  const url = faker.random.arrayElement(photos);

  return `${user_id},${description},${date},${restaurant_id},${category},${url}}\n`;
};

(async () => {
  for (let i = 0; i <= count; i += 1) {
    const photo = makePhoto();
    if (!stream.write(photo)) {
      await new Promise((resolve) => stream.once('drain', resolve));
    }
    if (i === 1000000 || i === 3000000 || i === 4000000 || i === 7000000 || i === 9000000) {
      console.log(`Seeded ${i} Records`);
    }
  }
})();
