import { Sprite } from "./Sprite.js";
import { Label } from "./Label.js";
import { Node } from "./Node.js";

const game = new Node();

game.createCard();
game.shuffleCard();
game.draw();


