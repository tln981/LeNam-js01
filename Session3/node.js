export class Node{
    constructor(){
        
        
        this.children=[];
    }
    
    

    addChild(childNode) {
        this.children.push(childNode);
    }

    removeChild(childNode) {
        const index = this.children.indexOf(childNode);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }
    
    draw(){

    }
}

