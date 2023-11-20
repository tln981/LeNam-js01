import { Sprite } from "./Sprite.js";
export class Node{
    constructor(){
        this._positionX=0;
        this._positionY=0;
        this._src='./assets/BackGround.jpg';
        this._width=1280;
        this._height=720;
        this.element=this._createElement();
        this._countResult=0;
        this._isPlay=false;
        this._stackCard=[];
        this.childrenSprite=[];
        this.childrenLabel=[];

    }
    get positionX(){return this._positionX}
    set positionX(value){
        this._positionX=value;
        this.element.style.left=this._positionX+'px';
    }
    get positionY(){return this._positionY}
    set positionY(value){
        this._positionY=value;
        this.element.style.top=this._positionY+'px';
    }
    get width(){return this._width}
    set width(value){
        this._width=value;
        this.element.style.width=this._width+'px';
    }
    get height(){return this._height}
    set height(value){
        this._height=value;
        this.element.style.height=this._height+'px';
    }
    get src(){return this._src}
    set src(value){
        this._src=value;
        this.element.src=this._src;
    }
    get countResult(){return this._countResult}
    set countResult(value){
        this._countResult=value;
    }
    get stackCard(){return this._stackCard}

    get isPlay(){return this._isPlay}
    set isPlay(value){
        this._isPlay=value;
    }
    addChildSprite(childNode) {
        this.childrenSprite.push(childNode);
    }

    removeChildSprite(childNode) {
        const index = this.childrenSprite.indexOf(childNode);
        if (index !== -1) {
            this.childrenSprite.splice(index, 1);
        }
    }

    addChildLabel(childNode) {
        this.childrenLabel.push(childNode);
    }

    removeChildLabel(childNode) {
        const index = this.childrenLabel.indexOf(childNode);
        if (index !== -1) {
            this.childrenLabel.splice(index, 1);
        }
    }

    _createElement(){
        let element=document.createElement('img');
        element.style.position='absolute';
        element.src=this._src;
        element.style.left=this._positionX+'px';
        element.style.top=this._positionY+'px';
        element.style.width=this._width+'px';
        element.style.height=this._height+'px';
        //element.style.backgroundColor='rgba(0, 0, 0)';
        return element;
    }

    createCard() {
        let paramPositionX = 0;
        let paramPositionY = -1;
        for (let indexCard = 0; indexCard < 20; indexCard++) {
            paramPositionX = indexCard % 5;
            paramPositionY = indexCard % 5 === 0 ? paramPositionY + 1 : paramPositionY;
            let card = new Sprite((145 * paramPositionX) + 10, (paramPositionY * 165) + 5, './assets/cover.jpg')
            //card.element.addEventListener('click', this.openCard.bind(card));
            card.srcResult = "./assets/" + Math.floor(indexCard / 2) + ".jpg";
            
            //card.active=false;
            this.addChildSprite(card);
        }
    }
    // openCard(e) {
    //     const element = e.currentTarget;
    //     console.log(this.childrenSprite);
    //     let currentCard = this.childrenSprite.find((card) => card.element == element);
        
    //     currentCard.active = false;
    //     if (this.stackCard.length == 0) {
    //         this.stackCard.push(currentCard);
    //     } else {
    //         let previousCard = this.childrenSprite.find((card) => card == this.stackCard[0]);
    //         if (previousCard.srcResult != currentCard.srcResult) {
    //             setTimeout(() => {
    //                 currentCard.active = true;
    //                 previousCard.active = true;
    //             }, 500)
    //         } else {
    //             if (currentCard === previousCard) {
    //                 currentCard.active=true;
    //             } else {
    //                 setTimeout(() => {
    //                     previousCard.visibility = 'hidden';
    //                     currentCard.visibility = 'hidden';
    //                 }, 500)
    //                 countResult++;
    //             }
    //         }
    //         stackCard.pop();
    //     }
    // }

    shuffleCard() {
        let valueCards = ['0', '0', '1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9']
        this.childrenSprite.forEach(card => {
            const randomCard = +Math.floor(Math.random() * valueCards.length)
            card.srcResult = "./assets/" + valueCards[randomCard] + ".jpg";
            valueCards.splice(randomCard, 1);
            card.active=false;
        });
    }

    draw(){
        document.body.appendChild(this.element);
        //if(this.isPlay==true) 
        this.childrenSprite.forEach(child=>{child.draw()})

        this.childrenLabel.forEach(child=>{
            child.draw();
        })
    }
}

