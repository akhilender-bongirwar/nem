const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt',{encoding:'utf-8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data',(chunk)=>{
//     console.log("<----New data---->");
//     console.log(chunk);
//     writeStream.write("<---New data 1--->");
//     writeStream.write(chunk);
// })
// the above commented code of reading the data and writing to the new file is done in a single line below
readStream.pipe(writeStream);
