// pipe method allows us to pipe data from any readable stream to any writable stream
const  { createWriteStream, createReadStream } = require('fs');

// ----- First example -------- //
// let readStream = createReadStream('./files/naruto.mp4'); // origin
// let writeStream = createWriteStream(`./files/copy${new Date().getTime()}.mp4`); // destination

// // The pipe method does the exact same things with our home made listeners and handles backpreasure for us
// readStream.pipe(writeStream).on("error", (err) => console.log(`Error occured`));


// ----- Second example -------- //
let writeStream = createWriteStream(`./files/myFile${new Date().getTime()}.txt`);
// piping the incoming stream to myFile... -> cmg  echo "Hello berna" | node Pipe.js 
process.stdin.pipe(writeStream);