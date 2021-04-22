class Shape {}

let shapes = [];

var setup = function () {
  createCanvas(800, 600);
  for (let index = 0; index < 200; index++) {
    let box = new Square();
    shapes.push(box);

    let cir = new Circle();
    shapes.push;
    cir;
  }
};
var draw = function () {
  for (let index = 0; index < array.length; index++) {
    let shapes = shapes[index];
    Shape.draw();
  }
};
