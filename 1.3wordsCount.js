function wordCount(str){
    let len=str.length;
    let count=1;
    for(let i=0;i<len;i++){
        if(String(str).charAt(i).toUpperCase()===String(str).charAt(i)){
            count++;
        }
    } 
    return count;
}
console.log(wordCount('oneTwoThree'));