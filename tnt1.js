class TNT {
    constructor(x, y) {
      var options = {
          isStatic : false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 63,63,options);
      this.width = 63;
      this.height =63;
      this.image=loadImage("images/tnt.png")
     
      World.add(world, this.body);
    }
    display(){
      var tntpos =this.body.position;
     
      push();
      translate(tntpos.x, tntpos.y);
      imageMode(CENTER);
      ellipseMode(CENTER);
      image(this.image, 0,0,80,80)
      pop();
    }
  };