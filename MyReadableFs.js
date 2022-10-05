const { ReadStream } = require('fs')

let myStream = ReadStream('./files/naruto.mp4');

myStream.on("data", (data) => { console.log(data); });
myStream.on("data", (data) => { console.log(`size of the chunk : ${data.length}`); });
myStream.on("error", (err) => console.log(`Error occured : ${err}`));
myStream.on("end", () => { console.log(`No more data on the stream`) });

//--- To put the stream into the non-flowing mode ---//

// myStream.pause(); // To stop the reading
// myStream.resume(); // To continue the reading