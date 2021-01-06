// As early as possible in your application, require and configure dotenv.
// https://www.npmjs.com/package/dotenv#usage
require('dotenv').config();

const path = require('path');
const Hapi = require('@hapi/hapi');
const config = require('./config');

const server = Hapi.server({
  port: config.port,
});

const routesDir = path.join(__dirname, '/lib/routes');
require('fs').readdirSync(routesDir)
  .filter((file) => path.extname(file) === '.js')
  .forEach((file) => server.route(require(path.join(routesDir, file))));

const buildRoutesDir = path.join(__dirname, '/build/routes');
require('fs').readdirSync(buildRoutesDir)
  .filter((file) => path.extname(file) === '.js')
  .forEach((file) => server.route(require(path.join(buildRoutesDir, file))));

module.exports = server;
