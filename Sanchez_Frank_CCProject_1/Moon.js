class Moon{
	constructor(posX, posY){
		this.posX = posX;
		this.posY = posY;
	}

	display(){
		// Moon
		strokeWeight(1);
		fill(116, 117, 90);
		ellipse(this.posX, this.posY, 180, 180);

		// Ring
		strokeWeight(5);
		stroke(252, 255, 122);
		noFill();
		ellipse(this.posX, this.posY, 200, 200);
	}
}