class Dustbin{

    constructor(x, y, width, height){


        basket.body = Bodies.rectangle(x, y, width, height, options);
        basket.width = width;
        basket.height =  height;
        World.add(world,basket.body);
      
    }

    display(){
        var position = basket.body.position;
        rectMode(CENTER);
        fill("lightblue");
        rect(position.x, position.y, basket.width, basket.height)

    }

}