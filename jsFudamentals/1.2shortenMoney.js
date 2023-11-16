function thuGonTien(money) {
    let arrResult = [];
    let temp = parseInt(money);
    while (temp >= 1000) {
        arrResult.unshift(String(temp).slice(-3));
        temp = parseInt(temp / 1000);
    };
    arrResult.unshift(String(temp));
    let letter='';
    let len=arrResult.length;
    if(len==1){
        letter='';
    }else if(len==2){
        letter='K';
    }else if(len==3){
        letter='M';
    }else if(len==4){
        letter='B';
    }
    let result='';
    let sub=','+arrResult[1].slice(0,2);
    if (arrResult[1].slice(0,2)=='00'){
        sub='';
    }
    if (arrResult[1].slice(1,1)=='0')
    {
        sub=','+arrResult[1].slice(0,1);
    }
    result=arrResult[0]+sub+letter;
    return result;
}
console.log(thuGonTien(1000000));