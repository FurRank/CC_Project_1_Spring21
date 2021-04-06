class Mountain{
	constructor(cR, cG, cB){
		this.colR = cR;
		this.colG = cG;
		this.colB = cB;
	}

	display(){

		stroke(0);
		strokeWeight(3);
		// bottom of moutain
		fill(168, 90, 0);
		beginShape();
		curveVertex(0, 500);
		curveVertex(0, 500);
		curveVertex(280, 200);
		curveVertex(300, 300);
		curveVertex(280, 370);
		curveVertex(240, 410);
		curveVertex(230, 430);
		curveVertex(210, 450);
		curveVertex(130, 600);
		curveVertex(0, height);
		curveVertex(0, height);
		endShape();
		
		strokeWeight(3);

		// top of mountain
		fill(this.colR, this.colG, this.colB);
		beginShape();
		curveVertex(0, 250);
		curveVertex(0, 250);
		curveVertex(50, 260);
		curveVertex(300, 190);
		curveVertex(200, 450);
		curveVertex(0, 650);
		curveVertex(0, 650);
		endShape();



	}

}