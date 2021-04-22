class Shape {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = random(canvas.width);
    this.y = random(canvas.height);
  }

  x = 100;
  y = 100;
  w = 100;
  h = 100;
  draw() {
    (vx = random(5, 5)), (vy = random(5, 5)), (c = random(255));

    move();
    {
      this.x += vx;
      this.y += vy;
    }
    throw "Nothing to draw!";
  }
}

class Square extends Shape {
  draw() {
    this.x -= 2;
    square(this.x, this.y, this.w);
  }
}
class Circle extends Shape {
  draw() {
    this.x += 2;
    circle(this.x, this.y, this.w);
  }
}

let shapes = [];

var setup = function () {
  createCanvas(800, 600);
  for (let index = 0; index < 200; index++) {
    let box = new Square();
    shapes.push(box);

    let cir = new Circle();
    shapes.push(cir);
  }
};

var draw = function () {
  for (let index = 0; index < shapes.length; index++) {
    let shape = shapes[index];
    shape.draw();
    circle(this.x, this.y, this.w);
  }
};

let shapes = {};
let canvas = { width: 800, height: 600 };

var setup = function () {
  createCanvas(canvas.width, canvas.height);
  background(150);
};
