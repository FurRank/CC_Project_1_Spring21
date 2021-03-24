let r;


function setup() {
	createCanvas(800, 800);
	background(100);
	r = new Rover(100, 100);


}

function draw() {
	// ellipse(mouseX, mouseY, 20, 20);
	
	// if(mouseX <= 300 && mouseY <= 300){// && mouseIsPressed){
	// r.update();
	r.display();
	r.update();

	// }
}

// class Rover

// class Moon