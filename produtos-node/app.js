const fs = require('fs');

const os = require('os');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

var user = os.userInfo();

fs.appendFile('greetings.txt', 'Hello Mun ' + user.username + '!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});