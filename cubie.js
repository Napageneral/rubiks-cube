
function cubie(res,i,j,k){

	this.res=res;
	this.i=i;
	this.j=j;
	this.k=k;

	var white=color(255,255,255);
	var yellow=color(255,255,0);
	var green=color(0,204,0);
	var blue = color(0,102,204);
	var red = color(255,0,0);
	var orange = color(255,153,0);

	this.fColors=[white,yellow,green,blue,orange,red];

	this.shift = res/2-2;


	this.clone=function(){
		cloned=new cubie(this.res,this.i,this.j,this.k);
		cloned.fColors=this.fColors;
		return cloned;
	}

	this.setPos=function(q,w,e){
		this.i=q;
		this.j=w;
		this.k=e;
	}

	this.rX=function(mod){
		if (mod==1) {
			tempC=this.fColors[0];
			this.fColors[0]=this.fColors[4];
			this.fColors[4]=this.fColors[1];
			this.fColors[1]=this.fColors[5];
			this.fColors[5]=tempC;
		} else {
			tempC=this.fColors[0];
			this.fColors[0]=this.fColors[5];
			this.fColors[5]=this.fColors[1];
			this.fColors[1]=this.fColors[4];
			this.fColors[4]=tempC;
		}
	}

	this.rY=function(mod){
		if (mod==1) {
			tempC=this.fColors[4];
			this.fColors[4]=this.fColors[3];
			this.fColors[3]=this.fColors[5];
			this.fColors[5]=this.fColors[2];
			this.fColors[2]=tempC;
		} else {
			tempC=this.fColors[4];
			this.fColors[4]=this.fColors[2];
			this.fColors[2]=this.fColors[5];
			this.fColors[5]=this.fColors[3];
			this.fColors[3]=tempC;
		}
	}
	this.rZ=function(mod){
		if (mod==1) {
			tempC=this.fColors[0];
			this.fColors[0]=this.fColors[3];
			this.fColors[3]=this.fColors[1];
			this.fColors[1]=this.fColors[2];
			this.fColors[2]=tempC;
		} else {
			tempC=this.fColors[0];
			this.fColors[0]=this.fColors[2];
			this.fColors[2]=this.fColors[1];
			this.fColors[1]=this.fColors[3];
			this.fColors[3]=tempC;
		}
	}


	this.show=function(){
			translate(this.i*res,this.j*res,this.k*res);
			this.faces();
			this.trim();
	}

	this.topDraw=function(c){
		push();
		fill(c);
		translate(0,-res/2,0);
		rotateX(PI/2);
		plane(res,res);
		pop();
	}

	this.downDraw=function(c){
		push();
		fill(c);
		translate(0,res/2,0);
		rotateX(PI/2);
		plane(res,res);
		pop();
	}

	this.rightDraw=function(c){
		push();
		fill(c);
		translate(res/2,0,0);
		rotateY(PI/2);
		plane(res,res);
		pop();
	}

	this.leftDraw=function(c){
		push();
		fill(c);
		translate(-res/2,0,0);
		rotateY(PI/2);
		plane(res,res);
		pop();
	}

	this.frontDraw=function(c){
		push();
		fill(c);
		translate(0,0,res/2);
		plane(res,res);
		pop();
	}

	this.backDraw=function(c){
		push();
		fill(c);
		translate(0,0,-res/2);
		plane(res,res);
		pop();
	}

	this.faces=function(){
		this.j==-1 ? this.topDraw(this.fColors[0]):this.topDraw(0);
		this.j==1 ? this.downDraw(this.fColors[1]):this.downDraw(0);
		this.i==1 ? this.rightDraw(this.fColors[2]):this.rightDraw(0);
		this.i==-1 ? this.leftDraw(this.fColors[3]):this.leftDraw(0);
		this.k==1 ? this.frontDraw(this.fColors[4]):this.frontDraw(0);
		this.k==-1 ? this.backDraw(this.fColors[5]):this.backDraw(0);

	}


	this.trim=function(){
		fill(0);
		//X
		for (let n = 0; n <2; n++) {
			for (let m = 0; m < 2; m++) {
				push();
				translate(0,this.shift*(-1)**n,this.shift*(-1)**m);
				rotateZ(PI/2);
				cylinder(3,this.res);
				pop();
			}
		}
		//Y
		for (let n = 0; n <2; n++) {
			for (let m = 0; m < 2; m++) {
				push();
				translate(this.shift*(-1)**n,0,this.shift*(-1)**m);
				cylinder(3,this.res);
				pop();
			}
		}
		//Z
		for (let n = 0; n <2; n++) {
			for (let m = 0; m < 2; m++) {
				push();
				translate(this.shift*(-1)**n,this.shift*(-1)**m,0);
				rotateX(PI/2);
				cylinder(3,this.res);
				pop();
			}
		}
	}

}
