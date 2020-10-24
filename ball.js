class Ball {
    constructor(x,y){
        var options ={
            isStatic :false,
            friction: 0.1,
            density: 0.6
        }
        this.body = Bodies.rectangle(x , y, 50,50 , options);
        World.add(world , this.body);
        this.image= loadImage("paper.png");
        }
        display(){
            push();
            image(this.image, this.body.position.x,  this.body.position.y , 50, 50)
            pop();
      
        }
}