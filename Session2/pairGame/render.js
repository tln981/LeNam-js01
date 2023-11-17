// const btn = document.createElement("div");
// btn.innerHTML = "Hello Button";
// document.body.appendChild(btn);
function render(){

    const body = document.body;
    while(body.firstElementChild){
    body.removeChild(body.firstElementChild);
    }
    const valueResult=[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]
    const valueIcon=['😀','😀','😇','😇','😂','😂','😆','😆','🙃','🙃','🤩','🤩','😝','😝','🧐','🧐','🥺','🥺','😈','😈']
    const container=document.createElement("div");
    container.style.display='grid';
    container.style.gridTemplateColumns='auto auto auto auto auto';
    container.style.backgroundColor='#2196F3';
    container.style.padding='20px';
    container.style.height='auto';
    for(let i =0;i<20;i++){
        const item=document.createElement("div");
        item.classList.add('item');
        item.style.position='relative';
        item.style.height='80px';

        const cardHolder=document.createElement("div");
        cardHolder.classList.add('card-holder');
        cardHolder.style.display='flex';
        cardHolder.style.position='absolute';
        cardHolder.style.width='100%';
        cardHolder.style.height='100%';
        cardHolder.id=i;
        cardHolder.style.backgroundColor='rgba(255, 255, 255)';
        cardHolder.style.border='1px solid rgba(0, 0, 0, 0.8)';
        cardHolder.style.fontSize='30px';
        cardHolder.style.alignItems='center';
        cardHolder.style.justifyContent='center';
        cardHolder.style.cursor='pointer';
        cardHolder.addEventListener('click',hidden)
        let indexValue=Math.floor(Math.random()*valueResult.length);
        cardHolder.value=valueResult[indexValue];
        cardHolder.innerHTML=i+1;

        let card=document.createElement("div");
        //card.style.backgroundColor='rgba(255, 255, 255, 0.8)';
        card.style.border='1px solid rgba(0, 0, 0, 0.8)';
        card.style.display='flex';
        card.style.fontSize='30px';
        card.style.textAlign='center';
        card.style.height='100%';
        card.style.alignItems='center';
        card.style.justifyContent='center';
        card.innerHTML=valueIcon[indexValue];
        
        

        item.appendChild(cardHolder);
        item.appendChild(card);
        container.appendChild(item);

        //console.log(item.value);
        valueResult.splice(indexValue,1);
        valueIcon.splice(indexValue,1);
    }
    const point=document.createElement('div')
    point.style.fontSize='30px';
    point.style.textAlign='center';
    point.style.justifyContent='center';
    point.id='point';
    point.innerHTML=pointValue;
    document.body.appendChild(container);
    document.body.appendChild(point);
}

render();