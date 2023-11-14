function randomInRange(min,max){
    let result=0;
    result=Math.floor(Math.random()*(max-min)+min);
    console.log(result);
}
randomInRange(1,10)