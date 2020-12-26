class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 50, options);
    
      
      World.add(world, this.body);
    }
    display(){
      var position =this.body.position;
      
      push();
      translate(position.x, position.y);
      ellipseMode(CENTER);
      fill("green");
      pop();
    }
  };