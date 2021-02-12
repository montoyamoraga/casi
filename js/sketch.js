let canvas;

let capture;

let tracker;

let debugMode = false;

// setup() runs once, at the beginning
function setup() {

  capture = createCapture(VIDEO);
  capture.size(400, 300);
  capture.position(0, 0);

  canvas = createCanvas(400, 300);
  canvas.style('z-index', 9999);
  canvas.position(0, 0);

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);

  fill(255);
  noStroke();
}

// draw(), runs in a loop, after setup()
function draw() {

  clear();

  let positions = tracker.getCurrentPosition();

  if (positions.length > 0) {
    // eyes info between indices 23 and 32
    for (let i = 23; i <= 32 ; i++) {
      ellipse(positions[i][0], positions[i][1], 8, 8);
    }  
  }

}
