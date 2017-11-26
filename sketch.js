var Bcolor ='#ee4F6B';
var x=20;
function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  setMoveThreshold(3);
  setShakeThreshold(10);
}

function draw(){
  background(Bcolor);
  rotateX(radians(map(rotationX,-180,180,0,720)));
  rotateY(radians(map(rotationY,-90,90,0,720)));
  rotateZ(radians(map(rotationZ,0,360,0,720)));
  box(x,x,x);
    //plane(500, 500,3,4);
    
    //cylinder(10, 200);
    // sphere(400);
  rotateX(radians(map(rotationX,-90,90,0,800)));
  rotateY(radians(map(rotationY,0,360,0,800)));
  rotateZ(radians(map(rotationZ,0,360,0,880)));
  torus(160, 40);   

    //ellipsoid(200, 300, 400);
    //cone(200, 200);
  if(x>=160){
      x=0;
  }
}
function deviceMoved(){
    x+=4;     
}

function deviceShaken() {
    Bcolor =color(random(255),random(255),random(255)) ;
}