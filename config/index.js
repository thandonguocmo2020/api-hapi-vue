// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'development' environment configuration object
module.exports = {
    host: 'http://localhost',
    site: 'WEBSITE',
    port: {
        www: 3000
    },
    cmt: {
        www: 4000
    },
    db: 'mongodb://localhost/blog',
    secret: '78ad3c62b2f44ec3b65f09ebf1236a6c3c56656d6593b39c250646ee375d2075',
    log: {
        collection: 'logs',
        level: 'all'
    },

    // aws: {
    //     clientID: 'AKIAJGNVNF32R6UBI4XQ',
    //     clientSecret: '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',
    //     region: 'us-east-1',
    //     bucket: 'i.geekrill.com'
    //
    // },
    aws: {
        clientID: 'AKIAJ7KAYXSZG6RN763Q',
        clientSecret: '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',
        region: 'us-east-1',
        bucket: 'storage-geek'
    },


    facebook: {
        clientID: '687615191258150',
        clientSecret: '4f09bd8ee3a6cff3711200f9ef2e1045',
        callbackURL: 'http://localhost:8080/auth/facebook/callback'
    },

    twitter: {
        clientID: 'XVuGpFDcCIfIVZfhqkMiNjSuu',
        clientSecret: '0wp1Q50DPjtlqX8LtgoBWCqRxpJtxKXwpmmplwhYDOEMJzXPGA',
        callbackURL: 'http://localhost:8080/auth/twitter/callback'
    },

    tumblr: {
        clientID: 'sC2hNnCfMHYFh84vEWB6icAuSkFdupIBo1cdrpGMMCPHBvskEP',
        clientSecret: 'ww3bd7R4o5LtOBFvTwnH0MkUx3UMGQuWLrm3LxCUYO5j3vUsuj',
        callbackURL: 'http://localhost:8080/auth/tumblr/callback'
    },
    google: {
        clientID: 'Google Application ID',
        clientSecret: 'Google Application Secret',
        callbackURL: 'http://localhost:8080/oauth/google/callback'
    },
    // config email
    email: {
        smtp: {
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // secure:true for port 465, secure:false for port 587
            auth: {
                user: 'thandonguocmo2020@gmail.com',
                pass: 'tranhoanghiep'
            }
        },
        activeAcount: {
            sendFrom: 'thandonguocmo2020@gmail.com',
            subject: 'GEEKRILL SEND EMAIL TO YOUR',
            text: 'active acount from link '
        },
        resetPwd: {
            sendFrom: 'thandonguocmo2020@gmail.com',
            subject: 'GEEKRILL SEND EMAIL TO YOUR',
            text: 'reset password from link'
        }
    },


};
