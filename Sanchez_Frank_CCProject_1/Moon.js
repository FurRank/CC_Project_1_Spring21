class Moon{
	constructor(posX, posY){
		this.posX = posX;
		this.posY = posY;
		this.counter = 0;
	}

	display(){
		// Moon
		noStroke();
		fill(194, 197, 204);
		ellipse(this.posX, this.posY, 180, 180);

		// arcs for half/full moon
		fill(127);
		if(this.counter >= 270){
			arc(this.posX, this.posY, 180, 180, radians(-90), radians(90)); // TQ
			if(this.counter == 359){
				this.counter = 0;
			}
		}else if(this.counter >= 180){
			fill(194, 197, 204);
			arc(this.posX, this.posY, 180, 180, radians(0), radians(-0)); // FM !!!
		}else if(this.counter >= 90){
			arc(this.posX, this.posY, 180, 180, radians(90), radians(270)); // FQ
		}else if(this.counter >= 0){
			arc(this.posX, this.posY, 180, 180, radians(0), radians(360)); // NM
		}


		//texture
		fill(180, 50);
		ellipse(this.posX+20, this.posY-30, 30, 30)
		ellipse(this.posX+20, this.posY+30, 50, 50)
		ellipse(this.posX-10, this.posY-20, 20, 20)
		ellipse(this.posX-10, this.posY+10, 30, 30)
		ellipse(this.posX-30, this.posY+40, 30, 30)



		// Ring
		strokeWeight(5);
		stroke(252, 255, 122);
		noFill();
		ellipse(this.posX, this.posY, 200, 200);


		// ray of light
		noStroke();
		fill(254, 252, 215, 50);
		beginShape();
		vertex(this.posX-100, this.posY+height/2-48);
		vertex(this.posX-160, this.posY+height);
		vertex(this.posX, this.posY+height);
		vertex(this.posX+45, this.posY+height/2-48);

		endShape(CLOSE);
		

		this.counter++;
	}

}