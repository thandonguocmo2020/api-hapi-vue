



module.exports = [
    // api call
    {
        method: 'post',
        path: '/api/p',
        handler: function (request, reply) {
            reply({
                message: 'Hello POST'
            })
        }
    }
]