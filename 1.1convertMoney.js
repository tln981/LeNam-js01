function convertMoney(money) {
    let moneyString = String(money);
    let arrMoney = moneyString.split('.');
    let arrResult = [];
    let temp = parseInt(arrMoney[0]);
    while (temp >= 1000) {
        arrResult.unshift(String(temp).slice(-3));
        temp = parseInt(temp / 1000);
    };
    arrResult.unshift(String(temp));
    let result = arrResult[0];
    let len = arrResult.length;
    for (i = 1; i < len; i++) {
        result += ',' + arrResult[i];
    }
    result += '.' + arrMoney[1];
    return result;
}
console.log(chuyenDoiTien(1000010.55));