function wordCount(str){
    var countUpper = str.length - str.replace(/[A-Z]/g, '').length;    
    return countUpper+1;
}
console.log(wordCount('oneTwoThree'));