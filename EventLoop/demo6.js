const fs = require('fs');
fs.readFile('file.txt' , 'utf8' , (err , data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});
setTimeout(() => console.log("Timer1") , 0);