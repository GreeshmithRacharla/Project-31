var ground;
var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);


  ground = createSprite(470,790,800,10);



}

function draw() {

 background(255,255,255);  
 var divisionHeight = 300;

 for( var k = 0; k <=width ; k = k + 80){
   divisions.push(new division(k , height-divisionHeight/2 , 10 , divisionHeight))
 }

 for( var j = 0; j<=width ; j = j + 50){
    plinkos.push(new Plinko(j,75));
 }

 for( var j = 0; j<=width ; j = j + 50){
    plinkos.push(new Plinko(j,175));
 }

 for( var j = 0; j<=width ; j = j + 50){
    plinkos.push(new Plinko(j,275));
}

 for( var j = 0; j<=width ; j = j + 50){
    plinkos.push(new Plinko(j,375));
}

 if(frameCount%60===0){
   particles.push(new Particle(random(width/2-10 , width/2+10) ,10,10));
 }

 for( var j = 0; j < particles.length ; j++){
    particles[j].display();
 }

 for( var k = 0; k < divisions.length ; k++){
    divisions[k].display();
 }
 
 for( var m = 0; m < plinkos.length ; m++){
    plinkos[m].display();
 }

 drawSprites();
}
