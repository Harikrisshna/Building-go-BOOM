class Constraint{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:200
        }
        this.constraint=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.constraint)
    }
    display(){
        var pos1=this.constraint.bodyA.position;
        var pos2=this.pointB;
        line(pos1.x,pos1.y,pos2.x,pos2.y)
    }
}