const fs = require('fs');
const path=require('path');

const dir = process.argv[2];
let filePictures =findPictureInFolder(dir,[]);
console.log(filePictures);
function findPictureInFolder(dir, result) {
    const imageExtensions = ['.jpg', '.png', '.gif', '.jpeg', '.bmp'];
    const files = fs.readdirSync(dir);
    const imageFiles = files.filter(file => {
        const extension = path.parse(file).ext.toLowerCase();
        return imageExtensions.includes(extension);
      });
    imageFiles.forEach(file=>result.push(dir+'/'+file));

    const folder = fs.readdirSync(dir, { withFileTypes: true });
    const directories = folder.filter(file => file.isDirectory());
    if(directories.length>0){
        for(let index=0;index<directories.length;index++){
            findPictureInFolder(dir+'/'+directories[index].name,result)
        }
    }
    return result
}



