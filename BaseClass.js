class BaseClass {
  constructor(x, y, width, height, angle) {
    var options = {
      'isStatic': false,
      'density':1.5,
      'friction': 1.0,
      'restitution':0.5
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(pos.x, pos.y, this.width, this.height);
    pop();
  };
};