let arr2D = [[0, 1, 1], [0, 1, 1], [0, 1, 0], [0, 1, 1], [0, 0, 1]];
function dulicateArr(arr, str, phanTu) {
    let len = arr.length;
    if (phanTu == 1) {
        len = len;
    }
    else {
        len = arr.filter(function (item) {
            pre = item.length - 1;
            return (item[pre] == phanTu);
        }).length;
    }
    for (let i = 0; i < len; i++) {
        let newIndex = arr.length;
        arr[newIndex] = arr[i].slice();
        arr[newIndex].pop();
        arr[newIndex].push(str);
    }
    return arr;
}
function addNewElement(arr, str) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        arr[i].push(str);
    }
    return arr;
}
let arrKetQua = [[]];
for (let i = 0; i < 5; i++) {
    let flag = 0;
    for (let j = 0; j < 3; j++) {
        if (arr2D[i][j] == 0) {
            if (flag == 0) {
                arrKetQua = addNewElement(arrKetQua, String(j));
                flag++;
            }
            else {
                arrKetQua = dulicateArr(arrKetQua, String(j), flag);
                flag = String(j);
            }
        }
    }
}
console.log(arrKetQua);