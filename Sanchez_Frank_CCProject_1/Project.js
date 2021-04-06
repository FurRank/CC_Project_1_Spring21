// Name: Frank Sanchez
// Date: April 6, 2021

let r;
let moun;
let m;
let sArr = [];
let b;

let bc1;
let bc2;

let bc3;
let bc4;

function setup() {
	createCanvas(800, 800);

	r = new Rover(100, 100);
	moun = new Mountain(11, 168, 0);
	m = new Moon(650, 100);
	b = new Objects(100);

	bc1 = color(0, 0, 0);
	bc2 = color(65,105,225);

	bc3 = color(127, 204, 234);
	bc4 = color(35, 132, 235);

}

function draw() {
	// background(0);

	// Only for Y-axis
	noFill();
	for(let i = 0; i < height/2 + 50; i++){
		let interA = map(i, 0, height/2 + 50, 0, 1);
		let col = lerpColor(bc1, bc2, interA);
		stroke(col);
		line(0, i, width, i);
	}


	let q = random(0, width);
	let w = random(0, height/2);
	s = new Star(q, w);
	sArr.push(s);
	for(let i = 0; i < sArr.length; i++){

		sArr[i].display();
		if(sArr.length > 10){
			sArr.splice(0, 1);
		}
	}


	for(let i = height/2 + 52; i < height; i++){
		let interB = map(i, 0, height, 0, 1);
		let col_new = lerpColor(bc3, bc4, interB);
		stroke(col_new);
		line(0, i, width, i);
	}

	strokeWeight(3);
	stroke(0);

	// Moon display
	m.display();

	// ufo object
	b.update();
	b.checkEdges();
	b.display();

	// Mountain
	moun.display();

	// Rover
	r.display();
	r.update();
}

// Code for gradient was found here:
// https://p5js.org/examples/color-linear-gradient.html
