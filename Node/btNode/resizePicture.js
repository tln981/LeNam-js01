const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const newDir = process.argv[3];
let filePictures = findPictureInFolder(dir, []);
resizePictures(filePictures, newDir);


function findPictureInFolder(dir, result) {
    const imageExtensions = ['.jpg', '.png', '.gif', '.jpeg', '.bmp'];
    const files = fs.readdirSync(dir);
    const imageFiles = files.filter(file => {
        const extension = path.parse(file).ext.toLowerCase();
        return imageExtensions.includes(extension);
    });
    imageFiles.forEach(file => result.push(dir + '/' + file));

    const folder = fs.readdirSync(dir, { withFileTypes: true });
    const directories = folder.filter(file => file.isDirectory());
    if (directories.length > 0) {
        for (let index = 0; index < directories.length; index++) {
            findPictureInFolder(dir + '/' + directories[index].name, result)
        }
    }
    return result
}
function resizePictures(pathFiles, destinationFolder) {
    pathFiles.forEach(pathFile => {
        const fileName = path.basename(pathFile);
        const destinationPath = path.join(destinationFolder, fileName);
        const percentage=0.7;
        sharp(pathFile)
            .metadata()
            .then(metadata => {
                const newWidth = Math.round(metadata.width * percentage); 
                const newHeight = Math.round(metadata.height * percentage); 

                return sharp(pathFile)
                .resize(newWidth, newHeight)
                .toFile(destinationPath);
            })
    })
}

