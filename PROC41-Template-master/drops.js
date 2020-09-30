class Drops{
    constructor(x,y,width,height){
        var options = {
            friction:0.001,
            restitution:0.1
        }
    }

    update(){
        if(this.body.y === 802){
            this.body.y === 0;
        }
    }

    display(){
        this.body = Matter.Bodis.Circle();
        World.add(world, this.body);
    }
}