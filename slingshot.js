class Slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA : bodyA, 
            bodyB : bodyB, 
            stiffness : 0.04, 
            length : 10,
        }
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot)
    }
    display(){
        line (this.Slingshot.bodyA.position.x, this.Slingshot.bodyA.position.y, this.Slingshot.bodyB.position.x, this.Slingshot.bodyB.position.y,)
    }
}