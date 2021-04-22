class VisualCard {
  constructor(card) {
    this.card = card;
  }

  x = 40;
  y = 40;
  isDragging = false;

  drag() {
    if (this.isDragging) this.x, this.y;
  }

  //this.card.suit
  //♥ ♦ ♠ ♣
  getIcon() {
    if (this.card.suit === "Daimonds") {
      return "♦";
    } else if (this.card.suit === "Hearts") {
      return "♥";
    } else if (this.card.suit === "Clubs") {
      return "♣";
    } else if (this.card.suit === "Spades") {
      return "♠";
    }
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill("white");
    rect(0, 0, 150, 200, 7);

    fill(this.card.color);
    textSize(100);
    textAlign(CENTER);
    text(this.getIcon(), 70, 130);

    textSize(30);
    textAlign(LEFT);
    text(this.card.name, 15, 30);

    textAlign(RIGHT);
    text(this.card.name, 140, 190);
    pop();
  }
}
let dealer = new Dealer();

let hand = dealer.getHand();

let visualHand = [];
for (let index = 0; index < hand.length; index++) {
  const card = hand[index];
  visualHand.push(new VisualCard(card));
}
var setup = function () {
  createCanvas(1000, 800);
};
var draw = function () {
  background("#86242a");
  for (let index = 0; index < visualHand.length; index++) {
    const vc = visualHand[index];
    vc.x = index * 170 + 20;
    vc.draw();
  }
};

window.mousePressed = function () {
  visCard.isDragging = true;
};
window.mouseRelease = function () {
  VisualCard.isDragging = false;
};
