function make3DArray(w,h,d){
	let arr=new Array(d);
	for(let j=0;j<h;j++){
		arr[j] = new Array(w);
		for (let i = 0 ;i<w;i++){
			arr[j][i] = new Array(h);
		}
	}
	return arr;
}


function RubikCube(res){
  this.res=res;
  this.moveCount=0;
	this.rsped=10;

  this.rMod=1;

  this.uangle=0;
  this.ucw=0;

  this.dangle=0;
  this.dcw=0;

  this.rangle=0;
  this.rcw=0;

  this.langle=0;
  this.lcw=0;

  this.fangle=0;
  this.fcw=0;

  this.bangle=0;
  this.bcw=0;

  //Initialize Rubik 3x3x3
	this.grid = make3DArray(3,3,3);
  for(let k=0;k<3;k++){
  	for(let j=0;j<3;j++){
  		for(let i=0;i<3;i++){
  			this.grid[i][j][k]=new cubie(this.res,(i-1),(j-1),(k-1));
  		}
  	}
  }

	this.aReset=function(){
		this.uangle=0;
		this.dangle=0;
		this.rangle=0;
		this.langle=0;
		this.fangle=0;
		this.bangle=0;
	}

	this.cloneGrid=function(){
		let gridtemp=make3DArray(3,3,3);
		for(let k=0;k<3;k++){
			for(let j=0;j<3;j++){
				for(let i=0;i<3;i++){
					gridtemp[i][j][k]=this.grid[i][j][k].clone();
				}
			}
		}
		return gridtemp;
	}

	this.scramble=function(){

	}

	this.display=function(is,ie,js,je,ks,ke){
		for(let k=ks;k<ke;k++){
			for(let j=js;j<je;j++){
				for(let i=is;i<ie;i++){
					push();
					this.grid[i][j][k].show();
					pop();
				}
			}
		}
	}

  this.render=function(){

		if (this.ucw!=0) {
			this.aUp();
			if (this.ucw==0) {
				this.uUp();
			}
		}
		else if (this.dcw!=0) {
			this.aDown();
			if (this.dcw==0) {
				this.uDown();
			}
		}
    else if (this.fcw!=0) {
    	this.aFront();
      if (this.fcw==0) {
				this.uFront();
      }
    }
		else if (this.bcw!=0) {
			this.aBack();
			if (this.bcw==0) {
				this.uBack();
			}
		}
		else if (this.rcw!=0){
			this.aRight();
			if (this.rcw==0) {
				this.uRight();
			}
		}
		else if (this.lcw!=0){
			this.aLeft();
			if (this.lcw==0) {
				this.uLeft();
			}
		}

    else {
			this.aReset();
      this.display(0,3,0,3,0,3);
    }


  }


  this.frontCW=function(){
    this.fcw+=this.rsped;
    this.moveCount++;
  }
  this.frontCCW=function(){
    this.fcw-=this.rsped;
    this.moveCount++;
  }

  this.upCW=function(){
    this.ucw+=this.rsped;
    this.moveCount++;
  }
  this.upCCW=function(){
    this.ucw-=this.rsped;
    this.moveCount++;
  }

  this.downCW=function(){
    this.dcw+=this.rsped;
    this.moveCount++;
  }
  this.downCCW=function(){
    this.dcw-=this.rsped;
    this.moveCount++;
  }

  this.rightCW=function(){
    this.rcw+=this.rsped;
    this.moveCount++;
  }
  this.rightCCW=function(){
    this.rcw-=this.rsped;
    this.moveCount++;
  }

  this.leftCW=function(){
    this.lcw+=this.rsped;
    this.moveCount++;
  }
  this.leftCCW=function(){
    this.lcw-=this.rsped;
    this.moveCount++;
  }

  this.backCW=function(){
    this.bcw+=this.rsped;
    this.moveCount++;
  }
  this.backCCW=function(){
    this.bcw-=this.rsped;
    this.moveCount++;
  }

	//front
	this.uFront=function(){
		//Make a copy of the current grid
		let gridtemp=this.cloneGrid();
		//Adjust the cubies in the temp grid
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				gridtemp[i][j][2].rZ(-this.rMod);
				gridtemp[i][j][2].setPos(this.rMod*(1-j),this.rMod*(i-1),1);
			}
		}
		//Set the corresponding updated cubies in the original grid
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				if (this.rMod==1) {
					this.grid[(2-j)][(i)][2]=gridtemp[i][j][2];
				} else {
					this.grid[j][(2-i)][2]=gridtemp[i][j][2];
				}
			}
		}
	}
	this.aFront=function(){
		if (this.fcw>0) {
			this.fangle-=PI/2/this.rsped;
			this.fcw-=1;
			this.rMod=1;
		}
		if (this.fcw<0) {
			this.fangle+=PI/2/this.rsped;
			this.fcw+=1;
			this.rMod=-1;
		}
		push();
		rotateZ(this.fangle);
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				push();
				this.grid[i][j][2].show();
				pop();
			}
		}
		pop();
		this.display(0,3,0,3,0,2);
	}
	//back
	this.uBack=function(){
		//Make a copy of the current grid
		let gridtemp=this.cloneGrid();
		//Adjust the cubies in the temp grid
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				gridtemp[i][j][0].rZ(-this.rMod);
				gridtemp[i][j][0].setPos(this.rMod*(1-j),this.rMod*(i-1),-1);
			}
		}
		//Set the corresponding updated cubies in the original grid
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				if (this.rMod==1) {
					this.grid[(2-j)][(i)][0]=gridtemp[i][j][0];
				} else {
					this.grid[j][(2-i)][0]=gridtemp[i][j][0];
				}
			}
		}
	}
	this.aBack=function(){
		if (this.bcw>0) {
			this.bangle-=PI/2/this.rsped;
			this.bcw-=1;
			this.rMod=1;
		}
		if (this.bcw<0) {
			this.bangle+=PI/2/this.rsped;
			this.bcw+=1;
			this.rMod=-1;
		}
		push();
		rotateZ(this.bangle);
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				push();
				this.grid[i][j][0].show();
				pop();
			}
		}
		pop();
		this.display(0,3,0,3,1,3);
	}
	//up
	this.uUp=function(){
		//Make a copy of the current grid
		let gridtemp=this.cloneGrid();
		//Adjust the cubies in the temp grid
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				gridtemp[i][0][j].rY(-this.rMod);
				gridtemp[i][0][j].setPos(this.rMod*(1-j),-1,this.rMod*(i-1));
			}
		}
		//Set the corresponding updated cubies in the original grid
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				if (this.rMod==1) {
					this.grid[(2-j)][0][i]=gridtemp[i][0][j];
				} else {
					this.grid[j][0][2-i]=gridtemp[i][0][j];
				}
			}
		}
	}
	this.aUp=function(){
		if (this.ucw>0) {
			this.uangle-=PI/2/this.rsped;
			this.ucw-=1;
			this.rMod=1;
		}
		if (this.ucw<0) {
			this.uangle+=PI/2/this.rsped;
			this.ucw+=1;
			this.rMod=-1;
		}
		push();
		rotateY(this.uangle);
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				push();
				this.grid[i][0][j].show();
				pop();
			}
		}
		pop();
		this.display(0,3,1,3,0,3);
	}
	//down
	this.uDown=function(){
		//Make a copy of the current grid
		let gridtemp=this.cloneGrid();
		//Adjust the cubies in the temp grid
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				gridtemp[i][2][j].rY(-this.rMod);
				gridtemp[i][2][j].setPos(this.rMod*(1-j),1,this.rMod*(i-1));
			}
		}
		//Set the corresponding updated cubies in the original grid
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				if (this.rMod==1) {
					this.grid[(2-j)][2][i]=gridtemp[i][2][j];
				} else {
					this.grid[j][2][2-i]=gridtemp[i][2][j];
				}
			}
		}
	}
	this.aDown=function(){
		if (this.dcw>0) {
			this.dangle-=PI/2/this.rsped;
			this.dcw-=1;
			this.rMod=1;
		}
		if (this.dcw<0) {
			this.dangle+=PI/2/this.rsped;
			this.dcw+=1;
			this.rMod=-1;
		}
		push();
		rotateY(this.dangle);
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				push();
				this.grid[i][2][j].show();
				pop();
			}
		}
		pop();
		this.display(0,3,0,2,0,3);
	}
	//right
	this.uRight=function(){
		//Make a copy of the current grid
		let gridtemp=this.cloneGrid();
		//Adjust the cubies in the temp grid
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				gridtemp[2][i][j].rX(-this.rMod);
				gridtemp[2][i][j].setPos(1,this.rMod*(1-j),this.rMod*(i-1));
			}
		}
		//Set the corresponding updated cubies in the original grid
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				if (this.rMod==1) {
					this.grid[2][(2-j)][i]=gridtemp[2][i][j];
				} else {
					this.grid[2][j][2-i]=gridtemp[2][i][j];
				}
			}
		}
	}
	this.aRight=function(){
		if (this.rcw>0) {
			this.rangle-=PI/2/this.rsped;
			this.rcw-=1;
			this.rMod=1;
		}
		if (this.rcw<0) {
			this.rangle+=PI/2/this.rsped;
			this.rcw+=1;
			this.rMod=-1;
		}
		push();
		rotateX(this.rangle);
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				push();
				this.grid[2][i][j].show();
				pop();
			}
		}
		pop();
		this.display(0,2,0,3,0,3);
	}

	//left
	this.uLeft=function(){
		//Make a copy of the current grid
		let gridtemp=this.cloneGrid();
		//Adjust the cubies in the temp grid
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				gridtemp[0][i][j].rX(-this.rMod);
				gridtemp[0][i][j].setPos(-1,this.rMod*(1-j),this.rMod*(i-1));
			}
		}
		//Set the corresponding updated cubies in the original grid
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				if (this.rMod==1) {
					this.grid[0][(2-j)][i]=gridtemp[0][i][j];
				} else {
					this.grid[0][j][2-i]=gridtemp[0][i][j];
				}
			}
		}
	}
	this.aLeft=function(){
		if (this.lcw>0) {
			this.langle-=PI/2/this.rsped;
			this.lcw-=1;
			this.rMod=1;
		}
		if (this.lcw<0) {
			this.langle+=PI/2/this.rsped;
			this.lcw+=1;
			this.rMod=-1;
		}
		push();
		rotateX(this.langle);
		for(let j=0;j<3;j++){
			for(let i=0;i<3;i++){
				push();
				this.grid[0][i][j].show();
				pop();
			}
		}
		pop();
		this.display(1,3,0,3,0,3);
	}
}


