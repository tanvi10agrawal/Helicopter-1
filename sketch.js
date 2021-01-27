var helImg, hel, pack, packImg;
var packBody, ground
const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;
 
function preload(){
    helImg=loadImage("helicopter.png")
    packImg=loadImage("package.png")
}
 
function setup(){
    createCanvas(800,700);
    rectMode(CENTER);
 
    pack= createSprite(width/2, 80, 10, 10);
    pack.addImage(packImg);
    pack.scale=0.2
 
    hel=createSprite(width/2,200,10,10);
    hel.addImage(helImg)
    hel.scale=0.6
 
    groundSprite=createSprite(width/2, height-35, width, 10);
    groundSprite.shapeColor=("white")
 
    engine=Engine.create();
    world=engine.world;
 
    packBody= Bodies.circle(width/2, 200, 5, {restitution:3, isStatic:true});
    World.add(world,packBody);
 
    ground= Bodies.rectangle(width/2, 650, width, 10, {isStatic:true});
    World.add(world,ground);
 
    Engine.run(engine);
}
 
function draw(){
    rectMode(CENTER);
    background("black");
    pack.x=packBody.position.x
    pack.y=packBody.position.y
    drawSprites();
}







