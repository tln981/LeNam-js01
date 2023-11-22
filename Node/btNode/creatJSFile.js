const fs = require('fs');
const path = require('path');

const dir = process.argv[2];

let filePathTss=findFile(dir,[],['.ts']);
let filePathJss = findFile(dir, [], ['.js']);
let content=createFile(filePathTss,filePathJss)
console.log(content);

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


function createFile(filePathTss,filePathJss){
    let content='';
    filePathTss.forEach(filePath=>{
        const classImport = path.parse(filePath).name;
        const directoryPath = path.dirname(filePath);
        let pathImport = path.join(directoryPath, classImport);
        pathImport= pathImport.replace(__dirname,'.');
        content+=`import { ${classImport} } from "${pathImport}";\n`;
    });

    filePathJss.forEach(filePath=>{
        const classImport = path.parse(filePath).name;
        const pathImport= filePath.replace(__dirname,'.');

        content+=`import { ${classImport} } from "${pathImport}";\n`;
    });
    const newFile='index.js';
    try {
        fs.writeFileSync(newFile, content);
        console.log(`File ${newFile} đã được tạo thành công.`);
    } catch (err) {
        console.error('Lỗi khi tạo file:', err);
    }
}
