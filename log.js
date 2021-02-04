class Log {
    constructor(x, y,width, height) {
      var options = {
          isStatic : true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/wood.png")
      this.Visiblity = 255;
     
      World.add(world, this.body);
    }
    display(){
      
      //console.log(this.body.speed);
  
    var pos =this.body.position;
     
      push();
      translate(pos.x, pos.y);
    
      imageMode(CENTER);
      ellipseMode(CENTER);
      image(this.image, 0,0,this.width,this.height)
      pop();
   
   
 }
 
  };