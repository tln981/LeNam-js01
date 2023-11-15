function randomElement(arr){
    let len=arr.length;
    let rand=-1;
    rand=Math.floor(Math.random()*len);
    let result=arr[rand];
    return result;
}
let arr=['a','b','c'];
console.log(randomElement(arr));