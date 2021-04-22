var setup = function () {
  createCanvas(600, 400);
};

var draw = function () {
  for (let index = 0; index < 100; index++) {
    fill(random(255), random(255), random(255));
    ellipse(100, 100, 50);
  }
};
