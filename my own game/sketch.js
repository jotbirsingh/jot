const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
var gun;
var engine;
var world;
var angle;
function preload(){

}

function setup(){
  createCanvas(1200,600);
  engine = Engine.create()
  world=engine.world
  angleMode(DEGREES);
  angles =20;
  
gun = new Gun(300,240,0.2,0.2,angle);

bottle = new Bottle(200,150,15,15,angle);
}

function draw(){
  background("white");
  Engine.update(engine);
bottle.display();
  gun.display();
}