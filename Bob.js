class Bob {

    constructor(x, y, radius) {

        var options = {

            isStatic:true,
            restitution:0.8,
            friction:0.6, 
            density:1.2  

        }

        this.x = x;
        this.y = y;
        this.radius = radius;

        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
        
    }

        display() {

            var bob_position = this.body.position;
            stroke("white");
            fill("black");
            ellipseMode(RADIUS);
            circle(bob_position.x, bob_position.y, this.radius);

        }

}
