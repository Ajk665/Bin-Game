class Ground{
    constructor(x,y,width,height){
        var options2 ={
             isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options2);
        this.height = height;
        this.width = width;
        World.add(world,this.body); 
    }
    display(){
   
        var pos = this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);
        
    }
    
}