function RubikGrid(res){
  this.res=res;
  this.grid = make3DArray(3,3,3);
  this.angle=0;
  this.cw=0;
  this.ccw=0;

  //Initialize 3x3 grid
  for(let j=0;j<3;j++){
		for(let i=0;i<3;i++){
      j==0 ? a=1:a=0;
      j==2 ? b=1:b=0;
      i==2 ? c=1:c=0;
      i==0 ? d=1:d=0;
			this.grid[i][j]=new cubie(this.res,(i-1),(j-1),0,a,b,c,d,1,1);
		}
	}

  this.render=function(){
    if (this.cw>0) {
      this.angle-=PI/2/10;
      this.cw-=1;
    }
    if (this.ccw>0) {
      this.angle+=PI/2/10;
      this.ccw-=1;
    }
    rotateZ(this.angle);
    for(let j=0;j<3;j++){
  		for(let i=0;i<3;i++){
  			push();
  			this.grid[i][j].show();
  			pop();
  		}
  	}

  }

  this.clockwise=function(){
    this.cw+=10;
  }
  this.cclockwise=function(){
    this.ccw+=10;
  }


}

function RubikLine(res){
  this.res=res;
  this.grid = make3DArray(3,3,3);

  //Initialize 3x1
	for(let i=0;i<3;i++){
		this.grid[i]=new cubie(this.res,(i-1),0,0);
	}

  this.render=function(){
		for(let i=0;i<3;i++){
			push();
			this.grid[i].show();
			pop();
		}

  }
}
