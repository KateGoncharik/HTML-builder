const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'secret-folder')
fs.readdir(directory, { withFileTypes: true }, (err, files) => {
    if (err) console.log(err);
    console.log('\nCurrent directory file:');
    files.forEach(file => {
        if (file.isDirectory()) {
            return;
        }
        fs.stat(
            path.join(directory, file.name),
            (err, stats) => {
                if (err) throw err;
                const filePath = path.parse(file.name);
                const name = filePath.name;
                const extention = filePath.ext.slice(1);
                console.log(`${name} - ${extention} - ${stats.size}`);
            });
    })
});
