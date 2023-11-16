function decToRoman(num,result){
    if (num>=1000){
        let len=parseInt(num/1000);
        for(let i=0;i<len;i++){
            result+='M';
        }
        num=num%1000;
        return decToRoman(num,result);
    }else if(num>=900){
        let len=parseInt(num/900);
        for(let i=0;i<len;i++){
            result+='CM';
        }
        num=num%900;
        return decToRoman(num,result);
    }else if(num>=500){
        let len=parseInt(num/500);
        for(let i=0;i<len;i++){
            result+='D';
        }
        num=num%500;
        return decToRoman(num,result);
    }else if(num>=400){
        let len=parseInt(num/400);
        for(let i=0;i<len;i++){
            result+='CD';
        }
        num=num%400;
        return decToRoman(num,result);
    }else if(num>=100){
        let len=parseInt(num/100);
        for(let i=0;i<len;i++){
            result+='C';
        }
        num=num%100;
        return decToRoman(num,result);
    }else if(num>=90){
        let len=parseInt(num/90);
        for(let i=0;i<len;i++){
            result+='XC';
        }
        num=num%90;
        return decToRoman(num,result);
    }else if(num>=50){
        let len=parseInt(num/50);
        for(let i=0;i<len;i++){
            result+='L';
        }
        num=num%50;
        return decToRoman(num,result);
    }else if(num>=40){
        let len=parseInt(num/40);
        for(let i=0;i<len;i++){
            result+='XL';
        }
        num=num%40;
        return decToRoman(num,result);
    }else if(num>=10){
        let len=parseInt(num/10);
        for(let i=0;i<len;i++){
            result+='X';
        }
        num=num%10;
        return decToRoman(num,result);
    }else if(num>=9){
        let len=parseInt(num/9);
        for(let i=0;i<len;i++){
            result+='IX';
        }
        num=num%9;
        return decToRoman(num,result);
    }else if(num>=5){
        let len=parseInt(num/5);
        for(let i=0;i<len;i++){
            result+='V';
        }
        num=num%5;
        return decToRoman(num,result);
    }else if(num>=4){
        let len=parseInt(num/4);
        for(let i=0;i<len;i++){
            result+='IV';
        }
        num=num%4;
        return decToRoman(num,result);
    }
    for(let i=0;i<num;i++){
        result+='I';
    }
    return result;
}
let kq='';
console.log(decToRoman(555,kq))