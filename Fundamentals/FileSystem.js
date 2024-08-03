// const fs = require('fs');
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });
// console.log("Hello!");

// const fs = require('fs');
// let content = "This is what will be written to the file";
// fs.writeFile('test.txt', content, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("File written!");
// });
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// const fs = require('fs');
// fs.stat('test.txt', (err, stats) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(stats);
// });

const fs = require('fs');
var fileName = 'test.txt';
fs.stat(fileName, (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    fs.open(fileName, 'r', (err, fd) => {
        var buffer = Buffer.alloc(stats.size);
        fs.read(fd, buffer, 0, buffer.length, null, (err, bytesRead, buffer) => {
            var data = buffer.toString('utf8', 0, buffer.length);
            console.log(data);
            fs.close(fd, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        });
    });
});