const fs = require('fs');

fs.appendFile(__filename, '\nconsole.log("Hello world");', (err) => {
    if (err) {
        console.error(err);
    }
    console.log("The file was saved");
})

//добавится clg