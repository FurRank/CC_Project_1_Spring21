class Rover{
	constructor(xPos, yPos){
		this.xPos = xPos;
		this.yPos = yPos;
		this.colorR = 255;
		this.colorG = 255;
		this.colorB = 255;
		this.dim = 200;
	}
	
	update(){
		if(mouseIsPressed){
			this.colorR = 255;
			this.colorG = 0;
			this.colorB = 0;
			noStroke();
			fill(this.colorR, this.colorG, this.colorB, this.dim);
			ellipse(600, 100, 10, 10);
			ellipse(615, 100, 10, 10);
			this.dim--;
		}else{
			this.colorR = 255;
			this.colorG += 5;
			this.colorB += 5;
			this.dim = 200;
		}
	}
	

	display(){

		stroke(0);
		// Head
		push();
		translate(this.xPos, this.yPos);
		rotate(PI/4);
		fill(this.colorR, this.colorG, this.colorB);
		ellipse(this.xPos+65, this.yPos-100, 20, 20);
		ellipse(this.xPos+95, this.yPos-100, 20, 20);
		fill(229, 187, 51);
		rect(this.xPos+65, this.yPos-80, 30, 90);
		fill(0);
		rect(this.xPos+50, this.yPos-100, 60, 30);
		pop();

		push();
		// Top of Rover
		fill(249, 217, 113);
		strokeWeight(1);
		translate(this.xPos +50, this.yPos);
		rotate(PI/4);
		rect(this.xPos, this.yPos, 70, 130);
		// Right side of Rover
		fill(229, 187, 51);
		quad(this.xPos+70, this.yPos, this.xPos+70, this.yPos+130, this.xPos + 100, this.yPos + 160, this.xPos + 100, this.yPos + 30);
		// Back of Rover
		quad(this.xPos, this.yPos+130, this.xPos + 30, this.yPos + 160, this.xPos + 100, this.yPos + 160, this.xPos + 70, this.yPos + 130);
		// Legs
		strokeWeight(3);
		line(this.xPos + 85, this.yPos + 65, this.xPos + 120, this.yPos + 120);
		line(this.xPos + 85, this.yPos + 65, this.xPos + 120, this.yPos + 40);
		// Wheels
		fill(0);
		strokeWeight(5);
		ellipse(this.xPos + 135, this.yPos-25 + 150, 30, 30);
		ellipse(this.xPos + 135, this.yPos-110 + 150, 30, 30);
		pop();

		// Antenna
		// Side note: it's somehow not alligned with the
		// body of the rover, so I was not able to move the
		// rover in general since they would go in different directions
		push();
		fill(255);
		strokeWeight(1);
		fill(229, 187, 51);
		translate(this.xPos + 50, this.yPos);
		rect(this.xPos-115, this.yPos-30, 20, 100);
		quad(this.xPos - 94, this.yPos-30, this.xPos - 90, this.yPos - 38, this.xPos - 90, this.yPos + 60, this.xPos - 94, this.yPos + 69);
		quad(this.xPos-115, this.yPos-30, this.xPos - 110, this.yPos-40, this.xPos - 90, this.yPos - 40, this.xPos - 94, this.yPos - 30);
		pop();

		// Bulb
		push();
		strokeWeight(1);
		translate(this.xPos+150, this.yPos+100);
		fill(this.colorR, this.colorG, this.colorB);
		ellipse(this.xPos-204, this.yPos-150, 50, 50);
		pop();

	}
}
