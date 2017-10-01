const _ = require('lodash');

module.exports = _.concat([
    // api call
    {
        method: 'GET',
        path: '/api/call',
        handler: function (request, reply) {
            reply({
                message: 'Hello!'
            })
        }
    }
    // api call
], require('./api.js'))