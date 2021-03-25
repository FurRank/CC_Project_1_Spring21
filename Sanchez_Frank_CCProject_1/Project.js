let r;
let moun;
let m;
let sArr = [];
let b;

function setup() {
	createCanvas(800, 800);

	r = new Rover(100, 100);
	moun = new Mountain(11, 168, 0);
	m = new Moon(650, 100);
	b = new Objects(100, 100);
}

function draw() {
	background(0);
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

	strokeWeight(0);
	fill(135, 222, 243);
	rect(0, height/2 + 50, width, height/2);

	// Mountain
	moun.display();

	// Rover
	r.display();
	r.update();

	m.display();

	// ufo object
	b.update();
	b.checkEdges();
	b.display();

}
