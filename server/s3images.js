/* eslint-disable no-console */
const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.loadFromPath('./config.json');

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
});

// const bucketParams = {
//   Bucket: 'data-store-6',
//   Delimiter: '/',
//   Prefix: 'photos4/',
// };

const list = [];

function listAllKeys(s3bucket, start, end) {
  s3.listObjects({
    Bucket: s3bucket,
    Marker: start,
    MaxKeys: 1000,
  }, (err, data) => {
    if (data.Contents) {
      for (let i = 0; i < data.Contents.length; i += 1) {
        const key = data.Contents[i].Key;
        const url = `https://data-store-6.s3.amazonaws.com/${key}`;
        if (key.substring(0, 19) !== end) {
          list.push(url);
        } else {
          break;
        }
      }
      const list2 = JSON.stringify(list);
      fs.writeFileSync('/Users/alissacolascione/hrsf130/photo-gallery-service/server/photos3.json', list2);
    }
  });
}

listAllKeys('data-store-6', 'photos4/', 'photos5/');

module.exports = list;
