const { ReadStream } = require('fs')

let myStream = ReadStream('./files/naruto.mp4');

myStream.on("data", (data) => { console.log(data); });
myStream.on("data", (data) => { console.log(`size of the chunk : ${data.length}`); });