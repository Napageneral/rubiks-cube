//Set size of each cube
let res=80;
//Initialize angle for rotation
let angle =0;
//Init magic angle
let ma;
//Initiliaze the Rubik's Cube variable globally
let rc;


function setup() {
	createCanvas(800,800,WEBGL);
	//Set Magic Angle
	ma=atan(1/sqrt(2));
	//Build the rubik's cube
	rc=new RubikCube(res);

}

function draw() {
	background(0,204,200);

	//Initialize starting view
	rotateX(ma*.8);
	rotateY(QUARTER_PI);
	//Allow rotation of cube based on mouse position
	rotateY(map(mouseX,-width/2,width/2,-PI,PI));
	rotateX(map(mouseY,height/2,-height/2,-PI,PI));
	//Draw the cube
	rc.render();

}

function keyPressed(){
	if (keyCode=== LEFT_ARROW) {

	}
	if (keyCode===RIGHT_ARROW) {

	}
	if (keyCode===UP_ARROW) {
		rc= new RubikCube(res);
	}
	if (keyCode==49) {
		rc.upCW();
	}
	if (keyCode==50) {
		rc.upCCW();
	}
	if (keyCode==51) {
		rc.downCW();
	}
	if (keyCode==52) {
		rc.downCCW();
	}
	if (keyCode==53) {
		rc.rightCW();
	}
	if (keyCode==54) {
		rc.rightCCW();
	}
	if (keyCode==55) {
		rc.leftCW();
	}
	if (keyCode==56) {
		rc.leftCCW();
	}
	if (keyCode==57) {
		rc.frontCW();
	}
	if (keyCode==48) {
		rc.frontCCW();
	}
	if (keyCode==189) {
		rc.backCW();
	}
	if (keyCode==187) {
		rc.backCCW();
	}
}
