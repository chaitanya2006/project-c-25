function preload(){
    dustbinImg=loadImage("sprites/dustbingreen.png");
    paperImg=loadImage("sprites/paper.png");
}
function setup(){
    var canvas = createCanvas(400,400);
    var dustbin = new dustbin (10,10,390,390);
    var paper =  new paper (10,10,150,390);
    var ground = new ground(400,10,395,395);
}
function draw(){
    dustbin.display();
    paper.display();
    ground.display();


    paper.x=mouse.x;
}
