const fs = require('fs');

// readsteam
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});

// readStream.on('data', (chunk) => {
//     console.log('-----new chunk-----');
//     console.log(chunk);
// });

// writestream
const writeStream = fs.createWriteStream('./docs/blog4.txt');
// writeStream.write('hello, world');

// piping
readStream.pipe(writeStream);

// transform stream
const { Transform } = require('stream');

