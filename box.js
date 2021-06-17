class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity=255;
      
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed)
  if((this.body.speed)<3){
    this.display()
    
  }
  else{
    World.remove(world,this.body);
    push();
    this.Visiblity=this.Visiblity-5
    rectMode(CENTER)
    tint(255,this.Visiblity)
    rectangle(this.image,this.body.position.x,this.body.position.y,50,50)
    pop();
  }
     
    }
  };
  