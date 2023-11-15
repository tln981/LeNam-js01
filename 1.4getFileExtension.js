function getFileExtension(fileName){
    let result='';
    result=String(fileName).split('.')[1];
    return result;
}
console.log(getFileExtension('aaaa.mp3'));