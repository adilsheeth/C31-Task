class Boat{
    constructor(x, y, width, height, boatPos){
        let options = {
            restitution: 0.8,
            friction: 1,
            density: 1,
        };
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.boatPos = boatPos;
        this.image = loadImage('./assets/boat.png');
        World.add(world, this.body);
    }
    display(){
        let angle = this.body.angle;
        let pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.boatPos, this.width, this.height);
        noTint();
        pop();
    }
}