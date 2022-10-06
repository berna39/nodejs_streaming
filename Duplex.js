const { PassThrough, Duplex } = require('stream')
const  { createWriteStream, createReadStream } = require('fs');

// Impelementing a home made throttle duplex to control the rhythm of r/w steams
class Throttle extends Duplex{
    constructor(ms){
        super();
        this.delay = ms;
    }

    _read(chunk){
        
    }

    _write(chunk, encoding, callback){
        this.push(chunk);
        setTimeout(callback, this.delay);
    }

    _final(){
        this.push(null);
    }
}

let readStream = createReadStream(`./files/naruto.mp4`); // origin
let writeStream = createWriteStream(`./files/copy${new Date().getTime()}.mp4`); // destination

// a duplex stream implements both readable and writable streams
let duplex = new PassThrough();
let throttle = new Throttle(5000);

//Monitoring duplex
duplex.on("data", (chunk) => {
    console.log(`${chunk.length}`);
});

readStream.pipe(throttle).pipe(duplex).pipe(writeStream).on("error", (err) => console.log(`Error occured`));

