class Star{
	constructor(xPos, yPos){
		this.xPos = xPos;//500;//random(0, width);
		this.yPos = yPos;//500;//random(0, height/2);
		this.colR;
		this.colG;
		this.colB;
	}

	display(){
		if(mouseIsPressed){
			fill(255, 255, 0);
			strokeWeight(1);
			stroke(0);
			beginShape();
			vertex(this.xPos, this.yPos - 12.5);
			vertex(this.xPos+3.5, this.yPos - 5);
			vertex(this.xPos+11.75, this.yPos - 3.75);
			vertex(this.xPos+5.75, this.yPos + 1.75);
			vertex(this.xPos+7.25, this.yPos + 10);
			vertex(this.xPos, this.yPos + 6.25);
			vertex(this.xPos-7.25, this.yPos + 10);
			vertex(this.xPos-5.75, this.yPos + 1.75);
			vertex(this.xPos -11.75, this.yPos - 3.75);
			vertex(this.xPos-3.5, this.yPos - 5);
			endShape(CLOSE);
		}
	}


	flicker(){


	}

}