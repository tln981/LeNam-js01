import { Sprite } from "./Sprite.js";
import { Label } from "./Label.js";

const backGround = new Sprite(0, 0, './assets/BackGround.jpg');
document.body.appendChild(backGround.element);
backGround.width = 1280;
backGround.height = 720;

let cards = [];
let countResult = 0;

renderCard()
shuffleCard(cards)

function renderCard() {
    let paramPositionX = 0;
    let paramPositionY = -1;
    countResult = 0;
    cards = [];
    for (let indexCard = 0; indexCard < 20; indexCard++) {
        paramPositionX = indexCard % 5;
        paramPositionY = indexCard % 5 === 0 ? paramPositionY + 1 : paramPositionY;
        let card = new Sprite((145 * paramPositionX) + 10, (paramPositionY * 165) + 5, './assets/cover.jpg')
        cards.push(card);
        card.element.addEventListener('click', openCard)
        card.srcResult = "./assets/" + Math.floor(indexCard / 2) + ".jpg";
        document.body.appendChild(card.element);
    }
}
function shuffleCard(cards) {
    let valueCards = ['0', '0', '1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9']
    cards.forEach(card => {
        const randomCard = +Math.floor(Math.random() * valueCards.length)
        card.srcResult = "./assets/" + valueCards[randomCard] + ".jpg";
        valueCards.splice(randomCard, 1);
    });
}
let stackCard = [];
function openCard(e) {
    console.log(stackCard);
    const element = e.currentTarget;
    let currentCard = cards.find((card) => card.element == element);
    currentCard.active = false;
    if (stackCard.length == 0) {
        stackCard.push(currentCard);
    } else {
        let previousCard = cards.find((card) => card == stackCard[0]);
        if (previousCard.srcResult != currentCard.srcResult) {
            setTimeout(() => {
                currentCard.active = true;
                previousCard.active = true;
            }, 500)
        } else {
            if (currentCard === previousCard) {
                currentCard.active=true;
            } else {
                setTimeout(() => {
                    previousCard.visibility = 'hidden';
                    currentCard.visibility = 'hidden';
                }, 500)
                countResult++;
            }
        }
        stackCard.pop();
    }
}