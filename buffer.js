const fs = require('fs');
const http = require('http');
const file = './files/naruto.mp4';

http.createServer((req, res) => {

    fs.readFile(file, (err, data) => {
        if(err){
            console.log(err);
        }

        res.writeHeader(200, {'Content-Type': 'video/mp4'});
        res.end(data);

    });

}).listen(3000, ()=>{ console.log(`Steaming server running on 3000`) });