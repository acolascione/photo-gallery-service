const { Client } = require('pg');
const config = require('./pg_config.json');

const connection = new Client(config);

connection.connect();

module.exports = connection;
