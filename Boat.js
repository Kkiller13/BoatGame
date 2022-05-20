class Boat {
  constructor(x, y, width, height, boatPos,boatanimation) {
  
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.animaniton = boatanimation;
    this.speed = 0.05
    this.image = loadImage("./assets/boat.png");
    this.boatPosition = boatPos;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed % this.animaniton.lenght)


    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animaniton[index], 0, this.boatPosition, this.width, this.height);
    pop();
    
  }
  remove(index){
      World.remove(world,boats[index].body)
      delete boats[index]
    
  }
  animate(){
    this.speed += 0.05
  }
}

