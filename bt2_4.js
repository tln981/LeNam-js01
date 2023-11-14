function findMissElement(arr1,arr2){
    let arrResult=[];
    let len1=arr1.length;
    let len2=arr2.length;
    for(i=0;i<len2;i++){
        let flag=0;
        for(j=0;j<len1;j++){
            //console.log(arr2[i]+'---'+arr1[j])
            if (arr2[i]==arr1[j]){
                flag=1;
                break;
            }
        }
        //console.log(arr2[i]+'---'+flag);
        if (flag==0){
            arrResult.push(arr2[i]);
        }
    }
    return arrResult;
}
let arr1=[1,2,3,4,5,6];
let arr2=[1,3,4,5,6,7,8];
console.log(findMissElement(arr1,arr2));