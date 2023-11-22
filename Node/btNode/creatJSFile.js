const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
let filePathTss=findFile(dir,[],['.ts']);
let filePathJss = findFile(dir, [], ['.js']);

console.log(filePathJss);
function findFile(dir, result, extension) {
    const readFiles = fs.readdirSync(dir);
    const files = readFiles.filter(file => {
        const extensionFile = path.parse(file).ext.toLowerCase();
        return extension.includes(extensionFile);
    });
    files.forEach(file => result.push(dir + '/' + file));

    const folder = fs.readdirSync(dir, { withFileTypes: true });
    const directories = folder.filter(file => file.isDirectory());
    if (directories.length > 0) {
        for (let index = 0; index < directories.length; index++) {
            findFile(dir + '/' + directories[index].name, result, extension)
        }
    }
    return result
}
