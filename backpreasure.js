const  { createWriteStream, createReadStream } = require('fs');

let readStream = createReadStream('./files/naruto.mp4'); // origin
let writeStream = createWriteStream(`./files/copy${new Date().getTime()}.mp4`); // destination

readStream.on("data", (chunk) => { 
    let result = writeStream.write(chunk); // this is gonna use a lot of memory -> because it's returning false, what means that the writable stream cannot get any more data
    console.log(result);
}); // reading by writing


readStream.on("error", (err) => { console.log(`Error occured : ${err}`) });
readStream.on("end", () => writeStream.end());
writeStream.on("close", () => { console.log(`The copy file is ready`) });
