let res=200;
let angle =0;
let ma;
let rc;


function setup() {
	createCanvas(windowWidth,windowHeight,WEBGL);
	ma=atan(1/sqrt(2));

	rc=new RubikCube(res);

}

function draw() {
	background(0,204,200);

	rotateX(ma*.8);
	rotateY(QUARTER_PI);

	rotateY(map(mouseX,-width/2,width/2,-PI,PI));
	rotateX(map(mouseY,height/2,-height/2,-PI,PI));

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
