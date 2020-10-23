class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution :0.4,
        friction :0.05
    }
    this.visiblity = 255;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.color=color(random(0,255),random(0,255),random(0,255))
    World.add(world, this.body);
  }
  score(){
    if(this.visiblity<0 && this.visiblity>-105)  
    Score++;
    }
  display(){
    if(this.body.speed<3){
      var angle = this.body.angle;
      var pos = this.body.position;
      push()
      translate(pos.x,pos.y);
      rotate(angle)
      rectMode(CENTER);
      fill(this.color);
      rect(0,0, this.width, this.height);
      pop ()
    }
else{

  World.remove(world,this.body);
  push()
  this.visiblity = this.visiblity-5;
  pop()
}
   
  }

};