const fs = require('fs');
fs.writeFile(__filename, 'console.log("Hello,world!)', (err) => {
    if (err) {
        console.error(err);
    }
    console.log('The file was saved');
})

//если запустить перезапишется