class Rover{
	constructor(xPos, yPos){
		this.xPos = xPos;
		this.yPos = yPos;
		this.colorR = 255;
		this.colorG = 255;
		this.colorB = 255;
		
	}
	
	update(){
		if(mouseIsPressed){
			this.colorR = 255;
			this.colorG = 255;
			this.colorB = 0;
		}else{
			this.colorR = 255;
			this.colorG = 255;
			this.colorB = 255;
		}
	}
	
	display(){

		// Head
		push();
		translate(this.xPos, this.yPos);
		rotate(PI/4);
		// quad(this.xPos, this.yPos, this.xPos - 50, this.yPos - 50, this.xPos + 100, this.yPos + 100, this.xPos - 150, this.yPos - 150);
		fill(this.colorR, this.colorG, this.colorB);
		ellipse(this.xPos+65, this.yPos-100, 20, 20);
		ellipse(this.xPos+95, this.yPos-100, 20, 20);
		fill(255)
		rect(this.xPos+65, this.yPos-80, 30, 90);
		fill(0);
		rect(this.xPos+50, this.yPos-100, 60, 30);

		pop();


		push();
		// Top of Rover
		strokeWeight(1);
		translate(this.xPos +50, this.yPos);
		rotate(PI/4);
		rect(this.xPos, this.yPos, 70, 130);
		// Right side of Rover
		fill(127, 127, 127)
		quad(this.xPos+70, this.yPos, this.xPos+70, this.yPos+130, this.xPos + 100, this.yPos + 160, this.xPos + 100, this.yPos + 30);
		// Back of Rover
		quad(this.xPos, this.yPos+130, this.xPos + 30, this.yPos + 160, this.xPos + 100, this.yPos + 160, this.xPos + 70, this.yPos + 130);
		// Legs
		strokeWeight(3);
		line(this.xPos + 85, this.yPos + 65, this.xPos + 120, this.yPos + 120);
		line(this.xPos + 85, this.yPos + 65, this.xPos + 120, this.yPos + 40);
		// Wheels
		// noFill();
		fill(0);
		strokeWeight(5);
		ellipse(this.xPos + 135, this.yPos-25 + 150, 30, 30);
		ellipse(this.xPos + 135, this.yPos-110 + 150, 30, 30);
		pop();

		// Antenna
		push();
		translate(this.xPos + 50, this.yPos);
		rect(this.xPos-115, this.yPos-30, 20, 100);
		quad(this.xPos - 94, this.yPos-30, this.xPos - 90, this.yPos - 38, this.xPos - 90, this.yPos + 60, this.xPos - 94, this.yPos + 69);
		quad(this.xPos-115, this.yPos-30, this.xPos - 110, this.yPos-40, this.xPos - 90, this.yPos - 40, this.xPos - 94, this.yPos - 30);
		pop();

		// Bulb
		push();
		translate(this.xPos+150, this.yPos+100);
		fill(this.colorR, this.colorG, this.colorB);
		ellipse(this.xPos-205, this.yPos-150, 50, 50);
		pop();



	}
}

// function touchStarted(){
// 	if(mouseIsPressed){
// 		fill(255,255,0);
// 		rect(100, 100, 100, 100);
// 	}	
// }

// function touchReleased(){
// 	fill(127, 127, 127);
// 	rect(100, 100, 100, 100);
// }