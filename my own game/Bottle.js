class Bottle{
    constructor(x,y,w,h,angle){
    var options={
        isStatic: true
    }
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.angle=angle;
    this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
   // this.image=loadImage("game image/download.png");
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       
       
        rect(pos.x,pos.y,this.w,this.h);
     pop();
      }

}