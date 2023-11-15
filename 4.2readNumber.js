function parseArray(num){
    let arrResult = [];
    let temp = parseInt(num);
    while (temp >= 10) {
        arrResult.unshift(String(temp).slice(-1));
        temp = parseInt(temp / 10);
    };
    arrResult.unshift(String(temp));
    for(i=0;i=6-arrResult.length;i++){
        arrResult.unshift('0');
    }
    return arrResult;
}
function readVietNameseNumber(number){
    let strSo=['Không','Một','Hai','Ba','Bốn','Năm','Sáu','Bảy','Tám','Chín'];
    let kq='';
    
    for(let i=0;i<6;i++){
        kq+=strSo[number[i]]+' ';        
        if(i==0){
            kq+='Mươi ';
            kq=kq.replaceAll(/Không Mươi/g,'');
        }
        else if (i==1){
            if(number[0]!='1'){
                kq=kq.replaceAll(/Một $/g,'Mốt ');
            }
            kq+='Vạn ';
            if (number[0]=='0'){
                kq=kq.replaceAll(/Không Vạn/gi,'');
            }
        }
        else if(i==2){
            kq+='Nghìn ';
            if(number[0]=='0'&& number[1]=='0'){
                kq=kq.replaceAll(/Không Nghìn/gi,'');
            }

        }
        else if(i==3){
            kq+='Trăm ';
            if(number[0]=='0'&& number[1]=='0'&&number[2]=='0'){
                kq=kq.replaceAll(/Không Trăm/gi,'');
            }
        }
        else if(i==4){
            kq+='Mươi ';
            if(number[0]=='0'&& number[1]=='0'&&number[2]=='0'&&number[3]=='0'){
                kq=kq.replaceAll(/Không Mươi/gi,'');
            }
        }
        else if(i==5){
            if(number[4]!='1'){
                kq=kq.replaceAll(/Một $/g,'Mốt ');
            }
        }
        
    }
    kq=kq.replaceAll(/Mươi Không/g,'Mươi');
    kq=kq.replaceAll(/Một Mươi/g,'Mười');
    kq=kq.replaceAll(/Không Mươi/g,'Linh');
    kq=kq.replaceAll(/Không Trăm Linh $/g,'');
    kq=kq.replaceAll(/Không Nghìn $/g,'');
    console.log(kq);
    return kq;
}
let kq=''
number=110000;
number=parseArray(number);
readVietNameseNumber(number);