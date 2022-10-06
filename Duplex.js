const { PassThrough } = require('stream')
const  { createWriteStream, createReadStream } = require('fs');

let readStream = createReadStream('./files/naruto.mp4'); // origin
let writeStream = createWriteStream(`./files/copy${new Date().getTime()}.mp4`); // destination

// a duplex stream implements both readable and writable streams
let duplex = new PassThrough();

readStream.pipe(duplex).pipe(writeStream).on("error", (err) => console.log(`Error occured`));

