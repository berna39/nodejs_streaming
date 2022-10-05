const  { createWriteStream, createReadStream } = require('fs');

let readStream = createReadStream('./files/naruto.mp4'); // origin
let writeStream = createWriteStream(`./files/copy${new Date().getTime()}.mp4`, {
    highWaterMark: 955360 // at the moment that we increase the highWaterMark, there won't be a lot of backpresure but we'll be using a lot of memory
}); // destination

readStream.on("data", (chunk) => { 
    let result = writeStream.write(chunk); // this is gonna use a lot of memory -> because it's returning false, what means that the writable stream cannot get any more data
    console.log(result);
    if(!result){ // in case we have backpresure
        console.log(`Backpreasure`);
        readStream.pause(); // stop the reading
    }
}); // reading by writing


readStream.on("error", (err) => { console.log(`Error occured : ${err}`) });
writeStream.on("drain", (err) => { // in case we're now ready to read more data
    readStream.resume(); // contrinue the reading
    console.log(`Drained`);
});
readStream.on("end", () => writeStream.end());
writeStream.on("close", () => { console.log(`The copy file is ready`) });

// In this case we're not going to use a lot of memory
