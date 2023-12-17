const fs = require('fs')
const path = require('path')

// create folder using file system and giving path by conetnating 

// fs.mkdir(path.join(__dirname, '/test'), {} , err => {
//     if(err) throw err;
//     console.log('Folder created...');
// })

//create and write to file along with creating 
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 
// 'Hello World!'
//  , err => {
//     if(err) throw err;
//     console.log('File written to ...');

    // file append it simply means i want both of actions one after the other that is why i created second function inside call back of 1st function

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 
// 'i love coding'
//  , err => {
//     if (err) throw err;
//     console.log('File written to ...');
// })
// })

// read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8' , (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

//Rename a file 
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'renamed.txt') , (err, data) => {
//     if(err) throw err;
//     console.log("file REnamed");
// })


const filePath = path.join(__dirname, 'event_demo.js');

fs.open(filePath, 'w', (err, fd) => {
    if (err) throw err;
    
    console.log("File is created");
    
    // Now you can do further operations with the file using the file descriptor (fd)
    
    // Don't forget to close the file when you are done with it
    fs.close(fd, (err) => {
        if (err) throw err;
        console.log("File is closed");
    });
});