export class Sprite{
    constructor(x,y,src){
        this._posX=x;
        this._posY=y;
        this._src=src;
        this._active=true;
        this._width=100;
        this._height=100;

        this.element=document.createElement('div');
        this.element.style.position='absolute';
        this.element.style.width=this._width+'px';
        this.element.style.height=this._width+'px';
        this.element.style.top=this._posX+'px';
        this.element.style.right=this._posY+'px';
        this.element.style.backgroundColor='rgba(0, 0, 0)';
        document.body.appendChild(this.element)
        
    }
    get active(){return this._active}
    set active(value){
        this._active=value;
        this.element.display = value?"block":"none";
    }

}