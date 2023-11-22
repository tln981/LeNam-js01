const fs = require('fs');
const path=require('path');

const dir = process.argv[2];
const newDir=process.argv[3];
let filePictures =findPNGFile(dir,[]);
copyFile(filePictures,newDir);
function findPNGFile(dir, result) {
    const imageExtensions = ['.png'];
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
            findPNGFile(dir+'/'+directories[index].name,result)
        }
    }
    return result
}

function copyFile(pathFiles,destinationFolder){
    pathFiles.forEach(pathFile=>{
        const fileName = path.basename(pathFile);
        const destinationPath = path.join(destinationFolder, fileName); 
        fs.copyFileSync(pathFile, destinationPath);
    })

}