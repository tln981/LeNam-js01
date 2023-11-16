let stack=[];
let flag=0;
function hidden(e){
    const element=e.currentTarget;
    element.style.visibility='hidden';
    // const item=e.currentTaget;
    // item.style.visibility='hidden';
    if (stack.length==0){
        stack.push(element);
    }else{
        //console.log(element.value); 
        if(stack[0].value!=element.value){
            elementPre=stack[0];
            setTimeout(()=>{
                element.style.visibility='';
                elementPre.style.visibility='';
                //stack.pop();
            },500)
        }
        else{
            flag++;
            if(flag==10){
                window.alert('win');
            }
        }
        
        stack.pop()
        
    }
    //console.log(stack);
}
