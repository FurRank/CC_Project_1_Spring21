class Objects{
	constructor(xPos, yPos){
		this.position = new createVector(xPos, yPos);
		this.velocity = new createVector(2, 0);
		this.acceleration = new createVector(0.001, 0);
		this.topspeed = 10;
	}

	update(){
		this.velocity.add(this.acceleration);
		this.velocity.limit(this.topspeed);
		this.position.add(this.velocity);
	}

	checkEdges(){
		if(this.position.x > width){
			this.position.x = -50;
		}
	}

	display(){
		// fill(255,0, 0);
	
		stroke(0);
		fill(36, 100, 185);
		ellipse(this.position.x, this.position.y, 70, 40);
		fill(209, 219, 75, 150);
		rect(this.position.x-17.5, this.position.y-40, 35, 35);	
		

	}

}