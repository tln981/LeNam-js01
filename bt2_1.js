function factorial(a){
    if (a==1){
        return 1;
    }
    else{
        return a*factorial(a-1);
    }
}
// console.log(factorial(5));
function combination(n,k){
    let result=0;
    result=factorial(n)/(factorial(k)*factorial(n-k));
    return result;
}
console.log(combination(9,5));