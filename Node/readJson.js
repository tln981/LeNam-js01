const fs = require('fs');
const filePath=process.argv[2];
function readFileJson(path) {
    const file = fs.readFileSync(path,'utf8');
    const data = JSON.parse(file);
    return data
}
function writeJsonFile(path, newScore) {
    let data=readFileJson(path);
    data["score"]=newScore;
    fs.writeFileSync(path, JSON.stringify(data), 'utf8');
}

writeJsonFile(filePath,20)
