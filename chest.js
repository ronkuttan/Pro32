class Chest {
    constructor(x, y) {
      var options = {
          isStatic : false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 80,77,options);
      this.width = 80;
      this.height =77;
      this.image=loadImage("images/chest.png")
     
      World.add(world, this.body);
    }
    display(){
      var chestpos =this.body.position;
     
      push();
      translate(chestpos.x, chestpos.y);
      imageMode(CENTER);
      ellipseMode(CENTER);
      image(this.image, 0,0,200,120)
      pop();
    }
  };