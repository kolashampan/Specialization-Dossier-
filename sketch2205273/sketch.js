// Define global variables
let filmSpeed = 0; // Initial film speed in frames per second
let targetSpeed = 0; // Target speed to ease to
let easing = 0.1; // Easing factor for easing to stop
let accelerationTime = 2; // Time to reach target speed (in seconds)
let maintainSpeedTime = 2; // Time to maintain target speed (in seconds)
let slowDownTime = 4; // Time to slow down to stop (in seconds)
let frameWidth = 160; // Width of the frame
let frameHeight = 240; // Height of the frame
let perforationSpacing = 85; // Spacing between perforations
let perforationSize = 15; // Size of the perforations (square)
let perforationMargin = 10; // Margin between perforations and edges
let filmPosition = 0; // Current position of the film
let lastInteractionTime = 0; // Time of the last interaction (click or scroll)

function setup() {
  createCanvas(frameWidth, frameHeight);
}

function draw() {
  background(255); // Set background color to white
  
  // Draw perforations along the left and right edges
  fill(41, 98, 255); // Set fill color to rgb(41, 98, 255)
  noStroke(); // Remove stroke (outline)
  for (let y = -perforationSpacing + filmPosition % perforationSpacing; y < height; y += perforationSpacing) {
    // Draw perforations on the left edge
    square(perforationMargin, y, perforationSize);
    // Draw perforations on the right edge
    square(width - perforationMargin - perforationSize, y, perforationSize);
  }
  
  // Update film position based on easing to the target speed
  filmPosition += (targetSpeed - filmSpeed) * easing;
  
  // Check if it's time to slow down after maintaining target speed
  if (millis() - lastInteractionTime > (accelerationTime + maintainSpeedTime) * 1000) {
    targetSpeed = 0; // Start slowing down
  }
}

function interact() {
  lastInteractionTime = millis(); // Update last interaction time
  targetSpeed = 288; // Set target speed twice as fast
}

function mouseWheel(event) {
  interact();
}

function mouseClicked() {
  interact();
}

