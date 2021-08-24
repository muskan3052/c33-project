class Snow {
    constructor (x,y){
        var options={
            'friction':.5,
            'density':1.0
        }
        this.width=30;
        this.height=30;
        this.body = Bodies.rectangle(x,y, 30, 30, options);
        this.image = loadImage("snow4.png")
        World.add(world,this.body);
    }

display(){
    push();
    imageMode(CENTER);
    image(this.image,this.body.position.x, this.body.position.y, 30, 30);
    pop();
}
}