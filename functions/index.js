const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.randomNumber = functions.https.onRequest((req, res) => {
    const randomNum = Math.floor(Math.random() * 100);
    res.send(`Random Number: ${randomNum}`);
});
