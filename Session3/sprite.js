import { Node } from "./Node.js";
export class Sprite extends Node{
    constructor(x,y,src){
        this._positionX=x;
        this._positionY=y;
        this._src=src;
        this._srcResult='';
        this._visibility='';
        this._scaleX=1;
        this._scaleY=1;
        this._active=true;
        this._width=140;
        this._height=160;
        this.element=this._createElement();
        
        //document.body.appendChild(this.element);
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
    get visibility(){return this._visibility}
    set visibility(value){
        this._visibility=value;
        this.element.style.visibility=this._visibility;
    }

    get src(){return this._src}
    set src(value){
        this._src=value;
        this.element.src=this._src;
    }

    get srcResult(){return this._srcResult}
    set srcResult(value){
        this._srcResult=value;
    }
    get scaleX(){return this._scaleX}
    set scaleX(value){
        this._scaleX=value;
        this.element.style.transform=`scaleX(${this._scaleX})`;
    }
    get scaleY(){return this._scaleY}
    set scaleY(value){
        this._scaleY=value;
        this.element.style.transform=`scaleY(${this._scaleY})`;
    }
    
    get active(){return this._active}
    set active(value){
        this._active=value;
        this.element.src = value?this._src:this._srcResult;
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

}