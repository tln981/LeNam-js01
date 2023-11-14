function readVietNameseNumber(number){
    let arrResult = [];
    let temp = parseInt(number);
    while (temp >= 10) {
        arrResult.unshift(String(temp).slice(-1));//
        temp = parseInt(temp / 10);
    };
    arrResult.unshift(String(temp));
    for(i=0;i=6-arrResult.length;i++){
        arrResult.unshift('0');
    }
    console.log(arrResult);
}

readVietNameseNumber(10100)