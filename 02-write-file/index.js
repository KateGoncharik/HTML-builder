const fs = require('fs');
const path = require('path');

const file = 'text.txt';
fs.access(file, fs.F_OK, (err) => {
    if (err) {
        fs.writeFile(
            path.join(__dirname, file),
            '',
            (err) => {
                if (err) throw err;
            }
        );
    }
})

process.stdout.write('Write some text! \n');
process.stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        process.stdout.write('Goodbye, my friend! \n')
        process.exit(1);
    }
    fs.appendFile(
        path.join(__dirname, file),
        data.toString(),
        err => {
            if (err) throw err;
        }
    )
});

process.on('SIGINT', () => {
    console.log('Goodbye, my friend! \n');
    process.exit();
})

