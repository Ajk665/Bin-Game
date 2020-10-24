class Bins {

    constructor(x,y){
    this.image = loadImage("dustbingreen.png");
    }

    display(){

        push();
        imageMode(CENTER);
        image(this.image,575,460,130,150);
        pop();

    }
}