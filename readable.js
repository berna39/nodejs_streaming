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
        super();
        this.array = array;
        this.index = 0;
    }

    _read(){
       if(this.index <= this.array.length){
        const chunk = this.array[this.index];
        this.push(chunk);
        this.index += 1;
       }
    }
}

let teamStream = new MyReadableStream(soccerTeams);
teamStream.on("data", (chunk) => console.log(chunk));