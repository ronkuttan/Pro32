class SlingShot{
    constructor(body,pointB){
        var options={
            bodyA: body, 
            pointB: pointB,
            stiffness : 0.04,
            length : 1
        }
        this.pointB = pointB;
        this.launchObj = Constraint.create(options);
        World.add(world,this.launchObj);
    }
    display(){
        if(this.launchObj.bodyA){ 
            var pointA = this.launchObj.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2)
            line(pointA.x, pointA.y, pointB.x,pointB.y)
        }
    }
    fly(){
        this.launchObj.bodyA = null;
    }
    attach(body){
        this.launchObj.bodyA = body;
    }
   
}

