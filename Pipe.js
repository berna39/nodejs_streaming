const  { createWriteStream, createReadStream } = require('fs');

let readStream = createReadStream('./files/naruto.mp4'); // origin
let writeStream = createWriteStream(`./files/copy${new Date().getTime()}.mp4`,); // destination

// The pipe method does the exact same things with our home made listeners and handles backpreasure for us
readStream.pipe(writeStream).on("error", (err) => console.log(`Error occured`));