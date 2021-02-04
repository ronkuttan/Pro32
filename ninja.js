class ninja{
    constructor(x,y){
        var options ={
            isStatic :false,
           'restitution' :0,
            'friction' :0.1,
            'density' :1.2
        }
        this.x=x;
		this.y=y;
		this.r=31
		this.image=loadImage("images/ninja.png")
		this.body=Bodies.circle(x, y, 31, options)
		World.add(world, this.body);
    }
    display(){
		var ninjapos =this.body.position;	
		push()
		translate(ninjapos.x,ninjapos.y);
        fill(255,0,255);
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0 , 50,50)
		pop()
 }
}