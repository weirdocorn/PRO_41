var bWU, thunderbolt1, thunderbolt2, thunderbolt3, thunderbolt4;
var umbrella, thunderbolts;
var maxDrops = 100;
var drops = [];

for(var i=0; i<maxDrops; i++){
   maxDrops.push(new Drops(random(0,400), random(0,800)));
}

function preload(){
   bWU = loadImage("boy with umbrella.jpg");
   thunderbolt1 = loadImage("thunderbolt1.jpg");
   thunderbolt2 = loadImage("thunderbolt2.jpg");
   thunderbolt3 = loadImage("thunderbolt3.jpg");
   thunderbolt4 = loadImage("thunderbolt4.jpg");
}

function setup(){
   createCanvas(400,800);
   umbrella = new Umbrella(200,50);
   thunderbolts = createSprite(200,600,400,400);
}

function draw(){
   background(color(0,0,45));

   drops.display();
   umbrella.display();

   switch(thunderbolts){
      case 1:thunderbolts.addImage(thunderbolt1);
                  break;
      case 2:thunderbolts.addImage(thunderbolt2);
                  break;
      case 3:thunderbolts.addImage(thunderbolt3);
                  break;
      case 4:thunderbolts.addImage(thunderbolt4);
                  break;
      default:thunderbolt4.removeImage();
   }

   drawSprites();
}