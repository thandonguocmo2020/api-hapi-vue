'use strict';

const Hapi = require('hapi');
const config = require('./config');
const Inert = require('inert');
const Blipp = require('blipp');
const mongoose = require('mongoose');

const server = new Hapi.Server();
server.connection({
  port: 3000
});

//


// Register webpack HMR, fallback to development environment
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {

  const WebpackConfig = require('./config/webpack.config.js'); // Webpack config
  const HapiWebpackMiddleware = require('./server/plugins/HapiWebpackMiddleware');

  server.register({
    register: HapiWebpackMiddleware,
    options: {
      config: WebpackConfig,
      devOptions: {
        noInfo: true,
        publicPath: WebpackConfig.output.publicPath,
        stats: {
          colors: true
        }
      }
    }
  }, function (err) {
    if (err) {
      throw err;
    }
  });

}

server.register([Inert, Blipp], function (err) {

  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/assets/{filepath*}',
    config: {
      auth: false,
      cache: {
        expiresIn: 24 * 60 * 60 * 1000,
        privacy: 'public'
      }
    },
    handler: {
      directory: {
        path: __dirname + '/public/assets/',
        listing: false,
        index: false
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/build/{filepath*}',
    config: {
      auth: false,
      cache: {
        expiresIn: 24 * 60 * 60 * 1000,
        privacy: 'public'
      }
    },
    handler: {
      directory: {
        path: __dirname + '/public/build/',
        listing: false,
        index: false
      }
    }
  });

  // Example api call
  server.route(require('./server/router'));

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: function (request, reply) {
      reply.file('./public/index.html');
    }
  });
});

server.start((err) => {

  if (err) {
    throw err;
  }

  // Create a new Mongoose connection instance
  mongoose.Promise = global.Promise;
  global.db = mongoose.connect(config.db, { promiseLibrary: global.Promise, useMongoClient: true });
  console.log(`Server running at: ${server.info.uri}`);

});

module.exports = server;
