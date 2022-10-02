const http = require('http');
const fs = require('fs');

const file = './files/naruto.mp4';

http.createServer((req, res) => {

    res.writeHead(200, {'content-type': 'video/mp4'});
    fs.createReadStream(file)
        .pipe(res)
        .on("error", console.log);

}).listen(3000, ()=>{ console.log(`Steaming server running on 3000`) });