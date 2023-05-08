const fsPromises = require('fs/promises');
const path = require('path');

async function copyDir() {
    const dirFrom = path.join(__dirname, 'files');
    const dirTo = path.join(__dirname, 'files-copy');
    await fsPromises.rm(dirTo, { recursive: true, force: true });
    await fsPromises.mkdir(dirTo, { recursive: true });
    const files = await fsPromises.readdir(dirFrom);
    for (const file of files) {
        const fileFrom = path.join(dirFrom, file);
        const fileTo = path.join(dirTo, file);
        await fsPromises.copyFile(fileFrom, fileTo);
    }
}

copyDir();
