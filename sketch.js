var Engine = Master.Engine
World = Master.World
Events= Master.Events
Bodies = Master.Bodies

var particles=[];
var plinkos =[];
var division =[];
var divisionHeight=300;
var score = 0; 


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(widht/2,height,widht,20);

  for(var k=0;k<=widht;k=k+80){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j=75;k<=widht;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j=50;k<=widht;j=j+50){
    plinkos.push(new Plinko(j,375));
  }
}
function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}