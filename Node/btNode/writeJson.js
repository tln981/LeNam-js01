const fs = require('fs');
//const filePath="/Users/user/Public/FE Cocos/js/ngay2/bt/Node/btNode/test2.json"
const filePath=process.argv[2];
//const newField="age";
const newField=process.argv[3];
//const newValue="24"
const newValue=process.argv[4];

function readFileJson(path) {
    const file = fs.readFileSync(path,'utf8');
    const data = JSON.parse(file);
    return data
}
function writeJsonFile(path, newField,newValue) {
    let data=readFileJson(path);
    data[newField]=newValue;
    fs.writeFileSync(path, JSON.stringify(data), 'utf8');
}

writeJsonFile(filePath,newField,newValue);
