function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);

  // Number of lines to draw
  let numLines = 20; 

  // Draw horizontal lines
  for (let i = 0; i < numLines; i++) {
    stroke(random(255), random(255), random(255)); 
    noFill();
    createHorizontalLine();
  }

  // Draw vertical lines
  for (let i = 0; i < numLines; i++) {
    stroke(random(255), random(255), random(255)); 
    noFill();
    createVerticalLine();
  }
}

function createHorizontalLine() {
  let xStart = -windowWidth; 
  let xEnd = windowWidth; 
  let yStart = random(windowHeight);
  let yEnd = random(windowHeight); 
  line(xStart, yStart, xEnd, yEnd);
}

function createVerticalLine() {
  let yStart = -windowHeight; 
  let yEnd = windowHeight; 
  let xStart = random(windowWidth); 
  let xEnd = random(windowWidth); 
  line(xStart, yStart, xEnd, yEnd);
}