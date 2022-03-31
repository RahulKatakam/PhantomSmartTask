const fileSystem = require('fs');


// Reading a File

fileSystem.readFile('reading.txt', 'utf-8', (err,data)=> {
    console.log(data)
    console.log("Reading File Completed")
})

//Writing to a File

const textToBeWritten = 'Writing to a text file'
fileSystem.writeFile('./writing.txt', textToBeWritten, (err,data)=>{
    console.log("Writing File Completed")
})
