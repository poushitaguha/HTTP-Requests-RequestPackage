// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Content Type: ', response.headers['content-type']);
         console.log('Downloading image...');
         console.log('Downloading complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg'));