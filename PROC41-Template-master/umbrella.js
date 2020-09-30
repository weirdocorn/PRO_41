class Umbrella{
    constructor(x,y){
        var options = {
            isStatic: true
        }
    }

    display(){
        this.body.addImage(bMU);
        this.body = Matter.Bodies.Circle();
        World.add(world, this.body);
    }
}