/* eslint-disable no-console */
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const photos = require('./photos3.json');

const writer = csvWriter();

const categories = ['Food', 'Drink', 'Interior', 'Exterior', 'Atmosphere'];

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// const outer = async () => {
const createPhoto = () => new Promise((resolve) => {
  writer.pipe(fs.createWriteStream('photo_data3.csv'));
  for (let i = 0; i < 4000000; i += 1) {
    if (i === 50000 || i === 100000 || i === 1000000 || i === 2000000 || i === 3000000) {
      console.log(`Seeded ${i} Records`);
    }
    writer.write({
      user_id: randomNum(1, 10000),
      description: faker.lorem.sentence(),
      date: faker.date.between('2020-08-01', '2020-10-1').toISOString(),
      restaurant_id: randomNum(1, 7000000),
      category: faker.random.arrayElement(categories),
      url: faker.random.arrayElement(photos),
    });
  }
  writer.end();

  writer.on('finish', () => {
    console.log('done');
    resolve();
  });
});
//   await createPhoto();
// const res = await connection.query("COPY photo (user_id, description, date,
// restaurant_id, category, url)  FROM '/Users/alissacolascione/hrsf130/photo-gallery-service/
// server/photo_data3.csv' DELIMITERS ',' CSV header;");
//   console.log('Inserted', res);
//   await connection.end();
// };
// outer();
createPhoto();
