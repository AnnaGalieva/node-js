const fs = require('fs');

try {
    const result = fs.readFileSync(__filename, 'utf8');
    console.log(result);
} catch (err) {
    console.log(err);
}

try {
    fs.appendFileSync(__filename, '\nconsole.log("Hello world")');
    console.log('The file was saved');
} catch (err) {
    console.log(err);
}