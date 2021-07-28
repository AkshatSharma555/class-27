class Slingshot{
    constructor(a1,b1){
        var options ={
            bodyA:a1,
            bodyB:b1,
            length:15,
            stiffness:0.06
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        var A=this.sling.bodyA.position;
        var B=this.sling.bodyB.position;
        strokeWeight(10);
        fill("black");
        line(A.x,A.y,B.x,B.y);
    }
}