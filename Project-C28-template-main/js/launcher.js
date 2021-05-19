

class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.bodyA=bodyA
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       if(this.sling.bodyA){
       strokeWeight(5)
       line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)
       } 
               }

        attach(body){
            this.sling.bodyA=body
        }
    }
