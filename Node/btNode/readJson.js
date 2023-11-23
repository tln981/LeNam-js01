const fs = require('fs');

//filePaths=['/Users/user/Public/FE Cocos/js/ngay2/bt/Node/btNode/test2.json','/Users/user/Public/FE Cocos/js/ngay2/bt/Node/test.json]
const filePaths=process.argv.splice(2);
function readFileJson(paths) {
    let jsObjects=[];
    paths.forEach(path => {
        const file = fs.readFileSync(path,'utf8');
        const data = JSON.parse(file);
        jsObjects.push(data);
        console.log(data);
    });
    return jsObjects;
}

readFileJson(filePaths);