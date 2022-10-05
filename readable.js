const { Readable } = require('stream');

let soccerTeams = [
    "Liverpool",
    "Arsenal",
    "Leeds",
    "Liecester",
    "Tottenham",
    "Chelsea"
];

class MyReadableStream extends Readable{
    constructor(array){
        //super({encoding: "utf-8"});
        super({objectMode: true});
        this.array = array;
        this.index = 0;
    }

    _read(){
       if(this.index <= this.array.length){
        const chunk = this.array[this.index];
        this.push(chunk);
        this.index += 1;
       } else this.push(null) // at the moment that i push null it will trigger the end event
    }
}

let teamStream = new MyReadableStream(soccerTeams);
teamStream.on("data", (chunk) => console.log(chunk));
teamStream.on("end", () => console.log(`End of streaming`));