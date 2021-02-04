class Grape{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1
			}
		this.x=x;
		this.y=y;
		this.r=30
		this.image=loadImage("images/grape.png")
		this.body=Bodies.circle(x, y, 30, options)
		World.add(world, this.body);
	}

	display()
	{
		var grapePos=this.body.position;	
		push()
		translate(grapePos.x, grapePos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,80,90)
		pop()
 }
}