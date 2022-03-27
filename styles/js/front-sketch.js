function setup() {
  createCanvas(windowWidth/2, windowHeight, WEBGL);
}

function draw() {
  background('#2E24FD');
  rotateY(frameCount * 0.01);
  for (let i = 0; i < 5; i++) {
    push();
    for (let j = 0; j < 50; j++) {
      translate(
        sin(frameCount * 0.001 + i) * 100,
        sin(frameCount * 0.001 + i) * 100,
        j * 0.1
      );
      rotateZ(frameCount * 0.001);
      push();
      sphere(15, 15, 15);
      pop();
    }
    pop();
  }
}
