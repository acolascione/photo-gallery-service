/* eslint-disable camelcase */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { gatherPhotos, addPhoto } = require('../database/index.js');

const app = express();
const port = 3004;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/restaurants/:id/photos', (req, res) => {
  const { id } = req.params;
  console.log('id: ', id);
  gatherPhotos(id, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log('success!');
      res.status(200).send(result);
    }
  });
});

app.post('/api/restaurants/:id/photos', (req, res) => {
  const { id } = req.params;
  const {
    user_id, description, date, category, url,
  } = req.body;
  console.log('id: ', id);
  addPhoto(id, user_id, description, date, category, url, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log('success!');
      res.status(201).send();
    }
  });
});

app.listen(port, () => {
  console.log(`Photos-Gallery App Listening on Port http://localhost:${port}`);
});

module.exports = {
  app,
  express,
};
