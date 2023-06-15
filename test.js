// console.log("Hello ...");
const fs = require('fs');

// fs.readFile('./docs/blg.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);// this gives buffer
//     console.log(data.toString());
// })

// fs.writeFile('./docs/blg.txt', 'hello people...',()=>{
//     console.log("File has been written")
// })
// fs.writeFile('./docs/blg1.txt', 'hola people again...',()=>{
//     console.log("File has been written")
// })

//to check if the folder exists
// if(!fs.existsSync('./assets')) 
// {
//     fs.mkdir('./assets',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("folder created")
// })
// }else{
//     fs.rmdir('./assets',(err)=>{console.log(err)
//     console.log("Folder deleted")
//     })
// }

// if(fs.existsSync('./docs/delete.txt')){
//     //unlink to delete files
//     fs.unlink('./docs/delete.txt',(err)=>{
//         if(err)console.log(err);
//         console.log("File deleted")
//     })
// }